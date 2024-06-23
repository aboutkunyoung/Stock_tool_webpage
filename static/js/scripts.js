document.getElementById('dca-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const initialPrice = document.getElementById('initial_price').value;
    const initialShares = document.getElementById('initial_shares').value;
    const additionalPrice = document.getElementById('additional_price').value;
    const additionalShares = document.getElementById('additional_shares').value;
    
    const data = {
        initial_price: initialPrice,
        initial_shares: initialShares,
        additional_price: additionalPrice,
        additional_shares: additionalShares
    };
    
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `평균 매입 가격: ${data.average_price.toFixed(2)} 원`;
    });
});
