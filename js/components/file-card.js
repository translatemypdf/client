Vue.component('file-card', {
    props: ['haloo'],
    data() {
        return {
            fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
            fblast: `&amp;src=sdkpreparse%2F&amp;src=sdkpreparse`,
            twitterSharelink: `https://twitter.com/intent/tweet?text=baru%20aja%20upload%20dan%20translate%20dokumen%20di%20translateMyDocumnent%20nih&url=`,
            twitterlast: '&hashtags=ShareDocument,translatedocumeny,hacktiv8&via=translatemypdf',
            waSharelink: `https://web.whatsapp.com/send?text=baru%20aja%20upload%20dan%20translate%20document%20di%20translateMyPdf%20%20`
        }
    },
    methods: {
        getlink() {
            // console.log(this.fbSharelink + this.video.link + this.last)
            return this.fbSharelink + this.haloo.path + this.fblast
        },
        getTwitter() {
            return this.twitterSharelink + this.haloo.path + this.twitterlast
        },
        getWhatsapp() {
            return this.waSharelink + this.haloo.path
        }
    },
    created() {
        console.log('file card is created')
    },
    template: `
        <div class="col-4 mb-3">
            <div class="card mx-auto">
                <center><p>{{haloo.name}}</p></center>
                <div class="card-body">
                    <p style="text-align:center;">  <a :href="haloo.path" target="_blank"> Click here for the file </a> </p>
                    <embed :src="haloo.path" type="application/pdf" width="100%" height="600px" />
                    <a class="resp-sharing-button__link" target="_blank" :href="getlink()" rel="noopener" aria-label="Share on Facebook">
                    <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z"/></svg>
                        </div>Share on Facebook</div>
                    </a>
                    <a class="resp-sharing-button__link" target="_blank" :href="getTwitter()" rel="noopener" aria-label="Share on Twitter">
                    <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"/></svg>
                        </div>Share on Twitter</div>
                    </a>
                    <a class="resp-sharing-button__link" target="_blank" :href="getWhatsapp()" rel="noopener" aria-label="Share on Whatsapp">
                    <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        </div>Share on whatsapp</div>
                    </a>
                    
                </div>
            </div>
        </div>
    `
})