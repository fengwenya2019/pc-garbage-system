<template>
  <div class="page-publish">
    <div class="form-box">
      <h1>发布报告</h1>
      <Form :model="report" label-position="left" :label-width="100">
        <FormItem label="发布时间">
          <Input v-model="report.reportTime"></Input>
        </FormItem>
        <FormItem label="报告类型">
          <Input v-model="report.reportType"></Input>
        </FormItem>
        <FormItem label="报告题目">
          <Input v-model="report.reportTitle"></Input>
        </FormItem>
        <FormItem label="报告内容">
          <Input type="textarea" rows="10" v-model="report.reportContent"></Input>
        </FormItem>
        <FormItem label="发布人">
          <Input v-model="report.reporter"></Input>
        </FormItem>
        <Button type="primary" @click="publish()">发布</Button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      report: {
        reportTime: "",
        reportType: "",
        reportTitle: "",
        reportContent: "",
        reporter: ""
      }
    };
  },
  methods: {
    publish() {
      this.$Message.info("发布成功");
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