//상수로 저장
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

//버튼을 눌렀을 때 발생하는 이벤트
btn.addEventListener('click', function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

let makeRandomColor=()=>{
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
return `rgb(${r} ,${g} ,${b})`;
}