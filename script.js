const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');

// document.addEventListener('DOMContentLoaded', () => {
//   appendMessage('model', 'Welcome! Start typing to chat with the AI.', 'welcome-message');
// });

function appendMessage(role, content, customClass) {
  const messageElement = document.createElement('div');
  const messageElementOut = document.createElement('div');
  const iconElement = document.createElement('div');
  messageElement.textContent = content;

  // Set the appropriate class based on the role
  if (role === 'user') {
    messageElementOut.className = 'user-box';
    iconElement.className = 'user-icon';
    messageElement.className = 'user-message';
    let svgString =
      '<?xml version="1.0" ?><svg class="feather feather-user" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

    // Create a DOMParser
    const parser = new DOMParser();
    // Parse the SVG string
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    // Extract the root SVG element
    const svgElement = svgDoc.documentElement;
    // Append the SVG element to the iconElement
    iconElement.appendChild(svgElement);
    messageElementOut.appendChild(iconElement);
    messageElementOut.appendChild(messageElement);
  } else if (role === 'model') {
    messageElementOut.className = 'model-box';
    iconElement.className = 'model-icon';
    messageElement.className = 'model-message';
    let svgString =
      '<?xml version="1.0" ?><svg fill="none" height="18" viewBox="0 -3 12 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.99996 2.49988L8.99996 1.99988L8.99996 2.49988ZM5.99995 2.4999L5.99995 2.9999L5.99995 2.4999ZM12.8556 11.9222L12.5051 11.5656L12.3012 11.7661L12.3705 12.0434L12.8556 11.9222ZM13.5 14.4999L13.3788 14.985C13.5492 15.0276 13.7294 14.9776 13.8536 14.8534C13.9778 14.7293 14.0277 14.549 13.9851 14.3786L13.5 14.4999ZM9.50005 13.5L9.14649 13.1464L8.52204 13.7709L9.37879 13.985L9.50005 13.5ZM9.52482 13.4752L9.87838 13.8287C10.0275 13.6796 10.067 13.453 9.97722 13.2623C9.88743 13.0715 9.68761 12.9575 9.4777 12.9774L9.52482 13.4752ZM0.5 7.99988L0 7.99988L0.5 7.99988ZM7 0V2.5H8V0H7ZM8.99996 1.99988L5.99994 1.9999L5.99995 2.9999L8.99997 2.99988L8.99996 1.99988ZM15 7.99988C15 4.68615 12.3137 1.99985 8.99996 1.99988L8.99997 2.99988C11.7614 2.99985 14 5.23844 14 7.99988H15ZM13.2061 12.2787C14.3128 11.1908 15 9.67513 15 7.99988H14C14 9.39612 13.4284 10.6579 12.5051 11.5656L13.2061 12.2787ZM13.9851 14.3786L13.3407 11.8009L12.3705 12.0434L13.015 14.6212L13.9851 14.3786ZM9.37879 13.985L13.3788 14.985L13.6213 14.0148L9.62131 13.0149L9.37879 13.985ZM9.17127 13.1216L9.14649 13.1464L9.8536 13.8535L9.87838 13.8287L9.17127 13.1216ZM9.00001 13.9999C9.19278 13.9999 9.38357 13.9908 9.57194 13.973L9.4777 12.9774C9.32061 12.9923 9.16127 12.9999 9.00001 12.9999V13.9999ZM5.99999 13.9999H9.00001V12.9999H5.99999V13.9999ZM0 7.99988C-9.17912e-06 11.3136 2.68628 13.9999 5.99999 13.9999V12.9999C3.23857 12.9999 0.999992 10.7613 1 7.99988L0 7.99988ZM5.99994 1.9999C2.68626 1.99993 9.17912e-06 4.6862 0 7.99988L1 7.99988C1.00001 5.23849 3.23855 2.99993 5.99995 2.9999L5.99994 1.9999ZM7.5 8C6.67157 8 6 7.32843 6 6.5H5C5 7.88071 6.11929 9 7.5 9V8ZM9 6.5C9 7.32843 8.32843 8 7.5 8V9C8.88071 9 10 7.88071 10 6.5H9ZM7.5 5C8.32843 5 9 5.67157 9 6.5H10C10 5.11929 8.88071 4 7.5 4V5ZM7.5 4C6.11929 4 5 5.11929 5 6.5H6C6 5.67157 6.67157 5 7.5 5V4ZM7.49999 12C8.56368 12 9.54241 11.6303 10.3127 11.0128L9.68724 10.2326C9.08795 10.713 8.32817 11 7.49999 11V12ZM4.68727 11.0128C5.45757 11.6303 6.43629 12 7.49999 12V11C6.6718 11 5.91202 10.713 5.31273 10.2326L4.68727 11.0128Z" fill="black"/></svg>';

    // Create a DOMParser
    const parser = new DOMParser();
    // Parse the SVG string
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    // Extract the root SVG element
    const svgElement = svgDoc.documentElement;
    // Append the SVG element to the iconElement
    iconElement.appendChild(svgElement);
    messageElementOut.appendChild(messageElement);
    messageElementOut.appendChild(iconElement);
  }

  // Add custom class if provided
  if (customClass) {
    messageElement.classList.add(customClass);
  }

  chatDisplay.appendChild(messageElementOut);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;

  // Check if this is the first user message and remove the initial welcome message
  if (role === 'user' && chatDisplay.childElementCount === 2) {
    const welcomeMessage = chatDisplay.firstElementChild;
    welcomeMessage.remove();
  }
}

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === '') return;

  appendMessage('user', userMessage);
  userInput.value = '';

  // Make a request to your server
  fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: userMessage }),
  })
    .then((response) => response.json())
    .then((data) => {
      const modelResponse = data.response;
      appendMessage('model', modelResponse);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
