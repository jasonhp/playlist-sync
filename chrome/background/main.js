
import CONSTANTS from '../../src/constants';
import getNetEaseToken from './services/netease/getToken';
import netEaseRequest from './services/netease/request';


chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.extension.getURL('index.html') });
});

let netEaseUserInfo = {
  uid: '',
  token: ''
};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension");
  switch (request.operation) {
    case CONSTANTS.MSGS.GET_DETAILS:
      switch (request.platform) {
        case CONSTANTS.PLATS.NETEASE:
          if (netEaseUserInfo.token.length === 0) {
            netEaseUserInfo.token = getNetEaseToken()
          }
          const postParams = {
            csrf_token : netEaseUserInfo.token,
            id : request.playListId,
            limit : "1000",
            n: "1000",
            offset: "0",
            total : "true",
          };
          netEaseRequest(`${CONSTANTS.URLS.PLAYLIST_DETAILS_163}?csrf_token=${netEaseUserInfo.token}`, postParams)
            .then((res) => {
              console.log(res);
              sendResponse({ ret: 0, data: res })
            }, (err) => {
              sendResponse({ ret: -1, err: err })
            });
          break;
      }
      break;
    case CONSTANTS.MSGS.GET_LISTS:
      switch (request.platform) {
        case CONSTANTS.PLATS.NETEASE:
          if (netEaseUserInfo.token.length === 0) {
            netEaseUserInfo.token = getNetEaseToken()
          }
          const postParams = {
            uid : netEaseUserInfo.uid,
            limit : "1000",
            offset: "0",
          };
          netEaseRequest(`${CONSTANTS.URLS.PLAYLISTS_163}?csrf_token=${netEaseUserInfo.token}`, postParams)
            .then((res) => {
              console.log(res);
              sendResponse({ ret: 0, data: res })
            }, (err) => {
              sendResponse({ ret: -1, err: err })
            });
          break;
      }
  }
  return true;
});
