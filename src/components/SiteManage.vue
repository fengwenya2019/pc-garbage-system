<template>
  <div class="site-manage">
    <div class="new-btn">
      <Button type="info" @click="newSite()">新建站点</Button>
    </div>
    <div class="site-list">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="editSite" label-position="left" :label-width="100">
        <FormItem label="投放站点">
          <Input v-model="editSite.site"></Input>
        </FormItem>
        <FormItem label="具体位置">
          <Input v-model="editSite.location"></Input>
        </FormItem>
        <FormItem label="开放时间">
          <Input v-model="editSite.opentime"></Input>
        </FormItem>
        <FormItem label="垃圾桶类别">
          <Input v-model="editSite.bucketcata"></Input>
        </FormItem>
        <FormItem label="垃圾桶数量">
          <Input v-model="editSite.bucketnum"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" v-model="editSite.detail"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      modalTitle: "",
      tip: "",
      editSite: {
        site: "",
        location: "",
        opentime: "",
        bucketcata: "",
        bucketnum: "",
        detail: ""
      },
      columns: [
        {
          title: "投放站点",
          width: 120,
          key: "site",
          align: "center"
        },
        {
          title: "具体位置",
          width: 160,
          key: "location",
          align: "center"
        },
        {
          title: "开放时间",
          width: 120,
          key: "opentime",
          align: "center"
        },
        {
          title: "垃圾桶类别",
          key: "bucketcata",
          align: "center"
        },
        {
          title: "垃圾桶数量",
          width: 110,
          key: "bucketnum",
          align: "center"
        },
        {
          title: "描述",
          key: "detail",
          align: "left",
          render: (h, params) => {
            return h("div", params.row.detail);
          }
        },
        {
          title: "操作",
          key: "operation",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleEditSite(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.deleteSite();
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data: [
        {
          site: "1号宿舍楼",
          location: "1号楼西门左拐20米",
          opentime: "8:00-20:00",
          bucketcata: "可回收物、其他垃圾",
          bucketnum: "12",
          detail: "可回收物垃圾桶8个、其他垃圾垃圾桶4个"
        },
        {
          site: "2号宿舍楼",
          location: "南门",
          opentime: "8:00-20:00",
          bucketcata: "其他垃圾",
          bucketnum: "2",
          detail: "其他垃圾垃圾桶2个"
        },
        {
          site: "第一报告厅",
          location: "第一报告厅",
          opentime: "8:00-20:00",
          bucketcata: "可回收物",
          bucketnum: "2",
          detail: "可回收物垃圾桶2个"
        },
        {
          site: "餐厅",
          location: "1餐2楼东门",
          opentime: "8:00-20:00",
          bucketcata: "厨余垃圾",
          bucketnum: "10",
          detail: "厨余垃圾垃圾桶10个"
        },
        {
          site: "1号宿舍楼楼",
          location: "1号楼西门左拐20米",
          opentime: "8:00-20:00",
          bucketcata: "可回收物、其他垃圾",
          bucketnum: "12",
          detail: "可回收物垃圾桶8个、其他垃圾垃圾桶4个"
        },
        {
          site: "1号宿舍楼楼",
          location: "1号楼西门左拐20米",
          opentime: "8:00-20:00",
          bucketcata: "可回收物、其他垃圾",
          bucketnum: "12",
          detail: "可回收物垃圾桶8个、其他垃圾垃圾桶4个"
        }
      ]
    };
  },
  methods: {
    newSite() {
      this.modal = true;
      this.modalTitle = "新建站点";
    },
    handleEditSite(site) {
      this.modal = true;
      this.modalTitle = "编辑站点";
      this.editSite.site = site.site;
      this.editSite.location = site.location;
      this.editSite.opentime = site.opentime;
      this.editSite.bucketcata = site.bucketcata;
      this.editSite.bucketnum = site.bucketnum;
      this.editSite.detail = site.detail;
    },
    handleForm() {
      if (this.modalTitle === "新建站点") {
        this.$Message.info("新建成功");
      } else {
        this.$Message.info("编辑成功");
      }
      this.clearForm();
    },
    cancel() {
      this.clearForm();
    },
    // 清空表单
    clearForm() {
      his.editSite.site = "";
      this.editSite.location = "";
      this.editSite.opentime = "";
      this.editSite.bucketcata = "";
      this.editSite.bucketnum = "";
      this.editSite.detail = "";
    },
    deleteSite() {
      this.$Modal.confirm({
        title: "确定删除这条数据吗？",
        onOk: () => {
          // 发起删除数据的请求
          this.$Message.info("删除成功");
        },
        onCancel: () => {
          // this.$Message.info("取消删除");
        }
      });
    }
  }
};
</script>

<style scoped>
.site-manage {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
.new-btn {
  padding: 40px 40px;
  text-align: left;
}
.site-list {
  padding: 10px 40px;
}
</style>