<script>
export default {
  name: 'users-create',
  data: function () {
    return {
      sub_title: 'Criando Novo Usuário',
      navegacao: 'Criação'
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newUser', this.user).then(() => {
        // this.$router.push('/usuarios')
        console.log('falso positivo')
      }).catch((err) => {
        this.flash(err.body.name.notEmpty, 'error')
      })
    }
  }
}
</script>
