chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.layoutNo) {
            changeLayout(request.layoutNo);
        }else if(request.refreshPage){
            location.reload();
        }else if(request.clearLocalStorage){
            localStorage.clear();
        }else if(request.color){
            changeColor(request.color);
        }else if(request.backgroundColor){
            changeColorBackground(request.backgroundColor);
        }else if(request.changedPath){
            reloadLayout();
        }else if(request.undoLayout){
            undoLayout();
        }else if(request.reloadColors){
            reloadColors();
        }
    }
);

//saved options
if(window.location.href == "https://www.facebook.com/"){
    localStorage.removeItem("reloaded");
    reloadLayout();
}else if(localStorage.getItem("reloaded") != "true"){
    localStorage.setItem("reloaded","true");
    location.reload();
}
//reloadLayout();
reloadColors();

function reloadLayout(){
    if (localStorage.getItem("selectLayout") == "1") {
        changeLayout(1);
    } else if (localStorage.getItem("selectLayout") == "2") {
        changeLayout(2);
    } else if (localStorage.getItem("selectLayout") == "3") {
        changeLayout(3);
    } else if (localStorage.getItem("selectLayout") == "4") {
        changeLayout(4);
    } 
}

function reloadColors(){
    if(localStorage.getItem("color")){
        changeColor(localStorage.getItem("color"));
    }
    if(localStorage.getItem("backgroundColor")){
        changeColorBackground(localStorage.getItem("backgroundColor"));
    }
}

//functionalities

function changeColor(color){
    localStorage.setItem("color",color);
    document.getElementsByClassName("_2t-a _50tj")[0].style.backgroundColor = color;
}

function changeColorBackground(color){
    localStorage.setItem("backgroundColor",color);
    document.getElementById("content_container").style.backgroundColor = color;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

function changeLayout(select) {
    document.getElementsByTagName("body")[0].style.width = "1530px";
    if (select == 1) {
        if(document.getElementsByClassName("fixed_elem")[0]){
            document.getElementsByClassName("fixed_elem")[0].remove();
        }
        if(document.getElementById("rightCol")){
            document.getElementById("rightCol").remove();
        }
        if(document.getElementsByClassName("fbChatSidebar")[0]){
            document.getElementsByClassName("fbChatSidebar")[0].style.left = "5px";
            document.getElementsByClassName("fbChatSidebar")[0].style.width = "15vw";
        }
        if(document.getElementById("contentArea")){
            document.getElementById("contentArea").style.cssText = "width:80vw !important;margin-left:15vw !important";
        }
        localStorage.setItem("selectLayout", "1");
    } else if (select == 2) {
        if(document.getElementsByClassName("_64a")[0]){
            document.getElementsByClassName("_64a")[0].remove();
        }
        if(document.getElementsByClassName("fbChatSidebar")[0]){
            document.getElementsByClassName("fbChatSidebar")[0].style.width = "15vw";
        }
        if(document.getElementById("contentArea")){
            document.getElementById("contentArea").style.cssText = "width:55vw !important;margin-left:25vw !important";
        }
        localStorage.setItem("selectLayout", "2");
    } else if (select == 3) {
        if(document.getElementsByClassName("fixed_elem")[0]){
            document.getElementsByClassName("fixed_elem")[0].remove();
        }
        if(document.getElementById("rightCol")){
            document.getElementById("rightCol").remove();
        }
        if(document.getElementsByClassName("fbChatSidebar")[0]){
            document.getElementsByClassName("fbChatSidebar")[0].remove();
        }
        if(document.getElementById("contentArea")){
            document.getElementById("contentArea").style.cssText = "width:90vw !important;margin-left:5vw !important";
        }
        localStorage.setItem("selectLayout", "3");
    }else if (select == 4) {
        if(document.getElementsByClassName("fixed_elem")[0]){
            document.getElementsByClassName("fixed_elem")[0].remove();
        }
        if(document.getElementById("rightCol")){
            document.getElementById("rightCol").remove();
        }
        if(document.getElementsByClassName("fbChatSidebar")[0]){
            document.getElementsByClassName("fbChatSidebar")[0].style.width = "15vw";
        }
        if(document.getElementById("contentArea")){
            document.getElementById("contentArea").style.cssText = "width:80vw !important;";
        }
        localStorage.setItem("selectLayout", "4");
    }
}

function undoLayout(){
    var currentURL = window.location;
    if (currentURL.href != "https://www.facebook.com/") {
        location.reload();
    }else{
        reloadLayout();
        reloadColors();
    }
}