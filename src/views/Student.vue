<template>
    <div>
        <!-- <add-student @add = 'addlist'></add-student>
        <student-list :add-list = "addList"></student-list> -->

        <add-student></add-student>
        <student-list></student-list>
    </div>
</template>
<script>
import StudentList from '@/components/student/StudentList.vue'
import AddStudent from '@/components/student/AddStudent.vue'
export default {
    components:{
        StudentList,
        AddStudent
    },
    // methods:{
    //     addlist(name){
    //         this.addList.push(name);
    //     }
    // },
    // data(){
    //     return {
    //         addList:[]
    //     }
    // }
}
</script>
<style scoped>

</style>