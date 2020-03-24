<template>
  <div class="guide-manage">
    <div class="new-btn">
      <Button type="info" @click="newGuide()">新建分类指南</Button>
    </div>
    <div class="guide-list">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="ok" @on-cancel="cancel">
      <Form :model="editCataType" label-position="left" :label-width="100">
        <FormItem label="序号">
          <Input v-model="editCataType.index"></Input>
        </FormItem>
        <FormItem label="类别">
          <Input v-model="editCataType.cata"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" v-model="editCataType.detail"></Input>
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
      editCataType: {
        index: "",
        cata: "",
        detail: ""
      },
      columns: [
        {
          title: "序号",
          key: "index",
          width: 100,
          align: "center"
        },
        {
          title: "类别",
          key: "cata",
          width: 100,
          align: "center"
        },
        {
          title: "描述",
          key: "detail",
          // width: 100,
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
                      // this.remove(params.index);
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
          index: 1,
          cata: "厨余垃圾",
          detail: "厨余垃圾是……"
        },
        {
          index: 2,
          cata: "有害垃圾",
          detail: "有害垃圾是……"
        },
        {
          index: 3,
          cata: "可回收物",
          detail: "可回收物是……"
        },
        {
          index: 4,
          cata: "其他垃圾",
          detail: "其他垃圾是……"
        }
      ]
    };
  },
  methods: {
    newGuide() {
      this.modal = true;
      this.modalTitle = "新建分类指南";
    },
    editCata(cata) {
      this.modal = true;
      this.modalTitle = "编辑分类指南";
      this.editCataType = cata;
    },
    ok() {
      this.$Message.info("新建成功");
    },
    cancel() {}
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