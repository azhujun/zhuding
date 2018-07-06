<template>
  <div class="about-page">
    <div class="nav-bar-bg"></div>
    <div class="card">
      <div class="tabs">
        <span class="tab" :class="{'active':showPage=='gyzd'}" @click="changePage('gyzd')">关于注定</span>
        <span class="tab" :class="{'active':showPage=='yhxy'}" @click="changePage('yhxy')">用户协议</span>
      </div>
      <!-- 关于注定 -->
      <div class="card-gyzd" v-if="showPage=='gyzd'">
        <div class="banner-img">
          <!-- 450*1200 -->
          <img src="http://localhost/2.jpg" alt="">
        </div>
        <div class="box1">
          <h2 class="f26">注定，让交友变得更靠谱</h2>
          <p>注定zhudi是灰虫子推出的一款专注于靠谱社交，为用户搭建的交友平台。</p>
          <p>国家民政局数据显示，中国单身男女人数已近2亿。全国独居人口已上升到15%，超过6000万人一个人生活。第六次人口普查显示，30岁及以上女性人口中，有2.47%未婚。</p>
          <p>2017中国离婚率飙升至39%，离婚的越来越多，每年的离婚家庭大幅增加。</p>
          <p>市面上的交友软件很多，有各种以约为目的。分手、出轨、离婚率都已经够高了。我们认为陌生人之间的社交愿景也可以是纯洁的，而不是赤裸裸的约炮。我们希望交友的目的就像结婚的目的那样，注定在一起，永远不分离。</p>
        </div>
        <div class="logo-box">
          <img src="../assets/logo2.png" alt="">
        </div>
        <div class="box1">
          <h2 class="f24">关于灰虫子</h2>
          <p> 公司名字''灰虫子''Gray Worm自取近几年火爆全球的美剧《权力的游戏》。灰虫子是丹尼莉丝·坦格利安的无垢者（Unsullied）军团指挥官，也是她最相信的手下之一。</p>
          <p>在阿斯塔波人们选出年轻、速度较快和力量较强的男性奴隶，把他们训练成无垢者。他们被完全地阉割，只要训练失败，奴隶就会被杀死。最终只有三分之一的奴隶能够坚持到底成为无垢者。但他们绝对服从主人和面对战争无所畏惧。</p>
          <p>丹妮莉丝买下了阿斯塔波的所有无垢者，然后给予他们自由。无垢者们自愿加入丹妮莉丝的军队，向龙女宣誓效忠。从此跟随龙女四处征战。</p>
          <p>我们认为灰虫子是忠诚且勇敢的，忠诚于奴隶主，忠于龙女，面对死亡无所畏惧。就像战狼2能创造票房奇迹一样，这个社会什么都可以改变，信任和忠诚永不变。我们想让灰虫子成为忠诚且勇敢的企业，忠诚于社会，忠诚于投资者，同时面对市场又如饥似渴，誓死如归，披荆斩棘，所向披靡。</p>
        </div>
      </div>
      <!-- 用户协议 -->
      <div class="card-yhxy" v-if="showPage=='yhxy'">
        <h3 class="f26">用户协议</h3>
        <pre>
        特别提示

        欢迎你使用灰虫子注定软件及服务！

        注定所提供的各项服务的所有权和运作权归成都灰虫子网络技术有限公司（以下简称“灰虫子”）所有。在此特别提醒你（用户
        ）在注册用户之前，请认真阅读《用户协议》（以下简称“协议”），确保你充分理解协议内容和服务条款。请你仔细阅读并选
        择接受或不接受本协议。除非你接受本协议所有条款，否则将无权注册、登录或使用本协议所涉及服务。你的注册、登录、使
        用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。

        本协议可由灰虫子随时更新，更新后的协议条款一旦在网页上公布即有效代替原来的协议条款，恕不另行通知。如你不同意修
        改后的条款，请你立即停，用户继续使用灰虫子提供的服务将被视为接受修改后的协议。

        一、服务内容

        1、本服务的具体内容由灰虫子根据实际情况提供，包括但不限于授权用户通过其账号进行添加好友、即时通讯、关注他人、
        发布留言。灰虫子有权对服务内容随时变更，用户将会收到相关变更的通知。

        2、灰虫子在提供网络服务时，可能会对部分网络服务收取一定的费用，在此情况下，会在相关页面上做明确的提示。如用户
        拒绝支付该等费用，则不能使用相关的网络服务。

        二、账号注册

        1、为了使用本服务，用户需要注册一个“注定”账号。“注定”账号应当使用手机号码绑定注册，请用户使用尚未与“注定”账号
        绑定的手机号码，以及未被注定根据本协议封禁的手机号码注册。灰虫子可以根据用户需求或产品需要对账号注册和绑定方式
        进行变更，而无需事先通知用户。

        2、当你使用注定附近的人、点一点以及滑一滑等功能时，我们会记录你的地理位置信息，目的是为了向你提供该服务。该信
        息属于敏感信息，拒绝提供该信息仅会使你无法使用上述功能，但不影响你正常使用注定其他功能。此外，你也可以随时关闭
        相关功能并在该功能内清除你的地理位置信息。
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      showPage:'gyzd'
    }
  },
  methods:{
    changePage: function(page){
      this.showPage = page;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.about-page{
  background-color: #f0f1f6;
  font-size: 0;
  padding-bottom: 50px;
}
.card{
  width: 1200px;
  margin: 50px auto 0 auto;
  background-color: #fff;
}
.tabs{
  height: 80px;
  font-size: 16px;
  line-height: 80px;
}
.tab{
  display: inline-block;
  width: 100px;
  text-align: center;
  cursor: pointer;
  &.active{
    color: #007cff;
  }
}
.nav-bar-bg{
  height: 144px;
  background: -webkit-linear-gradient(left, #dd5789 , #658def); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #dd5789, #658def); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #dd5789, #658def); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #dd5789 , #658def); /* 标准的语法 */
}
.card-yhxy,
.card-gyzd{
  font-size: 14px;
}
.banner-img{
  height: 450px;
  font-size: 0;
}
.box1{
  background-color: #fff;
  box-sizing: border-box;
  padding: 50px;
  .f26{
    text-align: center;
    margin-bottom: 20px;
  }
  .f24{
    text-align: center;
    margin-bottom: 20px;
    font-weight: 400;
  }
  p{
    margin-bottom: 20px;
    font-size: 16px;
    color: #000;
  }
}
.f26{
  font-size: 26px;
}
.f24{
  font-size: 24px;
}
.logo-box{
  height: 450px;
  background-color: #e4e5ea;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-yhxy{
  .f26{
    text-align: center;
    font-weight: 400;
    margin-bottom: 20px;
  }
}
</style>