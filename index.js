//** @format */
function handleCalscSalary(){
    const span = document.getElementByIdt('result');

    const days = document.getElementById('working-days').value;
    const baseSalary = document.getElementById('salary').value;

    if(days && baseSalary) {
        const result = days * baseSalary;

   
    span.innerHTML = `${result.toLocaleString()} VND`;
    span.setAttribute('style','color: red' );
    } else {
        alert('Please enter workinh days and your base salary!!!');
    }
}



function handleCaclTotalsum() {
    const nums = []
    for (let index = 1; index < 6; index++) {
        const num = document.getElementById(`num${index}`).value;
        if(num && typeof parseInt(num) ==='number') {
            nums.push(parseInt(num));

        }
        
    }

    const total = nums.reduce((a,b) =>a + b, 0);

    const h2 = document.createElement('h3');
    h2.setAttribute('class', 'text-waring');
    h2.innerHTML = `Trung binh cong: ${(total/5).toFixed(1)}`;
    document.getElementById('result-total').appendChild(h2);
} 

function handleChangeCurrency() {
    const dollar = document.getElementById('inp-dollar').value;
    const rate = 23656 

    if(dollar) {
        const vietNamDong = dollar * rate

        const h2 = document.createElement('h3');
    h2.setAttribute('class', 'text-success');
    h2.innerHTML = `Tiền Việt Nam: ${vietNamDong.toLocaleString(1)} VND`;
    document.getElementById('result-total').appendChild(h2);

    handlePrintElement('currency', h2);

    }else{
        alert('how many dollar you want change??');
    }
}

function handlePrintlist() {
    for (let index = 0; index < 10; index++) {
        const div = document.createElement('div');
        const p = document.createElement('P');

        p.innerHTML = `index: ${index}`;
        p.setAttribute('style', 'margin: 0px;');


        div.appendChild(p);
        
        div.setAttribute('style', 'padding: 10px; margin: 10px 0px;');
        div.setAttribute('class',index % 2 === 0 ? 'bg-success' : 'bg-danger');

        handlePrintElement('items-container',div);
    }  
}

function handlePrintElement(elementId, element) {
    document.getElementById(elementId).appendChild(element);

}