Vue.component('file-list', {
    props: ['filelist'],
    data () {
        return {

        }
    },
    methods: {

    },
    created() {
        console.log("file-list is created ===")
    },
    template: `
        <div class="row">
            <file-card
                v-for="(file, index) in filelist"
                v-bind:key="index"
                v-bind:file="file">
            </file-card>
        </div>
    `
})