<script>
import formatErros from '../../helpers/formatValidationErros'

export default {
  name: 'users-edit',
  data: function () {
    return {
      sub_title: 'Editando Usuários',
      navegacao: 'Edição'
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('updateUser', this.user).then(() => {
        this.flash('Usuário alterado com sucesso.', 'success', {
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
