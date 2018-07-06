<template>
  <div class="footer-bar">
    <div class="view-1024">
      <footer>
        <p class="footer-msg-top"><span>关于注定</span><span>联系我们</span><span>中文</span></p>
        <p class="footer-msg"><b>@2018 注定</b> 成都灰虫子网络技术有限公司 蜀公网安备 11010502030901号   成都高新区天</p>
        <p>违法和不良信息举报邮箱：support@zhuding.com</p>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBar"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer-bar {
  height: 108px;
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  color: #8a8a8a;
  padding: 26px 0;
}
footer p {
  line-height: 1;
}
footer p b {
  color: #333;
}
footer p span {
  box-sizing: border-box;
  padding: 0 10px;
  border-right: 1px solid #8a8a8a;
  &:last-child {
    border-right: none;
  }
}
.footer-msg {
  margin-bottom: 6px;
}
.footer-msg-top {
  margin-bottom: 16px;
}
</style>
