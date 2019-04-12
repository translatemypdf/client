Vue.component('login-modal', ({
  props: ['isLogin'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .post(`http://localhost:3000/users/login`, {
          email: this.email,
          password: this.password
        })
          .then(user => {
            console.log('success')
            this.email=''
            this.password=''
            const { token, id, email, name } = user.data
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            swal("Login Success!", "You clicked the button!", "success");
            this.$emit('success-login')
          })
          .catch(err => {
            console.log(err)
            swal("Email / password salah!", "You clicked the button!", "error");
          })
    }
  },
  template: `
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <form v-on:submit.prevent="login">
                  <div class="form-group">
                      <label class="col-form-label">Email:</label>
                      <input type="text" v-model="email" class="form-control" name="email" placeholder="Email" required>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label">Password:</label>
                      <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-success">Login</button>
                </div>
              </form>
          </div>
      </div>
    </div>
  </div>
  `
}))