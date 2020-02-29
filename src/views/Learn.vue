<template>
    <div>
        <course-list></course-list>
        <!-- <button class="button">修改课程</button> -->
        <router-link class="button" :to="{name:'changeCourse'}">修改课程</router-link>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import CourseList from '@/components/learn/CourseList'
export default {
    components:{
        CourseList
    }
}
</script>
<style scoped>
    .button{
        display: block;
        margin: 20px auto;
        width: 200px;
        line-height: 40px;
        background-color: black;
        color:#fff;
        text-align: center;
        cursor: pointer;
    }
</style>