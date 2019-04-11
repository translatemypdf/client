Vue.component('file-list', {
    props: ['file'],
    data () {
        return {
            fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
               last: '&amp;src=sdkpreparse%2F&amp;src=sdkpreparse'
        }
    },
    methods: {
        getlink(){
            // console.log(this.fbSharelink + this.video.link + this.last)
            return this.fbSharelink + this.video.link + this.last
          }
    },
    created(){
        console.log('file card is created')
    },
    template: `
        <div class="col-4 mb-3">
            <div class="card mx-auto">
                <center><p>{{file.name}}</p></center>
                <div class="card-body">
                    {{file.link}}
                    <div class="fb-share-button" data-href="video.link" data-layout="button_count" data-size="small">
                        <a target="_blank" :href="getlink()" class="fb-xfbml-parse-ignore">Share on Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    `
})