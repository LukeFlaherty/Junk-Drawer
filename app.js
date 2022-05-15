//Get current domain

chrome.runtime.sendMessage(
  { command: "fetch", data: { domain: domain } },
  (response) => {
    parseCoupons(response.data);
  }
);

var showData = function (data) {
  console.log(data);
};
