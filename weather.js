export function initWeather() {
    const weatherInfo = document.getElementById("weather-info");
    if (!weatherInfo) return; // Trava de segurança

    // Função assícrona para busca de dados
    async function getWeather(lat, lon) {
        try {
            weatherInfo.textContent = "Consultando satélites...";

            // Chamada para a API
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

            const response = await fetch(url);
            const data = await response.json();

            // Arredonda a temperatura
            const temp = Math.round(data.current_weather.temperature);

            // Usa o HTML na tela
            weatherInfo.innerHTML = `
            <div style="font-size:48px; font-weight: bold; color: #004080;">${temp}°C</div>
            <div style="font-size: 16px; color: #666; margin-top: 10px;">Temperatura Local</div>
            `;
        } catch (error) {
            console.error("Erro ao buscar clima:", error);
            weatherInfo.textContent = "Falha ao carregar o clima.";
        }
    }

    // Função que aciona a geolocalização
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Plano A: O usuario permitiu
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getWeather(lat, lon);
                },
                (error) => {
                    // Plano B: O usuario bloqueou
                    console.warn("Acesso à localização negado, Usando o Plano B.");
                    getWeather(-23.6226, -45.4129); // Coordenadas da minha cidade como padrão
                }
            );
        } else {
            weatherInfo.textContent = "Seu navegador não suporta geolocalização.";
        }
    }
    getLocation();
}
