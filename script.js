$(document).ready(function () {
    $('#bold').click(function () {
        $('#some_text').toggleClass('bold')
    })

    $('#fontStyle').click(function () {
        $('#some_text').toggleClass('italic')
    })

    $('#textDecoration').click(function () {
        $('#some_text').toggleClass('underline')
    })

    $('#textDecoration2').click(function () {
        $('#some_text').toggleClass('linethrough')
    })

    $('button#textAlign').each(function (index, element) {
        $(element).click(function () {
            $('#some_text').css('text-align', $(this).val());
        })
    })
    $('select>option').each(function (index, element) {
        $(this).css('font-family', $(this).val())
        $(this).css('font-size', $(this).val())

        $('#fontFam, #fontSize').change(function () {
            $('#some_text').css('font-family', $(this).val());
            $('#some_text').css('font-size', $(this).val());
        })
    })

    $('#wrapper>#box').each(function (index, element) {
        $(element).click(function () {
            $('#some_text>p').css('color', $(this).css('background-color'))
        })
    })

    $('#wrapper>#bg_color').each(function (index, element) {
        $(element).click(function () {
            $('body').css('background', $(this).css('background-color'))
        })
    })

    $('#wrapper>#img').each(function (index, element) {
        $(element).click(function () {
            $('body').css('background', $(this).css('background-image'))
        })
    })

    $('input[type="file"]').change(function (event) {
        const url = URL.createObjectURL(event.target.files[0]);
        $('body').css('background', `url(${url})`)
    })

    $('#signIn').click(function () {
        let login = $('#login').val();
        let pass = $('#password').val();
        if (login == '' || pass == '' || login != 'admin' || pass != 'admin') {
            if (login == 'admin') {
                $('#login').removeClass('.form-control is-invalid')
            } else {
                $('#login').addClass('.form-control is-invalid')
            }
            if (pass == 'admin') {
                $('#password').removeClass('.form-control is-invalid')
            } else {
                $('#password').addClass('.form-control is-invalid')
            }
            if (login != pass) {
                $('.invalid-feedback').text('Please check your login or password')
            }
            $(this).removeAttr('data-dismiss')
        } else {
            $(this).attr('data-dismiss', 'modal')
            $('#edit').removeAttr('disabled')
            $('.invalid-feedback').text('invalid value')
        }
        $('#login', '#pass').removeClass('.form-control is-invalid')
    })

    $('#textarea').val($('#some_text').html())
    $('#edit').click(function () {
        $('.menu').css('display', 'none')
        $('.menu2').css('display', 'flex')
        $('#some_text').css('display', 'none')
        $('#area').css('display', 'block')
        $('#textarea').css('display', 'block')
    })

    $('#save').click(function () {
        $('#some_text').html($('#textarea').val())
        $('.menu').css('display', 'flex')
        $('.menu2').css('display', 'none')
        $('#some_text').css('display', 'block')
        $('#area').css('display', 'none')
        $('#textarea').css('display', 'none')
    })

    $('#reset').click(function () {
        $('input#validationServer03').removeClass('.form-control is-invalid')
        $('select#inputState').removeClass('.form-control is-invalid')
    })

    $('#reset1').click(function () {
        $('input#coutLi').removeClass('.form-control is-invalid')
        $('select#inputState').removeClass('.form-control is-invalid')
    })

    $('#reset2').click(function () {
        $('input#coutLi2').removeClass('.form-control is-invalid')
        $('select#inputState').removeClass('.form-control is-invalid')
    })

})

const getId = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
const getAll = sel => document.querySelectorAll(sel);

const regExp = /\d/; // перевірка полів на числове значення
const regExp1 = /^choose style$/; // перевірка чи вибраний стиль рамки
const regExp2 = /^choose color$/; // перевірка чи вибраний колір рамки

