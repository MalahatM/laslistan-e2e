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
-  Användare kan navigera mellan sidorna "Katalog", "Lägg till bok" och "Mina böcker" och kan tillbaka också från alla sidorna till katalog sidan.

 Lägga till bok
-  Användare kan lägga till en ny bok med titel och författare så att den visas i katalogen.
-  Användare kan lägga till flera bok samtidigt i "Lägg till bok" sidan.
-  Användare kan lägga till flera bok med olika språk samtidigt i "Lägg till bok" sidan.
-  Användare kan inte lägga till en ny bok i "Lägg till bok" sidan om titel eller författare fält is tom.


 Markera favorit
-  Användare kan markera en bok som favorit i katalogen så att den visas i "Mina böcker".
-  Användare kan markera felera bok samtidig som favorit i katalogen så att den visas i "Mina böcker".
-  Användare kan favoritmarkera och ta bort favoritmarkering.


Visa favoriter
- Användare kan se endast mina favoritböcker i sidan "Mina böcker" men om hen inte redan har valt en bok kommer hen att få följane meddelande"När du valt, kommer dina favoritböcker att visas här."



