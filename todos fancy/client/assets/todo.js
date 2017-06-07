console.log(window.localStorage);
console.log(window.localStorage.userid);

var app = new Vue({
  el: '#app',
  data: {
    todos : [],
    index : '',
    userid : window.localStorage.getItem('userid')
  },
  mounted() {
    axios.get("http://localhost:3000/todos")
    .then(response => {
      this.todos = response.data;
      console.log(JSON.stringify(this.todos));
    })
    .catch(err => console.log(err.message));
  },
  beforeCreate: function() {
    if(window.localStorage.getItem('token') === null) {
      alert('You must login first');
      window.location.href="index.html";
    }
  },
  created: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '1236662039780159',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });
      FB.getLoginStatus(function(response) {
        console.log(response);
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  computed: {
    pending() {
      return this.todos.filter(element => element.status == 'pending');
    },
    completed() {
      return this.todos.filter(element => element.status == 'completed');
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push({memo: todo, status: 'pending'});
    },
    removeTodo(todo) {
      let index = this.todos.findIndex(element => element.memo == todo.memo);
      this.todos.splice(index, 1);
    },
    getIndex(todo) {
      let index = this.todos.findIndex(element => element.memo == todo.memo);
      this.index = index;
    },
    updateTodo(index, newTodo) {
      this.todos[index].memo = newTodo;
    },
    changeStatus(todo, status) {
      let index = this.todos.findIndex(element => element.memo == todo);
      if (status == 'pending') {
        this.todos[index].status = 'completed';
      } else {
        this.todos[index].status = 'pending';
      }
    },
    logout() {
      let todos = this.todos;
      axios.delete("http://localhost:3000/todos", {})
      .then(response => console.log(response + "\nsuccess"))
      .catch(err => console.log(err.message));

      while(todos.length != 0) {
        axios.post("http://localhost:3000/todos", {
          userid: this.userid,
          memo:   todos[0].memo,
          status: todos[0].status
        })
        .then(response => console.log(response + "\nsuccess"))
        .catch(err => console.log(err.message));
        todos.shift();
      }

      FB.logout(function(response) {
        remove(response);
      });
    }

  }
});

function remove(response) {
  console.log(response);
  if (response.status !== 'connected') {
    alert('You are logout');
    window.localStorage.clear();
    window.location.href="index.html";
  }
}

// NAVBAR ANIMATION
$('.todo_select li').click(function () {
  var choose = $( this ).index() + 1;

  // add tag class
  $('.todo_select li').removeClass('active');
  $( this ).addClass('active');
  // add content class
  $('.todo_content div').removeClass('active');
  $( '.todo_content div:nth-child(' + choose + ')' ).addClass('active');
});

// TODO Pages ANIMATION
$('.info_btn').click(function() {
  $('.info_btn').removeClass('active');
  $('.info_init').addClass('active');
});

$('form .remove_input').click(function(){
  $('.todo_info').children().removeClass('active');
  $('.info_btn').addClass('active');
});

// SUBMIT FUNC.
$( "#create_form" ).submit(function( event ) {
  var todo_content = $( "#todo_input").val()

  if ( todo_content.length > 3 ) {
    $('#todo_input').val("");
    app.addTodo(todo_content)
    Record();
  } else {
    alert("from create: too less word! make it long > 3");
  }
  event.preventDefault();
});

$('.content_add .todo_tips').on('click', '.edit-btn', function() {
  $('.todo_info').children().removeClass('active');
  $('.info_update').addClass('active');
});

$( "#update_form" ).submit(function( event ) {
  var todo_content = $( "#todo_update").val()
  var index = app.index;
  event.preventDefault();
  if ( todo_content.length > 3 ) {
    app.updateTodo(index, todo_content);
    $('.todo_info').children().removeClass('active');
    $('.info_btn').addClass('active');
  } else {
    alert("from  update: too less word! make it long > 3");
  }
});

// MONITOR for # todo tips
function Record() {
  if($('.content_add .todo_tips ul li').size() === 0) {
    $('.info_btn').text('New thing todo?');
  } else {
    todo_done = $('.content_done .todo_tips ul li').size();
    todo_all = $('.content_add .todo_tips ul li').size();
    $('.info_btn').text( todo_done + '/' + todo_all);
  }
}

/**
* For the brave souls who get this far: You are the chosen ones,
* the valiant knights of programming who toil away, without rest,
* fixing our most awful code. To you, true saviors, kings of men,
* I say this: never gonna give you up, never gonna let you down,
* never gonna run around and desert you. Never gonna make you cry,
* never gonna say goodbye. Never gonna tell a lie and hurt you.
*/
