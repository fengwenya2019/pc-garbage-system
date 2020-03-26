<template>
  <div class="cata-manage">
    <div class="new-btn">
      <Button type="info" @click="newCata()">新建类别</Button>
    </div>
    <div class="cata-list">
      <Table border :columns="columns" :data="cataList"></Table>
    </div>
    <Modal v-model="modal" :title="modalTitle" @on-ok="ok(editCataType.classificationinfoId)" @on-cancel="cancel">
      <Form :model="editCataType" label-position="left" :label-width="100">
        <FormItem label="序号">
          <Input v-model="editCataType.classificationinfoId"></Input>
        </FormItem>
        <FormItem label="类别">
          <Input v-model="editCataType.classificationinfoName"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}" v-model="editCataType.classificationinfoDescription"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  mounted() {
    this.$store.dispatch('queryCata')
  },
  computed:{
      ...mapState(["cataList"])
  },
  data() {
    return {
      modal: false,
      modalTitle: "",
      tip: "",
      editCataType: {
        classificationinfoId: "",
        classificationinfoName: "",
        classificationinfoDescription: ""
      },
      columns: [
        {
          title: "序号",
          key: "classificationinfoId",
          width: 100,
          align: "center"
        },
        {
          title: "类别",
          key: "classificationinfoName",
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
    };
  },
  methods: {
    newCata() {
      this.modal = true;
      this.modalTitle = "新建类别";
    },
    editCata(cata) {
      this.modal = true;
      this.modalTitle = "编辑类别";
      this.editCataType = cata;
    },
    ok(id) {
      // this.$Message.info("新建成功");
      // console.log(this.editCataType)
      // const params = JSON.stringify(this.editCataType)
      if( this.modalTitle = "新建类别"){
        this.$store.dispatch("addCata",this.editCataType)
      }{
        const params = this.editCataType
        params.classificationinfoId = id+''
        console.log(toString(id))
        this.$store.dispatch("editCata",params)
      }
      
    },
    cancel() {}
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
.cata-list {
  padding: 10px 40px;
}
</style>