<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="data.ruleForm" status-icon :rules="rules" label-width="80px"
            class="demo-ruleForm">
            <h2>后台管理系统</h2>
            <el-form-item label="账号：" prop="username">
                <el-input v-model="data.ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="data.ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="submitForm(ruleFormRef)">登录
                </el-button>
                <el-button class="login-btn" @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { LoginData } from "@/models/userLogin.ts"
import type { FormInstance } from 'element-plus'
import {useLogin} from '@/store/login.ts'
const loginFn = useLogin()
const ruleFormRef = ref<FormInstance>()
const data = reactive(new LoginData())
const rules = {
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 10, message: '账号的长度在3-10之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码的长度在3-10之间', trigger: 'blur' },
    ],
}

const resetForm = () => {
    data.ruleForm.username = ''
    data.ruleForm.password = ''
}
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            console.log(valid + '登录成功');
            loginFn.isLogin = true
        } else {
            console.log('密码错误');
            loginFn.isLogin = false
        }
    })
}
</script>
  
<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/login-bg.jpeg");
    text-align: center;
    padding: 1px;

    .demo-ruleForm {
        width: 500px;
        margin: 200px auto;
        background: #ffffff;
        padding: 40px;
        border-radius: 5px;
    }

    .login-btn {
        width: 48%;
    }

    h2 {
        margin-bottom: 20px;
    }
}
</style>