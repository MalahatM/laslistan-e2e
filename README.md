# läslistan
Detta projekt innehåller automatiserade end-to-end-tester för webbapplikationen Laslistan med hjälp av [Playwright](https://playwright.dev/).

Det är också en webbapplikation där användare kan skapa, favoritmarkera och hantera sina böcker i en personlig läslista.

## Om applikationen
Laslistan är en enkel bokapplikation där användare kan:

1. Se en katalog med böcker
 2. Markera sina favoritböcker
 3. Lägga till nya böcker
 4. Visa sina favoritböcker på en separat sida


Projektet innehåller tester om:

Navigering
-  Användare kan navigera mellan sidorna "Katalog", "Lägg till bok" och "Mina böcker".

 Lägga till bok
-  Användare kan lägga till en ny bok med titel och författare så att den visas i katalogen.

 Markera favorit
-  Användare kan markera en bok som favorit i katalogen så att den visas i "Mina böcker".

Visa favoriter
- Användare kan se endast mina favoritböcker i sidan "Mina böcker" men om hen inte redan har valt en bok kommer hen att få följane meddelande"När du valt, kommer dina favoritböcker att visas här."
