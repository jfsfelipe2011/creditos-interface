<script>
import formatErros from '../../helpers/formatValidationErros'

export default {
  name: 'clients-create',
  data: function () {
    return {
      sub_title: 'Criando Novo Cliente',
      navegacao: 'Criação',
      client: {}
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newClient', this.client).then(() => {
        this.flash('Cliente criado com sucesso.', 'success', {
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
  }
}
</script>
