let receitas = "";
function getReceitas() {
    axios.get('https://saborfacil-8d0e8-default-rtdb.firebaseio.com/receitas.json')
      .then(response => {
        const data = response.data;
        receitas = response.data;
        const testeReceita = response.data;
        // Processa os dados obtidos
        console.log(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }  
  
  getReceitas();
  