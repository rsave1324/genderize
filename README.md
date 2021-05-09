## Introducere

Am creat acest website care preia prenumele și țara de proveniență ale unei persoane și returnează genul acesteia (masculin sau feminim) cu o anumită probabilitate. 

## Descriere problemă
Utilizările potențiale ale aplicației includ segmentarea unei liste de utilizatori pentru marketing sau analize.

## Descriere API
În dezvoltarea aplicației am folosit 2 API-uri:
1. Genderize.io

Un API simplu pentru a prezice genul unei persoane al cărui prenume este dat, ca în exempul: `https://api.genderize.io/?name=peter`
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

Convențiile de numire se pot baza foarte mult pe date demografice. Prin urmare, API acceptă un parametru opțional „country_id”. În multe cazuri, acest lucru va face acea presupunere cu privire la genul persoanei mai corectă. 

2. REST Countries

Am obținut informații despre țări printr-un API RESTful cu ajutorul endpoint-ului `https://restcountries.eu/rest/v2/all`.
Răspunsul primit în urma acestei solicitări este un fișier JSON care conține toate țările și alte detalii cum ar fi capitala, populația la un anumit moment, etc.



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
