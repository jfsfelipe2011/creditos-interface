<template>
  <div id="app">
    <nav class="blue-grey darken-3 z-index">
      <div class="nav-wrapper row">
        <div class="col s12">
          <a href="#/" class="blue-grey darken-4 brand-logo">Controlador de Créditos</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#/logout"><i class="ion-log-out"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row" id="main">
      <div class="col s12 m4 l3 blue-grey padding-top" id="left-side">
        <div class="valign-wrapper">
          <div>
            <h5><span class="grey-text text-lighten-4">{{ name }}</span></h5>
          </div>
        </div>
        <div class="divider blue-grey darken-2"></div>
        <div class="collection">
          <a href="#/" class="collection-item grey darken-2 white-text">Menu</a>
          <a href="#/usuarios" class="collection-item">Usuários</a>
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
import Crypto from 'crypto-js'

export default {
  name: 'App',
  styles: [
    require('materialize-css/dist/css/materialize.min.css'),
    require('ionicons/dist/css/ionicons.min.css')
  ],
  data () {
    let bytes = Crypto.AES.decrypt(localStorage['email'], 'IsyFWd6DEMedpf2n3Rpe')
    return {
      name: bytes.toString(Crypto.enc.Utf8)
    }
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
