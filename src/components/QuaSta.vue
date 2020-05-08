<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newCata()">新建记录</Button>
    </div>
    <div class="cata-list">
      <Table border :columns="columns" :data="quaList"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="类别">
          <Input v-model="formLeft.qualityinfoClassification"></Input>
        </FormItem>
         <FormItem label="重量">
          <Input v-model="formLeft.qualityinfoWeight"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('queryQua')
  },
  mounted(){
  },
  computed:{
      ...mapState(["quaList"])
  },
  data() {
    return {
      modal: false,
      modalTitle: "",
      editId:'',
      formLeft: {
        qualityinfoClassification:"",
        qualityinfoWeight: "",
      },
      columns: [
        {
          title: "类别",
          key: "qualityinfoClassification",
          align: "center"
        },
        {
          title: "重量",
          key: "qualityinfoWeight",
          align: "center"
        },
         {
          title: "时间",
          key: "qualityinfoTime",
          align: "center",
          render: (h, params) => {
            return h("div", this.timeChange(params.row.qualityinfoTime));
          }
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
      this.modalTitle = "新建记录";
    },
    editCata(row) {
      this.modal = true;
      this.modalTitle = "编辑记录";
      this.editId = row.qualityinfoId;
      this.formLeft.qualityinfoClassification = row.qualityinfoClassification;
      this.formLeft.qualityinfoWeight = row.qualityinfoWeight;
    },
    handleForm() {
      const param = {
        qualityinfoClassification:this.formLeft.qualityinfoClassification,
        qualityinfoWeight:this.formLeft.qualityinfoWeight,
      }
      if( this.modalTitle === "新建记录"){
        this.$store.dispatch("addQua",{param:param,that:this})
      }else{
        this.$store.dispatch("editQua",{param:param,id:this.editId,that:this})
      }
      
    },
    cancel() {},
    deleteConfirm(row) {
      const id = row.qualityinfoId
      this.$Modal.confirm({
        title: "你确定删除该条信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteQua",{id:id,that:this});
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    },
     // 时间转换
    timeChange(time){
      var now = new Date(time)
      var year=now.getFullYear(); 
      var month=now.getMonth()+1; 
      var date=now.getDate(); 
      return year+"年"+month+"月"+date+"日 " 
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