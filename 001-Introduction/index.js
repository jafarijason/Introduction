var app = new Vue({
    el: '#app',
    data: {
        message: 'Heloo jason'
    }
});
app.message = "salam"

//------
var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
app2.message = 'some new message'
///-----------
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})
app3.seen = false;
app3.seen = true;
//-------------
var app4 = new Vue({
    el: '#app4',
    data:{
        todos:[
            {text : 'Learn JavaScript'},
            {text : 'Learn Vue'},
            {text : 'Build something awesome'},
            
        ]
    }
})
app4.todos.push({text : 'New item'})
//---------------
var app5 = new Vue({
    el:'#app5',
    data :{
        message : 'My text!'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
//------
var app6 = new Vue({
    el:'#app6',
    data:{
        message : 'Hello Jason!'
    }
})
//-------------
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })
