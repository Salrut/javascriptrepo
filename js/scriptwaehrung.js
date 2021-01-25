var waeh=['CHF','EUR','USD'];

localStorage.setItem('waeh',JSON.stringify(waeh));

const from_currencyEl=document.getElementById('from_currency');
const to_currencyEl=document.getElementById('to_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');


for(x=0;x<waeh.length;x++){
    op=document.createElement('option');
    op.value=waeh[x];
    op.innerHTML=waeh[x];
    from_currencyEl.append(op)
}
to_currencyEl.innerHTML=from_currencyEl.innerHTML;

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
    const temp = from_currencyEl.value;
    from_currencyEl.value = to_currencyEl.value;
    to_currencyEl.value = temp;
    calculate();
});

function calculate() {
    const from_currency = from_currencyEl.value;
    const to_currency = to_currencyEl.value;
    fetch(`https://v6.exchangerate-api.com/v6/5403fc8923ff89c9ece2cf25/latest/USD${from_currency}`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[to_currency];
            rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
            to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        })
}

calculate();