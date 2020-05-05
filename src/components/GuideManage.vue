<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newCata()">新建分类指南</Button>
    </div>
    <div class="cata-list">
      <Table border :columns="columns" :data="guideList"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="垃圾名称">
          <Input v-model="formLeft.classificationguideinfoName"></Input>
        </FormItem>
         <FormItem label="垃圾类别">
          <Input v-model="formLeft.classificationguideinfoClassification"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('queryGuideList')
  },
  mounted(){
  },
  computed:{
      ...mapState(["guideList"])
  },
  data() {
    return {
      modal: false,
      modalTitle: "",
      editId:'',
      formLeft: {
        classificationguideinfoName: "",
        classificationguideinfoClassification: "",
      },
      columns: [
        {
          title: "垃圾名称",
          key: "classificationguideinfoName",
          align: "center"
        },
        {
          title: "垃圾类别",
          key: "classificationguideinfoClassification",
          align: "center"
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
                      this.deleteConfirm(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
    };
  },
  methods: {
    newCata() {
      this.modal = true;
      this.modalTitle = "新建分类指南";
    },
    editCata(row) {
      this.modal = true;
      this.modalTitle = "编辑分类指南";
      this.editId = row.classificationguideinfoId;
      this.formLeft.classificationguideinfoName = row.classificationguideinfoName;
      this.formLeft.classificationguideinfoClassification = row.classificationguideinfoClassification;
    },
    handleForm() {
      const param = {
        classificationguideinfoName:this.formLeft.classificationguideinfoName,
        classificationguideinfoClassification:this.formLeft.classificationguideinfoClassification,
      }
      if( this.modalTitle === "新建分类指南"){
        this.$store.dispatch("addGuide",{param:param,that:this})
      }else{
        this.$store.dispatch("editGuide",{param:param,id:this.editId,that:this})
      }
      
    },
    cancel() {},
    deleteConfirm(row) {
      const id = row.classificationguideinfoId
      this.$Modal.confirm({
        title: "你确定删除该条信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteGuide",{id:id,that:this});
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    },
  }
};
</script>

<style scoped>
.cata-manage {
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: scroll;
}
.new-btn {
  padding: 40px 40px;
  text-align: left;
}
.cata-list {
  padding: 10px 40px;
}
</style>