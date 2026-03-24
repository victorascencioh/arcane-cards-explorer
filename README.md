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