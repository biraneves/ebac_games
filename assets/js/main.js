(function () {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

$(document).ready(() => {
    const phoneMaskBehavior = function (val) {
            return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009";
        },
        phoneOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(phoneMaskBehavior.apply({}, arguments), options);
            },
        };
    $("#telefone").mask(phoneMaskBehavior, phoneOptions);
});
