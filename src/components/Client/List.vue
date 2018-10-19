<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Clientes <small>Gerenciamento de Clientes</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a>
          <span>Clientes</span>
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
              <th>Documento</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client, index) in clients" @click="goTo(client.id)" :key="index">
              <td>{{ client.id }}</td>
              <td>{{ client.name }}</td>
              <td>{{ client.document }}</td>
              <td>{{ client.email }}</td>
              <td>{{ client.fone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/clientes/novo">Novo Cliente</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clients',
  methods: {
    goTo: function (id) {
      this.$router.push('/clientes/' + id)
    }
  },
  computed: {
    clients () {
      return this.$store.state.client.clientsList
    }
  },
  created () {
    this.$store.dispatch('getClients')
  }
}
</script>

<style lang="css">
tbody tr {
  cursor: pointer;
}
</style>
