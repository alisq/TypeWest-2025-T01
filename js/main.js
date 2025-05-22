    const fadeSpeed = 150;
    let fonts = [];
    const url = 'https://tw2025.iamasq.works/api/content/items/Revival';

    fetch(url)
      .then(response => response.json())
      .then(p => {
        for(i=0;i<p.length;i++) {
          p[i].identity = i;
          p[i].authorID = toVariableName(p[i]["Student Name"])
          console.log(p[i].authorID)
          
        fonts[i] = p[i]
        
        }
      })
    

      
    

      setTimeout(function(){ //remove this timeout function when the data is built in.


        



        //load the menu and the conts at the outset.
        for (i=0;i<fonts.length;i++) {
              let item = new Typeface(fonts[i]);
            $("#revivals_menu").append(item.displayMenu)
                      $("#all_fonts").append(item.displayFile)
          }

        
        if  (window.location.hash) {
            aID = window.location.hash.replace("#","");
            loadFont(aID)
            
        } else {
          
          for (i=0;i<fonts.length;i++) {
              let item = new Typeface(fonts[i]);
              
            
          }

        
          loadHome()
        
        }
        }, 600)

        
    

$("#menu_button").click(function(){
    
    
    $(this).toggleClass("active")
    $("#revivals_menu").toggleClass("active")
})


$("#revivals_menu").click(function(){
    
    $("#menu_button").toggleClass("active")
    $(this).fadeOut(fadeSpeed);
    setTimeout(function(){
      $("#revivals_menu").removeClass("active").attr("style","");

    },fadeSpeed)
})









  $("a.loadHome").click(function(){
    window.location.hash="";
    loadHome();
  })



  

  $(document).on('click','.internal',function(e){
      // e.preventDefault();

      $("#contents").fadeOut(fadeSpeed);
      q = $(this).attr("href").replace("#","");

      loadFont(q)

  })


  
  function loadHome() {
    history.replaceState(null, null, window.location.pathname + window.location.search);
    $("#contents").fadeOut(fadeSpeed)
    $("#contents").html("");

    for (i=0;i<fonts.length;i++ ) {
      let item = new Typeface(fonts[i]);
      setTimeout(function(){
        $("#contents").append(item.displayTeaser).fadeIn(100)
      }, fadeSpeed)
    }
    

  }




function loadFont(authorID) {
  console.log(fonts)
  // /const result = fonts.find(entry => entry.authorID === authorID);
  const result = fonts.find(entry => entry.authorID === authorID);

  let item = new Typeface(result);
  $("#contents").fadeOut(fadeSpeed);
  setTimeout(function(){
    $("#contents").html("");
    $("#contents").append(item.displayFull+"<br />").fadeIn(100)
    $("#contents").fadeIn(100);

    let prev, next;

    result.identity == 0 ? prev = "#"+fonts[fonts.length-1].authorID : prev = "#"+fonts[result.identity-1].authorID
    result.identity == fonts.length-1 ? next = "#"+fonts[0].authorID : next = "#"+fonts[result.identity+1].authorID
    $("#next_button").attr("href",next)
    $("#prev_button").attr("href",prev)
    
  },100);
}


$(document).on('click','.contain-overflow .text',function(){
  var sel, range;
	var el = $(this)[0];
	
	  sel = window.getSelection();
	  if(sel.toString() == ''){ //no text selection
		 window.setTimeout(function(){
			range = document.createRange(); //range object
			range.selectNodeContents(el); //sets Range
			sel.removeAllRanges(); //remove all ranges from selection
			sel.addRange(range);//add Range to a Selection.
		},1);
	  }
	

});

function toVariableName(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')       // remove non-alphanumeric chars except space
    .trim()
    .replace(/\s+/g, '_')              // replace spaces with underscores
    .replace(/^(\d)/, '_$1');          // prefix underscore if it starts with a digit
}