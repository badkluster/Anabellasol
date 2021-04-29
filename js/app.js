//AGRADECIMIENTO
alertaAgradecimiento = document.getElementById("alertSuccessA")
cerrarmsg = document.getElementById("cerrarmsg")

function agradecimiento() {
     alertaAgradecimiento.classList.add("show")
     alertaAgradecimiento.classList.remove("hide")
     cerrarmsg.addEventListener("click", function () {
          alertaAgradecimiento.classList.add("hide")
          
     })
     
}

// MENU RESPONSIVE
var  btnMenuOpen = document.getElementById("btnMenuOpen"),
     btnMenuClose = document.getElementById("btnMenuClose"),
     menuResponsive = document.getElementById("menuBar"),
     enlaces = document.getElementById("enlaces");

     // Click abrir
     btnMenuOpen.addEventListener("click", function () {//AGREGO ACCION CLICK Y FUNCION
          menuResponsive.classList.add("active");
     });//CUANDO LE DAS CLICK A BTN LE AGREGAS LA CLASE ACTIVE AL MENU (PARA QUE APAREZCA)
     //TAMBIEN SE PUEDE USAR CLASSNAME ="ACTIVE" PARA DARLE OTRA CLASE

     // Click cerrar
     btnMenuClose.addEventListener("click", function () {
          menuResponsive.classList.remove("active");//SACAR CLASE ACTIVE
     });

     // Cerrar menu con elementos de enlace
     enlaces.addEventListener("click", function () {
          menuResponsive.style.transitionDelay = "0.5s";//LE DOY ESTILO AL CERRAR ELEMENTOS DE ENLACE EPERA 5 S Y CIERRA
          menuResponsive.classList.remove("active");//CIERRA EL MENURESPONSIVE
     });



// SLIDER DE PRODUCTOS
var  contenedor = document.querySelector('.slider'),//ACCEDE A LA CLASE OTRA MANERA ID CLASE O CUALQUIER ELEMENTO
     btnIzquierdo = document.getElementById("btn-izquierda"),
     btnDerecho = document.getElementById("btn-derecha");

     // EVENTO PARA EL BOTON DERECHO
     btnDerecho.addEventListener("click", function () {
          contenedor.scrollLeft += contenedor.offsetWidth; //SCROLLLEFT (SABE CUANDO REALIZA SCROLL DE IZQ A DERECHA) 
     });   
     //+-CONTENEDOR.OFFSETWIDTH SEA IGUAL + TAMAÑO TOTAL DEL ELEMENT OFFSET... ES EL TAMAÑO TOTAL 

     // EVENTO PARA EL BOTON IZQUIERDO
     btnIzquierdo.addEventListener("click", function () {
          contenedor.scrollLeft -= contenedor.offsetWidth;  
     });

     //SE CREA EN ESTILOS CSS EL ESTILO SCROOL-BEHEAVER (SMOOT = LEVE ANIMACION)



// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

     function validar(e) {
          var  inputNombre = document.getElementById("nombre"),
               inputEmail = document.getElementById("email"),
               inpuComents = document.getElementById("comentarios"),
               alertSuccess = document.getElementById("alertSuccess"),
               alertError = document.getElementById("alertError");

          if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
               e.preventDefault();//QUITO EL EVENTO DE ENVIAR AL FORMULARIO
               alertError.classList.remove("hide");
               alertError.classList.add("show");

               setTimeout(function() {
                    alertError.classList.remove("show");
                    alertError.classList.add("hide"); 
               }, 2000);     
          }else{
               e.preventDefault();
               alertSuccess.classList.remove("hide");
               alertSuccess.classList.add("show");

               setTimeout(function() {
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide"); 
               }, 2000);               
               inputNombre.value = "";
               inputEmail.value = "";
               inpuComents.value = "";
          }
     }


// Eventos del formulario
formulario.addEventListener("submit", validar); //CUANDO SE HAGA SUMIT VA A IR A LA FUNCION VALIDAR

//ADDEVENTLISTENER ADJUNTA EVENTO Y TIENE DOS PARAMETROS EL EVENTO Y LO QUE VA A HACER 
//PUEDE TENER FUNCION, O LLAMAR UNA FUNCION




// BOTON SCROLL TOP
var  btnTop = document.getElementById("btn-top"),
     logo = document.getElementById("logo");


// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function (){
     var  scroll = document.documentElement.scrollTop,//me dice la medida de scroll completo llama al scroll
          fullSize = document.documentElement.offsetHeight,//tamaño de pantalla completa
          sizeVP = document.documentElement.clientHeight;//tamaño de pagina lo que ve el cliente

          //si la pantalla completa es igual a tamaño de escroll mas sizevp. entonces remueve scroll final


     if (scroll > 100) {
          btnTop.classList.add("show");
     }else{
          btnTop.classList.remove("show");
     }

     // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
     if (fullSize == (scroll + sizeVP)) {
         btnTop.classList.add("scrollFinal"); 
     }else{
          btnTop.classList.remove("scrollFinal");
     }
});


// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
     window.scrollTo(0,0);//scroollTO tiene dos valores eje x y- me sube para arriba cuadno ahce click
});

// DETECTAR EVENTO CLIC EN EL LOGO
logo.addEventListener("click", function () {
     window.scrollTo(0,0);
});