let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null) {
    alert("Button not found.");
} else {
    
    myButton.onclick = function () {
        if(myButton == undefined) return;
        alert("Hello World!");
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