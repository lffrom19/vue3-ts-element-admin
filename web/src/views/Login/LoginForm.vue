<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="用户名" prop="email">
      <el-input
        v-model="loginUser.account"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin()"
        type="primary"
        class="submit-btn"
        >登录</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>
<script lang="ts">
import {login} from "@/api/login";
import { useRouter } from 'vue-router';
import md5 from 'js-md5'
export default   {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup(props:any,context:any){
    const router = useRouter();

    const handleLogin  = (e: Event)=> {
      let param = {
        account:props.loginUser.account,
        password:md5(props.loginUser.password)
      }
      login(param).then(res => {
        if(res.status === 200)router.push("/home")
      })
    }
    return{
      handleLogin
    }
  }
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  /*width: 100%;*/
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>