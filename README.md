## Introducere

Am creat această aplicație web care preia prenumele și țara de proveniență ale unei persoane și returnează genul acesteia (masculin sau feminim) cu o anumită probabilitate. 

## Utilizare
Utilizările potențiale ale aplicației includ segmentarea unei liste de utilizatori pentru marketing sau analize.

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
API-ul acceptă apeluri HTTP GET specificând un nume sau o listă de maxim 10 nume și returnează un răspuns în formatat JSON.
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

Am obținut informații despre țări printr-un API RESTful cu ajutorul endpoint-ului `https://restcountries.eu/rest/v2/all`.
Răspunsul primit în urma acestei solicitări este un fișier JSON care conține toate țările și alte detalii cum ar fi capitala, alpha2Code (country_id care va fi folosit pentru primul API), populația la un anumit moment, etc.
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

## Pasi
1. Clone project from:
https://github.com/ungureanuramona1324/genderize.git

2. Go to project files
cd genderize

3. install the npm dependencies
npm install

4. In terminal, run the command:
node server.js

5. for local go to http://your_ip::3000
