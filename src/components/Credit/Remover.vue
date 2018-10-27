<template>
  <div class="row">
    <div class="content-header">
      <h1>Remover | Cliente {{ client.name }} <small>Gerenciamento de Créditos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">Controlador de Créditos</a> >
          <a :href="'#/clientes/' + client.id ">Clientes</a> >
          <a :href="'#/creditos/' + client.id ">Créditos</a> >
          <span>Remover</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <form class="row" autocomplete="off" @submit.prevent="save">
          <div class="input-field col s12">
            <h5>Remoção</h5>
          </div>
          <div class="col s12 center-align">
            <flash-message></flash-message>
          </div>
          <div class="input-field col s6">
            <input type="number" v-model="credit.credits" id="value" class="validate" placeholder="Digite o valor dos créditos a remover" autocomplete="off" required>
            <label for="value" class="active">Créditos</label>
          </div>
          <div class="input-field col s6">
            <input type="text" v-model="credit.description" id="description" class="validate" placeholder="Digite a descrição" autocomplete="off" required>
            <label for="description" class="active">Descrição</label>
          </div>
          <div class="input-field col s6">
            <input type="submit" class="waves-effect waves-light btn-large red" value="remover">
          </div>
        </form>
      </div>
      <div class="card-action">
        <a :href="'#/creditos/' + client.id ">Voltar</a>
      </div>
    </div>
  </div>
</template>

<script>
import formatErros from '../../helpers/formatValidationErros'

export default {
  name: 'remover',
  data: function () {
    return {
      credit: {
        'clientId': this.$route.params.clienteId
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('remover', this.credit).then(() => {
        this.flash('Remoção efetuada com suscesso.', 'success', {
          timeout: 2000
        })
        this.$router.push('/creditos/' + this.$route.params.clienteId)
      }).catch((err) => {
        let result = formatErros.format(err)
        this.flash(result, 'error', {
          timeout: 2500
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
    this.$store.dispatch('getClient', this.$route.params.clienteId)
  }
}
</script>
