<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">
        Vue-cli-crush-course
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item" exact>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link to="/users" tag="li" class="nav-item">
            <a class="nav-link">Users</a>
          </router-link>
          <router-link to="/add-user" tag="li" class="nav-item">
            <a class="nav-link">Add</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  padding-top: 100px;
}
</style>
