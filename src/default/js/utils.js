if(!window.utils){
    window.utils = {};
}


utils.encodeHtml = function(str){
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.innerText;
};


