<template lang="html">
  <div class="Index">
    <nav class="nav has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="../index.html">
            <!-- <img src="../images/bulma.png" alt="Description"> -->
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-active">
            Home
          </a>
          <a class="nav-item is-tab">
            Features
          </a>
          <a class="nav-item is-tab">
            Team
          </a>
          <a class="nav-item is-tab">
            Help
          </a>
          <span class="nav-item">
            <a class="button">
              Log in
            </a>
            <a class="button is-info">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </nav>

    <div class="section">
      <div class="">
        <div class="boards">
          <div class="columns">
            <div class="column is-3 board" id="b1">
              <div class="box is-gray">
                <div class="head">
                  <div class="name">Backlog</div>
                  <div class="count">1</div>
                  <div class="options"><i class="fa fa-ellipsis-h"></i></div>
                </div>

                <div class="items">
                  <div class="box" id="b1c1">
                    <p class="title">test item</p>
                    <p class="meta">
                      <img src="https://placehold.it/28x28">
                      <a href="#"><i class="fa fa-bars"></i></a>
                    </p>
                  </div>

                  <div class="add-card">
                    <div onclick="addCard(this)">
                      <i class="fa fa-plus-circle"></i>
                      Add new card
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board" id="b2">
              <div class="box is-gray">
                <div class="head">
                  <div class="name">Upcoming</div>
                  <div class="count">1</div>
                  <div class="options"><i class="fa fa-ellipsis-h"></i></div>
                </div>
                <div class="items">
                  <div class="box" id="b2c1">
                    <p class="title">Update middle-out compression algorithm</p>
                    <p class="meta">
                      <img src="https://placehold.it/28x28">
                      <a href="#"><i class="fa fa-bars"></i></a>
                    </p>
                  </div>
                  <div class="add-card">
                    <div onclick="addCard(this)">
                      <i class="fa fa-plus-circle"></i>
                      Add new card
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board" id="b3">
              <div class="box is-gray">
                <div class="head">
                  <div class="name">In Progress</div>
                  <div class="count">1</div>
                  <div class="options"><i class="fa fa-ellipsis-h"></i></div>
                </div>
                <div class="items">
                  <div class="box" id="b3c1">
                    <p class="title">Send project notification to users</p>
                    <p class="meta">
                      <img src="https://placehold.it/28x28">
                      <a href="#"><i class="fa fa-bars"></i></a>
                    </p>
                  </div>
                  <div class="add-card">
                    <div onclick="addCard(this)">
                      <i class="fa fa-plus-circle"></i>
                      Add new card
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-3 board" id="b4">
              <div class="box is-gray">
                <div class="head">
                  <div class="name">Complete</div>
                  <div class="count">1</div>
                  <div class="options"><i class="fa fa-ellipsis-h"></i></div>
                </div>
                <div class="items">
                  <div class="box" id="b4c1">
                    <p class="title">Create first test</p>
                    <p class="meta">
                      <img src="https://placehold.it/28x28">
                      <a href="#"><i class="fa fa-bars"></i></a>
                      <a href="#"><i class="fa fa-comment-o"></i></a>
                    </p>
                  </div>
                  <div class="add-card">
                    <div onclick="addCard(this)">
                      <i class="fa fa-plus-circle"></i>
                      Add new card
                    </div>
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
export default {
  name: 'Index'
}
</script>

<style scoped>
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
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

  .box .head .name {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #2C2C30;
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
    font-size: 19px;
  }

  .items .box .meta img {
    border-radius: 30px;
    margin-right: 10px;
  }

  .items .box .meta .fa {
    margin: 3px 7px;
    color: #CCCCCC;
  }

  .items .add-card div {
    color: #AAAAAA;
    font-weight: bold;
    font-size: 16px;
  }
</style>
