class Typeface {
    constructor(content) {
        //console.log(content)
        this.title = content['Revival Name'];
        this.font_file = content['WOFF file'];
        console.log(this.font_file)
        this.author = content['Student Name'];
        this.authorID = content['Student Name'].toLowerCase().replace(/[^a-z]/g, '');
        // this.identity = content.identity;
        // this.contents = content.field_article_contents.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files");;
        // this.editorial_author = content.field_intro_text_author;
        // this.editorial_illustration = content.field_editorial_image;
        // this.editorial = content.field_editorial;
        // this.artists = content.field_artist_s_;
        // this.title = content.title;
        // this.bio = content.body;
        // this.audio = content.field_audio_files.split(", ");
        // this.image = content.field_image.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files");
        // this.image_caption = $(this.image).attr('alt');
        // if (this.image_caption == undefined) {
        //     this.image_caption="";
        // }
        // this.bookSafeContents = this.contents.replaceAll('<iframe id="lostRiversMap" src="lostRiversMap.html" title="Lost Rivers Map"></iframe>',"").replaceAll('<iframe id="taguibaoMap" scrolling="no" src="taguibaoMap.html" title="Caitlyn Taguibao Interactive Mural"></iframe>',"")
        
      
    }

    get displayFile() {
        let item = `
        @font-face {
            font-family: "${this.title}";
            src: url("https://tw2025.iamasq.works/${this.font_file}") format('woff2');
        }

        #${this.authorID} .text, h3.${this.authorID}  { font-family:"${this.title}" }`
        return item;
    }

    get displayMenu() {
        let item = `
        <h3 class="${this.authorID}">${this.title}</h3>
        <div>by ${this.author}</div>`
        return item;
    }

    get displayTeaser() {
        
        /* html */
        let item = `
        <section class="font" id="${this.authorID}">
            <div class="metadata">                 
                <label class="font_name">${this.title}</label> by <label class="designer_name">${this.author}</label>
            </div>
            <button class="view_project">                 
                see full project
            </button>

            <div class="container" >
            
        
                <div class="text" contenteditable style="">
                    Sixty zippers were quickly picked from the woven jute bag
                </div>
        
            </div>
        </section>`;
        return item;
    }

    


    get displayFull() {

                /* html */
        let item = `
        <section class="font" id="${this.authorID}">
            <div class="metadata">                 
                <label class="font_name">${this.title}</label> by <label class="designer_name">${this.author}</label>
            </div>
            <button class="view_project">                 
                see full project
            </button>

            <div class="container" >
            
        
                <div class="text" contenteditable style="">
                    Sixty zippers were quickly picked from the woven jute bag
                </div>
        
            </div>
        </section>`;
        return item;
    }

    
}