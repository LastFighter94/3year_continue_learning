const init = (el, backgroundColor) => {
    let btn = document.createElement('button');
    btn.innerText = "Click me!!!"

    if (backgroundColor){
        btn.style.backgroundColor = backgroundColor;
    }

    el.appendChild(btn)
}

export default init
