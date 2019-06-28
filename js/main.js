document.addEventListener("DOMContentLoaded", function(event) { 
  var menu = document.getElementById('menu');
  menu.onclick = function(e){
      if(menu.classList.contains('hideBox')){
          menu.classList.remove('hideBox');
          menu.classList.add('showBox');
      }else if(menu.classList.contains('showBox')){
          menu.classList.remove('showBox');
          menu.classList.add('hideBox');
      }else{
          menu.classList.add('hideBox');
      }
      
  }
});