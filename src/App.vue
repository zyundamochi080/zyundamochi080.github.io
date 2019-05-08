<template>
  <div id="app">
    <header>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../image/KG-logo.jpg">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarmenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <router-link to="/">Top</router-link>
            </a>

            <a class="navbar-item">
              <router-link to="about">About</router-link>
            </a>

            <a class="navbar-item">
              <router-link to="application">Application</router-link>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <router-link to="community">Community</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="job">Job</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="contact">Contact</router-link>
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  <a href="https://github.com/zyundamochi080/zyundamochi080.github.io">This repository</a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Zyundamochi_080's Page
            </h1>
            <h2 class="subtitle">
              Welcome to my page!
            </h2>
          </div>
        </div>
      </section>
    </header>

    <ul>
    <li>
      <router-link to="/">Top</router-link>
    </li>
    <li>
      <router-link to="about">About</router-link>
    </li>
    <li>
      <router-link to="contact">Contact</router-link>
    </li>
    <li>
      <router-link to="application">application</router-link>
    </li>
    </ul>

    <router-view/>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
</style>
