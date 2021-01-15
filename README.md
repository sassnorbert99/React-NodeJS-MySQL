# web4

# LinkedIn Weblap
## Készítette: Sass-Gyarmati Norbert

Paraméterek: 
- frontend: React
- backend: Node.js
- adatbázis: mysql (mysql workbench)


LinkedIn oldal építése Node.js és React segítségével
web4 mappa tartalmazza a webprogramozáshoz elkészített beadandó dolgozatomat
Weblapom munkások, illetve a facebooktól elvárt posztolás, lájkolás lehetőségek kezelését teszi lehetővé egy felhasználó számára, melyben feltudja tüntetni egyes munka cikkjük címét, nevét, illetve képét, valamint ezeket like-olni lehet más felhasználóknak.


Alkalmazásomban felhasználók tudnak regisztrálni, majd a regisztrációt követően posztokat feltölteni, illetve aktuálisan feltöltött álláskeresők nevét listázni, azokhoz elemeket hozzáadni. A felhasználó a saját posztját szerkesztheti, illetve törölheti, mások posztjait azonban csak megtekintheti és lájkolhatja.  
Minden mezei felhasználó csak a tulajdonában lévő posztot tudja szerkeszteni illetve törölni.

## Szerepkörök:  
-mezei felhasználó: regisztrálás során bekerül az adatbázisba, innen elérhetővé válik számára a weblap által kínált szolgáltatás 

## Fejléc

A fejléc regisztrálást és/vagy bejelentkezést követően elérhetővé válik a felhasználók számára, ahol posztokat készíthetnek egy adott munka felhívására, illetve azok betöltésére. Lehetősége van továbbá embereket hozzáadni egy employee listába, ahol az álláskeresők, illetve a fizetési igényük van feltüntetve

## Regisztráció
A regisztráció két dolgot definiál, egy felhaszálónév (username), illetve egy jelszó (password) kell hozzá.
Regisztrációt követően a felhasználó posztokat készíthet, melyet más felhasználók számára is elérhetővé teszi, így azok esetleg lájkolhatják.

## Poszt
A poszt 4 fő részből áll:
- posztolás során meg kell adni a címet, egy leírást, illetve igény esetén képet lehet feltüntetni egy adott cégről, munkahelyről
- posztolás után a home (főoldal) ikonjára rákattintva megjelenik és mindenki számára elérhetővé válik. 

## álláskeresők
Az álláskeresők az employee headerben található fülre kattintás után lesz elérhető. Egy álláskereső az alábbi paraméterekkel rendelkezik:
- név: A munkavállaló teljes neve
- kor: munkavállaló kora
- ország: A munkavállaló születési országa
- pozíció: az adott pozíciót betöltő munkavállaló
- bér: A bérezést egy hónapra vonatkozóan számoljuk

