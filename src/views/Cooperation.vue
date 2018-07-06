<template>
  <div class="about-page">
    <div class="nav-bar-bg"></div>
    <div class="view-1200">
        <div id="bmap"></div>
        <div class="lxfs">
            <h1 class="p-title">联系方式</h1>
            <div class="row">
                <div class="col">
                    <p class="t-col">灰虫子网络技术有限公司20号</p>
                    <p>地址：成都高新区天晖路3605层5号</p>
                    <p>邮编：610041</p>
                    <p>电话：13118177901</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="t-col">媒体采访</p>
                    <p>联系人：王先生</p>
                    <p>Email：wang@zhuding.com</p>
                </div>
                <div class="col">
                    <p class="t-col">商务合作</p>
                    <p>联系人：王先生</p>
                    <p>Email：wang@zhuding.com</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="t-col">广告投放</p>
                    <p>联系人：王先生</p>
                    <p>Email：wang@zhuding.com</p>
                </div>
                <div class="col">
                    <p class="t-col">学生社团合作</p>
                    <p>联系人：王先生</p>
                    <p>Email：wang@zhuding.com</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cooperation',
  data(){
    return {
    }
  },
  mounted(){
    if(window.AMap){
        mapInit();
    }else{
        console.log("AMap 加载失败")
    }
    function mapInit(){
        var map = new AMap.Map('bmap',{
            zoom: 16,
            center:[104.053544,30.581483]
        });
        var marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [104.053544,30.581483]
        });
        map.add(marker);
    }
  },
  methods:{
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
.nav-bar-bg{
  height: 144px;
  background: -webkit-linear-gradient(left, #dd5789 , #658def); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #dd5789, #658def); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #dd5789, #658def); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #dd5789 , #658def); /* 标准的语法 */
}
#bmap{
    width: 1200px;
    height: 450px;
}
.view-1200{
    box-sizing: border-box;
    margin: 50px auto;
    background-color: #fff;
}
.lxfs{
    box-sizing: border-box;
    padding: 75px 100px;
    font-size: 16px;
    line-height: 1;
    background-color: #fff;
}
.t-col{
    font-size: 20px;
    margin-bottom: 18px;
    color: #007cff;
}
.row{
    margin-bottom: 58px;
    &:last-child{
        margin-bottom: 0;
    }
    &::after{
        content: '';
        display: block;
        clear: both;
    }
}
.col{
    width: 50%;
    float: left;
}
.col p{
    margin-bottom: 15px;
    &:last-child{
        margin-bottom: 0;
    }
}
.p-title{
    font-size: 26px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 30px;
}
</style>