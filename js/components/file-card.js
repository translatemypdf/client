Vue.component('file-card', {
    props: ['file'],
    data() {
        return {
            fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
            fblast: `&amp;src=sdkpreparse%2F&amp;src=sdkpreparse`,
            twitterSharelink: `https://twitter.com/intent/tweet?text=baru%20aja%20upload%20dan%20translate%20dokumen%20di%20translateMyDocumnent%20nih&url=`,
            twitterlast: '&hashtags=ShareDocument,translatedocumeny,hacktiv8&via=translatemypdf'

        }
    },
    methods: {
        getlink() {
            // console.log(this.fbSharelink + this.video.link + this.last)
            return this.fbSharelink + this.file.path + this.fblast
        },
          getTwitter() {
            return this.twitterSharelink + this.file.path + this.twitterlast
        }
    },
    created() {
        console.log('file card is created')
    },
    template: `
        <div class="col-4 mb-3">
            <div class="card mx-auto">
                <center><p>{{file.name}}</p></center>
                <div class="card-body">
                    {{file.path}}
                    <div class="fb-share-button" data-href="file.link" data-layout="button_count" data-size="small">
                        <a target="_blank" :href="getlink()" class="fb-xfbml-parse-ignore">Share on Facebook</a>
                    </div>
                     <div class="fb-share-button" data-href="file.link" data-layout="button_count" data-size="small">
                        <a target="_blank" :href="getTwitter()">Share on twitter</a>
                    </div>
                </div>
            </div>
        </div>
    `
})