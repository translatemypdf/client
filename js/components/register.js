Vue.component('register-modal', {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      axios
        .post(`http://localhost:3000/users/register`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
          .then(user => {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Register Success! Please click login now',
              showConfirmButton: false,
              timer: 1500
            })
            this.name=''
            this.email=''
            this.password=''
          })
          .catch(err => {
            swal("field tidak boleh kosong!", "You clicked the button!", "error");
            this.name=''
            this.email=''
            this.password=''
          })
    }
  },
  template: `
  <div class="modal fade" id="register-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form v-on:submit.prevent="register">
                    <div class="form-group">
                        <label class="col-form-label">Name:</label>
                        <input type="text" v-model="name" class="form-control" name="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Email:</label>
                        <input type="text" v-model="email" class="form-control" name="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Password:</label>
                        <input type="password" v-model="password" class="form-control" name="password"
                            placeholder="Password" required>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success" v-on:click.prevent="register" data-dismiss="modal">Register</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  </div>
  `
})