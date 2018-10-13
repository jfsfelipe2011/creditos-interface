<template>
  <div id="app">
    <nav class="blue-grey darken-3 z-index">
      <div class="nav-wrapper row">
        <div class="col s12">
          <ul id="nav-mobile" class="hide-on-med-and-down">
            <li><a href="#/"><i class="ion-log-out">Controlador de Créditos</i></a></li>
          </ul>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="" @click.prevent="logout"><i class="ion-log-out">Sair</i></a></li>
          </ul>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <span class="grey-text text-lighten-4">{{ name }}</span>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row" id="main">
      <div class="col s12 m4 l3 blue-grey padding-top" id="left-side">
        <div class="valign-wrapper">
        </div>
        <div class="divider blue-grey darken-2"></div>
        <div class="collection">
          <a href="#/" class="collection-item grey darken-2 white-text">Menu</a>
          <a href="#/usuarios" v-if="name == 'admin@email.com'" class="collection-item">Usuários</a>
          <a href="#/clientes" class="collection-item">Clientes</a>
        </div>
      </div>
      <div class="col s12 m8 l9 grey lighten-3" id="right-side">
        <router-view></router-view>
        <div class="col s10 grey lighten-2">
          <small>by <a href="https://github.com/jfsfelipe2011" target="_blank">José Felipe da Silva</a> -  &copy; 2018</small>
        </div>
        <div class="col s2 grey lighten-2 right-align">
          <small>v1.0.0@creditos-interface</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  styles: [
    require('materialize-css/dist/css/materialize.min.css'),
    require('ionicons/dist/css/ionicons.min.css')
  ],
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      this.$router.push('/login')
    }
  },
  computed: {
    name () {
      return this.$store.state.user.userView
    }
  },
  created () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
  html, body, #app, #main, #left-side, #right-side {
    min-height: 100%;
    margin: 0px;
  }
  body {
    background-color: #607d8b !important;
  }
  .z-index {
    position: relative;
    z-index: 9;
  }
  .padding-top {
    padding-top:15px !important;
  }
  .brand-logo {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .divider {
    padding: 5px;
    margin: 20px 0;
  }
  .content-header {
    margin-bottom: 1.68rem;
  }
  .content-header h1 {
    font-size: 28px;
    margin-bottom: 0;
  }
  .content-header h1 small {
    font-size: 70%;
    color: #9e9e9e;
  }
  table thead tr th:first-child {
    width: 1%;
  }
  table img {
    margin-right: 10px;
  }
</style>
