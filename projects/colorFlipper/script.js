

function colorGenerator() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    let rgb = colorGenerator();
    const rgbContent = document.querySelector("span");
    rgbContent.style.color = rgb;
    rgbContent.textContent = rgb;
    document.body.style.backgroundColor = rgb;
})