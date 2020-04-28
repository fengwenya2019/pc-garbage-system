<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newRecord()">添加记录</Button>
    </div>
    <div class="quasta-list">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <!-- 新建编辑modal框 -->
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm" @on-cancel="cancel">
      <Form :model="editRec" label-position="left" :label-width="100">
        <FormItem label="时间">
          <Input v-model="editRec.time"></Input>
        </FormItem>
        <FormItem label="类别">
          <Select v-model="editRec" :value="editRec.cata" style="width:390px">
            <Option v-for="item in cataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="垃圾产量">
          <Input v-model="editRec.output"></Input>
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
      cataList: [
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
      editRec: {
        time: "",
        cata: "",
        output: ""
      },
      columns: [
        {
          title: "时间",
          key: "time",
          // width: 200,
          align: "center"
        },
        {
          title: "类别",
          key: "cata",
          width: 200,
          align: "center",
          filters: [
            {
              label: "厨余垃圾",
              value: "厨余垃圾"
            },
            {
              label: "有害垃圾",
              value: "有害垃圾"
            },
            {
              label: "可回收物",
              value: "可回收物"
            },
            {
              label: "其他垃圾",
              value: "其他垃圾"
            }
          ],
          filterMethod(value, row) {
            return row.cata.indexOf(value) > -1;
          }
        },
        {
          title: "产量(单位：t)",
          key: "output",
          // width: 100,
          align: "left",
          // render: (h, params) => {
          //   return h("div", params.row.output);
          // },
          align: "center",
          width: 200
        },
        {
          title: "操作",
          key: "operation",
          width: 200,
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
                      this.editRecord(params.row);
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
                      this.deleteQua();
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
          time: "2020年1月1日",
          cata: "厨余垃圾",
          output: 1.2
        },
        {
          time: "2020年1月1日",
          cata: "其他垃圾",
          output: 1.2
        },
        {
          time: "2020年1月23日",
          cata: "有害垃圾",
          output: 10.1
        },
        {
          time: "2020年1月24日",
          cata: "厨余垃圾",
          output: 2.2
        },
        {
          time: "2020年1月25日",
          cata: "其他垃圾",
          output: 1.4
        }
      ]
    };
  },
  methods: {
    newRecord() {
      this.modal = true;
      this.modalTitle = "新建记录";
    },
    editRecord(record) {
      this.modal = true;
      this.modalTitle = "编辑记录";
      this.editRec.time = record.time;
      this.editRec.cata = record.cata;
      this.editRec.output = record.output;
    },
    handleForm() {
      if (this.modalTitle === "新建记录") {
        this.$Message.info("新建成功");
      } else {
        this.$Message.info("编辑成功");
      }
      this.clearForm();
    },
    cancel() {},
    deleteQua() {
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
.cata-manage {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
.new-btn {
  padding: 40px 40px;
  text-align: left;
}
.quasta-list {
  padding: 10px 40px;
}
</style>