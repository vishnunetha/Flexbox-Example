function toggleDropdown(){
    let a = document.getElementById("navbar-toggle");
    if(a.className=="topnav"){
        a.className = a.className+" responsive";
    }
    else{
        a.className="topnav";
    }
}