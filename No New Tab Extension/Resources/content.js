browser.runtime.onMessage.addListener((request) => {
    if (request.action === "SHOW_DRAKE") {
        const img = document.createElement("img");
        img.src = browser.runtime.getURL("images/drake.png");
        
        img.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000000;
            border: 12px solid #6E2B33; /* Branded Oxblood */
            box-shadow: 0 0 60px rgba(32, 26, 30, 0.9); /* Branded Black */
            max-width: 80vw;
            border-radius: 4px;
        `;
        
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 2000);
    }
});
