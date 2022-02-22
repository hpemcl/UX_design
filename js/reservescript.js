// https://codepen.io/chabzz/pen/mVYVpY

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
        setTimeout( function() {
            $(id).style.display ='none'}, 1500);
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }