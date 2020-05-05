<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newCata()">新建站点</Button>
    </div>
    <div class="cata-list">
      <Table border :columns="columns" :data="siteList"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="站点名称">
          <Input v-model="formLeft.locationinfoName"></Input>
        </FormItem>
         <FormItem label="详细位置">
          <Input v-model="formLeft.detail"></Input>
        </FormItem>
        <FormItem label="开放时间">
          <Input v-model="formLeft.opentime"></Input>
        </FormItem>
         <FormItem label="垃圾桶类别">
          <Input v-model="formLeft.bucketcata"></Input>
        </FormItem>
         <FormItem label="垃圾桶数量">
          <Input v-model="formLeft.bucketnum"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" v-model="formLeft.attention"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  created() {
    this.$store.dispatch('querySiteList')
  },
  mounted(){
  },
  computed:{
      ...mapState(["siteList"])
  },
  data() {
    return {
      modal: false,
      modalTitle: "",
      editId:'',
      formLeft: {
        locationinfoName: "",
        detail: "",
        opentime:"",
        bucketcata: "",
        bucketnum: "",
        attention: "",
      },
      columns: [
        {
          title: "站点名称",
          key: "locationinfoName",
         
          align: "center"
        },
        {
          title: "详细位置",
          key: "detail",
          align: "center"
        },
        {
          title: "开放时间",
          key: "opentime",
          align: "center"
        },
        {
          title: "垃圾桶类别",
          key: "bucketcata",
          align: "center",
          width: 150,
        },
        {
          title: "垃圾桶数量",
          key: "bucketnum",
          align: "center",
          width: 150,
        },
        {
          title: "描述",
          key: "attention",
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
      this.modalTitle = "新建站点";
    },
    editCata(row) {
      this.modal = true;
      this.modalTitle = "编辑站点信息";
      this.editId = row.locationinfoId;
      this.formLeft.locationinfoName = row.locationinfoName;
      this.formLeft.detail = row.detail;
      this.formLeft.opentime = row.opentime;
      this.formLeft.bucketcata = row.bucketcata;
      this.formLeft.bucketnum = row.bucketnum;
      this.formLeft.attention = row.attention;
    },
    handleForm() {
      const param = {
        locationinfoName:this.formLeft.locationinfoName,
        detail:this.formLeft.detail,
        opentime:this.formLeft.opentime,
        bucketcata:this.formLeft.bucketcata,
        bucketnum:this.formLeft.bucketnum,
        attention:this.formLeft.attention,
      }
      if( this.modalTitle === "新建站点"){
        this.$store.dispatch("addSite",{param:param,that:this})
         this.formLeft = {}
      }else{
        this.$store.dispatch("editSite",{param:param,id:this.editId,that:this})
         this.formLeft = {}
      }
    },
    cancel() {
      this.formLeft = {}
    },
    deleteConfirm(row) {
      const id = row.locationinfoId
      this.$Modal.confirm({
        title: "你确定删除该条信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteSite",{id:id,that:this});
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