import $ from 'jquery';
import postDataGen from './postDataGenerator';

const request = (url, params) => {
  const params = postDataGen(params)

  console.log(params);
  return $.ajax(url, {
    type: 'POST',
    data: params,
  })

};

export default request

