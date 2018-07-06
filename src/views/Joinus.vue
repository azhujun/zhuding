<template>
  <div class="about-page">
    <div class="nav-bar-bg"></div>
    <div class="view-1200">
      <div class="banner-img">
          <!-- 450*1200 -->
          <img src="http://localhost/2.jpg" alt="">
      </div>
      <p class="h-txt">正在寻找富有创意和想法的你，加入我们，我们一起收获梦想</p>
      <div class="zp-list">
        <div class="zp-tabs">
          <div class="zp-tab" v-for="(list, index) in zplist" :key="index" :class="{'active':index==showIndex}" @click="changeIndex(index)">
            {{list.name}}
          </div>
        </div>
        <div class="table" v-if="showList.length">
          <div class="rows table-head">
            <div class="col-1">#</div>
            <div class="col-5">职位名称</div>
            <div class="col-1">职位类型</div>
            <div class="col-1">工作地点</div>
            <div class="col-1">发布时间</div>
            <div class="col-1"></div>
          </div>
          <div class="rows table-body" v-for="(item,index) in showList" :key="index" :class="{'open':openItem==index}" @click="openHide(index)">
            <div class="table-box">
              <div class="col-1">{{index+1}}</div>
              <div class="col-5">{{item.title}}</div>
              <div class="col-1 c80">{{item.type}}</div>
              <div class="col-1 c80">{{item.city}}</div>
              <div class="col-1 c80">{{item.date}}</div>
              <div class="col-1 bg-jt"><img class="jt-img" src="../assets/jt.png" alt=""></div>
            </div>
            <div class="table-hidder">
              <pre>{{item.describe}}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinus',
  data(){
    return {
      showIndex:0,
      openItem:null,
      showList:[],
      zplist:[
        {
          name:"技术类",
          list:[
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            }
          ]
        },
        {
          name:"技术类",
          list:[
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            }
          ]
        },
        {
          name:"技术类",
          list:[
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            }
          ]
        },
        {
          name:"技术类",
          list:[
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            },
            {
              title:"职位名称",
              type:"职位类别",
              city:"成都",
              date:"2018-08-08",
              describe:"岗位职责：\r\n1. 负责注定Android客户端架构设计；\r\n2. 负责注定Android客户端核心模块的开发，实现性能优化；"
            }
          ]
        }
      ]
    }
  },
  mounted(){
   
  },
  methods:{
    openHide:function(index){
      console.log(index)
      if(this.openItem == index){
        this.openItem = null;
      }else{
        this.openItem = index;
      }
      
    },
    changeIndex:function(index){
      this.showIndex=index;
      this.openItem = null;
      this.showList = this.zplist[index].list;
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
.nav-bar-bg{
  height: 144px;
  background: -webkit-linear-gradient(left, #dd5789 , #658def); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #dd5789, #658def); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #dd5789, #658def); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #dd5789 , #658def); /* 标准的语法 */
}
.view-1200{
    box-sizing: border-box;
    margin: 50px auto 0 auto;
    background-color: #fff;
}
.h-txt{
  text-align: center;
  padding: 70px 0 100px 0;
  font-size: 24px;
  color: #000;
  line-height: 1;
  font-weight: bold;
}
.zp-list{
  box-sizing: border-box;
  padding: 0 50px 50px;
}
.zp-tabs{
  height: 60px;
  margin-bottom: 30px;
}
.zp-tab{
  width: 120px;
  line-height: 60px;
  text-align: center;
  font-size: 12px;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-left: -1px;
  cursor: pointer;
  &:first-child{
    margin-left: 0;
    width: 121px;
  }
  &.active{
    color: #fff;
    border: 1px solid #007cff;
    background-color: #007cff;
  }
}
.table{
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 10px 15px;
  &::after{
    content: '';
    display: block;
    clear: both;
  }
  .rows{
    min-height: 44px;
    border-bottom:1px solid #ccc;
    line-height: 44px;
    cursor: pointer;
    &:last-child{
      border-bottom: none;
    }
  }
}
.col-1{
  float: left;
  width: 10%;
}
.col-5{
  float: left;
  width: 50%;
}
.table-head{
  font-weight: 600;
  font-size: 18px;
}
.c80{
  color: #8a8a8a
}
.bg-jt{
  position: relative;
  height: 44px;
}
.jt-img{
  position: absolute;
  width: 10px;
  height: 6px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.table-hidder{
  display: none;
}
.open .jt-img{
  transform: rotate(180deg);
}
.open .table-hidder{
  display: block;
  float: left;
  width: 100%;
  background-color: #f0f1f6;
  color: #007cff;
  box-sizing: border-box;
  padding: 10px;
}
</style>