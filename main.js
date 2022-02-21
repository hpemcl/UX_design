var numbers=[10,20,30,40,50];
var key=document.getElementById ('key')
var but=document.getElementById ('sb')

function searchfun(){
    if(numbers.indexOf(Number(keys.value)) ==-1){
        document.write(key.value+"<b> Not Found");
    }
    else{
        document.write("<b>Element found at "+(Number(keys.value))+" Positon</b>")
    } 
}


// Get Variables
var searchBox = document.getElementById('topSearch');
var searchBoxExtra = document.getElementById('search-extra');
var icon = document.getElementById('btn-search');
var mobileSearch = document.getElementsByClassName('mobile-search')[0];
// On page load the main (full width search box) search display to none
searchBox.style.display = 'none';

// Create media query 
if (matchMedia) {
    const x = window.matchMedia('(max-width: 946px)');
    x.addListener(viewScreen);
    // call function this function is only to check the size of screen
    viewScreen(x)
}
// viewScreen
function viewScreen(x){
    // for the small screen
    if (x.matches) {
        // When the screen matches media query
        // show the small search box
        mobileSearch.style.display = 'block';
        //Hidden the main search box icone (full width search box)
        icon.style.display = 'none';
    } else{
        // Big screen or the screen with the size of more then 946px
        // Hidden the small search box (or mobile search box)
        mobileSearch.style.display = 'none';
        // onckick the icon show the search box
        icon.addEventListener('click', ()=>{
            // Check if the search box display = none and change it to block
            if (searchBox.style.display == 'none') {
                searchBox.style.display = 'block';
            } else{
                searchBox.style.display = 'none';
            }
        })
    }
}