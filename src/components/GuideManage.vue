<template>
  <div class="guide-manage">
    <div class="new-btn">
      <Button type="info" @click="newGuide()">新建分类指南</Button>
    </div>
    <div class="guide-list">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="editGarb" label-position="left" :label-width="100">
        <FormItem label="垃圾名称">
          <Input v-model="editGarb.garbagename"></Input>
        </FormItem>
        <FormItem label="类别">
          <Input v-model="editGarb.cataname"></Input>
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
      editGarb: {
        garbagename: "",
        cataname: ""
      },
      columns: [
        {
          title: "垃圾名称",
          key: "garbagename",
          align: "center"
        },
        {
          title: "垃圾类别",
          key: "cataname",
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
                      this.deleteGuide();
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
          garbagename: "香蕉皮",
          cataname: "厨余垃圾"
        },
        {
          garbagename: "腐烂苹果",
          cataname: "厨余垃圾"
        },
        {
          garbagename: "塑料盒",
          cataname: "可回收物"
        },
        {
          garbagename: "碗",
          cataname: "其他垃圾"
        }
      ]
    };
  },
  methods: {
    newGuide() {
      this.modal = true;
      this.modalTitle = "新建分类指南";
    },
    editCata(garb) {
      this.modal = true;
      this.modalTitle = "编辑分类指南";
      this.editGarb.garbagename = garb.garbagename;
      this.editGarb.cataname = garb.cataname;
    },
    handleForm() {
      if (this.modalTitle === "新建分类指南") {
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
      this.editGarb.garbagename = "";
      this.editGarb.cataname = "";
    },
    deleteGuide() {
      this.$Modal.confirm({
        title: "确定删除这条数据吗？",
        // content: "<p>Content of dialog</p><p>Content of dialog</p>",
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
.guide-manage {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
.new-btn {
  padding: 40px 40px;
  text-align: left;
}
.guide-list {
  padding: 10px 40px;
}
</style>