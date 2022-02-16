let html = `<html>
<head>
<title>Gulliver Traveller - Roteiros</title>
</head>
<body>
<b>->1 - Roteiros para *São Paulo*</b>
<br>
A Terra da Garoa!
<br>
Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
<br>
#Roteiro A | Região: Avenida Paulista
<br>
MASP; Parque Trianon; Rua Augusta
<br>
#Roteiro B | Região: Centro
<br>
Catedral da Sé; Pátio do Colégio; Rua Augusta
<br>
#Roteiro C | Região: Vila Madalena
<br>
Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
<br> 
<b>->2 - Roteiros para *Las Vegas*</b>
<br>
Viva Las Vegas!
<br>       
A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!
<br>
#Roteiro A | Região: Las Vegas Boulevard South
<br>
Fonte do Bellagio; Principais Cassinos; Madame Tussauds
<br>
#Roteiro B | Região: Downtown;
<br> 
Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; 
<br>
#Roteiro C | Região: Las Vegas Boulevard North
<br>
Outlet Premium North; Stratosphere; Apple Fashion Show
<br>
<b>->3 - Roteiros para *Moscou*</b>
<br>
Privet!
<br>
A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética
<br> #Roteiro A | Região: Praça Vermelha <br>
Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
<br> #Roteiro B | Região: Centro <br>
Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
<br> #Roteiro C | Região: Obras pela cidade <br>
Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  
<br> 
</body>
</html>`;

let htmlCities = document.getElementById("cities");
let htmlPaths = document.getElementById("paths");
let htmlQuantity = document.getElementById("quantity");
let htmlSp = document.getElementById("SP");
let htmlVegas = document.getElementById("vegas")
let cities = "As cidades avaliadas foram ";
let paths = "O conteúdo do roteiro A de cada cidade é ";
let quantity = "São citados "
let centerSp = "Os pontos turísticos da região Centro de São Paulo são "
let vegas = "Os pontos turísticos de Downtown em Las Vegas são ";
let listPathA;
let i = 0;

while (i < html.length) {
  let initialCity = html.indexOf("Roteiros para", i);
  let finalCity = html.indexOf("</b", initialCity);

  let city = html.substring(initialCity + 15,finalCity-1);
  cities = `${cities} ${city}`;

  i = i + finalCity;
}


htmlCities.textContent = cities;

i = 0;
while (i < html.length) {
  let initialPath1 = html.indexOf("#Roteiro A", i);
  let finalPath1 = html.indexOf("<br>", initialPath1);

  let initialPath2 = html.indexOf("<br>", finalPath1 - 1);
  let finalPath2 = html.indexOf("#Roteiro B", initialPath2);

  let path1 = html.substring(initialPath1 + 21, finalPath1 - 1);  
  let path2 = html.substring(initialPath2 +  5, finalPath2 - 5);

  i = i + finalPath1;

  paths = `${paths} ${path1}: \n ${path2}`; 
}

htmlPaths.textContent = paths;

i = 0;
while (i < html.length) {

  let initialPathA = html.indexOf("#Roteiro A");
  let initialPathB = html.indexOf("#Roteiro B");
  let pathA = html.substring(initialPathA, initialPathB);
  listPathA = pathA.split(";");

  i = i + initialPathB;
}

quantity = `${quantity} ${listPathA.length} lugares no roteiro A de cada cidade.`

htmlQuantity.textContent = quantity;

function findPath (city, path, region, char) {

  let initialCity = html.indexOf(city);
  let finalCity = html.indexOf(path, initialCity);
  let completeCity = html.substring(initialCity, finalCity);

  let pathInitial = completeCity.indexOf(region);
  let pathFinal = completeCity.indexOf("#Roteiro C");
  let completePath = completeCity.substring(pathInitial + char, pathFinal - 6);

  return `${completePath}`;
}

centerSp = `${centerSp}` + (findPath("*São Paulo*", "->2 - Roteiro", "Região: Centro", 20)); 
htmlSp.textContent = centerSp;

vegas = `${vegas}` + (findPath("*Las Vegas*","->3 - Roteiro", "Região: Downtown", 24)); 
htmlVegas.textContent = vegas;


