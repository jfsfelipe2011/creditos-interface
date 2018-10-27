<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Clientes <small>Detalhes</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <a href="#/clientes">Clientes</a> >
          <span>Visualização</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <div class="row">
          <div class="col s9">
            <div class="card-title">Detalhes do Cliente</div>
            <p>ID: {{ client.id }}</p>
            <p>Nome: {{ client.name }}</p>
            <p>E-mail: {{ client.email }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/clientes/' + client.id + '/editar'" class="btn blue">Editar</a>
            <a :href="'#/creditos/' + client.id " class="btn btn blue">Créditos</a>
            <a href="" class="btn red" @click.prevent="remove(client.id)" >Excluir</a>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#/clientes">Voltar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clients-view',
  methods: {
    remove: function (id) {
      this.$dialog.confirm('Tem certeza que deseja excluir esse cliente?').then(() => {
        this.$store.dispatch('removeClient', this.$route.params.id).then(() => {
          this.flash('Cliente removido com sucesso.', 'success', {
            timeout: 2000
          })
          this.$router.push('/clientes')
        }).catch((err) => {
          this.flash(err, 'error', {
            timeout: 2500
          })
        })
      })
    }
  },
  computed: {
    client () {
      return this.$store.state.client.clientsView
    }
  },
  created () {
    this.$store.dispatch('getClient', this.$route.params.id)
  }
}
</script>
