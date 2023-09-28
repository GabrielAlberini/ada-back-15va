# --- PATRONES DE DISEÑO ---

En el mundo del desarrollo de software, hay muchas formas de encarar los proyectos. Para poder trabajar de forma ordenada y lograr que las aplicaciones sean seguras, robustas, escalables, fáciles de actualizar y mantener, los desarrolladores han creado con el paso del tiempo distintos patrones que determinan la estructura de las aplicaciones.
Uno de estos patrones es el conocido por muchos patrón MVC (Model View Controller). Se basa en el concepto de separación de intereses, y que básicamente establece que una aplicación debe estar dividida en distintos módulos encargados de:

# CONTROLLER

Punto de entrada de las solicitudes que hace el usuario al programa. Encargado de manejar errores, validar las solicitudes y de derivarlas al modelo correspondiente a través de funciones getters y setters. Nunca debería encargarse de procesar datos, sino de decirle al modelo qué hacer.

# MODEL

Todo código encargado de procesar los datos. Todas las solicitudes de creación, lectura, actualización y eliminación de los datos (C.R.U.D.), le llegan al modelo a través del controlador.

# VIEW

Forma en que la data es representada visualmente. Renderiza dinámicamente documentos HTML según lo indicado por el controlador.

Esquema MVC --> https://www.freecodecamp.org/espanol/news/content/images/size/w1600/2021/06/MVC3.png

# --- A.P.I. == Application Programming Interface ---

Las interfaces de programación de aplicaciones son mecanismos que permiten a dos o más componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. Por ejemplo, el sistema de software del instituto de meteorología contiene datos meteorológicos diarios. La aplicación meteorológica de su teléfono “habla” con este sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.

En el contexto de las APIs, la palabra "Application" se refiere a cualquier software independiente. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. Este contrato define cómo se comunican entre sí mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los desarrolladores deben estructurar esas solicitudes y respuestas.

Artículo de AWS --> https://aws.amazon.com/es/what-is/api/

Esquema API --> https://voyager.postman.com/illustration/diagram-what-is-an-api-postman-illustration.svg
Esquema API --> https://cdn.sanity.io/images/ckmptp4a/production/bbfeaa73a1cae7c2c6e99257015329f8b8874957-1000x470.png?w=1000&fit=max&auto=format
Esquema API --> https://res.cloudinary.com/practicaldev/image/fetch/s--VVFuhCgq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/15k1xkvzxry2jif8vems.png

API DE NODEJS --> https://nodejs.org/api/crypto.html#cryptocreatehashalgorithm-options
