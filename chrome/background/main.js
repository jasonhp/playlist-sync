import getList163 from './services/163getList';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension");
  if (request.operation === "call163") {
    const testParams = {
      csrf_token : "1c7acc26ae2795e2d00a3b061b9bad55",
      id : "400735541",
      limit : "1000",
      n: "1000",
      offset: "0",
      total : "true",
    };
    getList163(testParams)
  } else {

  }
});
