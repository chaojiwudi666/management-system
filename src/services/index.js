import axios from '@services/axios';
import qs from 'qs';
/** 我收到的获取列表 收到信息 指派  上报*/
export const getList = prams => axios.post('/opn/inOpinions', qs.stringify(prams));
export const getAssignList = prams => axios.post('/opn/assignOpinions', qs.stringify(prams));
export const getOutList = prams => axios.post('/opn/outOpinions', qs.stringify(prams));
export const getOutReportList = prams => axios.post('/opn/report/outOpinionReports', qs.stringify(prams));
/** 用户结亲记录列表 */ 
export const GetTravelOrderList= prams => axios.get('/TravelSvr.svc/GetTravelOrderList', {params: prams});

/** 农户列表 */ 
export const GetTravelFarmhouseList= prams => axios.get('/TravelSvr.svc/GetTravelFarmhouseList', {params: prams});
/** 农户列表 */ 
export const GetTravelContentListBase= prams => axios.get('/TravelSvr.svc/GetTravelContentListBase', {params: prams});
/** 结亲表单 */ 
export const SaveTravelOrder= prams => axios.post('/TravelSvr.svc/SaveTravelOrder', prams);
/** 直播列表 */ 
export const GetTravelContentList= prams => axios.get('/TravelSvr.svc/GetTravelContentList', {params: prams});

/** 取消结亲 */ 
export const AuditTravelOrder= prams => axios.post('/TravelSvr.svc/AuditTravelOrder', prams);








/** 领导list */

//飞鸽登陆test
// 登录
export const login = key => axios.post('/login2/goLoginByRmt2', key);
// 获取用户信息
export const userInfo = key => axios.post('/user/info', key);

/**
 * 2.统一在这里添加接口
*/

//获取农户详情
export const GetTravelFarmhouseDetail= prams => axios.get('/TravelSvr.svc/GetTravelFarmhouseDetailByWebApi', {params: prams});
//初始化 
export const webInit = prams => axios.post('/MainBizSvr.svc/Webinit', prams);
//首页初始化信息
export const TravelInitInfo= prams => axios.get('/TravelSvr.svc/TravelInitInfo', {params: prams});

//首页内容
export const GetTravelIndexPage= prams => axios.get('/TravelSvr.svc/GetTravelIndexPage', {params: prams});
//底部配置
export const GetTravelFooter= prams => axios.get('/TravelSvr.svc/GetTravelFooter', {params: prams});

//获取验证码
export const RequireCaptchaByOpen= prams => axios.post('/OpenUserBizSvr.svc/RequireCaptchaByOpen',prams);
//验证码登录
export const GetUserInfoByOpen= prams => axios.post('/OpenUserBizSvr.svc/RegisterByCaptcha',prams);
//账号密码登录
export const LoginByOpen= prams => axios.post('/OpenUserBizSvr.svc/LoginByOpen',prams);
//获取登录信息 hand传token
export const LoginUserData= prams => axios.post('/OpenUserBizSvr.svc/LoginUserData',prams);
//找回密码
export const RetrieveUserPasswordByOpen= prams => axios.post('/OpenUserBizSvr.svc/RetrieveUserPasswordByOpen',prams);

//获取农户详情
export const FarmingInitInfo =  prams => axios.get('/TravelSvr.svc/GetTravelFarmhouseDetail', {params: prams});

//晒晒详情界面 
export const GetTravelShowListBase =  prams => axios.get('/TravelSvr.svc/GetTravelShowListBase', {params: prams});
//点赞
export const TravelPraise =  prams => axios.post('/TravelSvr.svc/TravelPraise', prams);

//
export const GetTravelShowList = prams => axios.get('/TravelSvr.svc/GetTravelShowList',  {params: prams});

