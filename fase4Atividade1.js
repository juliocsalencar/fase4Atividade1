let textoRoteiro = "  <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";







// -Nome das cidades : São Paulo, Las Vegas e Moscou

let posicaoSp = textoRoteiro.indexOf("*São Paulo*"); //posiç. 94

let posicaoLv = textoRoteiro.indexOf("*Las Vegas*"); //posiç. 644

let posicaoMosc = textoRoteiro.indexOf("*Moscou*"); //posiç. 1282
// console.log(posicaoSp + "," + posicaoLv + "," + posicaoMosc);

let cidadeSp = textoRoteiro.substring(95, 104);
let cidadeLv = textoRoteiro.substring(645, 654);
let cidadeMosc = textoRoteiro.substring(1283, 1289);
let nomeCidades = cidadeMosc + ", " + cidadeLv + " e " + cidadeSp;



// Conteúdo do roteiro A de cada cidade

let roteiros = textoRoteiro.split("#");
let roteiroaSp = roteiros[1];
let roteiroaLv = roteiros[4];
let roteiroaMosc = roteiros[7];

let rotA = "Roteiro A de São Paulo: " + roteiroaSp + " / " + "Roteiro A de Las Vegas: " + roteiroaLv + " / " + "Roteiro A de Moscou: " + roteiroaMosc;





// Quantos locais são citados no roteiro A de cada cidade

//São Paulo
let posicaoSpInicial = roteiroaSp.search("MASP"); //40
let posicaoSpFinal = roteiroaSp.search("Augusta"); //73
let rotAsp = roteiroaSp.substring(40, 73);
let separarSp = rotAsp.split(";")
let numeroLocaisSp = separarSp.length;
// console.log(numeroLocaisSp);

//Las Vegas
let pInicialLv = roteiroaLv.search("Fonte"); //49
let pFinalLv = roteiroaLv.search("Tussauds"); //104
let rotAlv = roteiroaLv.substring(49, 104)
let separarLocaisLv = rotAlv.split(";");
let numeroLocaisLv = separarLocaisLv.length;
// console.log(numeroLocaisLv);

//Moscou
let pInicialMosc = roteiroaMosc.search("Museu"); //38
let pFinalMosc = roteiroaMosc.search("Lênin"); //108
let rotAmosc = roteiroaMosc.substring(38, 108);
let separarLocaisMosc = rotAmosc.split(";");
let numeroLocaisMosc = separarLocaisMosc.length;
// console.log(numeroLocaisMosc);

let numeroLocaisA = numeroLocaisSp + " locais A citados em São Paulo" + ";" + " " + numeroLocaisLv + " locais A citados em Las Vegas" + ";" + " " + numeroLocaisMosc + " locais A citados em Moscou";




//Nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo
let roteiroBsp = roteiros[2];
let pInicialRot = roteiroBsp.search("Catedral"); //30
let pFinalRot = roteiroBsp.search("Augusta"); //75
let locaisBsp = "Os pontos turísticos localizados no Centro de São Paulo são: " + roteiroBsp.substring(30, 75);
console.log(locaisBsp);



//Nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas
let roteiroBlv = roteiros[5];
let posInicialLv = roteiroBlv.search("Fremont"); //34
let posFinalLv = roteiroBlv.search("Organizado"); //99
let locaisBlv = "Os pontos turísticos localizados no bairro Downtown de Las Vegas são: " + roteiroBlv.substring(34, 99);
console.log(locaisBlv);



//Função
let valorFuncao = parseInt(prompt(`Olá! Escolha uma opção:
1 - O nome das cidades avaliadas
2 - O conteúdo do roteiro A de cada cidade avaliada
3 - Quantos locais são citados no roteiro A de cada cidade
4 - O nome dos pontos turisticos localizados no bairro Centro da cidade de São Paulo
5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas`));

if (valorFuncao == 1){
    alert(nomeCidades);
}else if(valorFuncao == 2){
    alert(rotA);
}else if(valorFuncao == 3){
    alert(numeroLocaisA);
}else if(valorFuncao == 4){
    alert(locaisBsp);
}else if(valorFuncao == 5){
    alert(locaisBlv);
}else{
    alert("Valor inválido. Digite novamente.")
}