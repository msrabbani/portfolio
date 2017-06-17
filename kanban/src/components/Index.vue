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
            <a class="button is-primary is-outlined" @click="add_modal = true">
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
              <div class="box is-pink">
                <div class="head">
                  <div class="name is-pink">Backlog</div>
                  <div class="count">{{backlog.length}}</div>
                </div>

                <div class="items"  v-for="todo in backlog">
                  <div class="box">
                    <p class="title">{{todo.title}}</p>
                    <p class="small">Point: {{todo.point}}</p>
                    <p class="small">Assigned to: {{todo.assign}}</p>
                    <div class="block">
                      <button class="button is-info is-small is-right" @click="getDetail(todo, 'backlog')">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board">
              <div class="box is-yellow">
                <div class="head">
                  <div class="name is-yellow">Upcoming</div>
                  <div class="count">{{upcoming.length}}</div>
                </div>

                <div class="items"  v-for="todo in upcoming">
                  <div class="box">
                    <p class="title">{{todo.title}}</p>
                    <p class="small">Point: {{todo.point}}</p>
                    <p class="small">Assigned to: {{todo.assign}}</p>
                    <div class="block">
                      <button class="button is-info is-small is-right" @click="getDetail(todo, 'upcoming')">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board">
              <div class="box is-purple">
                <div class="head">
                  <div class="name is-purple">In Progress</div>
                  <div class="count">{{inProgress.length}}</div>
                </div>

                <div class="items"  v-for="todo in inProgress">
                  <div class="box">
                    <p class="title">{{todo.title}}</p>
                    <p class="small">Point: {{todo.point}}</p>
                    <p class="small">Assigned to: {{todo.assign}}</p>
                    <div class="block">
                      <button class="button is-info is-small is-right" @click="getDetail(todo, 'inprogress')">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board">
              <div class="box is-green">
                <div class="head">
                  <div class="name is-green">Complete</div>
                  <div class="count">{{complete.length}}</div>
                </div>

                <div class="items"  v-for="todo in complete">
                  <div class="box">
                    <p class="title">{{todo.title}}</p>
                    <p class="small">Point: {{todo.point}}</p>
                    <p class="small">Assigned to: {{todo.assign}}</p>
                    <div class="block">
                      <button class="button is-info is-small is-right" @click="getDetail(todo, 'complete')">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <b-modal
              :active.sync="details_modal"
              :width="380">
              <div class="card" v-show="details_modal">
                <header class="modal-card-head">
                  <p class="modal-card-title">{{selectedTodo.title}}</p>
                </header>
                <section class="modal-card-body">
                  <div class="content">
                    Todo Description:<br>{{selectedTodo.description}}
                  </div>
                  <div class="content">
                    Todo Point:<br>{{selectedTodo.point}}
                  </div>
                  <div class="content">
                    Todo Status:<br>{{selectedTodo.status}}
                  </div>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-primary card-footer-item" v-show="prev.button" @click="prevStatus(selectedTodo)">{{prev.placeholder}}</button>
                  <button class="button is-danger card-footer-item">Delete</button>
                  <button class="button is-success card-footer-item" v-show="next.button" @click="nextStatus(selectedTodo)">{{next.placeholder}}</button>
                </footer>
              </div>
            </b-modal>

          </div>
        </div>
    </div>

    <b-modal
      :active.sync="add_modal"
      :width="380">
      <div class="modal-card" v-show="add_modal">
        <form @submit="confirm">
          <h2>New blog</h2><hr>
          <b-field label="Blog Title">
            <b-input v-model="newTodo.title" placeholder="Your blog title" required></b-input>
          </b-field>

          <b-field label="Blog Category">
            <b-input
              placeholder="Your blog category"
              v-model="newTodo.point"
              required>
            </b-input>
          </b-field>

          <b-field label="Blog Content">
            <b-input type="textarea"
              minlength="10"
              maxlength="10000"
              v-model="newTodo.description"
              placeholder="Content type here.."
              required>
            </b-input>
          </b-field>
          <button class="nav-item button is-success is-outlined"><i class="material-icons">exit_to_app</i>Submit</button>
        </form>

        <sweet-modal icon="success" ref="alert_success">Success!<br>Add project success..</sweet-modal>
        <sweet-modal icon="warning" ref="alert_warning">
          Are you sure?<br><br>
          <button class="button is-success" @click="addProject">Yes</button>
          <button class="button is-danger" @click="close">No</button>
        </sweet-modal>
      </div>
    </b-modal>

  </div>
</template>

<script>
import * as firebase from 'firebase'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

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

  firebase: {
    todos: todosRef
  },
  data () {
    return {
      newTodo: {
        assign: null,
        description: null,
        point: null,
        status: 1,
        title: null
      },
      details_modal: false,
      add_modal: false,
      selectedTodo: {
        assign: null,
        description: null,
        point: null,
        status: null,
        title: null
      },
      prev: {
        button: true,
        placeholder: ''
      },
      next: {
        button: true,
        placeholder: ''
      }
    }
  },
  computed: {
    backlog () {
      return this.todos.filter((todo) => todo.status === 1)
    },
    upcoming () {
      return this.todos.filter((todo) => todo.status === 2)
    },
    inProgress () {
      return this.todos.filter((todo) => todo.status === 3)
    },
    complete () {
      return this.todos.filter((todo) => todo.status === 4)
    }
  },
  methods: {
    getDetail (todo, state) {
      console.log(todo['.key'])
      this.selectedTodo = todo
      if (state === 'backlog') {
        this.next.placeholder = 'Upcoming'
        this.prev.button = false
        this.next.button = true
        this.details_modal = true
      } else if (state === 'upcoming') {
        this.prev.placeholder = 'Backlog'
        this.next.placeholder = 'In Progress'
        this.prev.button = true
        this.next.button = true
        this.details_modal = true
      } else if (state === 'inprogress') {
        this.prev.placeholder = 'Upcoming'
        this.next.placeholder = 'Complete'
        this.prev.button = true
        this.next.button = true
        this.details_modal = true
      } else {
        this.prev.placeholder = 'In Progress'
        this.prev.button = true
        this.next.button = false
        this.details_modal = true
      }
    },
    prevStatus (todo) {
      let status = todo.status
      todosRef.child(todo['.key']).child('status').set(status - 1)
      this.details_modal = false
    },
    nextStatus (todo) {
      let status = todo.status
      todosRef.child(todo['.key']).child('status').set(status + 1)
      this.details_modal = false
    },
    addProject () {
      alert('success')
      this.$refs.alert_warning.close()
    },
    confirm () {
      this.$refs.alert_warning.open()
    },
    close () {
      this.$refs.alert_warning.close()
    }
  },
  components: {
    SweetModal,
    SweetModalTab
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

  .boards .board .box .items {
    padding: 20px 0;
  }

  .box .head .is-pink {
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #ff3860;
  }

  .box.is-pink {
    border: 0.1em solid #ff3860;
    background-color: #F5F5F5;
  }

  .box .head .is-yellow {
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #FFC400;
  }

  .box.is-yellow {
    border: 0.1em solid #FFC400;
    background-color: #F5F5F5;
  }

  .box .head .is-purple {
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #896bda;
  }

  .box.is-purple {
    border: 0.1em solid #896bda;
    background-color: #F5F5F5;
  }

  .box .head .is-green {
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #00d1b2;
  }

  .box.is-green {
    border: 0.1em solid #00d1b2;
    background-color: #F5F5F5;
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
