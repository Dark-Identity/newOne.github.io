let inner = document.querySelectorAll(".affiliate");
let wind = document.querySelectorAll("#window");
// let affiliate = document.querySelectorAll(".affiliate");


for (var i = 0; i < inner.length ; i++) {
  inner[i].addEventListener('click' , ()=>{
            wind[0].style.animation = "come 1s ease-in-out forwards";
            window.scrollTo(0,0);
  });
}

// window back btn;

let back = document.querySelectorAll(".bord-back-btn");

  back[0].addEventListener('click', ()=>{

        wind[0].style.animation = "go 1s ease-in-out forwards";
   });
