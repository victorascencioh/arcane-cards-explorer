* core: Son los servicios globales de mi app
* features: Funcionalidades principales
* shared: Componentes reutilizables
* state: Estado global (NgRx)

* Modulo 1 Sesión 4:
* CardsService:
Es un servicio de Angular cuya responsabilidad es:
* Encapsular la comunicación con la API de Scryfall
* Centralizar la lógica de obtención de datos
`* exponer un estado reactivo consumible por los componentes.
** En mi CardsService se declara una variable llamada cards del tipo Dentro del servicio se define un signal (cards) y representa el estado actual de las cartas obtenidas y es reactivo, osea que cualquier cambio en su valor se refleja automaticamente en la UI.
Cuando se ejecuta el método searchCards(query):

1. Se realiza una petición HTTP a la API
2. Se reciben los datos
3. El signal cards se actualiza mediante set()

Los componentes que consumen este signal se renderizan automáticamente
El servicio se inyecta en el componente mediante Dependency Injection.

* HttpClient: Es el módulo de Angular para realizar peticiones HTTP.
Se inyecta en el servicio mediante el sistema de Dependency Injection, permitiendo desacoplar la lógica de red del resto de la aplicación.