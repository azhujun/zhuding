<template>
  <div class="nav-bar">
    <div class="view-1024">
      <router-link class="tab noactive" to="/" exact><img src="../assets/zd-logo.png" alt=""></router-link>
      <router-link class="tab noactive rl" to="/" exact>首页</router-link>
      <router-link class="tab rl" to="/joinus">加入我们</router-link>
      <router-link class="tab rl" to="/aboutus">关于我们</router-link>
      <router-link class="tab rl" to="/cooperation">合作</router-link>
      <router-link class="tab" to="/download">下载</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .nav-bar{
    width: 100%;
    height: 144px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    .view-1024{
      width: 1024px;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .tab{
      flex: 1;
      text-align: center;
      color: #fff;
      font-size: 24px;
      line-height: 1;
      &.router-link-active{
        color: #007cff;
      }
      &.rl{
        box-sizing: border-box;
        border-right: 1px dashed #fff;
      }
      &.router-link-active.noactive{
        color: #fff;
      }
    }
  }
  
</style>
