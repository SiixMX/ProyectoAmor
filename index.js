const yesBtn = document.querySelector('#yesBtn');

 yesBtn.addEventListener('click',function () {
    alert('Sabia que si ibas a querer ser mia bb')
 });

 const noBtn = document.querySelector('#noBtn');

 noBtn.addEventListener('mouseover', function () {
    const ramdomX = parseInt(Math.random()+100);
    const ramdomY = parseInt(Math.random()+100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
 })