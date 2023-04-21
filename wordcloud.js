let wordCloudContainer = document.getElementById("wordCloudContainer")
wordCloudContainer.classList.add("container","p-3","vh-100","d-flex","flex-column","justify-content-between")
document.body.appendChild(wordCloudContainer);
let resultContainer = document.createElement("div");
resultContainer.classList.add("row")
wordCloudContainer.appendChild(resultContainer);

let rowContainer = document.createElement("div");
rowContainer.classList.add("row");

let colContainer = document.createElement("div");
colContainer.classList.add("col-12","text-center")

let errorPara = document.createElement("p");
errorPara.style.color = "#f62c3b"
errorPara.style.fontSize = "14px"
colContainer.appendChild(errorPara);

let inputEl = document.createElement("input");
inputEl.type = "text"
inputEl.classList.add("form-control","border-dark","w-100");
colContainer.appendChild(inputEl);

let addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.classList.add("btn","btn-primary","mt-2")
colContainer.appendChild(addBtn)

rowContainer.appendChild(colContainer);
wordCloudContainer.appendChild(rowContainer);

let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

function createAndAppend(word){
    let spanEl = document.createElement("span");
    let fontEl = Math.ceil(Math.random()*70)
    spanEl.style.fontSize = fontEl + "px";
    spanEl.textContent = word;
    spanEl.classList.add("m-2")
    resultContainer.appendChild(spanEl);
};
for(let word of wordCloud){
    createAndAppend(word);
};

addBtn.onclick = ()=>{
    // inputEl.value === "" ? errorPara.textContent = "Please enter a word" : createAndAppend(word), word = inputEl.value, errorPara.textContent = "";
    if(inputEl.value === ""){
        errorPara.textContent = "Please enter a word"
    }else{
        let word = inputEl.value;
        createAndAppend(word);
        errorPara.textContent = "";
        inputEl.value  = "";
    }
}
inputEl.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        if(inputEl.value === ""){
            errorPara.textContent = "Please enter a word"
        }else{
            let word = inputEl.value;
            createAndAppend(word);
            errorPara.textContent = "";
            inputEl.value  = "";
        }
    }
})