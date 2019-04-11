<template>
  <div id="app">
    <header>

      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>

            <div class="columns">
              <div class="columun">
                <a class="button">Small</a>
              </div>
              <div class="columun">
                <a class="button">Small</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div class="columns">
        <div class="columun">
          <a class="button">Small</a>
        </div>
        <div class="columun">
          <a class="button">Small</a>
        </div>
      </div>
    </header>

    <ul>
    <li>
      <router-link to="/">Top</router-link>
    </li>
    <li>
      <router-link to="about">About</router-link>
    </li>
    <li>
      <router-link to="note">Note</router-link>
    </li>
    <li>
      <router-link to="api">Api</router-link>
    </li>
    <li>
      <router-link to="contact">Contact</router-link>
    </li>
    <li>
      <router-link to="application">application</router-link>
    </li>
    </ul>
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
