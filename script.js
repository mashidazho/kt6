let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};

window.onscroll = () =>{
  if(window.innerWidth < 1200){
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  };
};

let productPreviewContainer = document.querySelector('.products-preview-container');
let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
  detailBtn.onclick = () =>{
    productPreviewContainer.style.display = 'block';
    let name = detailBtn.getAttribute('data-product');
    prodcutPreview.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
       preview.style.display = 'flex';
      };
    });
  };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close =>{
  close.onclick = () =>{
    productPreviewContainer.style.display = 'none';
    prodcutPreview.forEach(closePreview =>{
      closePreview.style.display = 'none';
    });
  };
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.to("#banner",{
  scrollTrigger: {
      scrub:1
  },
  scale: -0.5
})

IMask(
  document.getElementById('phone'),
  {
    mask: '+{7}(000)000-00-00'
  }
)

