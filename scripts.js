const select = document.querySelector('.animation');
const inner = select.textContent;
const split = inner.split('');
select.innerHTML = ""

for(i =0; i< split.length;i++){
    select.innerHTML += "<span>" + split[i] + "</span>"
}
let time = setInterval(func1 , 50);
let char = 0
function func1(){
    const span = select.querySelectorAll("span")[char];
    span.classList.add('fade');
    char ++;
    if(char == split.length){
        complete()
        return;
    }


}
function complete(){
    clearInterval(time);
    time = null;
}

