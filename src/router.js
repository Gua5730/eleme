import Vue from 'vue'
import Router from 'vue-router'
import Goods from "./views/goods"
import Rating from "./views/rating"
import Seller from "./views/seller"

Vue.use(Router)

export default new Router({
    mode : "history",
  routes: [
    {
      path: '/goods',
      component:Goods,
        // 为path取一个别名
      alias: "/"
    },
    {
      path: '/rating',
        name: "rating",
        component:Rating
    },
      {
        path:'/seller',
        name:"seller",
        component:Seller
      }
  ]
})
