const usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];
        const contrasenas = ["password1", "password2", "password3", "password4", "password5"];

        let intentosRestantes = 5;

        function validarAcceso() {
            const usuarioInput = prompt("Introduce tu nombre de usuario:");
            const contrasenaInput = prompt("Introduce tu contraseña:");

            if (intentosRestantes <= 0) {
                alert("Has agotado tus intentos. Acceso bloqueado.");
                return;
            }

            const indiceUsuario = usuarios.indexOf(usuarioInput);

            if (indiceUsuario === -1) {
                alert("El nombre de usuario no existe.");
                intentosRestantes--;
                validarAcceso();
            } else {
                if (contrasenas[indiceUsuario] === contrasenaInput) {
                    alert("El nombre de usuario y la contraseña son correctas.");
                } else {
                    alert("El nombre de usuario no coincide con la contraseña.");
                    intentosRestantes--;
                    validarAcceso();
                }
            }
        }

        validarAcceso();