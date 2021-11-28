(function () {

    let navListId = "nav-list";
    let navListItemId = "nav-list-item-"
    let navListItemContent = "nav-list-item-content-"
    let navSectionNames = ["Home", "About", "Photos","Contact"]
    let navSectionIcons = ["fas fa-home","fas fa-portrait","fas fa-eye","fas fa-envelope"];
    $("<ul/>", {id:navListId}).addClass("navigation-bar-list").appendTo("#navigation-bar");

    for (let i = 0; i < navSectionNames.length ; i++) {
        $("<li/>", {id:`${navListItemId+i}`}).addClass("navigation-bar-list-item").appendTo(`#${navListId}`);
        
        $("<a/>", {id:`${navListItemContent+i}`}).addClass("navigation-bar-list-item-content").appendTo(`#${navListItemId+i}`);
        $("<i/>").addClass(`${navSectionIcons[i]}`).appendTo(`#${navListItemContent+i}`);
        $("<p/>").text(`${navSectionNames[i]}`).appendTo(`#${navListItemContent+i}`);

        
       

        console.log(navSectionNames[i]);
    }
    
    



})();