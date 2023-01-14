// const linkPerfil = document.getElementById("link-perfil");
// const navPerfil = document.getElementById("nav-perfil");
// const linkPerfilDados = document.getElementById
// ("link-perfil-dados")
// const modificar = document.getElementById("modificar")


// linkPerfil.addEventListener("mouseover", ()=> {
//   navPerfil.style.display = "block"
// })

// window.document.addEventListener("keyup",(e)=>{
//   console.log(e.key);
//   console.log(e.code);

//   if(navPerfil.style.display == "block"){
//     if(e.code == "Digit1"){
//       linkPerfilDados.click
//     }
//   } else if(e.code == "Digit1"){
//     console.log("Abrir navegação secundaria")
//     navPerfil.style.display = "block";
//     }
// })
// document.getElementById("keypress", (e).code)
// console.log(e.code)

const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");
const modificar = document.getElementById("modificar");


linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup",(e)=>{
  console.log(e.key);
  console.log(e.code);
  if(navPerfil.style.display == "block"){
    if(e.code == "Digit1"){
      linkPerfilDados.click()
    }
  } else if(e.code == "Digit1"){
    console.log("Abrir navegação secundaria")
    navPerfil.style.display = "block"
  }
})
document.getElementById("keyup", (e)=>{

  if(e.code == "Backspace")
  modificar.click()
  
})
