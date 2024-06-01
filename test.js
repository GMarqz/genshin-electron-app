console.log("É O ELECTRON GARAI KKKk");

const btn = document.querySelector('.btn');
let btnMode = false;

btn.addEventListener('click', () => {
    const body = document.body;
    const cssH = document.querySelector('.heading')
    function createHeading(){
        const h2 = document.createElement("H2");
        h2.className = 'heading';
        h2.textContent = 'É O ELECTRON GARAI KKKk';
        body.appendChild(h2)
    }
    if(btnMode == false && !cssH){
        createHeading()
        return btnMode = true;
    } else if(btnMode == true && cssH) {
        cssH.remove()
        return btnMode = false;
    }
})