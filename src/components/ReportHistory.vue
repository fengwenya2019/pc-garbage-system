<template>
  <div class="report-history">
    <div class="form-box">
      <h1>历史记录</h1>
      <ul>
        <li v-for="(report,index) in reportList" :key="index">
          <div class="report-time">2020年5月1日</div>
          <div class="report-list">
            <div class="report-title">
              校园日报
              <span class="report-type">通知</span>
            </div>
            <div
              class="report-content"
            >我校今日共产生垃圾1.2吨，其中可回收垃圾1吨，有害垃圾0.02吨，其他垃圾0.1吨，厨余垃圾0.08吨。我校今日共产生垃圾1.2吨，其中可回收垃圾1吨，有害垃圾0.02吨，其他垃圾0.1吨，厨余垃圾0.08吨。我校今日共产生垃圾1.2吨，其中可回收垃圾1吨，有害垃圾0.02吨，其他垃圾0.1吨，厨余垃圾0.08吨。</div>
            <div class="reporter">
              发布人：
              <span>校垃圾管理部门</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportList: [{}, {}, {}]
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.report-history {
  width: 100%;
  height: 100%;
  padding: 40px;
}
.form-box {
  width: 1100px;
  /* height: 600px; */
  padding: 20px 50px;
  height: 650px;
  overflow-y: scroll;
}
.form-box ul {
  list-style: none;
  margin: 20px auto;
}
.form-box ul li {
  margin-bottom: 20px;
}
.report-list {
  width: 1000px;
  height: 300px;
  border: solid 1px #000;
  border-radius: 20px;
  position: relative;
}
.report-time {
  text-align: left;
  padding: 6px 20px;
  font-size: 16px;
  color: rgb(89, 88, 88);
}
.report-title {
  padding: 10px 20px;
  color: #0c89f7;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
}
.report-title span {
  font-size: 25px;
  color: #000;
  padding: 2px;
  background-color: #e88dfa;
  border-radius: 5px;
}
.report-content {
  font-size: 20px;
  text-align: left;
  padding: 10px;
  text-indent: 40px;
}
.reporter {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>