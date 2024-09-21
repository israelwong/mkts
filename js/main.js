$(document).ready(function () {

    // $("a").click(function(e){
    //     e.preventDefault();
    //     alert("Sección en desarrollo, por favor, vuelve pronto!");
    // });

    $("#btn_enviar").click(function () {
        validar();
    });

    function validar() {

        let nombre = $("#txt_nombre").val();
        let empresa = $("#txt_empresa").val();
        let email = $("#txt_email").val();
        let telefono = $("#txt_telefono").val();
        let mensaje = $("#txt_mensaje").val();
        let error = 0;

        if (!es_requerido(nombre)) {
            let msg = "* Nombre requerido";
            $("#error_nombre").html(msg).show();
            error++;
        } else $("#error_nombre").hide();

        if (!es_email(email)) {
            let msg = "* Verifica que sea un correo valido";
            $("#error_email").html(msg).show();
            error++;
        } else $("#error_email").hide();

        if (!es_requerido(telefono)) {
            let msg = "* El teléfono es requerido";
            $("#error_telefono").html(msg).show();
            error++;
        } else $("#error_telefono").hide();

        if (!es_requerido(mensaje)) {
            let msg = "* Un mensaje es requerido";
            $("#error_mensaje").html(msg).show();
            error++;
        } else $("#error_mensaje").hide();


        if (error == 0) {
            enviar(nombre, empresa, email, telefono, mensaje)
        }

        function enviar(nombre, empresa, email, telefono, mensaje) {

            $.ajax({
                url: "email.php",
                type: "GET",
                dataType: "html",
                data: {
                    "nombre": nombre,
                    "empresa": empresa,
                    "email": email,
                    "telefono": telefono,
                    "mensaje": mensaje
                },
                success: function (data) {
                    if (data == 1) {
                        $("#formulario").slideUp();
                        $("#msg_ok").slideDown();
                    } else {
                        $("#msg_error").slideDown();
                    }


                },
                error: function (xhr, desc, err) { }
            });

        }

    }


});