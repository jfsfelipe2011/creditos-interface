<script>
import formatErros from '../../helpers/formatValidationErros'

export default {
  name: 'clients-edit',
  data: function () {
    return {
      sub_title: 'Editando Clientes',
      navegacao: 'Edição'
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('updateClient', this.client).then(() => {
        this.flash('Cliente alterado com sucesso.', 'success', {
          timeout: 2000
        })
        this.$router.push('/clientes')
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
    this.$store.dispatch('getClient', this.$route.params.id)
  }
}
</script>
