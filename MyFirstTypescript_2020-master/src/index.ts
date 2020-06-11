let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
//let Butt = document.getElementById("Butt") as HTMLButtonElement | null;
let bookDiv = document.getElementById('bookmarkDiv') as HTMLDivElement | null;
if (myButton == null || bookDiv == null) {
    alert("Button not found.");
} else if (bookDiv == null) {
    alert("Bookmark div not found.");
} else {

    let Butt = document.getElementById("Butt") as HTMLButtonElement | null;
    if (Butt == null) {
        alert("Button not found.");
    } else {
    Butt.remove();
    

    let bmList: Bookmark[] = [];
    for (let i in bmList) {
        let bookmark = document.createElement("button");
        let bmTitle = document.createTextNode(bmList[i].title)
        bookmark.appendChild(bmTitle)
        bookmark.setAttribute("id", "bm" + i);
        bookDiv.appendChild(bookmark);
    }

    var br = document.createElement("br");
        var bmDetails = document.createElement("form");
        
        var optTitle = document.createElement("input");
        optTitle.setAttribute("type", "text");
        var lblTitle = document.createElement("label");
        var titleNode = document.createTextNode("Title");
        lblTitle.appendChild(titleNode);
       
        var optIcon = document.createElement("input");
        optIcon.setAttribute("type", "text");
        var lblIcon = document.createElement("label");
        var iconNode = document.createTextNode("Icon");
        lblIcon.appendChild(iconNode);

        var optUrl = document.createElement("input");
        optUrl.setAttribute("type", "text");
        var lblUrl = document.createElement("label");
        var urlNode = document.createTextNode("Url");
        lblUrl.appendChild(urlNode);

        
        bmDetails.appendChild(lblTitle);
        bmDetails.appendChild(optTitle);
        bmDetails.appendChild(br);
        bmDetails.appendChild(lblIcon);
        bmDetails.appendChild(optIcon);
        bmDetails.appendChild(br);
        bmDetails.appendChild(lblUrl);
        bmDetails.appendChild(optUrl);
    
    
    myButton.onclick = function () {
        if(myButton == undefined || bookDiv == undefined || Butt == undefined) return;
        




        //var butt = document.createElement("button"); 
        //var node = document.createTextNode("Add Bookmark");
        //butt.appendChild(node);
        //butt.setAttribute("id", "butt");
        bookDiv.appendChild(bmDetails);
        bookDiv.appendChild(Butt);
    }

    

        Butt.onclick == function() { //Button currently does not function
            console.log("button has been clicked");
            if(Butt == undefined || bookDiv == undefined) return;
            console.log("button has been clicked");
            let newBookmark = new Bookmark(optTitle.value, optIcon.value, false);
            newBookmark.setUrl(optUrl.value);
            bmList.push(newBookmark);
            bmDetails.remove();

            for (let i in bmList) {
                let bookmark = document.createElement("button");
                let bmTitle = document.createTextNode(bmList[i].title)
                bookmark.appendChild(bmTitle)
                bookmark.setAttribute("id", "bm" + i);
                bookDiv.appendChild(bookmark);
            }
            

        }
}
        
        
    
}

class Bookmark {
    title: string;
    icon: string;
    favourite: boolean;
    url: string;

    constructor(title: string, icon: string, favourite: boolean) {
        this.title = title;
        this.icon = icon;
        this.favourite = favourite;
        this.url = '';
    }

    setUrl(url: string){
        this.url = url;


    }
    getUrl(){
        return this.url;
    }
}