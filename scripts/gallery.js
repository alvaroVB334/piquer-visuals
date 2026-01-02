document.addEventListener('DOMContentLoaded', () => {

    // 1. LISTA DE ARCHIVOS
    const imageFiles = [
        "2Q5A0004.webp", "2Q5A0666.webp", "2Q5A0886.webp", "2Q5A0906.webp",
        "2Q5A0936.webp", "2Q5A1148.webp", "2Q5A1316.webp", "2Q5A1332.webp",
        "2Q5A1333-2.webp", "2Q5A1346.webp", "2Q5A1627-2.webp", "2Q5A1649.webp",
        "2Q5A2012-2.webp", "2Q5A2072.webp", "2Q5A2157.webp", "2Q5A2280.webp",
        "2Q5A2427.webp", "2Q5A2581.webp", "2Q5A2698-2.webp", "2Q5A2809.webp",
        "2Q5A3153.webp", "2Q5A3279.webp", "2Q5A3401.webp", "2Q5A3697.webp",
        "2Q5A3745.webp", "2Q5A3810.webp", "2Q5A3889.webp", "2Q5A3962.webp",
        "2Q5A4043.webp", "2Q5A5233.webp", "2Q5A5386-2.webp", "2Q5A5426-2.webp",
        "2Q5A5706.webp", "2Q5A5812-2.webp", "2Q5A6006.webp", "2Q5A6013.webp",
        "2Q5A6132.webp", "2Q5A6406.webp", "2Q5A6572-2.webp", "2Q5A6609-3.webp",
        "2Q5A6672.webp", "2Q5A6803.webp", "2Q5A7178-2.webp", "2Q5A7220.webp",
        "2Q5A7271.webp", "2Q5A7285.webp", "2Q5A7375-2.webp", "2Q5A7422.webp",
        "2Q5A7942.webp", "2Q5A8007-2.webp", "2Q5A8116.webp", "2Q5A8226.webp",
        "2Q5A8252.webp", "2Q5A8287.webp", "2Q5A8289.webp", "2Q5A8386.webp",
        "2Q5A8600.webp", "2Q5A8602-2.webp", "2Q5A8651.webp", "2Q5A8659.webp",
        "2Q5A8663-2.webp", "2Q5A8663.webp", "2Q5A8665.webp", "2Q5A8701.webp",
        "2Q5A8716.webp", "2Q5A8757.webp", "2Q5A8807.webp", "2Q5A9043.webp",
        "2Q5A9428.webp", "2Q5A9459.webp", "2Q5A9544.webp", "2Q5A9593.webp"
    ];

    // 2. CONFIGURACIÓN (Variables locales fijas)
    const IMAGES_PER_PAGE = 12;
    const FOLDER = "images/"; // Asegúrate de que tus fotos estén en esta carpeta
    let currentPage = 1;

    const grid = document.getElementById('image-grid');
    const pagination = document.getElementById('pagination');

    // Ordenar alfabéticamente
    imageFiles.sort((a, b) => a.localeCompare(b));

    function renderGallery(page) {
        grid.innerHTML = "";

        const start = (page - 1) * IMAGES_PER_PAGE;
        const end = start + IMAGES_PER_PAGE;
        const paginatedItems = imageFiles.slice(start, end);

        // Dentro de tu función renderGallery, sustituye el .forEach por este:

        paginatedItems.forEach(fileName => {
            const container = document.createElement('div');
            container.className = 'grid-item loading'; // Empezamos con estado 'loading'

            const img = document.createElement('img');
            img.src = `${FOLDER}${fileName}`;
            img.alt = `Piquer Visuals - ${fileName}`;
            img.loading = "lazy";

            // EVENTO CLAVE: Cuando la imagen termina de descargar
            img.onload = () => {
                container.classList.remove('loading');
                container.classList.add('loaded');
            };

            img.onerror = () => {
                container.style.display = 'none';
            };

            container.appendChild(img);
            grid.appendChild(container);
        });

        renderPagination();
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    function renderPagination() {
        pagination.innerHTML = "";
        const totalPages = Math.ceil(imageFiles.length / IMAGES_PER_PAGE);

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('div');
            btn.className = `page-link ${i === currentPage ? 'active' : ''}`;
            btn.innerText = i;
            btn.onclick = () => {
                currentPage = i;
                renderGallery(currentPage);
            };
            pagination.appendChild(btn);
        }
    }

    // Ejecución inicial
    renderGallery(currentPage);
});