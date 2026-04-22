// On popup open, highlight the active limit
browser.storage.local.get("tabLimit").then((res) => {
    const activeLimit = res.tabLimit || 323;
    const activeBtn = document.querySelector(`[data-limit="${activeLimit}"]`);
    if (activeBtn) activeBtn.classList.add('active');
});

// Save the limit when a button is clicked
document.querySelectorAll('.mode-btn').forEach(button => {
    button.addEventListener('click', () => {
        const limit = parseInt(button.getAttribute('data-limit'));
        
        browser.storage.local.set({ tabLimit: limit }).then(() => {
            // Update UI
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
