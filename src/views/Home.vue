<template>
  <div class="about">
    <header class="header">大学校园垃圾分类管理系统</header>
    <div class="main">
      <div class="nav">
        <ul class="nav-ul">
          <li>
            <p class="nav-li-title">分类指南管理</p>
            <router-link to="/catamanage">
              <p class="nav-li" :class="{active:isActive===1}" @click="handleClick(1)">
                <Icon type="ios-options" />垃圾类别
              </p>
            </router-link>
            <router-link to="/guidemanage">
              <p class="nav-li" :class="{active:isActive===2}" @click="handleClick(2)">
                <Icon type="ios-git-network" />分类指南
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">投放站点管理</p>
            <router-link to="/locationmanage">
              <p class="nav-li" :class="{active:isActive===3}" @click="handleClick(3)">
                <Icon type="ios-pin-outline" />地点位置
              </p>
            </router-link>
            <router-link to="/sitemanage">
              <p class="nav-li" :class="{active:isActive===4}" @click="handleClick(4)">
                <Icon type="ios-locate-outline" />投放站点
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">垃圾数量统计</p>
            <router-link to="/quasta">
              <p class="nav-li" :class="{active:isActive===5}" @click="handleClick(5)">
                <Icon type="ios-list-box-outline" />记录数据
              </p>
            </router-link>
            <router-link to="/chart">
              <p class="nav-li" :class="{active:isActive===6}" @click="handleClick(6)">
                <Icon type="ios-podium-outline" />查看图表
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">绿色日报管理</p>
            <router-link to="/publish">
              <p class="nav-li" :class="{active:isActive===7}" @click="handleClick(7)">
                <Icon type="ios-pricetag-outline" />发布日报
              </p>
            </router-link>
            <router-link to="/">
              <p class="nav-li" :class="{active:isActive===8}" @click="handleClick(8)">
                <Icon type="md-time" />历史记录
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: null
    };
  },
  methods: {
    handleClick(index) {
      console.log(index);
      this.isActive = index;
    },
    handleMouseEnter(index) {
      this.isActive = index;
    },
    handleMouseLeave() {
      this.isActive = null;
    }
  }
};
</script>

<style scoped>
.header {
  height: 100px;
  font-size: 42px;
  line-height: 100px;
  /* background-color: #2d8cf0; */
  background-image: linear-gradient(to right, #2db7f5 0, #2d8cf0 100%);
  font-family: "PingFang SC";
  color: white;
}
.main {
  display: flex;
}

.nav {
  min-width: 240px;
  /* height: calc(100vh - 100px); */
  padding-top: 20px;
  border-right: solid 1px #ccc;
}
.nav-ul {
  margin: 0;
  padding: 0;
}
.nav-ul li {
  padding: 5px 0;
  border-bottom: solid 1px #eee;
}
.nav-ul .nav-li-title {
  padding: 0 30px;
  text-align: left;
  color: #000000;
}
.nav-ul li p {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.nav-li {
  font-size: 14px;
}
.active {
  background-color: #2db7f5;
  color: #fff;
  font-size: 16px;
}
.container {
  width: 100%;
  min-height: 600px;
  /* background-color: #2b85e4; */
  /* opacity: 0.2; */
}
.ivu-menu-vertical .ivu-menu-submenu-title {
  display: flex;
}
</style>
