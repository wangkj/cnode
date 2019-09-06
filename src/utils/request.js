// import Taro from '@tarojs/Taro';
import api from '../constants/api';

// export function getJSON(url,data){
//    return Taro.request({url:url,data:data,method:'GET'});
// }
export async function getTopicList(){
  let result = await getJSON(api.getTopics).catch(message=>{
    console.log("出错了，错误信息："+message);
  });
  console.log(result);
  console.log('123');
}

