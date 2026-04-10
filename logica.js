async function buscarclima() {
  const cidade= document.getElementById('cidade').value;
  const url= `https://goweather.xyz/v2/weather/${cidade}`;

  const resposta= await fetch(url);
  const dados= await resposta.json();
  
  document.getElementById("resultado").innerHTML= `
    <h2>clima em ${cidade}</h2>
  <p>temperatura: ${dados.temperature}</p>
  <p>vento: ${dados.wind}</p>
  <p>descrição: ${dados.description}</p>
 `;
}