<template lang="html">
  <div class="Index">
    <nav class="nav has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            Kanban Board
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <span class="nav-item">
            <a class="button is-primary is-outlined">
              Add new Project
            </a>
          </span>
        </div>
      </div>
    </nav>

    <div class="section">
        <div class="boards">
          <div class="columns">
            <div class="column is-3 board">
              <div class="box is-gray">
                <div class="head">
                  <div class="name is-pink">Backlog</div>
                  <div class="count">1</div>
                </div>

                <div class="items"  v-for="todo in backlog">
                  <div class="box">
                    <p class="title">{{todo.title}}</p>
                    <p class="small">Point: {{todo.point}}</p>
                    <p class="small">Assigned to: {{todo.assign}}</p>
                    <div class="block">
                      <button class="button is-info is-small is-right" @click="details_modal = true">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
let app = firebase.initializeApp({
  // Initialize Firebase
  apiKey: 'AIzaSyDkz9v1ZRjT7pp-KW7eQ1eHb7uZTETI4Wg',
  authDomain: 'kanban-raynor.firebaseapp.com',
  databaseURL: 'https://kanban-raynor.firebaseio.com',
  projectId: 'kanban-raynor',
  storageBucket: 'kanban-raynor.appspot.com',
  messagingSenderId: '782078687973'
})

let db = app.database()
let todosRef = db.ref('todos')

export default {
  name: 'Index',
  details_modal: false,
  firebase: {
    todos: todosRef
  },
  computed: {
    backlog () {
      return this.todos.filter((todo) => todo.status === 1)
    }
  }
}
</script>

<style scoped>
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }

  .nav-item {
    color: #00d1b2;
    font-size: 1.2em;
  }

  .is-info {
    color: white;
  }

  .block {
    margin-top: 1em;
  }

  .is-info:hover {
    color: #3273dc;
    background-color: white;
    border-color: #3273dc;
  }

  .boards {
    padding:40px 0;
  }

  .boards .board .box.is-gray {
    background-color: #F5F5F5;
  }

  .boards .board .box .items {
    padding: 20px 0;
  }

  .box .head .is-pink {
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #ff3860;
  }

  .box .head .count {
    display: inline-block;
    padding-left: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #AAAAAA;
  }

  .box .head .options {
    display: inline-block;
    float: right;
    padding-top:7px;
    color: #CCCCCC;
  }

  .items .box .title {
    font-size: 1.6em;
  }

  .small {
    font-size: 0.9em;
  }

</style>
