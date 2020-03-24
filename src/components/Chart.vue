<template>
  <div class="chart-manage">
    <div class="search-box">
      <div>
        按类别查询：
        <Select style="width:200px" @on-change="cataQuery" label-in-value="true">
          <Option v-for="item in cataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        按年份查询：
        <Select style="width:200px">
          <Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        按月份查询：
        <Select style="width:200px">
          <Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        按日期查询：
        <Select style="width:200px">
          <Option v-for="item in dayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
    </div>
    <div class="chart-list">
      <Table border :columns="columns" :data="data" ref="table"></Table>
    </div>
    <div>
      <Button type="info" @click="createChart()">生成图表</Button>
    </div>
    <div class="echarts-box">
      <div class="echarts" id="myChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: "",
      cataList: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "厨余垃圾"
        },
        {
          value: 2,
          label: "有害垃圾"
        },
        {
          value: 3,
          label: "可回收物"
        },
        {
          value: 4,
          label: "其他垃圾"
        }
      ],
      yearList: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "2019年"
        },
        {
          value: 2,
          label: "2020年"
        },
        {
          value: 3,
          label: "2021年"
        }
      ],
      monthList: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "1月"
        },
        {
          value: 2,
          label: "2月"
        },
        {
          value: 3,
          label: "3月"
        }
      ],
      dayList: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "1日"
        },
        {
          value: 2,
          label: "2日"
        },
        {
          value: 3,
          label: "3日"
        }
      ],
      editRec: {
        index: "",
        cata: "",
        output: ""
      },
      columns: [
        {
          title: "序号",
          key: "index",
          width: 100,
          align: "center"
        },
        {
          title: "时间",
          key: "time",
          align: "center"
        },
        {
          title: "年份",
          key: "year",
          align: "center",
          filters: [
            {
              label: "2020年",
              value: "2020年"
            },
            {
              label: "2019年",
              value: "2019年"
            }
          ],
          filterMethod(value, row) {
            return row.year.indexOf(value) > -1;
          }
        },
        {
          title: "月份",
          key: "month",
          align: "center"
        },
        {
          title: "日期",
          key: "day",
          // width: 200,
          align: "center"
        },
        {
          title: "类别",
          key: "cata",
          width: 200,
          align: "center",
          filterMethod(value, row) {
            return row.cata.indexOf(value) > -1;
          }
        },
        {
          title: "产量(单位：t)",
          key: "output",
          align: "left",
          align: "center",
          width: 200
        }
      ],
      data: [
        {
          index: 1,
          time: "2019年1月1日",
          year: "2019年",
          month: "1月",
          day: "1日",
          cata: "厨余垃圾",
          output: 1.2
        },
        {
          index: 2,
          time: "2020年2月2日",
          year: "2020年",
          month: "2月",
          day: "2日",
          cata: "其他垃圾",
          output: 1.2
        },
        {
          index: 3,
          time: "2020年1月1日",
          year: "2020年",
          month: "1月",
          day: "1日",
          cata: "有害垃圾",
          output: 10.1
        },
        {
          index: 4,
          time: "2019年1月2日",
          year: "2019年",
          month: "1月",
          day: "2日",
          cata: "厨余垃圾",
          output: 2.2
        },
        {
          index: 5,
          time: "2020年1月1日",
          year: "2020年",
          month: "1月",
          day: "1日",
          cata: "其他垃圾",
          output: 1.4
        }
      ]
    };
  },
  mounted() {},
  methods: {
    createChart() {
      console.log(this.$refs.table.data);
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "垃圾产量/年" },
        tooltip: {},
        xAxis: {
          data: ["厨余垃圾", "有害垃圾", "可回收物", "其他垃圾"]
        },
        yAxis: {},
        series: [
          {
            name: "产量",
            type: "bar",
            data: [
              { name: "厨余垃圾", value: 22 },
              { name: "有害垃圾", value: 10 },
              { name: "可回收物", value: 60 },
              { name: "其他垃圾", value: 20 }
            ]
          }
        ]
      });
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
