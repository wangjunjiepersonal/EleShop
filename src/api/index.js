
// 暴露多个请求接口
import ajax from './ajax'
const BASE_URL = '/api'
//请求经纬度的位置
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

//请求食品分类列表
export const reqFoodCategorys = () => ajax(`${BASE_URL}/index_category`)

//根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})

//请求商家分类列表
export const reqShops = ({latitude,longitude}) => ajax(`${BASE_URL}/shops`,{latitude,longitude})

//账号密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(`${BASE_URL}/login_pwd`,{name, pwd, captcha},'POST')

//获取短信验证码
export const reqSendCode = (phone) => ajax(`${BASE_URL}/sendcode`,{phone})

//手机号验证码登录
export const reqSmsLogin = ({phone,code}) => ajax(`${BASE_URL}/login_sms`,{phone,code},'POST')

//获取用户信息(根据会话)
export const reqUser = () => ajax(`${BASE_URL}/userinfo`)

//请求登出
export const reqLogout= () => ajax(`${BASE_URL}/logout`)


/* mock模拟数据的请求
 * 获取商家信息(下列请求由mock拦截并返回 不需要代理)
 */
export const reqShopInfo = () => ajax('/info')
/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')
/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')




















