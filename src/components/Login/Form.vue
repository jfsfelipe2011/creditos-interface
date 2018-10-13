<template lang="html">
  <div class="row" id="login">
    <div class="content-header center-align">
      <h1>Login <small>Acesso ao Controlador de Créditos</small></h1>
    </div>

    <div class="card col s4 offset-s4">

      <div class="card-content">
        <div class="card-title center-align">Acesso ao sistema</div>
        <div class="col s12 center-align">
          <flash-message></flash-message>
        </div>
        <form class="row" autocomplete="off" @submit.prevent="login">
          <div class="input-field col s12">
            <input name="email" v-model="user.email" type="email" id="title" class="validate" placeholder="Informe seu email..." required>
            <label for="email" class="active">Email</label>
          </div>
          <div class="input-field col s12">
            <input name="password" v-model="user.password" type="password" id="title" class="validate" placeholder="Informe sua senha" required>
            <label for="password" class="active">Senha</label>
          </div>
          <div class="input-field col s12 center-align">
            <input type="submit" class="waves-effect waves-light btn-large blue-grey darken-4" value="acessar">
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import Crypto from 'crypto-js'

export default {
  name: 'login',
  styles: [
    require('vue-flash-message/dist/vue-flash-message.min.css')
  ],
  data: function () {
    return {
      user: {}
    }
  },
  methods: {
    login: function () {
      let data = {
        email: this.user.email,
        password: this.user.password
      }
      Vue.http.post('http://creditos/auth', data).then(res => {
        localStorage['token'] = JSON.stringify(res.body)
        localStorage['email'] = Crypto.AES.encrypt(this.user.email, 'IsyFWd6DEMedpf2n3Rpe')
        localStorage['password'] = Crypto.AES.encrypt(this.user.password, 'IsyFWd6DEMedpf2n3Rpe')
        this.$router.push('/')
      }).catch((err) => {
        this.flash(err.body, 'error')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="css">
  #login {
    background-color: #eee !important;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 99999;
    padding: 20px;
   }
</style>
