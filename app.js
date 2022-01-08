
const toggleBtn =document.getElementsByClassName('toggle-button')[0]
const navLink =document.getElementsByClassName('list')[0]
toggleBtn.addEventListener('click',() => {
    navLink.classList.toggle('active')
});
/*----------------------------------*/

function addCard(_HEADING,_DATE,_SUB,_ARTICLE,_type){
    const cardContainer =document.querySelector(".small-container");
    const card = document.createElement("div");
    const heading = document.createElement("h3");
    const subHeading = document.createElement("h4");
    const date = document.createElement("p");
    const article = document.createElement("p");

    card.classList.add(_type);
    card.classList.add("small");
    card.classList.add("card");
    cardContainer.append(card);
    card.append(heading);
    heading.id ="small-heading";
    card.append(date);
    date.id="date";
    card.append(subHeading);
    card.append(article);
    article.id="article";
    heading.innerText=_HEADING;
    date.innerText=_DATE;
    subHeading.innerText=_SUB
    article.innerHTML=_ARTICLE;
}
// ----------------------------------------------------
let text =  fetch("./data.json")
    .then(res=>res.json())
    .then(obj=>{
    
        for(let nu_m=0;nu_m<obj.length;nu_m++){
            console.log(nu_m);

            addCard(obj[nu_m].heading,obj[nu_m].date,obj[nu_m].subheading,obj[nu_m].article,obj[nu_m].type);
        }
    })
