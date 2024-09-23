const url = "https://www.sofascore.com/api/v1/unique-tournament/325/season/58766/standings/total";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Exibe os dados formatados como texto
        const tbody = document.querySelector('#tabela tbody');
        const dados = data.standings[0].rows
        dados.forEach(function (brasileirao) {
            
            const tr = document.createElement('tr'); // Cria uma nova linha
            const tdPosition = document.createElement('td'); // Cria uma nova célula
            const tdTeam = document.createElement('td'); // Cria uma nova célula
            const tdPts = document.createElement('td'); // Cria uma nova célula
            const tdVit = document.createElement('td'); // Cria uma nova célula
            const tdDraws = document.createElement('td'); // Cria uma nova célula
            const tdLosses = document.createElement('td'); // Cria uma nova célula

            // Definindo Cor de fundo de acordo
            if (brasileirao.position >= 0 && brasileirao.position <= 4) {
                tdPosition.style.backgroundColor = '#4285F4';
                tdPosition.textContent = brasileirao.position;
            }
            if (brasileirao.position >= 5 && brasileirao.position <= 6) {
                tdPosition.style.backgroundColor = '#FA7B17';
                tdPosition.textContent = brasileirao.position;
            }
            if (brasileirao.position >= 5 && brasileirao.position <= 6) {
                tdPosition.style.backgroundColor = '#FA7B17';
                tdPosition.textContent = brasileirao.position;
            }
            if (brasileirao.position >= 7 && brasileirao.position <= 12) {
                tdPosition.style.backgroundColor = '#34A853';
                tdPosition.textContent = brasileirao.position;
            }
            if (brasileirao.position >= 17 && brasileirao.position <= 20) {
                tdPosition.style.backgroundColor = '#EA4335';
                tdPosition.textContent = brasileirao.position;
            }
            else {
                tdPosition.textContent = brasileirao.position;
            }

            tdTeam.innerHTML = `<img style="margin-right: 100%;" src="https://api.sofascore.app/api/v1/team/${brasileirao.team.id}/image">` + `${brasileirao.team.name}`
            tdPts.textContent = brasileirao.points; // Define o texto da célula
            tdVit.textContent = brasileirao.wins; // Define o texto da célula
            tdDraws.textContent = brasileirao.draws; // Define o texto da célula
            tdLosses.textContent = brasileirao.losses; // Define o texto da célula


            tr.appendChild(tdPosition); // Adiciona a célula à linha
            tr.appendChild(tdTeam); // Adiciona a célula à linha
            tr.appendChild(tdPts); // Adiciona a célula à linha
            tr.appendChild(tdVit); // Adiciona a célula à linha
            tr.appendChild(tdDraws); // Adiciona a célula à linha
            tr.appendChild(tdLosses); // Adiciona a célula à linha
            tbody.appendChild(tr); // Adiciona a linha ao corpo da tabela
        });
    })
    .catch(error => {
        document.getElementById('resultado').textContent = `Houve um problema com a requisição: ${error.message}`;
    });

    //segunda api para pegar os proximos jogos

    fetch("https://api.api-futebol.com.br/v1/times/131/partidas/proximas", {
        method: "GET",
        headers: {
            "Authorization": "Bearer live_aacc79e784dc2a6480560a479a55df"
        }
    })
    .then(response => {
        if (!response.ok) { 
            throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Exibe os dados da resposta
    })
    .catch(error => {
        console.error('Erro:', error); // Trata erros
    });