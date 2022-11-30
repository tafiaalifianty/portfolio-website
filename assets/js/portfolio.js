function displayAll(){
    let element = document.getElementsByClassName("portfolio-item");
    for (const elementElement of element) {
        elementElement.style.display = "block";
    }
}

document.getElementById("all-pics-btn").addEventListener("click", () => {
    displayAll();
    let element = document.getElementsByClassName("portfolio-item");
    for (const elementElement of element) {
        elementElement.style.display = "block";
    }
});

document.getElementById("web-design-btn").addEventListener("click", () => {
    displayAll();
    let element = document.getElementsByClassName("portfolio-item");
    for (const elementElement of element) {
        if(!elementElement.classList.contains("web-item")){
            elementElement.style.display = "none";
        }
    }
});

document.getElementById("mobile-app-btn").addEventListener("click", () => {
    displayAll();
    let element = document.getElementsByClassName("portfolio-item");
    for (const elementElement of element) {
        if(!elementElement.classList.contains("mobile-item")){
            elementElement.style.display = "none";
        }
    }
});

document.getElementById("ui-design-btn").addEventListener("click", () => {
    displayAll();
    let element = document.getElementsByClassName("portfolio-item");
    for (const elementElement of element) {
        if(!elementElement.classList.contains("ui-item")){
            elementElement.style.display = "none";
        }
    }
});
