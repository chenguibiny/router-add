<template>
    <div>
        问题:{{question}}
    </div>
</template>
<script>
export default {
    created(){
        const questionId = this.$route.params.id;
        // console.log(questionId);
        const index = this.questionList.findIndex( item => item.questionId == questionId);
        // console.log(index);
        if(index == -1){
            //跳转 a->b->c
            // this.$router.go(-1);
            
            //repalce 替换 [a,b,c,d]; repalce之后  把d换成e [a,b,c,e], 回退之后到了c页面
            this.$router.replace('/err.html');

            // push[a,b,c,d] push e ,[a,b,c,d,e] 回退之后到了d页面
            // this.$router.push({name:'err'});
        }else{
        this.question = this.questionList[index].title;
        }
    },
    data(){
        return {
            question:'',
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>