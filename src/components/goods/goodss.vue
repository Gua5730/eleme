<!--<template>-->
    <!--<div class="container">-->
        <!--<div class="goods">-->
            <!--<div class="menuList">-->
                <!--<ul>-->
                    <!--<li ref="menuList" ref="menuList" v-for="(item,index) in goods" class="menu-item">-->
              <!--<span class="item-content">-->
                <!--<span v-if="item.type>=0" class="icon" :class="classMap[item.type]"></span><span>{{item.name}}</span>-->
              <!--</span>-->
                    <!--</li>-->
                <!--</ul>-->

            <!--</div>-->
            <!--<div class="foodsList">-->
                <!--<ul>-->
                    <!--<li class="cate" v-for="item in goods">-->
                        <!--<h3 class="cate-name">{{item.name}}</h3>-->
                        <!--<ul >-->
                            <!--<li class="food-item" v-for="food in item.foods">-->
                                <!--<div class="food-img">-->
                                    <!--<img :src="food.icon" alt="">-->
                                <!--</div>-->
                                <!--<div class="content">-->
                                    <!--<h4 class="food-name">{{food.name}}</h4>-->
                                    <!--<p class="desc" v-show="food.description">{{food.description}}</p>-->
                                    <!--<div class="info">-->
                                        <!--<span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>-->
                                    <!--</div>-->
                                    <!--<div class="price">-->
                                        <!--<span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>-->
                                    <!--</div>-->
                                    <!--<div class="cart-control-wrapper">-->

                                    <!--</div>-->
                                <!--</div>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->

<!--</template>-->

<!--<script>-->
    <!--import-->
    <!--export default {-->
        <!--name: "goods",-->
        <!--data(){-->
            <!--return {-->
                <!--goods:[],-->
                <!--classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']-->
            <!--}-->
        <!--},-->
        <!--created () {-->
            <!--this.$http.get(`${this.$api}/goods`)-->
                <!--.then(({data}) => {-->
                    <!--console.log(data);-->
                    <!--if(data.status) {-->
                        <!--this.goods = data.goods;-->
                    <!--}-->
                <!--})-->
                <!--.catch((err) => {-->
                    <!--console.error(err);-->
                <!--})-->
        <!--},-->
        <!--mounted () {-->
            <!--let menuList = this.$refs.menuList;-->
            <!--console.log(menuList);-->
            <!--this.menuScroll = new BScorll(menuList);-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
    <!--@import "../../assets/css/mixin";-->
    <!--.goods{-->
        <!--display: flex;-->
        <!--position: absolute;-->
        <!--top:174px;-->
        <!--bottom: 46px;-->
        <!--overflow: hidden;-->
        <!--width: 100%;-->
        <!--.menuList{-->
            <!--width:80px;-->
            <!--background-color: #f3f5f7;-->
            <!--.menu-item{-->
                <!--display: table;-->
                <!--width:56px;-->
                <!--height: 54px;-->
                <!--padding: 0 12px;-->
                <!--line-height: 14px;-->
                <!--font-size: 12px;-->
                <!--font-weight: 400;-->
                <!--&.current{-->
                    <!--position: relative;-->
                    <!--margin-top:-1px;-->
                    <!--z-index: 10;-->
                    <!--background-color: #fff;-->
                    <!--font-weight: 700;-->
                    <!--.item-content{-->
                        <!--border:none;-->
                    <!--}-->
                <!--}-->
                <!--&:last-child{-->
                    <!--.item-content{-->
                        <!--border:none;-->
                    <!--}-->
                <!--}-->
                <!--.icon {-->
                    <!--display: inline-block;-->
                    <!--vertical-align: top;-->
                    <!--width: 12px;-->
                    <!--height: 12px;-->
                    <!-- -webkit-background-size: 12px 12px;-->
                    <!--background-size: 12px 12px;-->
                    <!--background-repeat: no-repeat;-->
                    <!--margin-right: 2px;-->
                    <!--&.decrease {-->
                        <!--.bg-img("../img/decrease_3");-->
                    <!--}-->
                    <!--&.discount {-->
                        <!--.bg-img("../img/discount_3");-->
                    <!--}-->
                    <!--&.guarantee {-->
                        <!--.bg-img("../img/guarantee_3");-->
                    <!--}-->
                    <!--&.invoice {-->
                        <!--.bg-img("../img/invoice_3");-->
                    <!--}-->
                    <!--&.special {-->
                        <!--.bg-img("../img/special_3");-->
                    <!--}-->
                <!--}-->
                <!--.item-content{-->
                    <!--display: table-cell;-->
                    <!--vertical-align: middle;-->
                    <!--border-bottom: 1px solid rgba(7,17,27,0.1);-->
                <!--}-->
            <!--}-->
        <!--}-->
        <!--.foodsList{-->
            <!--flex:1;-->
            <!--.cate-name{-->
                <!--padding-left: 14px;-->
                <!--height: 26px;-->
                <!--line-height: 26px;-->
                <!--border-left: 2px solid #d9dde1;-->
                <!--font-size: 12px;-->
                <!--color: rgb(147, 153, 159);-->
                <!--background: #f3f5f7;-->
            <!--}-->
            <!--.food-item{-->
                <!--display: flex;-->
                <!--padding: 18px;-->
                <!--border-bottom: 1px solid rgba(7, 17, 27, 0.1);-->
                <!--position: relative;-->
                <!--&:last-child{-->
                    <!--border:none;-->
                <!--}-->
                <!--.food-img{-->
                    <!--width:57px;-->
                    <!--margin-right: 10px;-->
                    <!--img{-->
                        <!--width:100%;-->
                    <!--}-->

                <!--}-->
                <!--.content{-->
                    <!--flex:1;-->

                    <!--.food-name{-->
                        <!--margin: 2px 0 8px 0;-->
                        <!--height: 14px;-->
                        <!--line-height: 14px;-->
                        <!--font-size: 14px;-->
                        <!--color: rgb(7, 17, 27);-->
                    <!--}-->
                    <!--.desc, .info{-->
                        <!--line-height: 10px;-->
                        <!--font-size: 10px;-->
                        <!--color: rgb(147, 153, 159);-->
                    <!--}-->
                    <!--.desc{-->
                        <!--line-height: 12px;-->
                        <!--margin-bottom: 8px;-->
                    <!--}-->
                    <!--.count{-->
                        <!--margin-right: 12px;-->
                    <!--}-->
                    <!--.price{-->
                        <!--font-weight: 700;-->
                        <!--line-height: 24px;-->
                        <!--.now{-->
                            <!--margin-right: 8px;-->
                            <!--font-size: 14px;-->
                            <!--color: rgb(240, 20, 20);-->
                        <!--}-->

                        <!--.old{-->
                            <!--text-decoration: line-through;-->
                            <!--font-size: 10px;-->
                        <!--}-->

                    <!--}-->

                    <!--.cart-control-wrapper{-->
                        <!--position: absolute;-->
                        <!--right: 0;-->
                        <!--bottom: 12px;-->
                    <!--}-->

                    <!--color: rgb(147, 153, 159)-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</style>-->