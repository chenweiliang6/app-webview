import { APP_NAME } from '../config/config'
import { useMainStore } from "../store/index";
const useMain = useMainStore();

/**
 * 存储localStorage
 */
export const cmSetStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const cmGetStore = (name) => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const cmRemoveStore = (name) => {
	if (!name) return;
	window.localStorage.removeItem(name);
}


/**
 * 日期时间格式化
 * yyyy年MM月dd日
 * hh:mm:ss
 */

export const dateFormat = function (date, fmt ='yyyy-MM-dd hh:mm:ss') {
	date = new Date(date)
	var o = {
		"M+" : date.getMonth()+1,                 //月份
		"d+" : date.getDate(),                    //日
		"h+" : date.getHours(),                   //小时
		"m+" : date.getMinutes(),                 //分
		"s+" : date.getSeconds(),                 //秒
		"q+" : Math.floor((date.getMonth()+3)/3), //季度
		"S"  : date.getMilliseconds()             //毫秒
	};
	if(/(y+)/.test(fmt)) {
		fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("("+ k +")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt;
}


export const handleTips = () => {
  const hour = new Date().getHours()
  let usr = useMain?.userInfo || 'admin'
  const title = true ? usr.username : '超级管理员'
  if (hour >= 5 && hour < 12) {
    return `👨‍💻 早上好！ ${title?title: APP_NAME}，又是元气满满的一天！`
  }
  if (hour >= 12 && hour < 13) {
    return `🔆中午好！ ${title?title: APP_NAME}，忙碌了一上午，记得吃午饭哦！`
  }
  if (hour >= 13 && hour < 18) {
    return `🌔 下午好！ ${title?title: APP_NAME}，你一定有些累了，喝杯咖啡提提神！`
  }
  if (hour >= 18 && hour < 24) {
    return `🌜 晚上好！ ${title?title: APP_NAME}，愿你天黑有灯，下雨有伞！`
  }
  return `${title ? title: APP_NAME} 凌晨好 🌛`;

}
