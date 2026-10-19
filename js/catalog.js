const catalogGrid = document.querySelector("#catalog-grid");
const catalogStatus = document.querySelector("#catalog-status");
const categoryFilter = document.querySelector("#category-filter");
const typeFilter = document.querySelector("#type-filter");

async function loadCatalog() {
  if (!catalogGrid || !catalogStatus) return;

  try {
    const response = await fetch("./data/trailers.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const trailers = await response.json();
    if (!Array.isArray(trailers)) throw new Error("El fitxer JSON ha de contenir una llista.");

    populateCategoryFilter(trailers);
    renderCatalog(trailers);
    categoryFilter?.addEventListener("change", () => renderCatalog(trailers));
    typeFilter?.addEventListener("change", () => renderCatalog(trailers));
  } catch (error) {
    console.error("No s'ha pogut carregar el catàleg:", error);
    catalogStatus.textContent = "No s'ha pogut carregar el catàleg. Comprova data/trailers.json i obre la web amb un servidor local.";
    catalogGrid.innerHTML = "";
  }
}

function populateCategoryFilter(trailers) {
  if (!categoryFilter) return;
  const categories = [...new Set(trailers.map((trailer) => trailer.categoria).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ca"));
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function renderCatalog(trailers) {
  const selectedCategory = categoryFilter?.value || "all";
  const selectedType = typeFilter?.value || "all";
  const visibleTrailers = trailers.filter((trailer) => {
    const matchesCategory = selectedCategory === "all" || trailer.categoria === selectedCategory;
    const matchesType = selectedType === "all" || trailer.modalitat === selectedType ||
      (selectedType === "Venda" && trailer.modalitat === "Venda i lloguer") ||
      (selectedType === "Lloguer" && trailer.modalitat === "Venda i lloguer");
    return matchesCategory && matchesType;
  });

  catalogGrid.replaceChildren();
  catalogStatus.textContent = `${visibleTrailers.length} ${visibleTrailers.length === 1 ? "producte trobat" : "productes trobats"}.`;

  if (!visibleTrailers.length) {
    const empty = document.createElement("p");
    empty.className = "catalog-empty";
    empty.textContent = "No hi ha productes per als filtres seleccionats.";
    catalogGrid.append(empty);
    return;
  }

  visibleTrailers.forEach((trailer) => catalogGrid.append(createTrailerCard(trailer)));
}

function createTrailerCard(trailer) {
  const article = document.createElement("article");
  article.className = "catalog-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "catalog-card__image";

  if (trailer.imatge) {
    const image = document.createElement("img");
    image.src = trailer.imatge;
    image.alt = trailer.alt || trailer.nom;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      image.remove();
      const placeholder = document.createElement("span");
      placeholder.textContent = "Imatge pendent d'afegir";
      imageWrap.append(placeholder);
    }, { once: true });
    imageWrap.append(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.textContent = "Imatge pendent d'afegir";
    imageWrap.append(placeholder);
  }

  const body = document.createElement("div");
  body.className = "catalog-card__body";
  const meta = document.createElement("div");
  meta.className = "catalog-card__meta";

  const category = document.createElement("span");
  category.className = "catalog-card__category";
  category.textContent = trailer.categoria || "Remolcs";

  const type = document.createElement("span");
  type.className = "catalog-card__type";
  type.textContent = trailer.modalitat || "Consultar";

  const title = document.createElement("h3");
  title.textContent = trailer.nom || "Remolc";

  const link = document.createElement("a");
  link.className = "catalog-card__action";
  link.href = "tel:+34620343910";
  link.append(document.createTextNode("Consultar informació "));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  link.append(arrow);

  meta.append(category, type);
  body.append(meta, title);
  if (trailer.descripcio) {
    const description = document.createElement("p");
    description.textContent = trailer.descripcio;
    body.append(description);
  }
  body.append(link);
  article.append(imageWrap, body);
  return article;
}

loadCatalog();
