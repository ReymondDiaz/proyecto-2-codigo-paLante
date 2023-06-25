const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
const li= document.querySelectorAll('.li');


button.addEventListener('click',()=>{
    nav.classList.toggle('active')
});

li.forEach(function(item) {
    item.addEventListener('click', function(e){
        const currenItem = document.querySelector('.active');
        currenItem.classList.remove('active');
        e.target.classList.add('active');
    });
});