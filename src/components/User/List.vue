<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Usuários <small>Gerenciamento de Usuários</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a>
          <span>Usuários</span>
        </small>
      </div>
    </div>

    <div class="card col s12">

      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="goTo(1)">
              <td>0</td>
              <td>José Felipe da Silva</td>
              <td>jose@teste.com</td>
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
  }
}
</script>

<style lang="css">
tbody tr {
  cursor: pointer;
}
</style>
