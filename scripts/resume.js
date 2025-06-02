// resume.js - Contains JavaScript specific to the resume.html page
// (Theme toggle, Print/Download, Copy to Clipboard)

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

    // --- All Text Summarizer/Chat Modal Logic has been removed from here ---
});