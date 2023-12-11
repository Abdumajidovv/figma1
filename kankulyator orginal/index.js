let a = '';  // frist number
let b = ''; //secont number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', '.',];
const action = ['-', '+', 'X', '/',]

//ekran

const out = document.querySelector('.calc-screen p');

function clearAll() {
    let a = '';  // frist number and result
    let b = ''; //secont number
    let sign = ''; // знак 
    let finish = false;
    out.textContent = 0;
}


document.querySelector('.ac').onclick = clearAll;



document.querySelector('.buttons').onclick = (event) => {
    //пажата не  кнопка
    if (!event.target.classList.contains('btn')) return;
    //пажата  кнопка  clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажату кнопку
    const key = event.target.textContent

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b; 
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return
    }

    // нажата =  wota hatolik boliwi mumkun :; wulada
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = b - b;
                break;
            case "X":
                a = b * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Hatolik';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;

        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign );
    }

}


