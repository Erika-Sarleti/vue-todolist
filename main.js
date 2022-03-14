/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) 
*/




const app = new Vue({
    el: '#app' ,
    data: {
        newTodo:{
            text:'',
            done: false,
        },
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
            this.todoList.push(this.newTodo);
        }
    }
})