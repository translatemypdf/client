const baseURL = `http://localhost:3000`

const app = new Vue ({
    el: "#app",
    data: {
        isLogin: false,
        fileList: []
    },
    created() {
        this.getAllFile();
        if (localStorage.getItem('access_token')) {
            this.isLogin = true
            this.getAllFile();
        } else {
            this.isLogin = false
        }
    },
    methods: {
        getAllFile() {
            console.log('masuk ke function get all file')
            this.fileList=[];
            axios
                .get(`${baseURL}/file`)
                .then (({data})=> {
                    console.log("Hasil get all files: ", data)
                    this.videoList = []
                    data.forEach(filename => {
                      this.fileList.push(filename)  
                    })
                    console.log("hasil looping all files", this.fileList)
                })
        }
    }
})