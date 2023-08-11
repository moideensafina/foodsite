const buttons=document.querySelectorAll(".btn");
const boxcard=document.querySelectorAll(".box-card")
const boxes=document.querySelectorAll(".box");
const searchbox=document.querySelector("#search");
buttons[0].classList.add("btn-clicked")

searchbox.addEventListener("keyup",(event)=>{
    searchvalue=event.target.value.toLowerCase().trim()
    boxcard.forEach((box)=>{
        let data=box.dataset.item;
        if (data.includes(searchvalue)) {
            box.style.display="block"
        }
        else{
            box.style.display="none";
        }
    })
    buttons[0].classList.add("btn-clicked")

})
buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        setActivebtn(event);
        const btnfilter=event.target.dataset.filter;
        boxcard.forEach((box)=>{
            if (btnfilter=='all') {
                box.style.display="block"
               }
           else{
            const boxfilter=box.dataset.list;
                if (btnfilter==boxfilter) {
                    console.log("true");
                    box.style.display="block";
                }
                else{
                    box.style.display="none";
                }
           }   
        })
    })
})
function setActivebtn(event){
    buttons.forEach((button)=>{
        button.classList.remove("btn-clicked")
    })
    event.target.classList.add("btn-clicked")
}