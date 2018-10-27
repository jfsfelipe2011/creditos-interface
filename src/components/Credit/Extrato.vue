<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Extrato do Cliente {{ client.name }} <small>Gerenciamento de Créditos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <a :href="'#/clientes/' + client.id ">Clientes</a> >
          <a :href="'#/creditos/' + client.id ">Créditos</a> >
          <span>Extrato</span>
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
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Créditos</th>
              <th>Operação</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(extract, index) in extracts" :key="index">
              <td>{{ extract.id }}</td>
              <td>{{ extract.type }}</td>
              <td>{{ extract.description }}</td>
              <td>{{ extract.date }}</td>
              <td>{{ extract.credits }}</td>
              <td>{{ extract.operation }}</td>
              <td>{{ extract.balance }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Saldo Total:</td>
              <td>{{ saldo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a :href="'#/creditos/' + client.id ">Voltar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credits',
  computed: {
    extracts () {
      return this.$store.state.credit.extractsList
    },
    client () {
      return this.$store.state.client.clientsView
    },
    saldo () {
      return this.$store.state.credit.saldoView
    }
  },
  created () {
    this.$store.dispatch('getExtrato', this.$route.params.clienteId)
    this.$store.dispatch('getClient', this.$route.params.clienteId)
    this.$store.dispatch('getSaldo', this.$route.params.clienteId)
  }
}
</script>
