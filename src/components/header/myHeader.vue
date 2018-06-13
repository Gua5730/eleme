<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}
                </div>
                <div @click="showDetail" v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div @click="showDetail" v-if="seller.supports" class="support-count">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>

        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <!-- 背景模糊 -->
        <div class="background">
            <img width="100%" height="100%" :src="seller.avatar" alt="">
        </div>

        <!-- 浮层 -->
        <transition name="fade">
            <div v-show="detailShow" class="detail" transition="fade">
                <div class="detail-wrapper clearfix">
                    <!-- 浮层内容 -->
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star-wrapper">
                            <star :size="48" :score="seller.score"></star>
                        </div>
                        <!-- 优惠信息  使用flex布局 -->
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <!-- 商品优惠详情 -->
                        <ul v-if="seller.supports" class="supports">
                            <li class="support-item" v-for="(item,index) in seller.supports">
                                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                                <span class="text">{{seller.supports[index].description}}</span>
                            </li>
                        </ul>
                        <!-- 商家公告  使用flex布局 -->
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>
                        <div class="bulletin">
                            <p class="content">{{ seller.bulletin }}</p>
                        </div>
                    </div>
                </div>
                <div class="detail-close">
                    <i class="icon-close" @click="closeDetail"></i>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import star from "../star/star"
    export default {
        name: "myHeader",
        data() {
            return {
                detailShow: false
            }
        },
        props: {
            seller: {
                type: Object,
            }
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            },
            closeDetail() {
                this.detailShow = false;
            }
        },
        created() {
          this.classMap = ['decrease', 'discount', 'special', 'invoice','guarantee']
        },
        components: {
            star,
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/css/style.css";//引入svg样式字体
    @import "../../assets/css/mixmin";
    @import "../../assets/css/base";
    /*.icon {*/
        /*font-size: 30px;*/
        /*color:red;*/
    /*}*/
    .header {
        position: relative;
        background: rgba(7,17,27,0.5);
        color: rgb(255,255,255);
        font-size: 0;
        overflow: hidden;
        .content-wrapper {
            position: relative;
            padding: 24px 16px 18px 24px;
            .avatar {
                display: inline-block;
                img {
                    border-radius: 2px;
                }
            }
            .content {
                display: inline-block;
                margin-left: 16px;
                .title {
                    margin: 2px 0 8px 0;
                    .brand{
                        display: inline-block;
                        vertical-align: top;
                        width: 30px;
                        height: 18px;
                        background: url("brand@2x.png") no-repeat;
                        background-size: 30px 18px;
                    }
                    .name {
                        font-size: 16px;
                        margin-left: 6px;
                        line-height: 18px;
                        font-weight: bold;
                    }
                }
                .description{
                    margin-bottom: 10px;
                    line-height: 12px;
                    font-size: 12px;
                    color: rgb(255,255,255);
                }
                .support {
                    .icon {
                        display: inline-block;
                        vertical-align: top;
                        width: 12px;
                        height: 12px;
                        margin-right: 4px;
                        background-repeat: no-repeat;
                        background-size: 12px 12px;
                        &.decrease {
                           .bg-image('header/decrease_1')
                        }
                        &.discount {
                            .bg-image('header/discount_1')
                        }
                        &.guarantee {
                            .bg-image('header/guarantee_1')
                        }
                        &.invoice {
                            .bg-image('header/invoice_1')
                        }
                        &.special {
                            .bg-image('header/special_1')
                        }
                    }
                    .text {
                        line-height: 12px;
                        font-size: 10px;
                    }
                }
            }
            .support-count {
                position: absolute;
                right: 12px;
                bottom: 15px;
                padding: 0 8px;
                height: 24px;
                line-height: 24px;
                border-radius: 14px;
                background: rgba(0,0,0,0.2);
                text-align: center;
                .count{
                    font-size: 10px;
                }
                .icon-keyboard_arrow_right {
                    line-height: 24px;
                    margin-left: 2px;
                    font-size: 10px;
                }
            }
        }
        .bulletin-wrapper {
            position: relative;
            background-color: rgba(7,17,27,0.2);
            font-size: 10px;
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .bulletin-title{
                display: inline-block;
                vertical-align: top;
                margin-top: 8px;
                width: 22px;
                height: 12px;
                background: url("bulletin@2x.png") no-repeat;
                background-size: 22px 12px;
            }
            .bulletin-text {
                margin: 0 4px;
                font-size: 10px;
                vertical-align: top;
            }
            .icon-keyboard_arrow_right {
                position: absolute;
                right: 12px;
                top: 8px;
                font-size: 10px;
            }
        }
        .background{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -11;
            filter: blur(10px);
        }
        .detail{
            position: fixed;
            z-index: 200;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(7,17,27,0.8);
            backdrop-filter: blur(10px);
            /*transition: all 0.5s;*/
            &.fade-enter-active {
                animation: bounce-in .5s;
            }
            &.fade-leave-active {
                animation: bounce-out .5s;
            }
            @keyframes bounce-in {
                0% {
                    transform: scale(0);
                }
                /*50% {*/
                    /*transform: scale(1.5);*/
                /*}*/
                100% {
                    transform: scale(1);
                }
            }
            @keyframes bounce-out {
                0% {
                    transform: scale(1);
                }
                /*50% {*/
                    /*transform: scale(1.5);*/
                /*}*/
                100% {
                    transform: scale(0);
                }
            }

            .detail-wrapper{
                /* 最小高度 根视口一样高*/
                min-height: 100%;
                width: 100%;
                .detail-main{
                    font-size: 20px;
                    margin-top: 64px;
                    padding-bottom: 64px;
                    .name{
                        line-height: 16px;
                        font-size: 16px;
                        font-weight: 700;
                        text-align: center;
                    }
                    .star-wrapper {
                        text-align: center;
                        margin-top: 18px;
                        padding: 2px 0;
                        margin-bottom: 18px;
                    }
                    .title{
                        display: flex;
                        width: 80%;
                        margin: 28px auto 24px auto;
                        .line{
                            flex: 1;
                            position: relative;
                            top: -6px;
                            border-bottom: 1px solid rgba(255,255,255,0.2);
                        }
                        .text{
                            padding: 0 12px;
                            font-weight: 700;
                            font-size: 14px;
                        }
                    }
                    .supports {
                        width: 80%;
                        margin: 0 auto;
                        .support-item {
                            padding: 0 12px;
                            margin-bottom: 12px;
                            font-size: 0;
                            &:last-child {
                                margin-bottom: 0;
                            }
                            .icon{
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                vertical-align: top;
                                margin-right: 6px;
                                background-size: 16px 16px;
                                background-repeat: no-repeat;
                                &.decrease {
                                    .bg-image('header/decrease_2')
                                }
                                &.discount {
                                    .bg-image('header/discount_2')
                                }
                                &.guarantee {
                                    .bg-image('header/guarantee_2')
                                }
                                &.invoice {
                                    .bg-image('header/invoice_2')
                                }
                                &.special {
                                    .bg-image('header/special_2')
                                }
                            }
                            .text{
                                line-height: 12px;
                                font-size: 12px;
                            }
                        }
                    }
                    .bulletin {
                        width: 80%;
                        /*height: 200px;*/
                        margin: 0 auto;
                        .content{
                            padding: 0 12px;
                            line-height: 24px;
                            font-size: 12px;
                        }
                    }
                }
            }
            .detail-close {
                position: relative;
                width: 32px;
                height: 32px;
                margin:-64px auto 0 auto;
                clear: both;
                font-size: 32px;
            }
        }

    }





</style>