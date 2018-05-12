Vue.component('testcomponent',{
    template : '<div v-on:mouseover="changname()" v-on:mouseout="originalname();"><h1>Custom Component created by <span id="name">{{name}}</span></h1></div>',
    data:function(){
        return{
            name:"Riya"
        }
    },
    methods:{
        changename:function(){
            this.name="Ben";
        },
        originalname:function(){
            this.name="Ria";
        }
    }



});
 var vm = new Vue({
    el: '#component_test'
 });
 var vm1 = new Vue({
    el: '#component_test1'
 });