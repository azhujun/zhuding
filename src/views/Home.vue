<template>
  <div class="home">
    <div class="home-top">
      <div class="view-1200">
        <img class="hand-phone" src="../assets/img1.png" alt="">
        <div class="right-box">
          <img src="../assets/zdzyq.png" alt="">
          <div class="download-link-boxs">
            <div class="icon-QRcode fright">
              <img src="../assets/qr.png" alt="">
              <img class="big-qr" :src="downloadurl.QRcode" alt="">
            </div>
            <a class="link-qr" :href="downloadurl.android_url">
              <div class="qr-horve fright">
                  <img src="../assets/android.png" alt="">
              </div>
            </a>
            <a class="link-qr" :href="downloadurl.ios_url">
              <div class="qr-horve fright">
                <img src="../assets/ios.png" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-card">
      <div class="view-1200">
        <p class="f38">越来越多的年轻人选择注定</p>
        <p class="f18">每天加入注定找到新朋友</p>
      </div>
      <div class="view-1190">
        <ul>
          <li class="img-box" v-for="item in userBox" :key="item.name">
            <img :src="item.img" alt="">
            <div class="hover-box">
              <p class="name">{{item.name}}</p>
              <p>{{item.sex}}：{{item.age}}岁</p>
              <p>城市：{{item.city}}</p>
              <p>签名：{{item.txt}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="download-card" id="download">
      <div class="view-1200">
        <h3 class="f20">欢迎下载</h3>
        <div class="todown">
          <a class="down-item" :href="downloadurl.ios_url" title="去 App Store 下载">
            <img src="../assets/toappstore.jpg" alt="">
          </a>
          <a class="down-item" :href="downloadurl.ios_url" title="android 客户端">
            <img src="../assets/toandroidstore.jpg" alt="">
          </a>
          <a class="down-item" href="javascript:void()" title="扫一扫">
            <img src="../assets/qrbottom.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      downloadurl:{
        android_url:"http://www.baidu.com/#/android",
        ios_url:"http://www.baidu.com/#/ios",
        QRcode:"https://s3a.bytecdn.cn/aweme/resource/web/static/image/index/QRcode_c129445.png"
      },
      userBox:[
        {name:"灰虫子1",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子2",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子3",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子4",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子5",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子6",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子7",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子8",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子9",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"},
        {name:"灰虫子0",city:"成都",sex:"男",age:"24",txt:"心无旁骛",img:"http://localhost/1.jpg"}
      ]
    }
  },
  mounted(){
    if(this.$route.name=='download'){
      var download = document.querySelector("#download");
      window.scrollTo(0,download.offsetTop)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-top{
  height: 660px;
  background: -webkit-linear-gradient(top, #102580 , #5256dc); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom, #102580, #5256dc); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom, #102580, #5256dc); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom, #102580 , #5256dc); /* 标准的语法 */
  .view-1200{
    height: 660px;
    position: relative;
    overflow: hidden;
    .hand-phone{
      position: absolute;
      bottom: -45px;
      left: 100px;
    }
    .right-box{
      width: 360px;
      height: 400px;
      position: absolute;
      bottom: 0px;
      right: 150px;
    }
    .download-link-boxs{
      padding-top: 55px;
    }
    .download-link-boxs::after{
      content: '';
      display: block;
      clear: both;
    }
    .qr-horve{
      position: relative;
      margin-right: 12px;
      display: flex;
      font-size: 0;
    }
    .qr-horve::after{
      content: '';
      display: block;
      flex: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .qr-horve:hover::after{
      background-color: rgba(255, 255, 255, .5);
    }
    .big-qr{
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      -webkit-transform: scale(0.23);
      transform: scale(0.23);
      -webkit-transform-origin: top right;
      transform-origin: top right;
      opacity: 0;
      -webkit-transition: .3s all;
      transition: .3s all;
    }
    .icon-QRcode{
      position: relative;
    }
    .icon-QRcode:hover{
      &+a,
      &+a+a{
         display: none;
      }
      .big-qr{
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
    }
  }
}
.home-card{
  box-sizing: border-box;
  padding: 180px 0;
  text-align: center;
  &::after{
    content: '';
    display: block;
    clear: both;
  }
}
.f38{
  font-size: 38px;
  line-height: 1;
  margin-bottom: 20px;
}
.f18{
  font-size: 18px;
  line-height: 1;
}
.f20{
  font-size: 20px;
}
.img-box{
  width: 230px;
  height: 230px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
}
.img-box:nth-child(5n){
  margin-right: 0;
}
.view-1190{
  margin-top: 88px;
}
.hover-box{
  width: 230px;
  height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
  box-sizing: border-box;
  padding: 100px 18px 18px 18px;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  display: none;
}
.hover-box p{
  margin-bottom:10px;
  width: 180px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}
.hover-box .name{
  font-size: 18px;
}
.img-box:hover .hover-box{
  display: block;
}
.download-card{
  padding: 66px 0;
  background-color: #f0f1f6;
  text-align: center;
  .todown{
    margin-top: 50px;
  }
  .down-item{
    margin-right: 10px;
    font-size: 0;
    display: inline-block;
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>