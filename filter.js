menu.oncick=function myFunc(){
    var x = document.getElementsById('myTopnavv');
    if(x.className=== 'topnav'){
        x.className+='responsive';
    } else{
        x.className='topnav'
    }
}