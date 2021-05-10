## Introducere

Am creat această aplicație web care preia prenumele și țara de proveniență ale unei persoane și returnează genul acesteia (masculin sau feminim) cu o anumită probabilitate. 

## Descriere problemă
Într-o lume interconectată progresiv, dezbaterile privind identitatea de gen ca date personale sensibile sunt tot mai prezente. Cum anumite persoane ar prefera să nu ofere răspuns întrebărilor referitoare la gen, având în vedere potențialul lor discriminatoriu, am considerat utilă folosirea unui API care determină apartenența persoanei la una din cele două categorii pe baza prenumelui și a țării. 

## Utilizare
Utilizările potențiale ale aplicației includ segmentarea unei liste de utilizatori pentru marketing sau analize.

În Germania sau România o persoană pe nume Andrea este femeie în cele mai multe dintre cazuri.

![Image of app](https://github.com/ungureanuramona1324/genderize/blob/master/img/andrea-germany.JPG)

![Image of app](https://github.com/ungureanuramona1324/genderize/blob/master/img/andrea-romania.JPG)

Nu același lucru se întâmplă și în Italia, unde Andrea este de regulă un nume de bărbat.

![Image of app](https://github.com/ungureanuramona1324/genderize/blob/master/img/andrea-italy.JPG)

## Descriere API
În dezvoltarea aplicației am folosit 2 API-uri:
1. [Genderize.io](https://genderize.io/)

Acest API este utilizat pentru a prezice genul unei persoane al cărui prenume este dat. 

`https://api.genderize.io/?name=peter`

Solicitarea va da următorul răspuns:
```
{
  "name": "peter",
  "gender": "male",
  "probability": 0.99,
  "count": 165452
}
```
API-ul acceptă apeluri HTTP GET, specificând un nume sau o listă de maxim 10 nume și returnează un răspuns în formatat JSON.
`https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie`
```
[
  {
    "name": "peter",
    "gender": "male",
    "probability": 0.99,
    "count": 165452
  },
  {
    "name": "lois",
    "gender": "female",
    "probability": 0.58,
    "count": 2510
  },
  {
    "name": "stevie",
    "gender": "male",
    "probability": 0.87,
    "count": 2568
  }
]
```

Convențiile de numire se pot baza foarte mult pe date demografice. Prin urmare, API-ul acceptă un parametru opțional „country_id”. În multe cazuri, acest lucru va face mai corectă presupunerea cu privire la genul persoanei. 

`https://api.genderize.io/?name=peter&country_id=US`
```
{
  "name": "peter",
  "gender": "male",
  "probability": 0.99,
  "count": 6521,
  "country_id": "US"
}
```

2. [REST Countries](https://restcountries.eu/)

Am obținut informații despre țări printr-un API RESTful cu ajutorul endpoint-ului: 
`https://restcountries.eu/rest/v2/all`

API-ul acceptă apeluri HTTP GET, iar răspunsul primit în urma acestei solicitări este un fișier JSON care conține toate țările și alte detalii cum ar fi capitala, alpha2Code (country_id care va fi folosit pentru primul API), populația la un anumit moment, etc.
```
[
  {
    "name": "Afghanistan",
    "topLevelDomain": [
      ".af"
    ],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": [
      "93"
    ],
    "capital": "Kabul",
    "altSpellings": [
      "AF",
      "Afġānistān"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 27657145,
    "latlng": [
      33.0,
      65.0
    ],
... },
{...},
...
{...}
]
```

## Publicare aplicație 

### Heroku
Aplicația poate fi deschisă accesând următorul link:

`https://findmygender.herokuapp.com/`

1. Creare cont Heroku
2. Click pe "Create new app"
3. Dați un nume aplicației
4. La secțiunea “Deployment method” selectați GitHub ca metodă
5. Click Enable Automatic Deploys 
6. Heroku va prelua codul și îl va găzdui
7. Pentru verificarea log-urilor puteți accesa: `heroku logs --tail`

### AWS Cloud9
1. Se clonează proiectul:

`git clone https://github.com/ungureanuramona1324/genderize.git`

2. În terminal se rulează comanda:

`cd genderize`

3. Se instalează dependențele npm:

`npm install`

4. În terminal se rulează comanda:

`node server.js`

5. Mergi către:

`http://your_ip::3000`
