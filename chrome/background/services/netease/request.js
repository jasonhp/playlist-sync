import $ from 'jquery';
import postDataGen from './postDataGenerator';

const request = (url, params) => {
  const postData = postDataGen(params);

  console.log(postData);
  return $.ajax(url, {
    type: 'POST',
    data: postData,
    dataType: 'json',
  })

};

export default request
