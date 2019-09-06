import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.less'

//api
import {getTopicList} from '../../utils/request'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  getJSON(url,data){
    return Taro.request({url:url,data:data,method:'GET'});
  }

  componentWillReceiveProps (nextProps) {
    
  }

  componentWillUnmount () { 
   
  }

  componentDidMount(){
    getTopicList();
  }

  componentDidShow () { }

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
