
document.getElementById("prvi").innerHTML =
"Domaće životinje su one životinje koje čovjek pripitomljava i uzgaja radi koristi i razonode, a koje i same imaju koristi od takve trajne zajednice sa čovjekom jer su zaštićene u borbi za opstanak. Da bi se neka životinja smatrala domaćom, potrebno je ispuniti tri uvjeta. Prvi je uvjet da životinja posjeduje osobine koje su čovjeku korisne, drugi da je privržena i poslušna čovjeku i treći da se jedinke redovito razmnožavaju pod čovjekovim nadzorom";
document.getElementById("drugi").innerHTML =
"Magarac kakvog danas poznamo potječe od divljih predaka iz Afrike, nubijskog i somalijskog divljeg magarca. Nubijski divlji   magarac potječe s područja Sjeverne Afrike (današnje Eritreje), a somalijski divlji magarac s juga Eritreje i sjeverne Somalije. Magarac je udomaćen prije osam tisuća godina. U trećem tisućljeću pr.Kr. magarci se šire Azijom, a ratovi i trgovina, posebno ‹›put svile››, dovode magarce i na područje Europe, najvjerovatnije prije tri do četiri tisuće godina prije kris";
document.getElementById("treca").innerHTML =
"Domaćim govedom, često jednostavno samo govedom, nazivaju se domesticirani potomci divljeg goveda (Bos taurus). Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču.";
document.getElementById("konj").innerHTML = 
"Domaći konj (konj, lat. Equus (Equus) caballus; sin. Equus ferus  caballus, Equus caballus caballus, Equus caballus) je veliki četveronožni  sisavac, pripadnik roda Equus. Konji su odavno bili jedna od najvažnijih  domaćih životinja  koja se uzgaja u vrlo velikom broju raznih pasmina, a živi širom svijeta.";


function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

   

function myFunction() {
  var x = document.getElementById("myImg").width;
  document.getElementById("demo").innerHTML = x;
}