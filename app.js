// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key.
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const promptInput = document.getElementById('promptInput');
const generateButton = document.getElementById('generateButton');
const outputDiv = document.getElementById('output');

generateButton.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    // Send the user input to the back-end for processing.
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'prompt': prompt,
            'max_tokens': 150 // You can adjust this to control the response length.
        })
    });

    if (response.ok) {
        const data = await response.json();
        const generatedContent = data.choices[0].text.trim();
        outputDiv.textContent = generatedContent;
    } else {
        outputDiv.textContent = 'Error generating content. Please try again later.';
    }
});
