<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <!-- 购物车 -->
                <div class="logo-wrapper">
                    <div class="logo">
                        <span class="icon-shopping_cart"></span>
                    </div>
                </div>
                <!-- 总价 -->
                <div class="price">¥33</div>
                <div class="desc">另需配送费¥元</div>

            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shopCart",
        props: {

        },
    }
</script>

<style lang="less" scoped>
    .shopcart{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        width: 100%;
        height: 48px;
        .content{
            display: flex;
            background: #141d27;
            font-size: 0;
            .content-left{
                flex: 1;
                .logo-wrapper{
                    display: inline-block;
                    position: relative;
                    top: -10px;
                    margin: 0 12px;
                    padding: 6px;
                    width: 56px;
                    height: 56px;
                    box-sizing: border-box;
                    vertical-align: top;
                    border-radius: 50%;
                    background: #141d27;
                    .logo{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        text-align: center;
                        background: rgb(32,39,46);
                        .icon-shopping_cart{
                            line-height: 44px;
                            font-size: 24px;
                            color: rgb(109,114,119);
                        }
                    }
                }
                .price{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 16px;
                    color: rgba(255,255,255,0.4);
                    font-weight: 700;
                    line-height: 24px;
                    margin-top: 12px;
                    padding-right: 12px;
                    box-sizing: border-box;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .desc{
                    display: inline-block;
                    vertical-align: top;
                    line-height: 24px;
                    margin: 12px 0 0 12px;
                    color: rgba(255,255,255,0.4);
                    font-size: 10px;
                }
            }
            .content-right{
                flex: 0 0 105px;
                width: 105px;
            }
        }

    }
</style>