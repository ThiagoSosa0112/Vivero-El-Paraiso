const dark = "click";
let botonDark = document.getElementById("moon");
botonDark.addEventListener ('click', () => {
        let colorMode1 = document.getElementById("principal");
        colorMode1.className = ("color");
        let header = document.getElementById("top")
        header.className = ("color");
        let titulo = document.getElementById("titulo");
        titulo.className = ("color-white")
        let footer1 = document.getElementById("footer");
        footer1.className = ("color");
        Swal.fire({
                position: 'center',
                imageUrl: 'https://imagenes.elpais.com/resizer/zQBfJuHz9OKR_fVQbafxOqJ6Bqc=/414x0/filters:focal(272x248:282x258)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4RFBIE632CW4U6IG4V44UFHXYU.jpg',
                ImageWidth: '250px',
                ImageHeigth: '250px',
                title: 'Modo noche activado',
                showConfirmButton: false,
                timer: 1500
        })
})
let botonLight = document.getElementById("sun");
botonLight.addEventListener ('click', () => {
        let colorMode2 = document.getElementById("principal");
        colorMode2.className = ("color2");
        let header = document.getElementById("top")
        header.className = ("color2")
        let titulo = document.getElementById("titulo");
        titulo.className = ("color-black")
        let footer2 = document.getElementById("footer");
        footer2.className = ("color2");
        Swal.fire({
          position: 'center',
          imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/596/183/large_2x/blue-sky-and-clouds-wallpaper-background-and-sunny-day-free-photo.jpg',
          ImageWidth: '250px',
          ImageHeigth: '250px',
          title: 'Modo día activado',
          showConfirmButton: false,
          timer: 1500
        })
})
      
 