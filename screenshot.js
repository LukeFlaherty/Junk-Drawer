function setScreenshotUrl(url) {
  document.getElementById("target").src = url;
}

// only works with v3 which i couldnt get to work
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab);
  document.getElementById("here").innerHTML = tab;

  // chrome.tabs.create({ url: tab });
  return tab;
}

async function getCurrentTab() {
  // chrome.tabs.getCurrent(tab => tab.url)
  // document.getElementById("here").innerHTML = chrome.tabs.getCurrent(
  //   (tab) => tab.url
  // );
  // document.getElementById("here").innerHTML = chrome.tabs.getSelected(
  //   null,
  //   function (tab) {}
  // );
}