getId('createTable').onclick = function () {
    let tr = getSel('.tt1').value;
    let td = getSel('.tt2').value;
    let widthTd = getSel('.tt3').value + 'px';
    let heightTd = getSel('.tt4').value + 'px';
    let borderWidth = getSel('.tt5').value + 'px';
    let borderType = getSel('.borderType').value;
    let borderColor = getSel('.borderColor').value;
    if (regExp1.test(`${borderType}`) == true) {
        getSel('.borderType').classList.add("is-invalid");
    } else {
        getSel('.borderType').classList.remove('is-invalid')
    }
    if (regExp2.test(`${borderColor}`) == true) {
        getSel('.borderColor').classList.add("is-invalid");

    } else {
        getSel('.borderColor').classList.remove('is-invalid')
    }
    getAll('#validationServer03').forEach(function (item, i, arr) {
        let val = item.value;
        if (regExp.test(`${val}`) == false) {
            item.classList.add("is-invalid");
        } else {
            item.classList.remove('is-invalid')
        }
        if (regExp.test(`${tr}`) == true && regExp.test(`${td}`) == true && regExp.test(`${widthTd}`) == true && regExp.test(`${heightTd}`) == true && regExp.test(`${borderWidth}`) == true && regExp1.test(`${borderType}`) == false && regExp2.test(`${borderColor}`) == false) {
            let table = document.createElement('table');
            for (let i = 1; i <= tr; i++) {
                let tr = document.createElement('tr');
                for (let j = 1; j <= td; j++) {
                    let td = document.createElement('td');
                    td.textContent = 'TD';
                    td.style.width = widthTd;
                    td.style.height = heightTd;
                    td.style.border = `${borderWidth} ${borderType} ${borderColor}`;
                    table.style.borderCollapse = 'collapse';
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            let tableAll = document.createElement('tableAll');
            tableAll.appendChild(table);
            getId('textarea').value = getId('some_text').innerHTML + tableAll.innerHTML;
        }
    });
}

const regExp3 = /^choose Ol type mark$/ // перевірка чи вибраний тип маркування
getId('createList').onclick = function () {
    let count = getId('coutLi').value;
    let type = getSel('.typeMark').value;
    if (regExp.test(`${count}`) == false) {
        getSel('.coutLi').classList.add("is-invalid");
    } else {
        getSel('.coutLi').classList.remove('is-invalid')
    }
    if (regExp3.test(`${type}`) == true) {
        getSel('.typeMark').classList.add("is-invalid");
    } else {
        getSel('.typeMark').classList.remove('is-invalid')
    }
    if (regExp.test(`${count}`) == true && regExp3.test(`${type}`) == false) {
        let ol = document.createElement('ol');
        for (let i = 1; i <= count; i++) {
            let li = document.createElement('li');
            li.textContent = `item ${i}`;
            ol.style.listStyleType = type;
            ol.appendChild(li);
        }
        let list = document.createElement('list');
        list.appendChild(ol);
        getId('textarea').value = getId('textarea').value + list.innerHTML;
    }
}

const regExp4 = /^choose Ul type mark$/ // перевірка чи вибраний тип маркування
getId('createList2').onclick = function () {
    let count = getId('coutLi2').value;
    let type = getSel('.typeMark2').value;
    if (regExp.test(`${count}`) == false) {
        getSel('.coutLi2').classList.add("is-invalid");
    } else {
        getSel('.coutLi2').classList.remove('is-invalid')
    }
    if (regExp4.test(`${type}`) == true) {
        getSel('.typeMark2').classList.add("is-invalid");
    } else {
        getSel('.typeMark2').classList.remove('is-invalid')
    }
    if (regExp.test(`${count}`) == true && regExp4.test(`${type}`) == false) {
        let ol = document.createElement('ol');
        for (let i = 1; i <= count; i++) {
            let li = document.createElement('li');
            li.textContent = `item ${i}`;
            ol.style.listStyleType = type;
            ol.appendChild(li);
        }
        let list = document.createElement('list');
        list.appendChild(ol);
        getId('textarea').value = getId('textarea').value + list.innerHTML;
    }
}