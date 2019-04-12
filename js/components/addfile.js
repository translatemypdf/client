Vue.component('add-file-form', {
    data() {
        return {
            name: '',
            file : '',
            formData: ''
        }
    },
    methods: {
        createFile() {
            console.log("Masuk create", this.file, this.name)  
            let formData = new FormData()
              formData.append('file', this.file)
              formData.append('name', this.name)
            //   console.log("data yang dikirim ke server ===>", formData)
              axios
                  .post(`${baseURL}/file/upload`, formData, {
                      headers: {
                          'Content-Type': 'multipart/form-data',
                        //   token: localStorage.token
                      }
                  })
                  .then(({ data }) => {
                      this.name = '',
                      this.tag = ''
                      console.log("Berhasil upload Post:", data)
                      
                  })
                  .catch(err => {
                      console.log(err)
                  })
          },
          handleFileUpload(event) {
              // this.file = event.file.files[0]
              console.log("masuk file upload", this.$refs.file)
              this.file = this.$refs.file.files[0];
          },
    },
    template: 
        `
        <div style="margin-top:100px;">
            <h3 style="font-family:'Trebuchet MS'; text-align:center;"> UPLOAD YOUR FILE HERE </h3>
            <hr>
            
            <form v-on:submit.prevent='createFile'>
                <fieldset>
                        <div class="form-group mx-auto" style="width: 50%">
                        <label>File Name</label>
                        <input v-model="name" type="text" class="form-control" required>
                        </div>
                        <div class="form-group mx-auto" style="width: 50%">
                        <label for="exampleInputFile">Upload Your File Here</label>
                        <input type="file" id="file" class="inputFile" ref="file" v-on:change="handleFileUpload" required/>
                        <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                </fieldset>
            </form>
            <div v-if="file">
                <p> {{file}} </p>
            </div>
        </div>
        `
    
})