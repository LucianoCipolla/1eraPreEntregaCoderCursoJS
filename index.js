let log_in = (user, password) => {

    let user_signUp = prompt('Ingrese el nombre de usuario para registrarse');
    let password_signUp = prompt('Ingrese la contraseña para registrarse');
    let user_log_in = prompt('Ingrese el nombre de usuario para iniciar sesion');
    let password_log_in = prompt('Ingrese la contraseña para iniciar sesion');

    if (user_signUp == user_log_in && password_signUp == password_log_in) {
        return true;
    }
    else{
        return false;
    }
}

let option = '';
let saldo = 0;


if (log_in()){
    option = prompt("ingrese una opcion:\n 1: ver saldo \n 2: ingresar saldo \n 3: extraer saldo\n 0: salir");
    while (option != 0){
        switch(option){
            case '1':
                alert('tu saldo es: ' + saldo + '$');
                break;
            case '2':
                saldo += Number(prompt('Ingrese la canditad de dinero que desea ingresar'));
                break;
            case '3':
                saldo -= Number(prompt('Ingrese la canditad de dinero que desea extraer'));
                break;
            default:
                alert('Ingrese una opcion valida o "0" para cortar');
                break;
        }
        option = prompt("ingrese una opcion:\n 1: ver saldo \n 2: ingresar saldo \n 3: extraer saldo\n 0: salir");

    }
    alert('Cerrando sesion');
}
else {
    alert('Usuario o contraseña incorrecta');
}