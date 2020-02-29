<template>
    <div>
        学生列表：
        <!-- {{$store.state.name}} -->
        <ul>
            <li v-for="(item,index) in addList" :key="index">{{item}}</li>
            <!-- <li v-for="(item,index) in newStudent" :key="index">{{item}}</li> -->
        </ul>
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
    // props:['add-list'],
    data(){
        return {
            // addList:[]
        }
    },
    created(){
        
        // this.bus.$on('add', name =>{
        //     this.addList.push(name);
        // })
    },
    computed:{
        ...mapState('student',['addList']),

        // newStudent(){
        //     return this.$store.getters.newStudent
        // }
        
        // ...mapGetters(['newStudent'])

        ...mapGetters('student',{
            newStudent:'newStudent'
        })

    }
}
</script>
<style scoped>

</style>