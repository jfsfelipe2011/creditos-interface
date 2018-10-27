<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Usuários <small>Gerenciamento de Usuários</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <span>Usuários</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <div class="col s12 center-align">
          <flash-message></flash-message>
        </div>
        <table class="highlight">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" @click="goTo(user.id)" :key="index">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/usuarios/novo">Novo Usuário</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  methods: {
    goTo: function (id) {
      this.$router.push('/usuarios/' + id)
    }
  },
  computed: {
    users () {
      return this.$store.state.user.userList
    }
  },
  created () {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style lang="css">
tbody tr {
  cursor: pointer;
}
</style>
