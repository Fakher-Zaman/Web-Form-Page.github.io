function beforeSubmit() {

    error = false;

    for (let i = 1; i < 5; i++) {
        var total = document.getElementById(`${i}_total`).value;
        var Obtained = document.getElementById(`${i}_obtained`).value;

        if (parseInt(Obtained) > parseInt(total)) {
            error = true;
        }
    }

    var element = document.getElementById('name').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('father_name').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('identity').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('phone').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('email').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('instituion').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('major').value;
    if (element == '') {
        error = true;
    }
    element = document.getElementById('semester').value;
    if (element == '') {
        error = true;
    }

    if (error) {
        alert("Error! Not Putting Information Data.");
    } else {
        document.getElementById('submission').submit();
    }
}