const app = new Vue(
    {
        el: '#app',
        data:{
            newList: '',
            list: [
                
            ] 
        },
        methods: {
            addObligation(){
                this.list.push(this.newList);
                this.newList = '';
            },            
            removeObligation(index){
                this.list.splice(index,1);
            }            
        }

    }
);