<template>
  <div class="login">
    <div class="bg">
      <img src="../assets/bg2.gif" alt="bg" />
    </div>
    <div class="form-box">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form class="form" :label-width="60">
            <FormItem label="手机号">
              <Input required placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="密码">
              <Input required placeholder="请输入密码"></Input>
            </FormItem>
            <router-link to="/home">
              <Button class="btn login-btn" type="primary">登录</Button>
            </router-link>
          </Form>
        </TabPane>
        <TabPane label="注册" name="register">
          <Form class="form" :label-width="70">
            <FormItem label="手机号">
              <Input required placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="密码">
              <Input required placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="确认密码">
              <Input required placeholder="再次输入密码"></Input>
            </FormItem>
            <FormItem label="验证码">
              <Input required placeholder="请输入验证码">
                <div>获取验证码</div>
              </Input>
            </FormItem>
            <router-link to="/home">
              <Button class="btn login-btn" type="primary">注册</Button>
            </router-link>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.login {
  /* display: flex; */
  position: relative;
}
.bg {
  width: 600px;
  height: 340px;
  position: absolute;
  top: 150px;
  left: 150px;
  display: flex;
}
.form-box {
  width: 400px;
  height: 420px;
  position: absolute;
  top: 120px;
  right: 150px;
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
