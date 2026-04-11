async function buscarclima() {
  const cidade= document.getElementById('cidade').value;
  const url= `https://goweather.xyz/v2/weather/${cidade}`;

  const resposta= await fetch(url);
  const dados= await resposta.json();

  if(dados.message === "NOT_FOUND"){
    document.getElementById("resultado").innerHTML = `
    <P>Essa cidade não existe</P>
    `;
    return;
  }
  // caso de sucesso
  document.getElementById("resultado").innerHTML= `
    <h2>clima em ${cidade}</h2>
  <p>temperatura: ${dados.temperature}</p>
  <p>vento: ${dados.wind}</p>
  <p>descrição: ${dados.description}</p>
 `;
}

document.getElementById("cidade").addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    buscarclima();
  }
});