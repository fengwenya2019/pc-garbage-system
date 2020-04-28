<template>
  <div class="location-manage">
    <div class="new-btn">
      <Button type="info" @click="newLocation()">新建地点位置</Button>
    </div>
    <div class="location-list">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="editLocation" label-position="left" :label-width="100">
        <FormItem label="校区">
          <Input v-model="editLocation.cap"></Input>
        </FormItem>
        <FormItem label="投放站点">
          <Input v-model="editLocation.site"></Input>
        </FormItem>
        <FormItem label="具体位置">
          <Input v-model="editLocation.location"></Input>
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
      editLocation: {
        cap: "",
        site: "",
        location: ""
      },
      columns: [
        {
          title: "校区",
          key: "cap",
          align: "center"
        },
        {
          title: "投放站点",
          key: "site",
          align: "center"
        },
        {
          title: "具体位置",
          key: "location",
          align: "center"
        },
        {
          title: "操作",
          key: "operation",
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
                      this.editCata(params.row);
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
                      this.deleteLocation();
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
          cap: "龙子湖",
          site: "1号宿舍楼楼",
          location: "1号楼西门左拐20米"
        },
        {
          cap: "龙子湖",
          site: "20号教学楼",
          location: "20号教学楼一楼"
        },
        {
          cap: "龙子湖",
          site: "新餐厅",
          location: "新餐厅1楼南出口"
        },
        {
          cap: "龙子湖",
          site: "第一报告厅",
          location: "第一报告厅东门"
        }
      ]
    };
  },
  methods: {
    newLocation() {
      this.modal = true;
      this.modalTitle = "新建位置";
    },
    editCata(loca) {
      this.modal = true;
      this.modalTitle = "编辑位置";
      this.editLocation.cap = loca.cap;
      this.editLocation.site = loca.site;
      this.editLocation.location = loca.location;
    },
    handleForm() {
      if (this.modalTitle === "新建位置") {
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
      this.editLocation.cap = "";
      this.editLocation.site = "";
      this.editLocation.location = "";
    },
    deleteLocation() {
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
.location-manage {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
.new-btn {
  padding: 40px 40px;
  text-align: left;
}
.location-list {
  padding: 10px 40px;
}
</style>