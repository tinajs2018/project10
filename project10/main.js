var slideIndex=1;
showSlides(slideIndex);
// next and prevoius control
function plusSlide(n){
    showSlides(slideIndex += n);
}
//thumnnail image control
function currentslide(n){
    showSlides(slideIndex=n)
}
function showSlides(n){
    var i;
     var slides=document.getElementsByClassName("myslide ");
     var dots=document.getElementsByClassName('dot');
     if(n > slides .length ){slideIndex =1}
     if( n <1){slideIndex =slideIndex .length}
     for ( i = 0; i < slides .length ; i++){
         slides[i].style .display="none"
     }
for ( i = 0;  i <dots .length ; i++){
    dots[i].className =dots[i].className.replace("active" ,"")
}
slides[slideIndex -1].style .display= 'block';
dots[slideIndex -1].className += "active";
}
