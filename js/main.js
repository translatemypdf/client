const baseURL = `http://localhost:3000`

const app = new Vue ({
    el: "#app",
    data: {
        isLogin: false
    },
    created() {
        if (localStorage.getItem('access_token')) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    },
    methods: {

    }
})