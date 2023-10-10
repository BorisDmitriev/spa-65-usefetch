# SPA-react-router-2

1.  Erstellen Sie eine 404-NotFound-Page-Komponente, die eine Fehlermeldung anzeigt, wenn die Seite nicht gefunden wird. Binden Sie diese Komponente in die `App.jsx`-Datei ein, indem Sie eine Route mit dem Pfad "\*" erstellen.
2.  Fügen Sie der Anwendung eine Navbar hinzu, die eine Verknüpfung zu den Seiten "Home", "About" und "StarwarsCharacter" enthält. Die Navbar sollte auf jeder Seite der Anwendung angezeigt werden.
3.  Erstellen Sie eine `SharedLayout.jsx`-Komponente, die als Container für die Anwendung dient. Diese Komponente sollte die Navbar und den Footer enthalten. Binden Sie diese Komponente in die `App.jsx`-Datei ein und definieren Sie die einzelnen Routen als Unterpfade dieser Route.
4.  Ändern Sie die Navbar-Komponente so, dass sie mithilfe von `NavLink` eine aktive Klasse auf der ausgewählten Verknüpfung anzeigt.
5.  Fügen Sie der Anwendung eine Index-Seite hinzu, die beim Laden der Anwendung angezeigt wird.
6.  Erstellen Sie eine `CharacterDetails.jsx`-Komponente, die eine detaillierte Beschreibung eines Produkts anzeigt. Verwenden Sie eine dynamische Route, um auf diese Seite zu gelangen. Verknüpfen Sie diese Komponente von der "StarwarsCharacter"-Seite aus.
7.  Um an alle Daten heranzukommen, benutzen Sie am besten useContext und erstelle eine Provider-Komponente, welche den API-Call für Sie macht und dann die empfangenen Daten als als Global-State an die `CharacterDetails.jsx`-Komponente und `StarwarsCharacter`-Page weiterreicht.
8.  **Jetzt lagern Sie bitte den API-Call selber in einen Custom-Hook names `useFetch` aus und binden Sie diesen Hook in Ihrer Providerkomponente ein.**

**Hinweis**

Sie können gerne diese API Nutzen um an Daten heranzukommen:

https://swapi.dev/api/people/

Viele Spaß ;)
