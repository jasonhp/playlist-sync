import cookieUtil from '../cookieUtil';

export default () => {
  return cookieUtil.getCookie({
    url: 'https://music.163.com',
    name: '__csrf'
  })
}
