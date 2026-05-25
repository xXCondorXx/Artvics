// ==========================================================================
// BASE DE DATOS DE PRODUCTOS - ACTUALIZADA POR EL PORTAL
// ==========================================================================

const PRODUCT_DATABASE = [
    {
        id: "textiles-camiseta-algodon-180g",
        title: "Camiseta Algodón 180g",
        category: "textiles",
        price: 28000,
        image: "assets/images/products/textiles/images.jpg",
        desc: "Algodón premium de alta densidad, excelente suavidad y durabilidad.",
        badge: "Popular",
        options: {"talla":["S","M","L","XL"],"tecnica":["Estampado DTF","Bordado Premium"]},
        type: "tshirt"
    },
    {
        id: "textiles-camiseta-oversize-algodon",
        title: "Camiseta Oversize Algodón",
        category: "textiles",
        price: 55000,
        image: "assets/images/products/textiles/Camiseta Oversize Algodón.png",
        desc: "Corte moderno Oversize relajado, algodón peinado de calidad superior.",
        badge: "Moda",
        options: {"talla":["S","M","L","XL"],"tecnica":["Estampado DTF","Bordado Premium"]},
        type: "tshirt"
    },
    {
        id: "textiles-camiseta-tela-burda",
        title: "Camiseta Tela Burda",
        category: "textiles",
        price: 50000,
        image: "assets/images/products/textiles/Camiseta Tela Burda.png",
        desc: "Tejido Burda de alta resistencia, ideal para estilo urbano.",
        options: {"talla":["S","M","L","XL"],"tecnica":["Estampado DTF","Bordado Premium"]},
        type: "tshirt"
    },
    {
        id: "hoodies-hoodie-premium-capota",
        title: "Hoodie Premium Capota",
        category: "hoodies",
        price: 80000,
        image: "assets/images/products/hoodies/Hoodie Premium Capota.jpg",
        desc: "Buzo capota premium, forro térmico interno y cordones con puntera.",
        badge: "Más Vendido",
        options: {"talla":["S","M","L","XL"],"tecnica":["Estampado DTF","Bordado Premium"]},
        type: "hoodie"
    },
    {
        id: "hoodies-buzo-basico-cuello-redondo",
        title: "Buzo Básico Cuello Redondo",
        category: "hoodies",
        price: 85000,
        image: "assets/images/products/hoodies/Buzo Básico Cuello Redondo.jpg",
        desc: "Buzo clásico de cuello redondo, tejido de alta calidad y tacto suave.",
        options: {"talla":["S","M","L","XL"],"tecnica":["Estampado DTF","Bordado Premium"]},
        type: "hoodie"
    },
    {
        id: "hoodies-gorra-beisbolera-bordada",
        title: "Gorra Beisbolera Bordada",
        category: "hoodies",
        price: 35000,
        image: "assets/images/products/hoodies/Gorra Beisbolera Bordada.jpg",
        desc: "Gorra clásica beisbolera con ajuste regulable y visera curva.",
        badge: "Recomendado",
        options: {"color":["Negra","Azul","Blanca","Roja"],"tecnica":["Bordado Computarizado","Estampado Flex"]},
        type: "cap"
    },
    {
        id: "hoodies-gorra-microperforada-deportiva",
        title: "Gorra Microperforada Deportiva",
        category: "hoodies",
        price: 27000,
        image: "assets/images/products/hoodies/Gorra Microperforada Deportiva.jpg",
        desc: "Tejido microperforado ultra-transpirable, ideal para deportes.",
        options: {"color":["Negra","Azul","Blanca","Roja"],"tecnica":["Bordado Computarizado","Estampado Flex"]},
        type: "cap"
    },
    {
        id: "vasos-mug-blanco-personalizado",
        title: "Mug Blanco Personalizado",
        category: "vasos",
        price: 16000,
        image: "assets/images/products/vasos/Mug Blanco Personalizado.jpg",
        desc: "Mug clásico de cerámica blanca de 11oz, impresión brillante full color.",
        badge: "Popular",
        options: {"diseño":["Foto Personalizada","Frase Especial","Logo Corporativo"]},
        type: "mug"
    },
    {
        id: "vasos-mug-magico-escarchado",
        title: "Mug Mágico Escarchado",
        category: "vasos",
        price: 19000,
        image: "assets/images/products/vasos/Mug Mágico Escarchado.jpg",
        desc: "Mug termo-sensible que revela tu diseño oculto al verter líquido caliente.",
        badge: "Sorpresa",
        options: {"diseño":["Foto Personalizada","Frase Especial","Logo Corporativo"]},
        type: "mug"
    },
    {
        id: "vasos-termo-inteligente-digital",
        title: "Termo Inteligente Digital",
        category: "vasos",
        price: 36000,
        image: "assets/images/products/vasos/Termo Inteligente Digital.jpg",
        desc: "Botella térmica de acero inoxidable con sensor táctil LED.",
        badge: "Tecnología",
        options: {"color":["Negro Mate","Azul","Plateado","Rojo"],"diseño":["Grabado Láser","Estampado DTF UV"]},
        type: "bottle"
    },
    {
        id: "vasos-vaso-cervecero-opalizado",
        title: "Vaso Cervecero Opalizado",
        category: "vasos",
        price: 36000,
        image: "assets/images/products/vasos/Vaso Cervecero Opalizado.jpg",
        desc: "Jarra cervecera de vidrio opalizado de alta resistencia, acabado mate.",
        options: {"color":["Negro Mate","Azul","Plateado","Rojo"],"diseño":["Grabado Láser","Estampado DTF UV"]},
        type: "bottle"
    },
    {
        id: "agendas-agenda-personalizada-plastificada",
        title: "Agenda Personalizada Plastificada",
        category: "agendas",
        price: 8000,
        image: "assets/images/products/agendas/Agenda Personalizada Plastificada.jpg",
        desc: "Libreta de notas con portadas plastificadas a full color.",
        options: {"tamaño":["A5 (Mediana)","A6 (Pequeña)"]},
        type: "book"
    },
    {
        id: "agendas-llavero-de-acrilico-premium",
        title: "Llavero de Acrílico Premium",
        category: "agendas",
        price: 3000,
        image: "assets/images/products/agendas/Llavero de Acrílico Premium.jpg",
        desc: "Llavero acrílico transparente cortado a láser con tu fotografía.",
        options: {"forma":["Rectangular","Circular","Corazón"]},
        type: "key"
    },
    {
        id: "agendas-lampara-led-acrilico-con-foto",
        title: "Lámpara LED Acrílico con Foto",
        category: "agendas",
        price: 90000,
        image: "assets/images/products/agendas/Lámpara LED Acrílico con Foto.jpg",
        desc: "Lámpara decorativa de luz cálida con placa de acrílico grabada.",
        badge: "Regalo WOW!",
        options: {"diseño":["Foto Personalizada","Frase Especial","Logo Corporativo"]},
        type: "frame"
    },
    {
        id: "letreros-letrero-de-neon-flex",
        title: "Letrero de Neón Flex",
        category: "letreros",
        price: 150000,
        image: "assets/images/products/letreros/Letrero de Neón Flex.jpg",
        desc: "Letrero luminoso elaborado en Neón Flex LED personalizado.",
        badge: "Exclusivo",
        type: "neon"
    },
    {
        id: "letreros-piedra-sublimada-corazon",
        title: "Piedra Sublimada Corazón",
        category: "letreros",
        price: 100000,
        image: "assets/images/products/letreros/Piedra Sublimada Corazón.png",
        desc: "Portarretrato de piedra de roca natural tallada con forma de corazón.",
        type: "frame"
    },
    {
        id: "tulas-tula-deportiva-sublimada",
        title: "Tula Deportiva Sublimada",
        category: "tulas",
        price: 13000,
        image: "assets/images/products/tulas/Tula Deportiva Sublimada.png",
        desc: "Tula de cordón fabricada en poliéster con sublimación full color.",
        options: {"forma":["Rectangular","Circular","Corazón"]},
        type: "bag"
    },
    {
        id: "infantil-mameluco-de-bebe-personalizado",
        title: "Mameluco de Bebé Personalizado",
        category: "infantil",
        price: 20000,
        image: "assets/images/products/infantil/Mameluco de Bebé Personalizado.png",
        desc: "Prenda de algodón 100% hipoalergénico suave para el bebé.",
        options: {"talla":["0-3 Meses","3-6 Meses","6-12 Meses"],"color":["Blanco","Rosado","Azul Pastel"]},
        type: "baby"
    },
    {
        id: "publicidad-tarjetas-de-presentacion-brillo-uv",
        title: "Tarjetas de Presentación Brillo UV",
        category: "publicidad",
        price: 65000,
        image: "assets/images/products/publicidad/Tarjetas de Presentación Brillo UV.png",
        desc: "Caja de 1000 tarjetas impresas en propalcote de 300g.",
        type: "biz"
    },
    {
        id: "publicidad-desarrollo-de-pagina-web-corporativa",
        title: "Desarrollo de Página Web Corporativa",
        category: "publicidad",
        price: 180000,
        image: "assets/images/products/publicidad/Desarrollo de Página Web Corporativa.png",
        desc: "Diseño y programación de página web interactiva.",
        badge: "Servicio Pro",
        type: "biz"
    }
];
