$(document).ready(function(){
    let numero = 0;
    let numeroPenf = 0;
    let numeroPm = 0;
    let numeroPs = 0;
    let numeroLm = 0;
    let numeroLmm = 0;
    let numeroLo = 0;



    $(document).on('click', 'input[type="button"]', function(event) {
        let idProducto = this.id;
        numero++;
        cantidadtotales.value = numero;

        if (idProducto == 'btn-penf') {
            numeroPenf++;

            let precioPenf = 12990;
            let valorPenf = precioPenf * numeroPenf;
            let prodPenf = document.getElementById("productos-carrito-penf");
            prodPenf.innerHTML = "<p>" + numeroPenf + " x Planner enfermeria 95 hojas $" + precioPenf;
            prodPenf.innerHTML += "<img src='/img/Enfemera/10.png' alt='tomate' width='80' height='80' ></p>";
            prodPenf.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totPenf = document.getElementById("totales-penf");
            totPenf.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-penf' value=" + valorPenf + " disabled></b></p>";

        } else if (idProducto == 'btn-pm') {
            numeroPm++;

            let precioPm = 12990;
            let valorPm = precioPm * numeroPm;
            let prodPm = document.getElementById("productos-carrito-pm");
            prodPm.innerHTML = "<p>" + numeroPm + " x Planner Matrona 95 hojas $" + precioPm;
            prodPm.innerHTML += "<img src='/img/Matrona/17.png' alt='matrona' width='80' height='80' ></p>";
            prodPm.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totPm = document.getElementById("totales-pm");
            totPm.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-pm' value=" + valorPm + " disabled></b></p>";

        } else if (idProducto == 'bnt-ps') {
            numeroPs++;

            let precioPs = 12990;
            let valorPs = precioPs * numeroPs;
            let prodPs = document.getElementById("productos-carrito-ps");
            prodPs.innerHTML = "<p>" + numeroPs + " x Planner psicologo 95 hojas $" + precioPs;
            prodPs.innerHTML += "<img src='/img/Psicologo/psicologo.png' alt='platano' width='80' height='80' ></p>";
            prodPs.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totPs = document.getElementById("totales-ps");
            totPs.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-ps' value=" + valorPs + " disabled></b></p>";

        } else if (idProducto == 'bnt-lm') {
            numeroLm++;
            let precioLm = 5990;
            let valorLm = precioLm * numeroLm;
            let prodLm = document.getElementById("productos-carrito-lm");
            prodLm.innerHTML = "<p>" + numeroLm + " x Libreta diseño mascota $" + precioLm;
            prodLm.innerHTML += "<img src='/img/Libreta mascota/22.png' alt='pimiento rojo' width='80' height='80'></p>";
            prodLm.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totLm = document.getElementById("totales-lm");
            totLm.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-lm' value=" + valorLm + " disabled></b></p>";

        } else if (idProducto == 'bnt-lmm') {
            numeroLmm++;
            let precioLmm = 5990;
            let valorLmm = precioLmm * numeroLmm;
            let prodLmm = document.getElementById("productos-carrito-lmm");
            prodLmm.innerHTML = "<p>" + numeroLmm + " x Libreta diseño meme psicologia $" + precioLmm;
            prodLmm.innerHTML += "<img src='/img/Libreta memes psicologo/1.png' alt='pimiento rojo' width='80' height='80'></p>";
            prodLmm.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totLmm = document.getElementById("totales-lmm");
            totLmm.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-lmm' value=" + valorLmm + " disabled></b></p>";

        } else if (idProducto == 'bnt-lo') {
            numeroLo++;
            let precioLo = 5990;
            let valorLo = precioLo * numeroLo;
            let prodLo = document.getElementById("productos-carrito-lo");
            prodLo.innerHTML = "<p>" + numeroLo + " x Libreta diseño odontologia $" + precioLo;
            prodLo.innerHTML += "<img src='/img/Libreta odontologia/10.png' alt='pimiento rojo' width='80' height='80'></p>";
            prodLo.innerHTML += "<button class='btn btn-danger' data-item='3' style='margin-left: 1rem;' onclick='eliminarproductos()'>X</button>";

            let totLo = document.getElementById("totales-lo");
            totLo.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' id='total-lo' value=" + valorLo + " disabled></b></p>";

        }



        if ((idProducto == 'bnt-penf') || (idProducto == 'bnt-pm') || (idProducto == 'bnt-ps') || (idProducto == 'bnt-lm') || (idProducto == 'bnt-lmm') || (idProducto == 'bnt-lo')) {

            let cantidad = document.getElementById("cantidad");
            cantidad.innerHTML = "<p class='text-right'> <b>N° productos <span id='total'>" + numero + "</span></b></p><br>";

            let totalPenf = parseInt($("#total-penf").val());
            let totalPm = parseInt($("#total-pm").val());
            let totalPs = parseInt($("#total-ps").val());
            let totalLm = parseInt($("#total-lm").val());
            let totalLmm = parseInt($("#total-lmm").val());
            let totalLo = parseInt($("#total-lo").val());

            if (totalPenf > 0) {
                totalPenf = parseInt($("#total-penf").val());
            } else {
                totalPenf = 0;
            }

            if (totalPm > 0) {
                totalPm = parseInt($("#total-pm").val());
            } else {
                totalPm = 0;
            }
            if (totalPs > 0) {
                totalPs = parseInt($("#total-ps").val());
            } else {
                totalPs = 0;
            }
            if (totalLm > 0) {
                totalLm = parseInt($("#total-lm").val());
            } else {
                totalLm = 0;
            }
            if (totalLmm > 0) {
                totalLmm = parseInt($("#total-lmm").val());
            } else {
                totalLmm = 0;
            }
            if (totalLo > 0) {
                totalLo = parseInt($("#total-lo").val());
            } else {
                totalLo = 0;
            }

            let valorTotales = 0;
            valorTotales = parseInt(totalPenf + totalPm + totalPs + totalLm + totalLmm + totalLo);

            let vTotales = document.getElementById("totales");

            vTotales.innerHTML = "<p class='text-right'> <b>Total a pagar $ <span id='total'>" + valorTotales + "</span></b></p><br>";

            let btnPago = document.getElementById("btn-pago-eliminar");
            btnPago.innerHTML = "<a href='carrito.html' class='btn bntCarrito w-100 m-1'>Finalizar pedido</a>";
            btnPago.innerHTML += "<button class='btn bntCarrito w-100 m-1 btnFinalizar'>Finalizar pedido 2</button>";
            btnPago.innerHTML += "<button class='btn bntVaciar w-100 m-1' onclick='eliminarproductos()'>Vaciar</button>";
        }
    });

});

function eliminarproductos(valor) {
    // Limpiamos los productos guardados
    cantidadtotal.value = "";
    element.value = "";
    total.value = "";
}

function vaciarCarrito() {
    alert("@pasa");
    // Limpiamos los productos guardados
    cantidadtotal.value = "";
    element.value = "";
    total.value = "";
}

function carrito() {
    alert("pasa");
    var idParticipante = $('#total').val();
    alert(idParticipante);
    // let totales1 = document.getElementById("totales");
    // alert(totales1);
    document.location.href = "carrito.html"
}