let cl = console.log;
let headings = document.querySelectorAll(".accoheading");
let accordiancontent = document.querySelectorAll(".accordianBody > p");

headings = Array.from(headings);
accordiancontent = Array.from(accordiancontent);

headings.forEach(ele => {
    ele.addEventListener("click", onclick);
    cl(ele)
})


function onclick(event) {
    removeactive();
    hideaccordinanPara();
    event.target.classList.add("active");
    const id = event.target.dataset.uniqueid;
    cl(event.target);
    let selectedPara = document.getElementById(id);
    selectedPara.classList.add("activecontent");
    // document.getElementById(event.target.dataset.uniqueid).classList.add("activecontent")
}

function removeactive() {
    headings.forEach(ele => {
        ele.classList.remove("active");
    })
}

function hideaccordinanPara() {
    accordiancontent.forEach(ele => {
        ele.classList.remove("activecontent");
    })
}