(function () {

    function validateForm() {

        var nameField = document.forms["betaform"]["psn"].value;
        var emailField = document.forms["betaform"]["email"].value;
        var phoneField = document.forms["betaform"]["age-verification"].value;

        if (nameField === "") {
            alert("Please enter a PSN ID");
            return false;
        }

        if (emailField === "") {
            alert("Please enter a valid Email");
            return false;
        }

        if (phoneField === "") {
            alert("Please Enter your Date of Birth");
            return false;
        }

    }

    document.forms["betaform"].addEventListener('submit', validateForm);

})();