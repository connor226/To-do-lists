
let addhere = document.getElementById("todo-list");
let input = document.getElementById("todo-input");
let left_count = document.getElementById("left_count");
let All = document.getElementById("view_0");
let Active = document.getElementById("view_1");
let Completed = document.getElementById("view_2");
let foot = document.getElementById("todo-footer");
let matrix = foot.parentNode;

let cnt = 0;
let deleted = 0;
let lilist = [];

matrix.removeChild(foot);

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
        lilist.push(newli);
        input.value = "";
        left_count.innerText = cnt - deleted;
    }
    if(cnt - deleted == 1)  matrix.appendChild(foot);
})

addEventListener("mousedown",()=>{
    let i;
    for(i = 0; i < cnt; i ++){
        let bb = document.getElementById("img" + i);
        if(bb == null)  return ;
        bb.onclick = () =>{
            let tmp = bb.parentNode;
            addhere.removeChild(tmp);
            deleted ++;
            left_count.innerText = cnt - deleted;
            if(cnt - deleted == 0)  matrix.removeChild(foot);
        }
    }
})
/*
All.onclick = () =>{
    
}
*/

