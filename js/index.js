async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const character = await result.json();
    console.log(character)
    //const characFilter = character.filter(element => element.id <= 3)
    const characFilter = character.slice(0,1)
    character.forEach(element => {
        for(i = 0; i <= characFilter.length; i ++){
            if(element.id == i){
                const container = document.createRange().createContextualFragment(`
                    
                     <div class="container">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <img class="showcase-img" src="${element.image}" alt="">
                    </div>
                    
                    `)
                    const showcase = document.getElementById('showcase');
                    showcase.append(container);
            }
        }
    });
}

getData();