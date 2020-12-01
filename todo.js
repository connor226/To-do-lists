let addhere = document.getElementById("todo-list");
let input = document.getElementById("todo-input");
let left_count = document.getElementById("left_count");

let cnt = 1;

input.addEventListener('keydown',() => {
    if(event.keyCode == 13){
        let newli = document.createElement("li");
        newli.className ="todo-app__item";
        let newdiv = document.createElement("div");
        newdiv.className = "todo-app__checkbox";
        let newinp = document.createElement("input");
        newinp.type = "checkbox";
        newinp.id = cnt;
        let newlab = document.createElement("label");
        newlab.htmlFor = cnt;
        newdiv.appendChild(newinp);
        newdiv.appendChild(newlab);
        let newh = document.createElement("h1");
        newh.className = "todo-app__item-detail";
        newh.innerText = input.value;
        let newimg = document.createElement("img");
        newimg.className = "todo-app__item-x";
        newimg.src = "https://i.imgur.com/WEmujWK.png";
        newimg.id = "img" + cnt;
        cnt ++;
        newli.appendChild(newdiv);
        newli.appendChild(newh);
        newli.appendChild(newimg);
        addhere.appendChild(newli);
        input.value = "";
        left_count.innerText = cnt;// to be modified
    }
})