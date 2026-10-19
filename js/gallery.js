// Preparat per a futures galeries. No activa cap comportament si no hi ha imatges de galeria.
document.querySelectorAll("[data-gallery-image]").forEach((image) => {
    image.addEventListener("click", () => {
        const source = image.currentSrc || image.src;
        if (source) window.open(source, "_blank", "noopener,noreferrer");
    });
});
