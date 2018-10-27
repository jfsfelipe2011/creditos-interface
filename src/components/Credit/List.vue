<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Créditos do Cliente {{ client.name }} <small>Gerenciamento de Créditos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <span>Créditos</span>
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
              <th>Valor</th>
              <th>Validade</th>
              <th>Descrição</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(credit, index) in credits" :key="index">
              <td>{{ credit.id }}</td>
              <td>{{ credit.value }}</td>
              <td>{{ credit.validity }}</td>
              <td>{{ credit.description }}</td>
              <td>{{ credit.balance }}</td>
            </tr>
            <tr>
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
        <a :href="'#/creditos/' + client.id + '/recarregar'">Recarregar</a>
        <a :href="'#/creditos/' + client.id + '/remover'">Remover</a>
        <a :href="'#/creditos/' + client.id + '/estornar'">Estorno</a>
        <a :href="'#/creditos/' + client.id + '/extrato'">Extrato</a>
        <a :href="'#/clientes/' + client.id">Voltar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credits',
  computed: {
    credits () {
      return this.$store.state.credit.creditsList
    },
    client () {
      return this.$store.state.client.clientsView
    },
    saldo () {
      return this.$store.state.credit.saldoView
    }
  },
  created () {
    this.$store.dispatch('getCredits', this.$route.params.clienteId)
    this.$store.dispatch('getClient', this.$route.params.clienteId)
    this.$store.dispatch('getSaldo', this.$route.params.clienteId)
  }
}
</script>
