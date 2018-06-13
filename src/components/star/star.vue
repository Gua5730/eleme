<template>
    <div class="star" :class="starType">
        <!-- 创建一个 itemClasses数组,后遍历 -->
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>

<script>
    const LENGTH = 5;   // 五颗星的长度
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        name: "star",
        // data() {
        //     return {
        //         type: Object
        //     }
        // },
        props: {
            size: {
                type: Number,
            },
            score: {
                type: Number,
            }
        },
        computed: {
            starType() {
                return 'star-' + this.size;
            },
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score*2)/2; // 计算所有星星的数量
                let hasDecimal = score %1 !== 0;  // 非整数星星判断
                let integer = Math.floor(score);  // 整数星星判断
                for(let i=0;i<integer;i++) {  // 整数星星使用on
                    result.push(CLS_ON);  // 一个整数星星就push一个CLS_ON到数组
                }
                if (hasDecimal) {  // 非整数星星使用half
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {  // 余下的用无星星补全,使用off
                    result.push(CLS_OFF);
                }
                return result;
                console.log(result);
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/css/style.css";
    @import "../../assets/css/mixmin";
    .star {
        font-size: 0;
        .star-item{

            display: inline-block;
            background-repeat: no-repeat;
        }
        &.star-48{
            .star-item {
                font-size: 20px;
                width: 20px;
                height: 20px;
                margin-right: 22px;
                background-size: 20px 20px;
                &:last-child {
                    margin-right: 0;
                }
                &.on{
                    .bg-image('star/star48_on');
                }
                &.half{
                    .bg-image('star/star48_half');
                }
                &.off {
                    .bg-image('star/star48_off');
                }
            }
        }
        &.star-36{
            .star-item {
                width: 15px;
                height: 15px;
                margin-right: 6px;
                background-size: 15px 15px;
                &:last-child {
                    margin-right: 0;
                }
                &.on{
                    .bg-image('star/star36_on');
                }
                &.half{
                    .bg-image('star/star36_half');
                }
                &.off {
                    .bg-image('star/star36_off');
                }
            }
        }
        &.star-24{
            .star-item {
                width: 10px;
                height: 10px;
                margin-right: 3px;
                background-size: 10px 10px;
                &:last-child {
                    margin-right: 0;
                }
                &.on{
                    .bg-image('star/star24_on');
                }
                &.half{
                    .bg-image('star/star24_half');
                }
                &.off {
                    .bg-image('star/star24_off');
                }
            }
        }
    }
</style>