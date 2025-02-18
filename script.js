/*
() const myFunction =()=>{
       window.alert("você clicou")
} 
       */
      
let lista = document.querySelectorAll(".item");  //Seleciona todos os elementos com a classe "item"
//console.log(lista);

let next = document.getElementById("proximo");  //Seleciona o botão de próximo
let prev = document.getElementById("anterior");  //Seleciona o botão de anterior

let contar = lista.length;  //Conta os elementos da lista
let ativo = 0; // Índice do item ativo

//console.log(contar)
next.onclick=()=>{
    console.log('proximo')
    let desativar = document.querySelector('.ativo');
    desativar.classList.remove('ativo');
    if(ativo>=contar-1){
        ativo=0;
    }else{
        ativo=ativo+1
    }
    lista[ativo].classList.add('ativo');
}


prev.onclick =()=>{
    let desativar = document.querySelector ('.ativo')
    desativar.classList.remove('ativo')
    ativo=ativo-1
    if(ativo>=contar-1){
        ativo=0;
    }else{
        ativo=ativo+1
    }
    lista[ativo].classList.add ('ativo')
}

