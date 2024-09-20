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
        const tabela = data.standings[0].rows
        tabela.forEach(function(nome) {
            console.log(nome);
          });
    })
    .catch(error => {
        document.getElementById('resultado').textContent = `Houve um problema com a requisição: ${error.message}`;
    });
