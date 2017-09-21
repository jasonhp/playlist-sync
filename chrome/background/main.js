import getList163 from './services/163getList';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension");
  if (request.operation === "call163") {
    const testParams = {
      csrf_token : "fca0a1b6cc9612aad75cdaabbf127f14",
      id : "4494380923",
      limit : "1000",
      n: "1000",
      offset: "0",
      total : "true",
    };
    getList163(testParams)
  } else {

  }
});
