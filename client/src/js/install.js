const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;

  butInstall.classList.toggle('hidden', false);
  
});

// Summary 
// Here, an event listener is added to the 'beforeinstallprompt' event.
/* When the browser determines it can be installed it stores the 
event in the global variable 

window.deferredPrompt. This event object contains information about the installation prompt.
Removes the 'hidden' class from the butInstall element, making the installation button visible.
*/

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }``

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);

});

/* Summary 
This code adds a click event listener to the butInstall element (the installation button).
When the button is clicked, it does the following:

Retrieves the window.deferredPrompt event object, which was previously stored when the 'beforeinstallprompt' event occurred.
Checks if promptEvent exists. If it doesn't, it means that the PWA installation prompt is not available or has already been used, so the function returns early.
Calls promptEvent.prompt() to display the installation prompt to the user.
Resets the window.deferredPrompt variable to null, indicating that the prompt has been used and should not be used again.

Hides the installation button by adding the 'hidden' class to it.

*/


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      // Clear prompt
  window.deferredPrompt = null;

});

/* Summary 
Finally, this code adds an event listener to the 'appinstalled' event.
This event is fired when the PWA has been successfully installed.
When the 'appinstalled' event occurs, it clears 
the window.deferredPrompt variable, indicating that the 
installation process is complete.
*/