Filtro de Propiedades Inmobiliarias y Visualización
Esta es una aplicación inmobiliaria que permite a los usuarios filtrar propiedades según diversos criterios como nombre, dirección y rango de precios. También muestra los detalles de las propiedades, incluidas las imágenes e historial de ventas, en un modal cuando se selecciona una propiedad.

Características
Filtros de Búsqueda de Propiedades: Los usuarios pueden filtrar propiedades por nombre, dirección y rango de precios (mínimo y máximo).

Tarjetas de Propiedades: Las propiedades se muestran como tarjetas con detalles como nombre, dirección, precio y código interno.

Modal de Detalles de la Propiedad: Al hacer clic en una tarjeta de propiedad, se abre un modal con información detallada sobre la propiedad, incluyendo información del propietario, imágenes e historial de ventas.

Validación de Precios: Se asegura de que se proporcionen tanto el precio mínimo como el máximo y que el precio mínimo no sea mayor que el máximo.

Tecnologías
React: Se utiliza para construir la interfaz de usuario del frontend.

Bootstrap: Para diseño responsivo y funcionalidad de modales.

Axios: Para realizar solicitudes HTTP a la API.

CSS: Para dar estilo a los componentes.

Estructura de Archivos
bash
src/
├── components/
│   ├── Filters.js          # Componente de filtros para buscar propiedades
│   ├── PropertyCard.js     # Muestra la tarjeta individual de una propiedad
│   ├── PropertyDetails.js  # Muestra los detalles de la propiedad en un modal
│   ├── PropertyGrid.js     # Muestra una cuadrícula de propiedades
│   └── PropertyService.js  # Llamadas Axios al backend de la API
├── styles/
│   ├── filters.css         # Estilos para el componente Filters
│   ├── propertyCard.css    # Estilos para el componente PropertyCard
│   ├── propertyDetails.css # Estilos para el modal PropertyDetails
│   └── propertyGrid.css    # Estilos para el componente PropertyGrid
└── App.js                  # Archivo principal de la aplicación
Configuración e Instalación
Requisitos Previos
Asegúrate de tener instalado Node.js.Puedes descargarlo desde aquí.

Pasos
Clona el repositorio:

bash
git clone <url-del-repositorio>
cd <carpeta-del-proyecto>
Instala las dependencias:

bash
npm install
Inicia la aplicación:

bash
npm start
Esto iniciará la aplicación en http://localhost:3000.

API Backend
Esta aplicación se comunica con una API backend para obtener propiedades. Se espera que la API se ejecute en:

bash
https://localhost:7179/api/properties
Endpoints de la API
GET /properties: Obtiene todas las propiedades basadas en los filtros proporcionados (nombre, dirección, minPrice, maxPrice).

GET /properties/{id}: Obtiene los detalles de una propiedad individual por su ID.

Capturas de Pantalla
Filtro de Propiedades
La barra de filtros permite buscar propiedades por nombre, dirección y rango de precios.

Tarjeta de Propiedad
Cada propiedad se muestra como una tarjeta con detalles básicos.

Modal de Detalles de la Propiedad
Al hacer clic en una tarjeta de propiedad, se abre un modal con información detallada, incluyendo detalles del propietario, imágenes de la propiedad e historial de ventas.

Contribuir
Haz un fork del repositorio.

Crea una nueva rama (git checkout -b nombre-de-la-caracteristica).

Realiza tus cambios.

Comete tus cambios (git commit -am 'Añadir nueva característica').

Empuja tus cambios a la rama (git push origin nombre-de-la-caracteristica).

Crea una nueva Pull Request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
