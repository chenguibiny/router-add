<template>
    <div>
        添加学生：
        {{storeName}}-{{storeAge}}-{{storeSno}}-{{a}}
        <!-- {{name}}-{{age}}-{{sno}} -->
        <input type="text" v-model="name">
        <button @click = 'add'>确认添加</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            name:'',
            // storeName:this.$store.state.name
        }
    },
    computed:{
        
        ...mapState({
            storeName:state => state.name,
            storeAge:state => state.age,
            storeSno:state => state.sno
        }),
        a(){
            return 111
        }
    },
    //1
    // computed:{
    //     storeName(){
    //         return this.$store.state.name
    //     },
    //     storeAge(){
    //         return this.$store.state.age
    //     },
    //     storeSno(){
    //         return this.$store.state.sno
    //     }
    // },

//2
    // computed:mapState(['name','age','sno']),

//3
    // computed:mapState({
    //     storeName:state => state.name,
    //     storeAge:state => state.age,
    //     storeSno:state => state.sno
    // }),

    methods:{
        add(){
            // this.$emit('add',this.name)
            // this.$store.state.name = 'chenguibin +1';
            // this.$store.state.addList.push(this.name);
            this.$store.commit("student/changeStudent",this.name);
            
            // this.bus.$emit('add',this.name);
        }
    }
}
</script>
<style scoped>
    button{
        margin-left: 20px;
        line-height: 20px;
    }
</style>