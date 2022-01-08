console.log("hello")
function getData()
{

    let name = document.getElementById("name").value;
    let heading = document.getElementById("heading").value;
    let subheading = document.getElementById("subheading").value;
    let article = document.getElementById("article").value;
    let type = document.getElementById("type").value;
    
    let array = [];
    array.push(name,heading,subheading,article,type);
    const objarray = { name : array[0] ,type:array[4],heading:array[1],date:"2022",subheading:array[2],article:array[3] }
    let myarray = JSON.stringify(objarray);
    let jsnarray = JSON.parse(myarray);
    //----------------------
    let text =  fetch("./data.json",{
    })
        .then(res=>res.json())
        .then(obj=>{
        obj.push(jsnarray);
        //save this file 
    })
    //----------------------
    // console.log(jsnarray);
}
