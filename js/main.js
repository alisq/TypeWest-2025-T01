    const fadeSpeed = 150;
    let fonts = [];
    const url = 'https://tw2025.iamasq.works/api/content/items/Revival';

    fetch(url)
      .then(response => response.json())
      .then(p => {
        for(i=0;i<p.length;i++) {
          p[i].identity = i;
          p[i].authorID = p[i]["Student Name"].toLowerCase().replace(" ","").replace(/[^a-z]/g);

        fonts[i] = p[i]
        
        }
      })
    

      
    
      setTimeout(function(){

        //load the meny at the outset.
        for (i=0;i<fonts.length;i++) {
              let item = new Typeface(fonts[i]);
            $("#revivals_menu").append(item.displayMenu)
          }

        
        if  (window.location.hash) {
            aID = window.location.hash.replace("#","");
            loadFont(aID)
            
        } else {
          // console.log(JSON.stringify(fonts))
          for (i=0;i<fonts.length;i++) {
              let item = new Typeface(fonts[i]);
            $("#all_fonts").append(item.displayFile)
          }

        
          loadHome()
        
        }
        }, 200)

        
    

$("#menu_button").click(function(){
    
    
    $(this).toggleClass("active")
    $("#revivals_menu").toggleClass("active")
})


$("#revivals_menu").click(function(){
    $(this).removeClass("active")
    $("#menu_button").toggleClass("active")
})









  $("a.loadHome").click(function(){
    window.location.hash="";
    loadHome();
  })



  

  $(document).on('click','.internal',function(e){
      // e.preventDefault();

      $("#contents").fadeOut(fadeSpeed);
      q = $(this).attr("href").replace("#","");
      console.log(q)
      loadFont(q)

  })


  
  function loadHome() {
    history.replaceState(null, null, window.location.pathname + window.location.search);
    $("#contents").fadeOut(fadeSpeed)
    $("#contents").html("");

    for (i=0;i<fonts.length;i++ ) {
      let item = new Typeface(fonts[i]);
      setTimeout(function(){
        $("#contents").append(item.displayTeaser+"<br />").fadeIn(100)
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
  },100);
}
