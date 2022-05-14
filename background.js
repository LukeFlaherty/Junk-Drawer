// let id = 100;
// chrome.browserAction.onClicked.addListener(() => {
//   chrome.tabs.captureVisibleTab((screenshotUrl) => {
//     const viewTabUrl = chrome.extension.getURL("screenshot.html?id=" + id++);
//     let targetId = null;
//     chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
//       if (tabId != targetId || changedProps.status != "complete") return;
//       chrome.tabs.onUpdated.removeListener(listener);
//       const views = chrome.extension.getViews();
//       for (let i = 0; i < views.length; i++) {
//         let view = views[i];
//         if (view.location.href == viewTabUrl) {
//           view.setScreenshotUrl(screenshotUrl);
//           break;
//         }
//       }
//     });
//     chrome.tabs.create({ url: viewTabUrl }, (tab) => {
//       targetId = tab.id;
//     });
//   });
// });

// chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
//   let url = tabs[0].url;
//   console.log(url);
//   // use `url` here inside the callback because it's asynchronous!
// });

// function setBadgeToMessage(msg) {
//   badge = msg;
//   chrome.browserAction.setBadgeText({ text: badge });
// }

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.desktopCapture.chooseDesktopMedia(
    ["screen", "window", "tab"],
    tab,
    (streamId) => {
      //check whether the user canceled the request or not
      if (streamId && streamId.length) {
      }
    }
  );
});

// Link to the tutorial to download the image
// https://blog.shahednasser.com/how-to-take-screenshots-in-chrome-extension/
