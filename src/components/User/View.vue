<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Usuário nome <small>Detalhes</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <a href="#/usuarios">Usuários</a> >
          <span>Visualização</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <div class="row">
          <div class="col s9">
            <div class="card-title">Detalhes do Usuário</div>
            <p>ID: {{ user.id }}</p>
            <p>Nome: {{ user.name }}</p>
            <p>E-mail: {{ user.email }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/usuarios/' + user.id + '/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(user.id)" >Excluir</a>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#/usuarios">Voltar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users-view',
  methods: {
    remove: function (id) {
      this.$store.dispatch('removeUser', this.$route.params.id).then(() => {
        this.flash('Usuário removido com sucesso.', 'success', {
          timeout: 2000
        })
        this.$router.push('/usuarios')
      }).catch((err) => {
        this.flash(err, 'error', {
          timeout: 2500
        })
      })
    }
  },
  computed: {
    user () {
      return this.$store.state.user.singleUser
    }
  },
  created () {
    this.$store.dispatch('getSingleUser', this.$route.params.id)
  }
}
</script>
