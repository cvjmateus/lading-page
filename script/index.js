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
        console.log(data)
        dados.forEach(function(brasileirao) {

            const tr = document.createElement('tr'); // Cria uma nova linha
            const tdPosition = document.createElement('td'); // Cria uma nova célula
            const tdTeam = document.createElement('td'); // Cria uma nova célula
            const tdPts = document.createElement('td'); // Cria uma nova célula
            const tdVit = document.createElement('td'); // Cria uma nova célula
            const tdDraws = document.createElement('td'); // Cria uma nova célula
            const tdLosses = document.createElement('td'); // Cria uma nova célula

            // Define a cor de fundo da pocissao caso o time esteja no G4
            if(brasileirao.position >= 0 && brasileirao.position <= 4)
            {
                tdPosition.style.backgroundColor = '#06AA48';
                tdPosition.textContent = brasileirao.position;
            }
            else
            {
                tdPosition.textContent = brasileirao.position;
            }

            if(brasileirao.position >= 5 && brasileirao.position <= 6)
            {
                tdPosition.style.backgroundColor = '#1387F7';
                tdPosition.textContent = brasileirao.position;
            }
            else
            {
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
            console.log(brasileirao)
          });
    })
    .catch(error => {
        document.getElementById('resultado').textContent = `Houve um problema com a requisição: ${error.message}`;
    });
