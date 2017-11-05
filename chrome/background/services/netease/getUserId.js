import $ from 'jquery';

export default () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://music.163.com',
      type: 'GET',
      dataType: 'html',
    }).then((res) => {
      const match = res.match(/GUser=\s?{userId:\s?(\d*?),/)
      if (match) {
        resolve(match[1]);
      } else {
        reject();
      }
    })
  });
}
