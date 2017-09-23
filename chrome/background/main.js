import getList163 from './services/163getList';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension");
  if (request.operation === "call163") {
    const testParams = {
      csrf_token : "5e60209990e5ff2e0935d740a812b367",
      id : "645900197",
      limit : "1000",
      n: "1000",
      offset: "0",
      total : "true",
    };
    getList163(testParams)
  } else {

  }
});
