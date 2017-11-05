const getSingleCookie = (details) => {
  // Retrieves information about a single cookie.
  // If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned.
  return new Promise((resolve, reject) => {
    chrome.cookies.get(details, (cookie) => {
      resolve(cookie);
    })
  });
};

const util = {
  getCookie: getSingleCookie,
};

export default util;
