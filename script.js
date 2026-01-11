// Dynamic timestamp update
function updateTimestamp() {
    const now = new Date();
    const timestamp = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

    const timestampElement = document.querySelector('.info-small');
    if (timestampElement) {
        const content = timestampElement.innerHTML;
        timestampElement.innerHTML = content.replace(/\d{4}\.\d{2}\.\d{2}/, timestamp);
    }
}

// Random glitch effect on page elements
function triggerRandomGlitch() {
    const elements = document.querySelectorAll('.nav-link, .logo-nxgen, .center-symbol svg');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    if (randomElement) {
        randomElement.style.textShadow = `${Math.random() * 5}px ${Math.random() * 5}px 0 currentColor`;

        setTimeout(() => {
            randomElement.style.textShadow = '';
        }, 100);
    }
}

// Create additional noise layer dynamically
function enhanceNoise() {
    const noiseOverlay = document.getElementById('noise-overlay');

    // Add random opacity variation
    setInterval(() => {
        const randomOpacity = 0.1 + Math.random() * 0.1;
        noiseOverlay.style.opacity = randomOpacity;
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTimestamp();
    enhanceNoise();

    // Update timestamp every minute
    setInterval(updateTimestamp, 60000);

    // Random glitch every 3-8 seconds
    setInterval(() => {
        if (Math.random() > 0.3) {
            triggerRandomGlitch();
        }
    }, 3000 + Math.random() * 5000);
});

// Add keyboard shortcuts for industrial aesthetic
document.addEventListener('keydown', (e) => {
    // Press 'G' for manual glitch
    if (e.key === 'g' || e.key === 'G') {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => triggerRandomGlitch(), i * 50);
        }
    }

    // Press 'N' to toggle noise intensity
    if (e.key === 'n' || e.key === 'N') {
        const currentOpacity = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--noise-opacity'));
        const newOpacity = currentOpacity > 0.1 ? 0.05 : 0.25;
        document.documentElement.style.setProperty('--noise-opacity', newOpacity);
    }
});
