import cookieUtil from '../cookieUtil';

export default () => {
  return new Promise((resolve, reject) => {
    cookieUtil.getCookie({
      url: 'https://music.163.com',
      name: '__csrf'
    })
      .then((cookie) => {
        resolve(cookie);
      })
  })
}
