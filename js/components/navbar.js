Vue.component('navbar-section', ({
    props: ['isLogin'],
    template: `
    <div>
  
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-dark">
            <a class="navbar-brand" href="#" style="color:white">Translate my File </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
                <div class="navbar-nav" >
                    <a class="nav-item nav-link active" href="#" v-if="!isLogin" @click.prevent="showAllArticle()" style="color:white"> Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="#" v-if="isLogin" @click.prevent="showMyArticle()" style="color:white"> Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" @click.prevent="showAllArticle()" style="color:white"> All Files </a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" @click.prevent="changePage('loginPage')" style="color:white" data-toggle="modal" data-target="#login-modal">Login</a>
                    <a class="nav-item nav-link" href="#" v-if="!isLogin" @click.prevent="changePage('registerPage')" style="color:white" data-toggle="modal" data-target="#register-modal">Register</a>
                    <a class="nav-item nav-link" href="#" v-if="isLogin" @click.prevent="signOut()" style="color:white">Logout</a>
                </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0 mr-3" data-toggle="modal" data-target="#translateModal">Translate Me</button>
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
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}))