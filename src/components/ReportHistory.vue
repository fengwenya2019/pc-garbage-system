<template>
  <div class="report-history">
    <div class="form-box">
      <h1>历史记录</h1>
      <ul>
        <li v-for="(report,index) in reportList" :key="index">
          <div class="report-time">{{timeChange(report.greendailyinfoUploadtime)}}</div>
          <div class="report-list-box">
            <div class="report-list">
              <div class="report-title">
                {{report.greendailyinfoTitle}}
                <span class="report-type">{{report.greendailyinfoDescription}}</span>
              </div>
              <div
                class="report-content"
              >
                {{report.greendailyinfoText}}
              </div>
              <div class="reporter">
                发布人：
                <span>{{report.greendailyinfoAuthor}}</span>
              </div>
            </div>
            <div class="deleteBtn">
              <i-button type="primary" @click="deleteReport(report.greendailyinfoId)">删除</i-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('queryReportList')
  },
  computed:{
      ...mapState(["reportList"])
  },
  data() {
    return {
    };
  },
  methods:{
    // 时间转换
    timeChange(time){
      var now = new Date(time)
      var year=now.getFullYear(); 
      var month=now.getMonth()+1; 
      var date=now.getDate(); 
      return year+"年"+month+"月"+date+"日 " 
    },
    deleteReport(id){
      this.$Modal.confirm({
        title: "你确定删除该条信息吗？",
        onOk: () => {
          // 删除日报
          this.$store.dispatch("deleteReport",{id:id,that:this});
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    }
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
}
.form-box {
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  height: 650px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-box ul {
  list-style: none;
  margin: 20px auto;
}
.form-box ul li {
  margin-bottom: 20px;
}
.report-list-box{
  display: flex;
}
.report-list {
  width: 1000px;
  height: 300px;
  border: solid 1px #000;
  border-radius: 20px;
  position: relative;
}
.deleteBtn{
  width: 80px;
  height: 300px;
  line-height: 300px;
  font-size: 20px;
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