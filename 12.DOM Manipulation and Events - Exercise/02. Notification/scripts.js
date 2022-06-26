function notify(message) {
    
    let notificationEl = document.getElementById('notification');
    notificationEl.textContent = message;
    notificationEl.style.display = 'block';

    setTimeout(() => {
        notificationEl.style.display = 'none';
    }, 2000)
}