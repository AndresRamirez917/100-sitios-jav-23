async function getData() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const characFilter = character.results.filter(element => element.id == 1)
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    //const characFilter = character.slice(0,1)
    character.results.forEach(element => {
        const randomInt = randomImage(1, jsonArr.length);
        const randonIndex = randomInt;
        for(i = 0; i <= characFilter.length; i ++){
            if(element.id == i){
                const container = document.createRange().createContextualFragment(`
                    
                     <div class="container">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <img class="showcase-img" src="${jsonArr[randonIndex][8][1]}" alt="">
                    </div>
                    
                    
                    `)
                    const showcase = document.getElementById('showcase');
                    showcase.append(container);
            }
          
        }
    });
    function randomImage(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

async function getData2() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const characFilter = character.results.filter(element => element.id <=2)
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    //const characFilter = character.slice(0,1)
    character.results.forEach(element => {
        const randomInt = randomImage(1, jsonArr.length);
        const randonIndex = randomInt;
        for(i = 0; i <= characFilter.length; i ++){

            if(element.id == i){
                const service_img = document.createRange().createContextualFragment(`
                    
                    <div class="services-row-${i}">
                        <div class="madre">
                            <img src="${jsonArr[randonIndex][8][1]}" alt="" class="services-img-${i}">
                            <p class="services-text-${i}">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt voluptate officia beatae nam hic dolores! Vitae eaque adipisci doloremque odit itaque impedit iste exercitationem mollitia aliquam quas hic, voluptate repellendus consectetur quam nostrum numquam sequi ullam. Esse molestiae, soluta ab numquam in suscipit consectetur ullam. Nobis nostrum accusamus unde!
                            </p>
                        </div>
                    </div>
                    
                    `)
                    
                    const madre = document.getElementById('services');
                    madre.append(service_img);
                }
          
        }
    });
    function randomImage(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}


const btn_validar = document.getElementById('btn-validar');

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${arrMessages[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

getData();
getData2()
btn_validar.addEventListener("click", validar)
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}