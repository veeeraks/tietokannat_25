# Tietokannat ja rajapinnat - Harjoitustyö

Kurssin harjoitustyö. Sovellus käyttää Node.js:ää, Expressiä ja MySQL:ää. Mukana on REST-API ja SQL-proseduurit (+MCV). Sovellus käsittelee opintosuorituksia tietokannassa.

## Sisältö
- Tietokanta, taulut, viiteavaimet
- MySQL-proseduurit: `UusiSuoritus`, `PoistaSuoritus`
- CRUD-toiminnot
- Testaus: Postman

## Toimintalogiikka
1. Model, tietokanta
    - MySQL -tietokannassa taulut Opiskelija, Opintojakso ja Arviointi
    - viiteavaimet yhdistävät opiskelijan ja opintojakson arviointi -taulussa
    - Workbenchissä tehty tietokantaan kaksi proseduuria: UusiSuoritus, joka lisää uuden suorituksen tietokantaan ja PoistaSuoritus, joka poistaa suorituksen sieltä
2. Controller, Node.js/Express
    - sovelluksessa käytetään JavaScript -tiedostoja kontrollereina
    - ne ottavat vastaan HTTP -pyynnöt
3. View, Postman tms.
    - toiminnan testaus, jotta voidaan tarkistaa reagoiko tietokanta oikein

## ER-diagrammi
- kuva kansiossa
- taulut: Opiskelija, Arviointi, Opintojakso
- Opiskelija- ja Opintojakso-taulut sisältävät id-kentät primary keynä, ne täytetään auto incrementillä eivätkä ne voi olla koskaan NULL
- Arviointi-taulussa on foreign keynä edeltävien taulujen primary keyt, jotta opiskelija ja opintojakso saadaan yhdistettyä toisiinsa
- Opiskelijan ja Opintojaksojen välillä oleva suhde voi olla monesta moneen, mutta se ei ole sallittua, joten välissä oleva Arviointi –taulu mahdollistaa tämän
- yhteydet taulujen ovat identifying, koska foreign key on osa primary keytä eli Arviointi -taulua ei voi olla olemassa ilman Opiskelija ja Opintojakso -tauluja
- Opiskelija- ja Opintojaksojen välinen suhde Arviointi tauluun on yhdestä moneen, sillä esim. yhdellä opiskelijalla voi olla monta eri arviointia

Linkki videoon: https://gofile.io/d/F3frNu




