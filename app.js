
function acces() {
    let name = $("#name").val(),
        last = $("#apell").val(),
        pass = $("#pass").val();
    
    if(name === "Valeria" && last === "Ruiz" && pass === "ruiz1") {  
        
         window.open ('home.html');
        } else {
        alert('Datos incorrectos');
    }
}

function access(){
    window.open('home.html');
}
;

/*function fibonacci(n) {
    if (n <= 1) {
        return n;
    } 
else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Imprimir los primeros 10 números de la serie de Fibonacci
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}*/
