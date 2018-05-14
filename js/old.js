var a=new Vue({
    el:'#app',
    data:{
        age:""
    },
    methods:{
        show:function(){
            {{ age>60?'old':'Young' }}
        }
    }
    //filters:{
      //  age1:function(value){
        //    return value.age > 60 ? 'old' : 'Young';
        //}
    //}
});