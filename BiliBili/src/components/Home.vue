<template>
  <div class="home_container">
    <div class="header_container">
      <img src="../assets/images/logo.png" alt="">
      <div class="rightItems_container">
        <i></i>
        <b></b>
        <button>下载App</button>
      </div>
    </div>
    <div class="nav_container">
        <ul>
          <li v-for="(item,index) in nav_items" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
        <div class="switch_container"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      nav_items: []
    };
  },
  mounted() {
    this.nav_items = ["首页", "动画", "番剧", "国创", "音乐", "舞蹈", "科技","游戏","娱乐","鬼畜","电影","电视剧","纪录片","影视","时尚","生活","广告","直播","相簿"];
  }
};
</script>

<style scoped lang="less">
@import "../css/common.less";
.category_select {
  color: @mainColor;
  border-bottom: 0.08533rem solid @mainColor;
}
.home_container {
  .flex;
  flex-direction: column;
  .header_container {
    .flex;
    padding-left: 0.77867rem;
    padding-right: 0.512rem;
    padding-top: 0.27733rem;
    padding-bottom: 0.27733rem;
    justify-content: space-between;
    align-items: center;
    flex-basis: 1.32267rem;
    background-color: #fff;
    img {
      width: 2.64533rem;
      height: 1.1744rem;
    }
    .rightItems_container {
      .flex;
      align-items: center;
      button {
        font-size: 0.55467rem;
        background-color: @mainColor;
        color: #fff;
        padding: 0.3rem 0.7rem;
        border-radius: 8px;
        border: none;
      }
      b,
      i {
        width: 1.024rem;
        height: 1.024rem;
        background: url("../assets/images/noface.gif") no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        margin-right: 1rem;
      }
      i {
      }
    }
  }
  .nav_container {
    flex-basis: 1.87733rem;
    // background-color: red;
    .flex;
    position: relative;

    ul {
      .flex;
      overflow-x: scroll;
      overflow-y: hidden;
      background-color: #fff;
      width: 90%;
      align-items: center;
      padding-left: 1.024rem;
      white-space: nowrap;
      li {
        text-align: center;
        font-size: 0.59733rem;
        line-height: 1.28rem;
        margin-right: 1.49333rem;
        color: @homeGrayColor;
        span {
          width: 1.36533rem;
        }
      }
      li:first-child {
        .category_select;
      }
    }
    .switch_container {
      position: absolute;
      top: 0;
      width: 1.38667rem;
      height: 1.87733rem;
      right: 0.256rem;
      background: url("../assets/images/noface.gif") no-repeat center center;
      background-size: 1rem 1rem;
      background-color: #fff;
    }
  }
}
</style>
