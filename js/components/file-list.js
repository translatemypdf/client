Vue.component('file-list', {
    props: ['sesuatu'],
    // data () {
    //     return {

    //     }
    // },
    methods: {

    },
    created() {
        console.log("file-list is created ===", this.sesuatu)
    },
    template: `
        <div class="row">
            <file-card
                v-for="(file, index) in sesuatu"
                v-bind:key="index"
                v-bind:file="file">
            </file-card>
        </div>
    `
})