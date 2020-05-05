<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newCata()">新建类别</Button>
    </div>
    <div class="cata-list">
      <Table border :columns="columns" :data="cataList"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="类别名称">
          <Input v-model="formLeft.classificationinfoName"></Input>
        </FormItem>
         <FormItem label="投放要求">
          <Input v-model="formLeft.catarequire"></Input>
        </FormItem>
        <FormItem label="投放举例">
          <Input v-model="formLeft.cataeg"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" v-model="formLeft.classificationinfoDescription"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('queryCataList')
  },
  mounted(){
  },
  computed:{
      ...mapState(["cataList"])
  },
  data() {
    return {
      modal: false,
      modalTitle: "",
      editId:'',
      formLeft: {
        classificationinfoName: "",
        catarequire: "",
        cataeg:"",
        classificationinfoDescription: "",
      },
      columns: [
        {
          title: "类别名称",
          key: "classificationinfoName",
          width: 100,
          align: "center"
        },
        {
          title: "投放要求",
          key: "catarequire",
          width: 100,
          align: "center"
        },
        {
          title: "投放举例",
          key: "cataeg",
          width: 100,
          align: "center"
        },
         {
          title: "描述",
          key: "classificationinfoDescription",
          align: "left",
          render: (h, params) => {
            return h("div", params.row.classificationinfoDescription);
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
      this.modalTitle = "新建类别";
    },
    editCata(row) {
      this.modal = true;
      this.modalTitle = "编辑类别";
      this.editId = row.classificationinfoId;
      this.formLeft.classificationinfoName = row.classificationinfoName;
      this.formLeft.catarequire = row.catarequire;
      this.formLeft.cataeg = row.cataeg;
      this.formLeft.classificationinfoDescription = row.classificationinfoDescription;
    },
    handleForm() {
      const param = {
        classificationinfoName:this.formLeft.classificationinfoName,
        catarequire:this.formLeft.catarequire,
        cataeg:this.formLeft.cataeg,
        classificationinfoDescription:this.formLeft.classificationinfoDescription,
      }
      if( this.modalTitle === "新建类别"){
        this.$store.dispatch("addCata",{param:param,that:this})
      }else{
        this.$store.dispatch("editCata",{param:param,id:this.editId,that:this})
      }
      
    },
    cancel() {},
    deleteConfirm(row) {
      const id = row.classificationinfoId
      this.$Modal.confirm({
        title: "你确定删除该条信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteCata",{id:id,that:this});
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