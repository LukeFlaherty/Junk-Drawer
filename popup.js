var getTab = function (tab) {
  console.log(tab);
};

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  getTab(tabs[0]);
  document.getElementById("savedLinks").textContent = tabs;
});

chrome.tabs.create({ url: "http://google.com" });
