// Listen for the right-click event
document.addEventListener('contextmenu', function(event) {
    // Prevent the default context menu from showing up
    event.preventDefault();
    // Copy the page content to the clipboard
    copyToClipboard(document.documentElement.outerHTML);
  });
  
  // Function to copy text to the clipboard
  function copyToClipboard(text) {
    // Create a temporary textarea element to hold the text
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    // Add the textarea to the page
    document.body.appendChild(textarea);
    // Select the text in the textarea
    textarea.select();
    // Copy the text to the clipboard
    document.execCommand('copy');
    // Remove the temporary textarea
    alert("copied to clipboard");
    document.body.removeChild(textarea);
  }
  