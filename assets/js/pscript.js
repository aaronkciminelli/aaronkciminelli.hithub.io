document.addEventListener('DOMContentLoaded', function() {
    // Get the required DOM elements
    var generateTemplateButton = document.getElementById('generate-template');
    var templateDisplay = document.getElementById('template-display');
    templateDisplay.style.display = 'block';
    var inputArea = document.getElementById('input-area');
    var hideTemplateCheckbox = document.getElementById('hide-template-checkbox');
    var submitButton = document.createElement('button');
    var categorySelect = document.getElementById('category-select');

    // Set up the Submit button
    submitButton.textContent = 'Submit';
    submitButton.className = 'btn btn-success';
    inputArea.appendChild(submitButton);

    var templates = window.myApp.templates;
    var definitions = window.myApp.definitions;
    var examples = window.myApp.examples;

    generateTemplateButton.addEventListener('click', function() {
        // Get the selected category
        var selectedCategory = categorySelect.value;

        // Generate a random template from the selected category
        var categoryTemplates = templates[selectedCategory];
        var template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];

        templateDisplay.textContent = template;

        // Extract the blanks from the template
        var blanks = template.match(/\[.*?\]/g).map(function(blank) {
            return blank.slice(1, -1);
        });

        // Clear input area
        inputArea.innerHTML = '';

        // Generate input fields and buttons for each blank
        blanks.forEach(function(blank) {
            var inputField = document.createElement('input');
            inputField.className = 'form-control mt-2';
            inputField.setAttribute('placeholder', blank);
            inputArea.appendChild(inputField);

            var generateButton = document.createElement('button');
            generateButton.textContent = 'Generate ' + blank;
            generateButton.className = 'btn btn-primary mt-2';

            // Generate button click event
            generateButton.addEventListener('click', function() {
                inputField.value = definitions[blank][Math.floor(Math.random() * definitions[blank].length)];
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
            definition.className = 'mt-2';
            inputArea.appendChild(definition);
        });

        // Adjust the visibility of the template based on the checkbox status
        templateDisplay.style.display = hideTemplateCheckbox.checked ? 'none' : 'block';
    });

    submitButton.addEventListener('click', function() {
        // Replace the blanks in the template with user input values
        var placeholders = {};
        inputArea.querySelectorAll('input').forEach(function(input) {
            if (!placeholders[input.placeholder]) placeholders[input.placeholder] = [];
            placeholders[input.placeholder].push(input);
        });

        var finalTemplate = templateDisplay.textContent.replace(/\[(.*?)\]/g, function(_, p1) {
            return placeholders[p1].shift().value;
        });

        // Create a new h3 element, set its innerHTML to the final template, and append it to the document body
        var finalTemplateElement = document.createElement('h3');
        finalTemplateElement.style.fontWeight = 'bold';
        finalTemplateElement.style.textAlign = 'center';
        finalTemplateElement.innerHTML = finalTemplate;
        document.body.appendChild(finalTemplateElement);

        // Clear input area and display the generate template button
        inputArea.innerHTML = '';
        inputArea.appendChild(generateTemplateButton);
    });

    // Event listener for the hide template checkbox
    hideTemplateCheckbox.addEventListener('change', function() {
        templateDisplay.style.display = this.checked ? 'none' : 'block';
    });
});
