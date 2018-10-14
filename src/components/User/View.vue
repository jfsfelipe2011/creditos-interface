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
            <p>ID: 0</p>
            <p>Nome: José Felipe da Silva</p>
            <p>E-mail: jose@teste.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a href="#/usuarios/1/editar" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(id)" >Excluir</a>
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
      this.$router.push('/usuarios')
    }
  }
}
</script>
