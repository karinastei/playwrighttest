# playwrighttest
## Vormi esitamine ilma nime sisendita
### Testi sammud:

- Liigutakse meigiveebipoe kodulehele, avades brauseris URL "https://www.loverte.com/".
-	Tagasisidevormi juurde pääsemiseks klõpsake linki "Kontakt".
-	Proovitakse esitada vorm ilma välja "Nimi" täitmata, klõpsates nuppu "Saada".
-	Oodatakse 1 sekund, et oleks aega võimalike tõrketeadete ilmumiseks.
-	Kontrollitakse, kas välja "Nimi" klassis on error.

### Oodatud tulemused:
Pärast testitoimingute käivitamist on oodatav tulemus, et tagasiside nime sisestusväljal peaks olema määratud CSS-klassid, mis näitavad, et välja täitmata jätmise tõttu tekkis viga. See testjuhtum kontrollib vormide esitamise vigade käsitlemist meigiveebipoe veebisaidil.

## Toote ostukorvi lisamine
### Testi sammud:

- Liikutakse meigiveebipoe kodulehele, avades URL-i "https://www.loverte.com/".
-	Klõpsatakse lingil "Nahahooldus".
-	Klõpsatakse toote lingil "Holika Holika Aloe Soothing Gel".
-	Valitud toote info juures klõpsatakse nuppu "Lisa ostukorvi".
-	Ostukorvi kiirvaate avamiseks klõpsatakse ostukorvi pildil.
- Kiirvaatest avatakse ostukorv, klõpsates ostukorvi nupul.
- Kontrollitakse ostukorvis toodet, klõpsates toote nimel.

### Oodatud tulemused:
Eeldatav tulemus pärast testisammude läbiviimist on see, et toode "Holika Holika Aloe Soothing Gel" lisatakse ostukorvi ilma vigade ja probleemideta. Test peaks liikuma veebisaidil ja suhtlema vajalike elementidega, et simuleerida toote lisamist ostukorvi ja seejärel kontrollima, kas toode on ostukorvis.

## Toote otsing
### Testi sammud:

- Liigutakse meigiveebipoe kodulehele, külastades "https://www.loverte.com/".
- Otsitakse veebilehelt üles otsingu sisestusväli, kasutades sobivat valijat.
- Sisestatakse otsingu sisestusväljale otsingupäring "holika".
- Klõpsake otsingutulemuste lingil nimega "HOLIKA HOLIKA Aloe Shower Gel HOLIKA HOLIKA Aloe Shower Gel KINGIKAMPAANIA HOLIKA HOLIKA Aloe Shower Gel".

### Oodatud tulemused:

 Otsingu sisestusväli peaks eksisteerima ja otsingupäring "holika" peaks olema sisestusväljale sisestatav. Määratud nimega otsingutulemuse link peaks olema klõpsatav ja viima toote lehele.

### Esinenud probleemid:

Elemendi valimine:
- Probleem: Igas testis oli paar juhtumit, kus elemendi valimine ei õnnestunud esimesel katsel ja see tõttu ja elemendile klikkimine.
- Lahendus: Elemendi valimiseks sai katsetatud eri võimalusi. Osadel juhtumitel oli lihtsam .locator kasutamine, teistel oli sobivam, aga .getByRole. Kui elemendi valimisinfo oli liiga lai ja tuli mitu tulemust siis kitsendati valijat errori järgi, kus olid kirjas kõik eelnevalt valitud elemendid.

