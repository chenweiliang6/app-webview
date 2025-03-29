import { defineStore } from 'pinia'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一

export const useMainStore = defineStore('main', {
	state: () => {
    return {
			// 所有这些属性都将自动推断其类型
      token: "",
      userInfo: "",
		}
	},
  actions: {
		setToken(token) {
			this.token = token;
		},
		setUserInfo(userInfo) {
			this.userInfo = userInfo;
		},
	},
  // 按需配置数据持久化
	persist: {
		// 默认名称为当前store唯一标识 这里即main
		key: 'main',
		// 默认localStorage 本地储存
		// 这里建议临时储存sessionStorage 也可写成window.sessionStorage
		storage: sessionStorage,
		// 默认当前store里的所有变量都持久化
		paths:['token','userInfo']
	}
})
