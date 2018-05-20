var loaded = false;
var visible = true;
function myclick() {
  if (loaded !== true) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.dataset.isso = "https://comments.comment.sh/the-deadman-s-site-1";
    script.src = "https://comments.comment.sh/the-deadman-s-site-1/js/embed.min.js";
    document.getElementsByTagName("body")[0].appendChild(script);
    loaded = true;
  } else {
    if (visible !== true) {
      document.getElementById("isso-thread").style.display = 'unset';
      visible = true;
    } else {
      document.getElementById("isso-thread").style.display = 'none';
      visible = false;
    }
  }

  if (visible === true) {
      document.getElementById("comments_btn").innerText = 'Hide comments';
  } else {
      document.getElementById("comments_btn").innerText = 'Show comments';
  }
  return false;
}
