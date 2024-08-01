

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            appendMessage(generateBotResponse(userInput), 'bot-message');
        }, 1000);
    }
}

function appendMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userInput) {

    if (userInput.toLowerCase().includes('assalam o alaikum')) {
        return 'walaikum assalam.';
    } else if (userInput.toLowerCase().includes('how are you')) {
        return 'I am just a bot, but I am doing great! How about you? and ask me about general knowledge questions';
    }
    else if (userInput.toLowerCase().includes('red planet')) {
        return 'Mars is known as the Red Planet';

    }
    else if (userInput.toLowerCase().includes('largest mammal')) {
        return 'Blue whale is the largest mammal on Earth';

    }
    else if (userInput.toLowerCase().includes('what is the chemical symbol for gold')) {
        return 'Au is the chemical symbol for gold';

    }
    else if (userInput.toLowerCase().includes('largest planet')) {
        return 'Jupiter is the largest planet in our solar system';

    }
    else if (userInput.toLowerCase().includes('founder of chemistry')) {
        return 'While chemistry as a science has been around for thousands of years, the modern version of chemistry was founded by Sir Isaac Newton (1643-1727) and Antoine Lavoisier (1743-1794)';

    }
    else if (userInput.toLowerCase().includes('smallest country')) {
        return 'Vatican City is the smallest country in the world';

    }

    else {
        return 'Sorry, I do not understand that.';
    }
}
