<template>
  <div class="chart-manage">
    <div class="search-box">
       <i-input v-model="searchWord" placeholder="请输入..." style="width: 300px"></i-input>
    </div>
    <div>
      <Button type="info" @click="createChart()">查看图表</Button>
    </div>
    <div class="echarts-box">
      <div class="echarts" id="myChart"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('queryCataList')
  },
  mounted(){
  },
  computed:{
      ...mapState(["cataList","quaList","chartList"])
  },
  data() {
    return {
      searchWord:'',
    };
  },
  mounted() {},
  methods: {
    createChart() {
      // this.$store.dispatch('queryQuaByMonth',{time:this.searchWord,that:this})
      const base = "/laji"
      axios.post(base + "/laji/qua/getAllquaByDate",{
        "date":this.searchWord,
      }).then((res) => {
        if(res.data.code === 100){
            // store.commit("setChartList", res.data.extend.res)
          let chartList = res.data.extend.res
          let xdata = []
          let cdata = []
          chartList.forEach((cata,index) => {
            xdata.push(cata.QualityInfo_classification)
            cdata.push({name:cata.QualityInfo_classification,value:cata.weight})
          });
          console.log(xdata,cdata)
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("myChart"));
          // 绘制图表
          myChart.setOption({
            title: { text: "垃圾产量/t" },
            tooltip: {},
            xAxis: {
              data: xdata
            },
            yAxis: {},
            series: [
              {
                name: "产量",
                type: "bar",
                data: cdata,
              }
            ]
          });
          }else{
              this.$Message.success('创建失败');
          }
        }).catch((err) => {
            this.$Message.success('网络错误');
        })



      
    },
    ok() {
      this.$Message.info("新建成功");
    },
    cancel() {},
    cataQuery(value) {
      console.log(value.label);
    }
  }
};
</script>

<style scoped>
.chart-manage {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
.search-box {
  width: 100%;
  height: 100px;
  padding: 40px 40px;
  display: flex;
  justify-content: space-around;
}
.chart-list {
  padding: 40px 40px;
}
.echarts-box {
  width: 100%;
  height: 500px;
  padding: 50px 100px 0 50px;
}
.echarts {
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>
