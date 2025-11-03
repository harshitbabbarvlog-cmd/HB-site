// simple vanilla lightbox
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click',()=>{
    const img=card.querySelector('img').src;
    const price=card.dataset.price;
    const lb=document.createElement('div');lb.id='lightbox';
    lb.innerHTML=`<span class="close">&times;</span><img src="${img}"><div class="price">${price}</div>`;
    document.body.appendChild(lb);lb.style.display='flex';
    lb.querySelector('.close').onclick=()=>lb.remove();
  });
});
