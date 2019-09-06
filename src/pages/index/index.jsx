import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.less'


//api 
import api from '../../constants/api';

function getJSON(url,data){
  return Taro.request({url:url,data:data,method:'GET'});
}

function postJSON(url,data){
  return Taro.request({url:url,data:data,method:'POST'});
}

async function getTopicList(){
  let result = await getJSON(api.getTopics).catch(message=>{
    console.log("出错了，错误信息："+message);
  });
  console.log(result);
  console.log('123');
}

//api

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    
  }

  componentWillUnmount () { 
   
  }

  componentDidMount(){
    getTopicList().then(data=>{
      console.log('取到的数据:'+data)
    })
  }

  componentDidShow () { 
    
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        
        <View><Text>Hello, World</Text></View>
        
      </View>
    )
  }
}

export default Index
