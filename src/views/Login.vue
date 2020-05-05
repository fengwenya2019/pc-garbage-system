<template>
  <div class="login">
    <div class="bg">
      <img src="../assets/bg2.gif" alt="bg" />
    </div>
    <div class="form-box">
      <Form class="form" :label-width="60" :model="formData">
        <FormItem label="用户名">
          <Input required placeholder="请输入用户名" v-model="formData.user"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input required placeholder="请输入密码" v-model="formData.password"></Input>
        </FormItem>
          <Button class="btn login-btn" type="primary" @click="handleClick()">登录</Button>
      </Form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import axios from "axios"
export default {
  computed: {
  },
  data() {
    return {
      formData: {
        adminname: "",
        adminpwd: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    handleClick() {
      console.log(this.formData)
      // 发起登录请求
      axios.post("laji/admin/login",{ 
        'adminname':this.formData.adminname,
        'adminpwd':this.formData.adminpwd
      }).then((res)=>{
        this.$Message.success('登录成功');
        this.$router.push({
          //核心语句
          path: "/home" //跳转的路径
        });
      }).catch((err)=>{
          console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.login {
  /* display: flex; */
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bg {
  width: 600px;
  height: 340px;
  display: flex;
}
.form-box {
  width: 400px;
  height: 420px;
  border: solid 1px#2d8cf0;
  border-radius: 10px;
  padding: 40px 30px;
}
.form {
  margin-top: 10px;
}

.ivu-form {
  font-size: 16px;
}
.btn {
  width: 100%;
  display: block;
  margin: 40px auto;
}
.btn a {
  color: white;
}
</style>
