// 网易云音乐API调用加密

import $ from 'jquery';
import encrypter from './163Encrypter';


const getter = (oriParams) => {
  const cryptedParams = encrypter(oriParams);
  const serialize = (fM4Q, Jy4C, ctk6e) => {
    if (!fM4Q)
      return "";
    const bs2x = [];
    for (let x in fM4Q) {
      bs2x.push(encodeURIComponent(x) + "=" + (!!ctk6e ? encodeURIComponent(fM4Q[x]) : fM4Q[x]))
    }
    return bs2x.join(Jy4C || ",")
  };

  const params = serialize({
    params: cryptedParams.encText,
    encSecKey: cryptedParams.encSecKey
  }, "&", true);

  console.log(params);
  return $.ajax('http://music.163.com/weapi/v3/playlist/detail?csrf_token=5e60209990e5ff2e0935d740a812b367', {
    type: 'POST',
    data: params
  })

};

export default getter

