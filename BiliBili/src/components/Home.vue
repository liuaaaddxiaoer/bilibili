<template>
  <div class="home_container">
    <div class="header_container">
      <img src="../assets/images/logo.png" alt="">
      <div class="rightItems_container">
        <i></i>
        <b></b>
        <button>下载App</button>
      </div>
      <div class="nav_container">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  @import '../css/common.less';
  .home_container {
    .flex;
    flex-direction: column;
    .header_container {
      .flex;
      padding-left: 0.77867rem;
      padding-right: .512rem;
      justify-content: space-between;
      align-items: center;
      flex-basis: 2.2rem;
      background-color: #fff;
      img {
        width: 2.64533rem;
        height: 1.1744rem;
      }
      .rightItems_container {
        .flex;
        button {
          font-size: .55467rem;
          background-color: @mainColor;
          line-height: .1.06667rem;
          color: #fff;
          padding: .3rem .7rem;
          border-radius: 8px;
          border: none;
        }
        b,i {
          width: 1.024rem;
          height: 1.024rem;
          background: url('../assets/images/noface.gif') no-repeat;
          background-size: 100% 100%;
          border-radius: 50%;
          margin-right: 1rem;
        }
      }
    }
  }
</style>
