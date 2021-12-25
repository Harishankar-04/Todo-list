const inbox=document.querySelector(".inputfield input");
const addbtn=document.querySelector(".inputfield button");
const itemlist=document.querySelector(".list");
const clear=document.querySelector(".footer button");
const count=document.querySelector(".footer button");
const delte=document.querySelector(".list i");
inbox.onkeyup=()=>{
    let userdta=inbox.value;
    if(userdta.trim()!=0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
}
addbtn.onclick=()=>{
    let userdta=inbox.value;
    let locstore=localStorage.getItem("new todo");
    if(locstore==null){
        list=[];
    }
    else{
        list=JSON.parse(locstore);
    }
    list.push(userdta);
    localStorage.setItem("new todo",JSON.stringify(list));
    updatelist();
   

}
function updatelist(){
    
    let locstore=localStorage.getItem("new todo");
    if(locstore==null){
        ullist=[];
    }
    else{
        ullist=JSON.parse(locstore);
    } 
    newlist=''; 
    const ctn=document.querySelector('.ctn');
    ctn.innerHTML=ullist.length;
    var c=0;
   ullist.forEach((element,index) => {
       c+=1;
       newlist+='<li style="list-style-type: none;">'+element+'  <span onclick="deletetask('+index+')"><i class="fa fa-trash"></i></li>';
      
   });
   itemlist.innerHTML=newlist;
}
clear.onclick=()=>{
    let locstore=localStorage.getItem("new todo");
    list=[];
    localStorage.setItem("new todo",JSON.stringify(list));
    updatelist();
}
function deletetask(index){
    let userdta=inbox.value;
    let locstore=localStorage.getItem("new todo");
    list=[];
    list=JSON.parse(locstore);
    list.splice(index,1);
    localStorage.setItem("new todo",JSON.stringify(list));
    updatelist();


}