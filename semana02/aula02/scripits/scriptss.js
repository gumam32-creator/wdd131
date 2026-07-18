const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("list");
const li = document.createElement("li");
const botaoExclusao = document.createElement('button');






button.addEventListener("click", function() {
    if(input.value.trim()!== ""){
        li.textContent = input.value
        li.append(botaoExclusao)
        list.append(li);
        botaoExclusao.textContent = "X";
    }   
    else{
        input.focus()
    }
})

botaoExclusao.addEventListener("click", function(){
    li.textContent = ""
    li.remove()
})
