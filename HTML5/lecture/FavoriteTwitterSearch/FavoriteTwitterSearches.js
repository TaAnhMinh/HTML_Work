var tags;
window.addEventListener("load", start, false);

function start() {
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveSearch, false);
    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearAllSearhes, false);
    loadSeaches();
}

function saveSearch() {
    var query = document.getElementById("query");
    var tag = document.getElementById("tag");
    localStorage.setItem(tag.value, query.value);
    //clear tag and query input
    tag.value = "";
    query.value = "";
    loadSeaches(); //reload searches.
}

function clearAllSearhes() {
    localStorage.clear();
    loadSeaches(); //reload searches
}

function loadSeaches() {
    if (!sessionStorage.getItem("herePreviously")) {
        sessionStorage.setItem("herePreviously", true);
        document.getElementById(("welcomeMessage")).innerHTML = "Welcome to the Favorite Twitter Searches App";
    }
    var length = localStorage.length;
    tags=[];
    for(var i =0;i<length;i++){
        tags[i] = localStorage.key(i);
    }
    tags.sort();
    
    var markup = "<ul>";
    var url = "http://search.twitter.com/search?q=";

    for(var tag in tags){

        var query = url+localStorage.getItem(tags[tag]);
        markup+="<li><span><a href = '" +query+"'>" + tags[tag] +"</a></span>" +
        "<input id ='"+tags[tag]+"' type = 'button' value = 'Edit' onclick = 'editTag(id)'>"+
        "<input id ='"+tags[tag]+"' type = 'button' value = 'Delete' onclick = 'deleteTag(id)'>";
    }
    markup+="</ul>";
    document.getElementById("searches").innerHTML = markup;
}

function deleteTag(tag){
    localStorage.removeItem(tag);
    loadSeaches();
}

function editTag(tag){
    document.getElementById("query").value= localStorage[tag];
    document.getElementById("tag").value = tag;
    loadSeaches();

}