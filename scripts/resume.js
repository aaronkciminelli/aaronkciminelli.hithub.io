// resume.js - Contains JavaScript specific to the resume.html page
// (Theme toggle, Print/Download, Copy to Clipboard, Summarizer/Chat)

// IMPORTANT: GEMINI_API_KEY is now loaded from config.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic (duplicated for self-contained page) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
    } else {
        setTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // --- Print/Download PDF Button Logic ---
    const printResumeBtn = document.getElementById('print-resume-btn');
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // --- Copy to Clipboard Logic ---
    const copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            const textToCopy = event.target.dataset.text;
            const successMessageSpan = event.target.nextElementSibling;

            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = textToCopy;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            if (successMessageSpan && successMessageSpan.classList.contains('copy-success-message')) {
                successMessageSpan.classList.add('show');
                setTimeout(() => {
                    successMessageSpan.classList.remove('show');
                }, 2000);
            }
        });
    });

    // --- Text Summarizer/Chat Modal Logic ---
    const openSummarizerBtn = document.getElementById('open-summarizer-btn');
    const summarizerModal = document.getElementById('summarizer-modal');
    const closeSummarizerModalBtn = document.getElementById('close-summarizer-modal-btn');
    const generateSummarizerBtn = document.getElementById('generate-summary-btn');
    const chatHistoryContainer = document.getElementById('chat-history');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const chatLoadingSpinner = document.getElementById('chat-loading-spinner');
    const summarizerErrorMessage = document.getElementById('summarizer-error-message');

    let currentChatHistory = []; // Stores the ongoing conversation for the LLM

    // Function to add a message to the chat history display
    const addMessageToChat = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-bubble', sender);
        messageDiv.textContent = text;
        chatHistoryContainer.appendChild(messageDiv);
        chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight; // Auto-scroll to bottom
    };

    // Function to extract all relevant text from the resume
    const getResumeContent = () => {
        let content = [];
        // Main summary
        const resumeSummary = document.getElementById('resume-summary');
        if (resumeSummary) content.push(resumeSummary.textContent.trim());

        // Experience
        document.querySelectorAll('#experience h4, #experience p, #experience li').forEach(el => {
            content.push(el.textContent.trim());
        });

        // Education
        const educationSection = document.querySelector('h3.resume-section-title') ? Array.from(document.querySelectorAll('section')).find(section => {
            const titleEl = section.querySelector('h3.resume-section-title');
            return titleEl && titleEl.textContent.includes('Education');
        }) : null;
        if (educationSection) {
            educationSection.querySelectorAll('h4, p').forEach(el => {
                content.push(el.textContent.trim());
            });
        }

        // Skills
        document.querySelectorAll('#skills .skill-tag').forEach(el => {
            content.push(el.textContent.trim());
        });

        // Projects
        const projectsSection = document.querySelector('h3.resume-section-title') ? Array.from(document.querySelectorAll('section')).find(section => {
            const titleEl = section.querySelector('h3.resume-section-title');
            return titleEl && titleEl.textContent.includes('Projects');
        }) : null;
        if (projectsSection) {
            projectsSection.querySelectorAll('h4, p, li').forEach(el => {
                content.push(el.textContent.trim());
            });
        }

        // Awards & Certifications
        const awardsSection = document.querySelector('h3.resume-section-title') ? Array.from(document.querySelectorAll('section')).find(section => {
            const titleEl = section.querySelector('h3.resume-section-title');
            return titleEl && titleEl.textContent.includes('Awards & Certifications');
        }) : null;
        if (awardsSection) {
            awardsSection.querySelectorAll('h4, p').forEach(el => {
                content.push(el.textContent.trim());
            });
        }

        // Language Proficiency
        const languageSection = document.querySelector('h3.resume-section-title') ? Array.from(document.querySelectorAll('section')).find(section => {
            const titleEl = section.querySelector('h3.resume-section-title');
            return titleEl && titleEl.textContent.includes('Language Proficiency');
        }) : null;
        if (languageSection) {
            languageSection.querySelectorAll('p').forEach(el => {
                content.push(el.textContent.trim());
            });
        }

        return content.filter(text => text.length > 0).join(' ');
    };

    // Function to call Gemini API
    const callGeminiAPI = async (history) => {
        // Use the API key from config.js
        const apiKey = GEMINI_API_KEY; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const payload = { contents: history };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Unexpected API response structure or no content.');
        }
    };

    // Initial summary generation when modal opens or 'Generate New Summary' is clicked
    const generateInitialSummary = async () => {
        chatHistoryContainer.innerHTML = ''; // Clear previous chat
        summarizerErrorMessage.classList.add('hidden');
        chatLoadingSpinner.classList.remove('hidden');
        generateSummarizerBtn.disabled = true;
        sendChatBtn.disabled = true;
        chatInput.disabled = true;

        const resumeContent = getResumeContent();
        if (!resumeContent) {
            summarizerErrorMessage.textContent = 'Could not find enough resume content to summarize.';
            summarizerErrorMessage.classList.remove('hidden');
            chatLoadingSpinner.classList.add('hidden');
            generateSummarizerBtn.disabled = false;
            sendChatBtn.disabled = false;
            chatInput.disabled = false;
            return;
        }

        try {
            // Start a new chat history with the resume content as context
            currentChatHistory = [
                { role: "user", parts: [{ text: `Here is a resume:\n\n${resumeContent}\n\nPlease provide a concise summary of this resume, specifically tailored for a hiring recruiter. Mention Aaron Ciminelli by name, Highlight key achievements, relevant skills, and impact, keeping it under 100 words.` }] }
            ];

            addMessageToChat("Generating recruiter-focused summary...", "ai"); // Initial message from AI

            const summary = await callGeminiAPI(currentChatHistory);
            addMessageToChat(summary, "ai");

            // Add AI's summary to chat history for continuity
            currentChatHistory.push({ role: "model", parts: [{ text: summary }] });

        } catch (error) {
            summarizerErrorMessage.textContent = 'An error occurred while generating the summary. Please try again.';
            console.error('Error generating summary:', error);
        } finally {
            chatLoadingSpinner.classList.add('hidden');
            generateSummarizerBtn.disabled = false;
            sendChatBtn.disabled = false;
            chatInput.disabled = false;
        }
    };

    // Handle sending chat messages
    const sendChatMessage = async () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessageToChat(userMessage, "user");
        chatInput.value = ''; // Clear input
        summarizerErrorMessage.classList.add('hidden');
        chatLoadingSpinner.classList.remove('hidden');
        sendChatBtn.disabled = true;
        chatInput.disabled = true;

        try {
            currentChatHistory.push({ role: "user", parts: [{ text: userMessage }] });
            const aiResponse = await callGeminiAPI(currentChatHistory);
            addMessageToChat(aiResponse, "ai");
            currentChatHistory.push({ role: "model", parts: [{ text: aiResponse }] });
        } catch (error) {
            summarizerErrorMessage.textContent = 'An error occurred during chat. Please try again.';
            console.error('Error during chat:', error);
        } finally {
            chatLoadingSpinner.classList.add('hidden');
            sendChatBtn.disabled = false;
            chatInput.disabled = false;
            chatInput.focus(); // Keep focus on input
        }
    };

    // Event Listeners for Modal and Chat
    openSummarizerBtn.addEventListener('click', () => {
        summarizerModal.classList.add('show');
        generateInitialSummary(); // Generate summary when modal opens
    });

    closeSummarizerModalBtn.addEventListener('click', () => {
        summarizerModal.classList.remove('show');
    });

    generateSummarizerBtn.addEventListener('click', generateInitialSummary); // Re-generate summary

    sendChatBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Send on Enter, not Shift+Enter
            e.preventDefault(); // Prevent new line in input
            sendChatMessage();
        }
    });
});