# Arcane Cards Explorer

Arcane Cards Explorer is a modern web application for exploring Magic: The Gathering cards using the Scryfall API.

## Features (Planned)

* Card search
* Favorites
* Deck builder
* Deck simulator
* User authentication
* Deck sharing

## Tech Stack

* Angular
* Signals
* NgRx
* Firebase
* TailwindCSS
* Jest
* Cypress

## API

Scryfall API
https://scryfall.com/docs/api

## Diferencia entre Signals y Observables.
Los Signals en Angular representan estado reactivo síncrono.
Encapsulan un valor y notifican automáticamente a sus consumidores cuando este cambia.

Son ideales para:
estado de UI
datos derivados
reactividad simple

Los Observables provienen de RxJS y representan flujos de datos en el tiempo (streams).
Permiten emitir múltiples valores de manera asíncrona a lo largo del tiempo.
Son ideales para:
peticiones HTTP
eventos
websockets
streams complejos

Regla práctica

👉 Usa Signals para estado de UI
👉 Usa Observables para flujos async (HTTP, eventos)

## Pagination Strategy:
ScryFall funciona con cursor pagination.
La API de Scryfall utiliza cursor-based pagination.
En lugar de usar páginas numéricas (page=1,2,3), cada respuesta incluye:
data: lista de resultados
has_more: indica si existen más resultados
next_page: URL completa para obtener la siguiente página

* next_page: Se define un signal para nextPage del tipo string.
Cuando se ejecuta searchCards:
Se realiza una petición HTTP inicial
Si has_more === true, se guarda next_page en el signal nextPage
Si no hay más resultados, nextPage se establece como null

* Los resultados se acumulan en loadMore.
La función loadMore:
Verifica si nextPage tiene valor
Realiza una petición HTTP usando esa URL
Actualiza el cursor (nextPage) con el nuevo valor de next_page
Si no hay más resultados, se establece como null
En loadMore, los resultados se acumulan usando destructuring
`this.cards.update(cards => [...cards, ...res.data]);`
Esto permite mantener los resultados anteriores y agregar los nuevos.

📌 Diferencia entre searchCards y loadMore

searchCards:
reemplaza completamente los resultados
inicia una nueva búsqueda

loadMore:
agrega nuevos resultados al estado existente
continúa la paginación