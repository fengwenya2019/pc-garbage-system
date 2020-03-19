<template>
  <div class="about">
    <header class="header">大学校园垃圾分类管理系统</header>
    <div class="main">
      <div class="nav">
        <ul class="nav-ul">
          <li>
            <p class="nav-li-title">分类指南管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">投放站点管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />投放站点
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />投放站点
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">垃圾数量统计</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">绿色日报管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
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
export default {};
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
  font-size: 14px;
  line-height: 40px;
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
