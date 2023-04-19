

let nube1 = document.getElementById('nube1')
let nube2 = document.getElementById('nube2')
let nubesota = document.getElementById('nubesota')



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    nube1.style.left = value* -3  + 'px';
    nube2.style.left = value* 3  + 'px';
    nubesota.style.top = value* 3  + 'px';
  
})

