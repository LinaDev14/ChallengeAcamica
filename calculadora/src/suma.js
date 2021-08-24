export function sumar(num1, num2, ...num3) {

    let resultado = parseInt(num1) + parseInt(num2);

    num3.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}