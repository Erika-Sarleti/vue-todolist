/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) 
*/




const app = new Vue({
    el: '#app' ,
    data: {
        newTodo:'',
        todoList: [
            {
                text:'Fare l\'esercizio',
                done: false,
            },
            {
                text:'lavare i piatti',
                done:false,
            },
            {
                text:'fare la spesa',
                done:false,
            },
        ]

    },
    methods: {
        deleteTodo(index){
            this.todoList.splice(index, 1);
        },
        addTodo(){
            if (this.newTodo.trim() != '') {
                this.todoList.push({
                    text: this.newTodo,
                    done:false,
                });
                this.newTodo='';
            }
        },
        toggleItem(element){
            if (element.done == true){
                element.done = false;
            }else{
                element.done = true;
            }
        }
    }
})