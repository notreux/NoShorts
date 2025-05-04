chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
	const url = new URL(details.url);
	const m = url.pathname.match(/^\/shorts\/([^/?&#]+)/);

	if (m) {
		const target = `https://www.youtube.com/watch?v=${encodeURIComponent(m[1])}${url.search}`;
		chrome.tabs.update(details.tabId, { url: target });
	}
});
