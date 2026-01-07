document.addEventListener('DOMContentLoaded', function() {
    // Nur auf der Startseite ausführen
    const isHomePage = window.location.pathname === '/' ||
                       window.location.pathname === '/index.html' ||
                       window.location.pathname.endsWith('/miki/') ||
                       window.location.pathname.endsWith('/miki/index.html');

    if (!isHomePage) {
        return; // Beende das Script, wenn wir nicht auf der Startseite sind
    }

    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');
    const bookingBtn = document.querySelector('#popup .booking-button');
    const hasSeenPopup = localStorage.getItem('hasSeenFussballcampPopup');

    // Popup nur anzeigen, wenn es noch nicht gesehen wurde
    if (!hasSeenPopup) {
        // 1 Sekunde warten bevor das Popup erscheint
        setTimeout(function() {
            popup.style.display = 'flex';
        }, 1000);

        // Event Listener für X-Button (Schließen)
        closePopupBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            localStorage.setItem('hasSeenFussballcampPopup', 'true');
        });

        // Event Listener für "Jetzt buchen" Button
        if (bookingBtn) {
            bookingBtn.addEventListener('click', function() {
                localStorage.setItem('hasSeenFussballcampPopup', 'true');
            });
        }

        // Event Listener für Klick außerhalb des Popups
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
                localStorage.setItem('hasSeenFussballcampPopup', 'true');
            }
        });
    }
});
