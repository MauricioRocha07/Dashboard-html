export async function initFinance() {
    const cryptoRates = document.getElementById("crypto-rates");

    if (!cryptoRates) return; // Trava de segurança

    async function fetchRates() {
        try {
            cryptoRates.innerHTML = "<p>Buscando cotações no mercado...</p>";

            const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
            const data = await response.json();

            // Formatação dos valores
            const usd = parseFloat(data.USDBRL.bid).toFixed(2);
            const eur = parseFloat(data.EURBRL.bid).toFixed(2);

            const btc = parseFloat(data.BTCBRL.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            // Injetando o HTML
            cryptoRates.innerHTML = `
            <div class="finance-item">
                <span class="currency-icon">us</span>
                <div class="currency-info">
                    <strong>Dólar (USD)</strong>
                    <span>R$ ${usd}</span>
                </div>
            </div>  
            <div class="finance-item">
                <span class="currency-icon">EU</span>
                <div class="currency-info">
                    <strong>Euro (EUR)</strong>
                    <span>R$ ${eur}</span>
                </div>    
            </div>
            <div class="finance-item bitcoin-item">
                <span class="currency-icon">₿</span>
                <div class="currency-info">
                    <strong>Bitcoin (BTC)</strong>
                    <span>${btc}</span>
                </div>
            </div>              
            `;
        } catch (error) {
            console.error("Erro ao buscar moedas:", error);
            cryptoRates.innerHTML = "<p style='color: red;'>Falha ao carregar as cotações.</p>";
        }
    }

    fetchRates();
}
