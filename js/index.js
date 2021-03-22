function dropdown() {
  document.getElementById("userMenu").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var userMenu = document.getElementById("userMenu");
    if (userMenu.classList.contains('show')) {
      userMenu.classList.remove('show');
    }
  }
}