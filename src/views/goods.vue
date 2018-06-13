<template>
    <div class="goods">
        <!-- 左侧分类 -->
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li class="menu-item" @click="selectMenu($index,$event)" v-for="(item,$index) in goods" :class="{'current':currentIndex==$index}">
                    <span class="text">
                        <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
                    </span>
                </li>
            </ul>

        </div>

        <!-- 右侧商品 -->
        <div class="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li class="food-list food-list-hook" v-for="item in goods">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li class="food-item" v-for="food in item.foods">
                            <div class="icon">
                                <img width="57" height="57" :src="food.icon" alt="">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span><span class="count">好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "goods",
        props: {
            seller: {
                type: Object
            }
        },
        data () {
            return {
                goods :[],
                // 定义数组  存储区间高度
                listHeight: [],
                scrollY: 0,
            }
        },
        computed: {
            currentIndex() {
                for (let i=0;i<this.listHeight.length; i++) {
                    // 获取当前索引值得高度
                    let height1 = this.listHeight[i];
                    // 获得下一个索引值得高度
                    let height2 = this.listHeight[i+1];
                    // 落到当前高度区间
                    if (!height2 || (this.scrollY>=height1 && this.scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            }
        },
        created () {
            this.classMap = ['decrease', 'discount', 'special', 'invoice','guarantee'];
            this.$http.get("/api/data/goods")
                .then(({data}) => {
                    console.log("商品data",data);
                    if(data.status == 1) {
                        this.goods = data.goods;
                        console.log("商品",this.goods);
                        this.$nextTick(() => {
                            this._initScroll();
                            this._caculateHeight();
                        })
                    }
                }).catch((err) => {
                    console.error(err);
            })
        },
        methods: {
            // 点击右侧选取跳转对应的商品 index代表选择第几个的下标值
            selectMenu(index, event) {
                // better-scroll 开发时事件是  better-scroll设为true 这里 不执行
                if (!event._constructed) {
                    return;
                }
                // 点击滚动到到对应位置
                let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index]; // 对应的列表
                this.foodsScroll.scrollToElement(el, 300); //滚动时间300ms
                console.log("clickindex",index);
            },
            _initScroll() {
                // BScroll( DOM对象, options )
                this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    // better-scroll会监听事件,阻止默认的事件  所以初始化时 需要传入一个 click 属性
                    // PC端不需要传入
                    click:true
                });

                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    probeType: 3
                });

                this.foodsScroll.on('scroll', (pos) => { // pos 位置
                    this.scrollY = Math.abs(Math.round(pos.y));
                    // console.log("scrolly",this.scrollY);

                })
            },
            _caculateHeight() {
                let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                // 先存放第一个高度
                this.listHeight.push(height);
                // 遍历footList 数组
                for (let i=0;i<foodList.length;i++) {
                    // 拿到每一个 foodList
                    let item = foodList[i];
                    // 累加高度
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }

            },
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/css/mixmin";
    .goods {
        display: flex;
        position: absolute;
        top: 174px;
        bottom: 46px;
        width: 100%;
        overflow: hidden;
        .menu-wrapper{
            flex: 0 0 80px;
            width: 80px;
            background: #f3f5f7;
            .menu-item{
                /*垂直居中 */
                display: table;
                height: 54px;
                width: 56px;
                line-height: 14px;
                padding: 0 12px;
                &.current{
                    position: relative;
                    z-index: 10;
                    margin-top: -1px;
                    background: white;
                    font-weight: 700;
                    color: black;
                    .text{
                        border: none;
                    }
                }
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 2px;
                    background-repeat: no-repeat;
                    background-size: 12px 12px;
                    &.decrease {
                        .bg-image('header/decrease_3')
                    }
                    &.discount {
                        .bg-image('header/discount_3')
                    }
                    &.guarantee {
                        .bg-image('header/guarantee_3')
                    }
                    &.invoice {
                        .bg-image('header/invoice_3')
                    }
                    &.special {
                        .bg-image('header/special_3')
                    }
                }
                .text{
                    display: table-cell;
                    width: 56px;
                    vertical-align: middle;
                    font-size: 12px;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                }
            }
        }
        .foods-wrapper{
            flex: 1;
            .food-list{
                .title {
                    padding-left: 14px;
                    height: 26px;
                    line-height: 26px;
                    font-size: 12px;
                    color: rgb(147,153,159);
                    border-left: 2px solid #d9dde1;
                    background: #f3f5f7;
                }
                .food-item {
                    display: flex;
                    margin: 18px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    &:last-child {
                        border: none;
                        margin-bottom: 0;
                    }
                    .icon{
                        flex: 0 0 57px;
                        margin-right: 10px;
                    }
                    .content{
                        flex: 1;
                        .name{
                            margin: 2px 0 8px 0;
                            font-size: 14px;
                            line-height: 14px;
                            height: 14px;
                            color: rgb(7,17,27);
                        }
                        .desc, .extra {
                            font-size: 10px;
                            line-height: 10px;
                            color: rgb(147, 153, 159);
                        }
                        .desc{
                            margin-bottom: 8px;
                            line-height: 12px;
                        }
                        .extra{
                            .count{
                                margin-right: 12px;
                            }
                        }
                        .price{
                            font-weight: 700;
                            line-height: 24px;
                            .now{
                                margin-right: 8px;
                                font-size: 14px;
                                color: rgb(240,20,20);
                            }
                            .old{
                                font-size: 10px;
                                color: rgb(147,153,159);
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
    }

</style>