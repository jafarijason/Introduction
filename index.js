var app = new Vue({
    el: '#app',
    data: {
        message: 'Heloo jason'
    }
});
app.message = "salam"


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

app2.message = 'some new message'



var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

app3.seen = false;
app3.seen = true;