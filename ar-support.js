function receiveMessage(e) {
    if ("https://staging.arwidget.lab.mobi" === e.origin) {
        console.log(e.data);
        var t = JSON.parse(e.data);
        switch (t.type) {
            case "INSERT_MODAL":
                document.body.insertAdjacentHTML("beforeend", t.modalFrame);
                break;
            case "OPEN_MODAL_ON_DESKTOP":
                document.getElementById(t.modalId).style = "display:block; position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";
                break;
            case "CLOSE_MODAL_ON_DESKTOP":
                document.getElementById(t.modalId).style = "display:none";
        }
    } else console.log("wrong turn");
}
window.addEventListener("message", receiveMessage, !1);
