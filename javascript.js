let menu_btn=document.getElementById('menu_btn');
let nav_list=document.querySelector('.nav_list')
menu_btn.addEventListener('click',function(){
    if(nav_list.style.display=='block'){
        nav_list.style.display='none'
    }
    else{
        nav_list.style.display='block'
    }
    console.log(nav_list);
})