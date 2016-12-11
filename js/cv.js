
function view_road_map() {
  intro.className = intro.className + ' invisible';
  about_me.className = about_me.className + ' activated';
  setTimeout(function(){intro.remove()}, 1000);
}
