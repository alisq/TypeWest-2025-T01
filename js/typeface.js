class Typeface {
    constructor(content) {
        this.homepage_test_text = content['Homepage Tester Text'];
        this.title = content['Revival Name'];
        this.font_file = content['WOFF file'].path.split("/")[4];
        
        
        this.author = content['Student Name'];
        this.authorID = content['authorID'];
        
        this.font_desc = content['Revival Description']
        this.author_desc = content['Biography']
        this.author_sites = function() {
            let s = "<ul class='external-links'>";
            if (content['External Website'] && Array.isArray(content['External Website'])) {
                for (let i = 0; i < content['External Website'].length; i++) {
                    s += "<li><a class='inverse' target='_blank' href='" + content['External Website'][i] + "'>" + content['External Website'][i] + "↗</a></li>";
                }
            }
            s += "</ul>";
            return s;
        };

        this.texter_text = content['Tester Text'];

        this.process_images = function() {
            let s = "";
            if (content['Process Images'] && Array.isArray(content['Process Images'])) {
                for (let i = 0; i < content['Process Images'].length; i++) {
                    s += `
                    <div class="image">
                        <img src='https://tw2025.iamasq.works/storage/uploads${content['Process Images'][i]['path']}' alt='${content['Process Images'][i]['altText']}'>
                        <div class="caption">${content['Process Images'][i]['description']}</div>
                    </div>`
                }
            }
            
            return s;
        } 

        this.source_desc = content['Source Info'];
        this.process_desc = content['Process Info'];
        
        this.research_images = function() {
            let s = "";
            if (content['Research Images'] && Array.isArray(content['Research Images'])) {
                for (let i = 0; i < content['Research Images'].length; i++) {
                    s += `
                    <div class="image">
                        <img src='https://tw2025.iamasq.works/storage/uploads${content['Research Images'][i]['path']}' alt='${content['Research Images'][i]['altText']}'>
                        <div class="caption">${content['Research Images'][i]['description']}</div>
                    </div>`
                }
            }
            
            return s;
        } 
        
       
    }

    get displayFile() {
        let item = `
        @font-face {
            font-family: "${this.title}";
            src: url("fonts/${this.font_file}") format('woff2');
        }


        .${this.authorID}  
        { font-family:"${this.title}" }`
        return item;
    }

    get displayMenu() {
        let item = `
        <li>
            <a class="internal" href="#${this.authorID}">
                <h3 class="center ${this.authorID}">${this.title}</h3>
                <p class="center">by ${this.author}</p>
            </a>
        </li>`
            
        return item;
    }

    get displayTeaser() {
        
        /* html */
        let item = `
        <section class="font" id="${this.authorID}">
            <div class="metadata">                 
                <a class='internal' href="#${this.authorID}"><label class="font_name">${this.title}</label> by <label class="designer_name">${this.author}</label></a>
            </div>

            <a class='internal' href="#${this.authorID}"><button class="view_project">See full project</button></a>

            <div class="contain-overflow" >
            
        
                <div class="text ${this.authorID}" contenteditable style="">
                    ${this.homepage_test_text}
                </div>
        
            </div>
        </section>`;
        return item;
    }

    


    get displayFull() {

                /* html */
        let item = `
        <section class="font_full" id="${this.authorID}">
            
        <div class="container">
                <h2 class="${this.authorID}">
                    ${this.title}
                </h2>
                
                 <div class="row">
                    <div class="one-half column">
                        <h4>About ${this.title}</h4>
                        
                        ${this.font_desc}
                        
                    </div>
    
                    <div class="one-half column">
                        <h4>About ${this.author}</h4>                        
                            ${this.author_desc}
                            ${this.author_sites()}                    
                    </div>
                </div>
            </div>    
            
                
            <div class="tester_text ${this.authorID}" contenteditable>
                ${this.texter_text}
            </div>
            
            
            <div class=process-images">    
                ${this.process_images()}
            </div>

            <div class="container">
                <div class="row">
                    <div class="one-half column">
                        <h4>About the source</h4>
                        ${this.source_desc}                        
                    </div>
                    <div class="one-half column">
                        <h4>About the process</h4>
                        ${this.process_desc}
                    </div>                 
                </div>
            </div>

                <div class=process-images">    
                    ${this.research_images()}
                </div>


                <div class="back_forth">
                    <div>
                        <a href="" id="prev_button" class="internal"><button>previous project</button></a>
                    </div>
                    <div class="right">
                        <a href="" id="next_button" class="internal"><button>next project</button></a>
                    </div>
                </div>
                
        </section>`;
        return item;
    }

    
}