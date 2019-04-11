Vue.component('add-file-form', {
    data() {
        return {
            name: '',
            file : '',
            formData: ''
        }
    },
    methods: {

    },
    template: 
        `
        <div style="margin-top:100px;">
            <h3 style="font-family:'Trebuchet MS'; text-align:center;"> UPLOAD YOUR FILE HERE </h3>
            <hr>
            <div v-if="file">
            <img src="file.name">
            </div>
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
        </div>
        `
    
})