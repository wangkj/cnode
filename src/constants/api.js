const rootPath = 'https://cnodejs.org/api/v1';
const apiObject = {
  //主题
  getTopics: rootPath+'/topics', //主题首页
  getTopicInfo: rootPath+'/topic', //主题详情
  //主题收藏
  postTopicCollect: rootPath+'/topic_collect/collect', //收藏主题
  postTopicDecollect: rootPath+'/topic_collect/de_collect', //取消主题
  getTopicCollect: rootPath+'/topic_collect/:loginname', //用户所收藏的主题
  //用户
  getUser: rootPath+'/user/:loginname', //用户详情
  postUserToken: rootPath+'/accesstoken', //验证 accessToken 的正确性
  //消息通知
  getMessageCount: rootPath+'/message/count', //获取未读消息数
  getMessages: rootPath+'/messages', //获取已读和未读消息
  postMessageMarkAll: rootPath+'/message/mark_all', //标记全部已读
  postMessageMarkOne: rootPath+'/message/mark_one/:msg_id', //标记单个消息为已读
}

export default apiObject;