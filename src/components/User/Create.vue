<script>
import formatErros from '../../helpers/formatValidationErros'

export default {
  name: 'users-create',
  data: function () {
    return {
      sub_title: 'Criando Novo Usuário',
      navegacao: 'Criação',
      user: {}
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newUser', this.user).then(() => {
        this.flash('Usuário criado com sucesso.', 'success', {
          timeout: 2000
        })
        this.$router.push('/usuarios')
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
