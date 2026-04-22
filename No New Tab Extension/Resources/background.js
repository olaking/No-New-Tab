browser.tabs.onCreated.addListener(async (tab) => {
    // Get the limit from storage, default to 323 if not set
    const data = await browser.storage.local.get("tabLimit");
    const currentLimit = data.tabLimit || 323;

    const allTabs = await browser.tabs.query({});
    
    if (allTabs.length > currentLimit) {
        // Close the offending tab immediately
        browser.tabs.remove(tab.id);
        
        // Find the active tab to send the "Stop" signal
        const activeTabs = await browser.tabs.query({ active: true, currentWindow: true });
        if (activeTabs[0]) {
            browser.tabs.sendMessage(activeTabs[0].id, { action: "SHOW_DRAKE" });
        }
    }
});
