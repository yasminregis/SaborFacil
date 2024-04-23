// No seu arquivo main.js
function fetchData() {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        const data = response.data;
        // Processa os dados obtidos
        console.log(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }
  
  // Chame a função para buscar os dados
  fetchData();
  