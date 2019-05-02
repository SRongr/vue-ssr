
const Demo = () => import(/* webpackChunkName: "demo" */'@/views/Demo.vue')
const Test = () => import(/* webpackChunkName: "test" */'@/views/Test.vue')
const routes = [
  {
    path: '/',
    component: Demo,
    meta: {
      title: 'VueSSR'
    }
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: 'VueSSR'
    }
  }
]

export default routes

// // 2018世界杯活动
// const Wc2018 = () => import(/* webpackChunkName: "wc2018" */'@/views/2018/worldcup/Worldcup.vue')
// const Wc2018Cards = () => import(/* webpackChunkName: "wc2018cards" */'@/views/2018/worldcup/Cards.vue')
// const Wc2018Coupons = () => import(/* webpackChunkName: "wc2018coupons" */'@/views/2018/worldcup/Coupons.vue')
// const Wc2018Rights = () => import(/* webpackChunkName: "wc2018rights" */'@/views/2018/worldcup/RightReserve.vue')
// const Wc2018Give = () => import(/* webpackChunkName: "wc2018give" */'@/views/2018/worldcup/Give.vue')
// const Wc2018Share = () => import(/* webpackChunkName: "wc2018share" */'@/views/2018/worldcup/Share.vue')

// const wc2018r = {
// 	path: '/2018/worldcup',
// 	component: Wc2018,
// 	meta: {
// 		title: '集球队卡 瓜分十万元现金大奖'
// 	}
// }

// const wc2018Cardsr = {
// 	path: '/2018/worldcup/cards',
// 	component: Wc2018Cards,
// 	meta: {
// 		title: '我的卡包'
// 	}
// }

// const wc2018Couponsr = {
// 	path: '/2018/worldcup/coupons',
// 	component: Wc2018Coupons,
// 	meta: {
// 		title: '优惠补给站'
// 	}
// }

// const wc2018Rightsr = {
// 	path: '/2018/worldcup/right-reserve',
// 	component: Wc2018Rights,
// 	meta: {
// 		title: '免责声明'
// 	}
// }

// const wc2018Giver = {
// 	path: '/2018/worldcup/give',
// 	component: Wc2018Give,
// 	meta: {
// 		title: '世界杯集卡'
// 	}
// }

// const wc2018Sharer = {
// 	path: '/2018/worldcup/share',
// 	component: Wc2018Share,
// 	meta: {
// 		title: '世界杯集卡'
// 	}
// }

// export default [
// 	wc2018r,
// 	wc2018Cardsr,
// 	wc2018Couponsr,
// 	wc2018Rightsr,
// 	wc2018Giver,
// 	wc2018Sharer
// ]
