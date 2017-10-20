/**
 * 前端请求 后端统一入口地址
 *
 * Created by chenjz on 2017/9/18.
 */
'use strict'

import axios from 'axios'

// 来一个中间件！！

/**
 * 检测是否登录, 获取会话信息
 */
export const checkLogin = () => axios.get('/session');

/**
 * 用户登录
 * @param loginInfo  登录信息
 */
export const userLogin = (loginInfo) => axios.post('/session', loginInfo)

/**
 * 用户登出
 */
export const userLogout = () => axios.delete('/session')

/**
 * 用户注册
 * @param registerInfo 注册信息
 */
export const userRegister = (registerInfo) => axios.post('/users', registerInfo)

/**
 * 生成用户二维码图片！
 */
export const createQrcode = () => axios.get('/create_qrcode?text=http://chenjz.top')

/**
 * 更新用户的信息，包括自己和别人的！！
 *  如 设置别名，性别，地区，个性签名等
 *
 * @param id
 * @param updateInfo
 */
export const updateUserinfo = (id, updateInfo) => axios.patch(`/users/${id}`, updateInfo)

export const uploadAvatar = (id, info) => axios.post(`/users/${id}/headimg`, info)

/**
 * 根据 条件搜用户，微信id 或 电话号码
 * @param keyword
 */
export const searchUser = (keyword) => axios.get(`/users/${keyword}`)

/**
 * 获取所有未被清空的聊天室信息
 */
export const getChatrooms = () => axios.get('/chatrooms')


/**
 * 更新聊天室设置
 * 包括删除历史记录、置顶聊天、消息免打扰等设置～
 *
 * @param fid     好友id
 * @param updateInfo
 */
export const clearChatHistory = (fid, updateInfo) => axios.patch(`/contacts/${fid}`, updateInfo)

/**
 * 发送消息
 * @param chatid
 * @param message
 */
export const sendMessage = (chatid, message) => axios.post(`/chatrooms/${chatid}`, message)

/**
 * 获取某聊天室的信息
 * @param chatid
 */
export const getMessages = (chatid) => axios.get(`/chatrooms/${chatid}`)


/**
 * 获取好友通讯录
 */
export const getContacts = () => axios.get('/contacts')

/**
 * 这个是没有啥用的！
 */
export const getUserOperate = () => axios.get('../../static/initData/operate.json')

/**
 * 添加好友
 * @param addInfo
 */
export const addNewFriend = (addInfo) => axios.post('/contacts/new', addInfo)

/**
 * 获取添加我为好友的用户列表
 */
export const getNewFriends = () => axios.get('/contacts/new')

/**
 * 处理好友信息，
 * 还有 处理类型！是 通过还是加入黑名单
 */
export const handleNewFriend = (handleInfo) => axios.post('/contacts/handleFriend', handleInfo)

/**
 * 获取所有的朋友圈 状态！ 懒加载的应该！！
 */
export const getMoments = () => axios.get('/moments')