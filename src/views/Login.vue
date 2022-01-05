<template>
  <div>
    <el-container>
      <el-header>
        <img class="mlogo" src="../assets/logo.png" alt="logo图片" />
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户姓名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data () {
    return {
      ruleForm: {
        username: 'markerhub',
        password: '111111'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }

        ],
        password: [
          { required: true, message: '请选择密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$axios.post("http://localhost:8081/login",this.ruleForm).then(res =>{
            console.log(res)
            const jwt = res.headers['authorization'];
            const userInfo = res.data.data
            //存储(共享)全局变量jwt和userInfo
            this.$store.commit("SET_TOKEN", jwt);
            this.$store.commit("SET_USERINFO", userInfo);
            this.$router.push("/blogs")
            //获取token和getUser
            //console.log(this.$store.getters.getToken)
            //console.log(this.$store.getters.getUser) 
        })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
.mlogo {
  height: 80%;
}

.demo-ruleForm {
  max-width: 500px;
  margin: 0 auto;
}
</style>
