import getList163 from './services/163getList';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension");
  if (request.operation === "call163") {
    const testParams = {
      csrf_token : "ce61bacf0931da9b71d99e8862c4d16c",
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
