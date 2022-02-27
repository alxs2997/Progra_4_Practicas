//ocultar o mostrar div que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');
//Constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem');//input
const addItemButton = document.querySelector('button#addItemButton');//boton
//eliminar ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
 //eleiminar elemento seleccionado
 const removeItem = document.querySelector('button#removeItem');
 //agregar checkbox a cada elemento li
 const myCheckbox = document.getElementById('#mielemento');


//mostrar y ocultar lista
hide.addEventListener('click',() => {
    if (listDiv.style.display == 'none') {
        listDiv.style.display = 'block';
        hide.textContent = '<<';
    } else {
        listDiv.style.display = 'none';
        hide.textContent = '>>';
    }
});
//agregar elementos a la lista
addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); //agregar el elemento a la lista
    addItemInput.value="";

});

//eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
        let list = document.querySelector('ul');
        let li = document.querySelector('li');
        list.removeChild(li);

    })

//obtener index del elemento seleccionado:
function findIndex(elem){
    var i, len = items.length;
    for(i=0; i<len; i++) {
        if (items[i]===elem) {
            return i;
        }
    }
    return -1;
}
    //obtener index del elemento en la lista
    var list = document.getElementById("listItems"),
        items = list.getElementsByTagName("li");
    list.onclick = function(e) {
        var event = e || window.event,
        src = event.target || event.srcElement;
        var myIndex = findIndex(src);
        // alert(myIndex);
        index=myIndex;
        console.log(myIndex);

        //cambiar color del elemento seleccionado
        if (event.target.tagName === 'LI') {
            list.querySelectorAll('li').forEach(el=>el.classList.remove('alert','alert-sucess')); //se agregan clases bootstrap para los elementos
            items[index].classList.add('alert', 'alert-sucess'); 
        }
    };

    //eliminar elemento seleccionado
removeItem.addEventListener('click', () => {
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML= 'Se eliminó el elemento'+ index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de la elerta
    
    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);

//incorporar checkbox a los elementos de una lista
    var list = document.getElementById('mielemento'),
        items = list.getElementsByTagName("li");
        list.onc


})
