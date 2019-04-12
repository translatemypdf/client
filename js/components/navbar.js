Vue.component('navbar-section', ({
    props: ['isLogin'],
    data() {
        return {
            oriText: '',
            translatedText: ''
        }
    },
    methods: {
        translatetext () {
            console.log("masuk ke method", this.oriText)
            this.translatedText = '';
            axios
                .post(`${baseURL}/file/translatemanual`, {text: this.oriText})

                .then(({data}) => {
                    console.log("berhasil translate", data)
                    this.translatedText = data.data;
                })
                .catch(err => {
                    console.log("error translate", err)
                })

        },
        logout() {
            Swal.fire({
                title: 'Do you want to sign out?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign Out!'
              }).then((result) => {
                if (result.value) {
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Logout Success!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    console.log("logout berhasil")
                    localStorage.clear()
                    this.$emit('keluar-bro')
                }
              })
            
        }
    },
    
    template: `
    <div>
  
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-dark">
            <a class="navbar-brand" href="#" style="color:white">Translate my File </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
                <div class="navbar-nav" >
                    <a class="nav-item nav-link active" href="#" v-if="!isLogin" style="color:white"> Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="#" v-if="isLogin" style="color:white"> Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" style="color:white"> All Files </a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" style="color:white" data-toggle="modal" data-target="#login-modal">Login</a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" style="color:white" data-toggle="modal" data-target="#register-modal">Register</a>
                    <a class="nav-item nav-link" href="#" v-if="isLogin" @click.prevent="logout" style="color:white">Logout</a>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0 mr-3" data-toggle="modal" data-target="#translateModal">Translate Me</button>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="searchMyArticle()">Search</button>
            </form>
        </nav>

        <div class="modal fade" id="translateModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"> Translate Page </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form v-on:submit.prevent="translatetext">
                        <div id="originaltext"></div>
                        <div class="form-group">
                            <label for="originaltext" class="col-form-label">From Indonesia Text: </label>
                            <input type="text" class="form-control" v-model="oriText">
                        </div>
                        <div id="translatedText"></div>
                        <div class="form-group">
                            <label for="translatedText" class="col-form-label">To English Text: </label>
                            <textarea class="form-control" id="translatedText" v-model="translatedText" readonly="readonly"></textarea>
                        </div>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}))