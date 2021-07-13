<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="col my-5">
          <h2>My To Do App</h2>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import '~bootstrap-icons/font/bootstrap-icons.css';

a {
  color: white !important;
  text-decoration: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
