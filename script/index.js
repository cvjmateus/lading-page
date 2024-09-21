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
        dados.forEach(function(nome) {

            const tr = document.createElement('tr'); // Cria uma nova linha
            const tdPosition = document.createElement('td'); // Cria uma nova célula
            const tdTeam = document.createElement('td'); // Cria uma nova célula
            const tdPts = document.createElement('td'); // Cria uma nova célula
            const tdVit = document.createElement('td'); // Cria uma nova célula
            const tdDraws = document.createElement('td'); // Cria uma nova célula
            const tdLosses = document.createElement('td'); // Cria uma nova célula

            tdPosition.textContent = nome.position; // Define o texto da célula
            tdTeam.textContent = nome.team.name; // Define o texto da célula
            tdPts.textContent = nome.points; // Define o texto da célula
            tdVit.textContent = nome.wins; // Define o texto da célula
            tdDraws.textContent = nome.draws; // Define o texto da célula
            tdLosses.textContent = nome.losses; // Define o texto da célula

            tr.appendChild(tdPosition); // Adiciona a célula à linha
            tr.appendChild(tdTeam); // Adiciona a célula à linha
            tr.appendChild(tdPts); // Adiciona a célula à linha
            tr.appendChild(tdVit); // Adiciona a célula à linha
            tr.appendChild(tdDraws); // Adiciona a célula à linha
            tr.appendChild(tdLosses); // Adiciona a célula à linha
            tbody.appendChild(tr); // Adiciona a linha ao corpo da tabela
            console.log(nome)
          });
    })
    .catch(error => {
        document.getElementById('resultado').textContent = `Houve um problema com a requisição: ${error.message}`;
    });
