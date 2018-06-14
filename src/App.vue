<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
      <router-view/>
  </div>
</template>

<script>
  // 导入头部
  import MyHeader from "./components/header/myHeader"
  export default {
      components: {
          MyHeader,
      },
      data() {
        return {
            seller: {}
        }
      },
      created() {
          this.$http.get("/api/data/seller").then(({data})=>{//数据初始化过程 此时进行数据请求
              console.log("data:",data)
              this.seller = data.sellers;
              console.log("created:",this.seller);

          }).catch((err)=>{
              console.log("err:",err);
          })
      },
  }
</script>
<style lang="less">
  @base-color:rgba(7,17,21,0.1);
  .tab{
    display: flex;
    height: 40px;
    border-bottom: 1px solid @base-color;
    .tab-item{
      flex: 1;
      align-items: center;
      a{
        display: block;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        &.router-link-active{
            color: rgb(240,20,20);
        }

      }
    }
  }
</style>
