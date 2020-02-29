<template>
    <div>
        <button @click="loginin">{{loginFlag ? '退出' : '登陆'}}</button>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            loginFlag:false
        }
    },
    created(){
        console.log(this.$route.matched[0].meta.login)
        this.loginFlag = this.$route.matched[0].meta.login;
    },
    methods:{
        loginin(){
            this.loginFlag = !this.loginFlag;
            this.$route.matched[0].meta.login = this.loginFlag;
            // console.log(this.loginFlag);
        }
    }
}
</script>
<style scoped>

</style>