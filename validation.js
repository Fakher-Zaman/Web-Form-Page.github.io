function validation(arg) {

    var This_id = arg.getAttribute('data-id');

    if (This_id == 1) {
        var total = document.getElementById('1_total').value;
        var Obtained = document.getElementById('1_obtained').value;
        var error = document.getElementById('err_no_1');
        if (parseInt(Obtained) > parseInt(total)) {
            error.classList.add('display_block');
        } else {
            error.classList.remove('display_block');
        }
    }
    if (This_id == 2) {
        var total = document.getElementById('2_total').value;
        var Obtained = document.getElementById('2_obtained').value;
        var error = document.getElementById('err_no_2');
        if (parseInt(Obtained) > parseInt(total)) {
            error.classList.add('display_block');
        } else {
            error.classList.remove('display_block');
        }
    }
    if (This_id == 3) {
        var total = document.getElementById('3_total').value;
        var Obtained = document.getElementById('3_obtained').value;
        var error = document.getElementById('err_no_3');
        if (parseInt(Obtained) > parseInt(total)) {
            error.classList.add('display_block');
        } else {
            error.classList.remove('display_block');
        }
    }
    if (This_id == 4) {
        var total = document.getElementById('4_total').value;
        var Obtained = document.getElementById('4_obtained').value;
        var error = document.getElementById('err_no_4');
        if (parseInt(Obtained) > parseInt(total)) {
            error.classList.add('display_block');
        } else {
            error.classList.remove('display_block');
        }
    }
    if (This_id == 5) {
        var total = document.getElementById('5_total').value;
        var Obtained = document.getElementById('5_obtained').value;
        var error = document.getElementById('err_no_5');
        if (parseInt(Obtained) > parseInt(total)) {
            error.classList.add('display_block');
        } else {
            error.classList.remove('display_block');
        }
    }
}