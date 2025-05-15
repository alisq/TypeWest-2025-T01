function fitter() {
    $(".container").each(function () {
      const $container = $(this);
      const $text = $container.find(".text");
  
      // Temporarily reset font size to base
      $text.css("font-size", "14px");
  
      const tW = $text.width();
      const cW = $container.width()-40;
      const ratio = cW / tW;
  
      let newSize = 14 * ratio;
  
      if (newSize > 250) {
        newSize = 250;
      }
  
      $text.css("font-size", newSize + "px");
    });
  }



  
  
//   $(document).ready(function () {
//     fitter();
//     $(window).resize(fitter);
//     $(document).keypress(fitter);
//   });
  

$("#menu_button").click(function(){
    
    
    $(this).toggleClass("active")
    $("#revivals_menu").toggleClass("active")
})


$("#revivals_menu").click(function(){
    $(this).removeClass("active")
    $("#menu_button").toggleClass("active")
})






  
  url = 'https://tw2025.iamasq.works/api/content/items/Revival';
fetch(url)
  .then(response => response.json())
  .then(p => {

    
    
    
//p.splice(1,1)
//p.splice(2,1)

for(i=0;i<p.length;i++) {
  p[i].identity = i;
  
  


  let item = new Typeface(p[i]);
  $("#all_fonts").append(item.displayFile)
  $("#menu_fonts").append(item.displayMenu)

  //CREATE CREATE ITEM FOR BOOK MENU
  $("body").append(item.displayTeaser+"<br />")


  
}
  })