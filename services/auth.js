

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  return JSON.parse(jsonPayload);
}

function tokenValido() {
    let usuario = JSON.parse(localStorage.getItem("USER"));
    if(usuario != null){
        var token = parseJwt(usuario.stsTokenManager.accessToken)
        var expiration = new Date(token.exp * 1000);
        var now = new Date();

        now.setMinutes(now.getMinutes() + 10);
        if (expiration < now) {
          window.location.href = './login.html';
        } 
      }
      else{
        
        window.location.href = './login.html'
      }
      
  }
  // Chame a função para buscar os dados
  tokenValido();
