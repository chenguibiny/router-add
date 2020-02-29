export default {
    namespaced:true,
    state:{
      addList:[],
    },
    getters:{
      newStudent(state,getters){
        return state.addList.map((item,index) =>{
          if(index == 0){
            return "**" + item ;
          }else if(index < 3){
            return item + '**'
          }else{
            return "++" + item + "++"
          }
        })
      },
      a(){
        return 123;
      }
    },
    mutations:{
      changeStudent(state,name){
        state.addList.push(name);
      }
    }
  
  }