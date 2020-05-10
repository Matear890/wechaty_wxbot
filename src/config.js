/*
 * @Author: isboyjc
 * @Date: 2020-02-18 16:13:15
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-03-01 02:14:53
 * @Description: 配置项
 */
const notice = require("./notice") // 配置文件

const notice_1 = notice.notice



module.exports = {
  // puppet_padplus Token
  token: "puppet_padplus_授权码",
  // 机器人名字
  name: "机器人",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: {
      // 群名(用于展示，最好是群名，可随意) : 群id(这个可不能随意)

      python交流群: "xx@chatroom"
    },
    // 加入房间回复
    // roomJoinReply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`
    roomJoinReply: '\n '+ notice_1
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["加群"],
    // 是否开启加群
    addRoom: true
  }
}
