# Tietokannat ja rajapinnat - Harjoitustyö

Kurssin harjoitustyö. Sovellus käyttää Node.js:ää, Expressiä ja MySQL:ää. Mukana on REST-API ja SQL-proseduurit (+MCV). Sovellus käsittelee opintosuorituksia tietokannassa.

## Sisältö
- CRUD-toiminnot
- Viiteavaimet
- MySQL-proseduurit: `UusiSuoritus`, `PoistaSuoritus`
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
    ![Harjoitustyön ER-diagrammi]
    



