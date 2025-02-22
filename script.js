const icon = document.getElementById('icon');
        const navlist = document.querySelector('.navlist');

        icon.addEventListener('click', () => {
            navlist.classList.toggle('open');
            icon.classList.toggle('fa-times');
        });

        // -----------slider-------------
        
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slider");
            for (i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length){
                slideIndex = 1
            }
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3000);
        }


function fun() {
  let productContainer = document.getElementById("product-container");

  for (let i=0; i<=20; i++) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="1687604584.jpg" alt="" width="150px">
<div class="product-list">
  <span class="name">crisight ARC</span>
  <span class="price">Rs650</span>
</div>
<a href="" class="img-btn">Buy At Home</a>
</div>`;
productContainer.appendChild(div);
  }
}

function fun1() {
    let productContainer = document.getElementById("product-container");
  
    for (let i=0; i<=20; i++) {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="16895940072976.jpg" alt="" width="150px">
  <div class="product-list">
    <span class="name">crisight ARC</span>
    <span class="price">Rs650</span>
  </div>
  <a href="" class="img-btn">Buy At Home</a>
  </div>`;
  productContainer.appendChild(div);
    }
  }

  function fun2() {
    let productContainer = document.getElementById("product-container");
  
    for (let i=0; i<=20; i++) {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="1687605601.jpg" alt="" width="150px">
  <div class="product-list">
    <span class="name">CW Matt black</span>
    <span class="price">Rs650</span>
  </div>
  <a href="" class="img-btn">Buy At Home</a>
  </div>`;
  productContainer.appendChild(div);
    }
  }

  function fun3() {
    let productContainer = document.getElementById("product-container");
  
    for (let i=0; i<=20; i++) {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="16896252585078.jpg" alt="" width="150px">
  <div class="product-list">
    <span class="name">CW Matt black</span>
    <span class="price">Rs650</span>
  </div>
  <a href="" class="img-btn">Buy At Home</a>
  </div>`;
  productContainer.appendChild(div);
    }
  }

  
