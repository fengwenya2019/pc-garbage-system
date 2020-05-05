<template>
  <div class="page-publish">
    <div class="form-box">
      <h1>发布报告</h1>
      <Form :model="report" label-position="left" :label-width="100">
        <!-- <FormItem label="发布时间">
          <Input v-model="report.greendailyinfoUploadtime"></Input>
        </FormItem> -->
        <FormItem label="报告类型">
          <Input v-model="report.greendailyinfoDescription"></Input>
        </FormItem>
        <FormItem label="报告题目">
          <Input v-model="report.greendailyinfoTitle"></Input>
        </FormItem>
        <FormItem label="报告内容">
          <Input type="textarea" rows="10" v-model="report.greendailyinfoText"></Input>
        </FormItem>
        <FormItem label="发布人">
          <Input v-model="report.greendailyinfoAuthor"></Input>
        </FormItem>
        <Button type="primary" @click="publish()">发布</Button>
      </Form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      report: {
        // greendailyinfoUploadtime: "",
        greendailyinfoDescription: "",
        greendailyinfoTitle: "",
        greendailyinfoText: "",
        greendailyinfoAuthor: ""
      }
    };
  },
  methods: {
    publish() {
      const param = {
        greendailyinfoDescription: this.report.greendailyinfoDescription,
        greendailyinfoTitle: this.report.greendailyinfoTitle,
        greendailyinfoText: this.report.greendailyinfoText,
        greendailyinfoAuthor: this.report.greendailyinfoAuthor
      }
      // this.$store.dispatch("addReport",{param:param,that:this});
      const base = "/laji"
        axios.post(base + "/laji/green/add",{
            'greendailyinfoDescription': param.greendailyinfoDescription,
            'greendailyinfoTitle': param.greendailyinfoTitle,
            'greendailyinfoText': param.greendailyinfoText,
            'greendailyinfoAuthor': param.greendailyinfoAuthor,
        }).then((res) => {
            if(res.data.code === 100){
                this.$Message.success('发布成功');
                this.report = {}
                this.$router.push({
                  path: "/home/history"
                });
                this.$store.dispatch('queryReportList')
            }else{
                this.$Message.success('发布失败');
            }
        }).catch((err) => {
            this.$Message.success('网络错误');
        })
    }
  }
};
</script>

<style scoped>
.page-publish {
  width: 100%;
  height: 100%;
  padding: 40px;
}
.form-box {
  width: 800px;
  height: 600px;
  /* background-color: red; */
  padding: 20px 40px;
}

.form-box h1 {
  margin-bottom: 20px;
}
</style>