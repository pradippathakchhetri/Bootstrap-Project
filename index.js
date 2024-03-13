function changeCodeeditorimg1(){
    document.getElementById("codeeditorimg").src="/image/codeeditor (1).gif";
    let x =document.getElementById("btn-backend-tab");
    x.style.backgroundColor="rgb(241,241,241)";
    x.style.color="black";
    let y = document.getElementById("btn-frontend-tab");
    y.style.color="white";
    y.style.backgroundColor="rgb(56,68,77)";
    }
function changeCodeeditorimg2(){
    document.getElementById("codeeditorimg").src="/image/best2.gif";
    document.getElementById("btn-backend-tab").style.backgroundColor="rgb(56,68,77)";
    document.getElementById("btn-backend-tab").style.color="white";
    document.getElementById("btn-frontend-tab").style.color="black";
    document.getElementById("btn-frontend-tab").style.backgroundColor="rgb(241,241,241)";
    }
    function scrolltoleft(){
        document.getElementById("typesoftopic").scrollBy(40,0);
    }
    function scrolltoright(){
        document.getElementById("typesoftopic").scrollBy(-40,0);
    }

