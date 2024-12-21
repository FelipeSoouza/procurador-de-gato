document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.getElementById("fetch-cat-button");
    const catContainer = document.getElementById("cat-container");  // Corrigido o ID
    const loadingElement = document.getElementById("loading");

    async function fetchCat() {
        loadingElement.classList.remove("hidden");  // Corrigido classList
        catContainer.innerHTML = "";

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");  // Corrigido URL

            const data = await response.json();

            if (data.length > 0) {
                const catUrl = data[0].url;

                const imgElement = document.createElement("img");
                imgElement.src = catUrl;
                imgElement.alt = "Gato aleatório";
                imgElement.style.maxWidth = "400px";
                imgElement.style.borderRadius = "10px";

                catContainer.appendChild(imgElement);
            }

        } catch (error) {
            console.error("Erro ao buscar a imagem do gato:", error);
        } finally {
            loadingElement.classList.add("hidden");  // Esconde o carregamento após a operação
        }
    }

    fetchCat(); // Executa a função assim que a página carregar

    button.addEventListener('click', fetchCat); // Ação ao clicar no botão
});
