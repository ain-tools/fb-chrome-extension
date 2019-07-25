if(localStorage.getItem("color")){
    document.getElementById("colorPicker").value = localStorage.getItem("color");
}

if(localStorage.getItem("backgroundColor")){
    document.getElementById("colorPickerBackground").value = localStorage.getItem("backgroundColor");
}

//button listeners
document.getElementById("layout1").addEventListener("click", function () {
    clearLocalStorage();
    refreshPage();
    setTimeout(()=>{
        selectLayout(1);
    });
    localStorage.setItem("selectLayout","1");
});

document.getElementById("layout2").addEventListener("click", function () {
    clearLocalStorage();
    refreshPage();
    setTimeout(()=>{
        selectLayout(2);
    });
    localStorage.setItem("selectLayout","2");
});

document.getElementById("layout3").addEventListener("click", function () {
    clearLocalStorage();
    refreshPage();
    setTimeout(()=>{
        selectLayout(3);
    })
    localStorage.setItem("selectLayout","3");
});

document.getElementById("layout4").addEventListener("click", function () {
    clearLocalStorage();
    refreshPage();
    setTimeout(()=>{
        selectLayout(4);
    })
    localStorage.setItem("selectLayout","4");
});

document.getElementById("allLayouts").addEventListener("click", function () {
    console.log("we")
    document.getElementById("layout4").style.display = "block";
    document.getElementById("allLayouts").style.display = "none";
});

document.getElementById("resetButton").addEventListener("click", function () {
    localStorage.clear();
    clearLocalStorage();
    refreshPage();
});

document.getElementById("colorPicker").addEventListener("input",(e)=>{
    localStorage.setItem("color",document.getElementById("colorPicker").value);
    selectColor(document.getElementById("colorPicker").value);
})

document.getElementById("colorPickerBackground").addEventListener("input",(e)=>{
    localStorage.setItem("backgroundColor",document.getElementById("colorPickerBackground").value);
    selectColorBackground(document.getElementById("colorPickerBackground").value);
})

//emitters

function clearLocalStorage(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {clearLocalStorage: true}, function(response) {});
    });  
}

function refreshPage(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {refreshPage: true}, function(response) {});
    });
}

function selectLayout(number) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {layoutNo: number}, function(response) {});
    });
}

function selectColor(color){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {color: color}, function(response) {});
    });
}

function selectColorBackground(color){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {backgroundColor: color}, function(response) {});
    });
}



