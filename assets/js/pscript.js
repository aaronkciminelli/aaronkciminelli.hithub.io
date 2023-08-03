document.addEventListener('DOMContentLoaded', function() {
    // Get the required DOM elements
    var generateTemplateButton = document.getElementById('generate-template');
    var templateDisplay = document.getElementById('template-display');
    var inputArea = document.getElementById('input-area');
    var submitButton = document.createElement('button');
    var templateHidden = true; // Flag to track if the template is hidden

    // Set up the Submit button
    submitButton.textContent = 'Submit';
    submitButton.className = 'btn btn-success'; // Added class
    submitButton.disabled = true;
    inputArea.appendChild(submitButton);

    var templates = window.myApp.templates;
    var definitions = window.myApp.definitions;
    var examples = window.myApp.examples;

    generateTemplateButton.addEventListener('click', function() {
        // Generate a random template
        var template = templates[Math.floor(Math.random() * templates.length)];
        templateDisplay.textContent = template;
        templateDisplay.style.display = 'none'; // Hide the template initially
        templateHidden = true; // Set the template flag to hidden

        // Extract the blanks from the template
        var blanks = template.match(/\[.*?\]/g).map(function(blank) {
            return blank.slice(1, -1);
        });

        // Clear input area
        inputArea.innerHTML = '';

        // Generate input fields and buttons for each blank
        blanks.forEach(function(blank) {
            var inputField = document.createElement('input');
            inputField.className = 'form-control mt-2'; // Added class
            inputField.setAttribute('placeholder', blank);
            inputArea.appendChild(inputField);

            var generateButton = document.createElement('button');
            generateButton.textContent = 'Generate ' + blank;
            generateButton.className = 'btn btn-primary mt-2'; // Added class

            // Generate button click event
            generateButton.addEventListener('click', function() {
                inputField.value = definitions[blank][Math.floor(Math.random() * definitions[blank].length)];
                checkIfAllFieldsAreFilled();
            });

            // Append input field and generate button to input area
            inputArea.appendChild(inputField);
            inputArea.appendChild(generateButton);
        });

        // Append submit button
        inputArea.appendChild(submitButton);

        // Generate and display the definition examples
        blanks.forEach(function(blank) {
            var definition = document.createElement('p');
            definition.textContent = examples[blank];
            definition.className = 'mt-2'; // Added class
            inputArea.appendChild(definition);
        });

        templateHidden = true; // Set the template flag to hidden
    });

    submitButton.addEventListener('click', function() {
        // Replace the blanks in the template with user input values
        var placeholders = {};
        inputArea.querySelectorAll('input').forEach(function(input) {
            if (!placeholders[input.placeholder]) placeholders[input.placeholder] = [];
            placeholders[input.placeholder].push(input);
        });

        templateDisplay.textContent = templateDisplay.textContent.replace(/\[(.*?)\]/g, function(_, p1) {
            return placeholders[p1].shift().value;
        });

        if (templateHidden) {
            templateDisplay.style.display = 'block'; // Show the template if hidden
            templateHidden = false; // Set the template flag to not hidden
        }

        // Clear input area and display the generate template button
        inputArea.innerHTML = '';
        inputArea.appendChild(generateTemplateButton);
    });

    function checkIfAllFieldsAreFilled() {
        // Check if all input fields are filled
        var allFieldsAreFilled = Array.from(inputArea.querySelectorAll('input')).every(function(input) {
            return input.value !== '';
        });

        // Enable or disable the submit button based on input field values
        submitButton.disabled = !allFieldsAreFilled;
    }
});
