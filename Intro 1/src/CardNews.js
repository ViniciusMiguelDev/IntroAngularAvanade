class Cardnews extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadow.innerHTML = ""; // Garante que o conteúdo não seja duplicado
      this.shadow.appendChild(this.build());
      this.shadow.appendChild(this.styles());
    }
  
    build() {
      // Root
      const componentRoot = document.createElement("div");
      componentRoot.classList.add("card");
  
      // Card Left
      const cardLeft = document.createElement("div");
      cardLeft.classList.add("card-left");
  
      const autor = document.createElement("span");
      autor.textContent = "by " + (this.getAttribute("autor") || "Anonimous");
  
      const link = document.createElement("a");
      link.textContent = this.getAttribute("title") || "Leia mais";
      link.href = this.getAttribute("link-url") || "#";
      link.target = "_blank";
  
      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("content") || "Conteúdo da notícia";
  
      cardLeft.appendChild(autor);
      cardLeft.appendChild(link);
      cardLeft.appendChild(newsContent);
  
      // Card Right
      const cardRight = document.createElement("div");
      cardRight.classList.add("card-right");
  
      const img = document.createElement("img");
      img.src = this.getAttribute("img") || "https://via.placeholder.com/150";
      img.alt = "Imagem da notícia";
  
      cardRight.appendChild(img);
  
      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);

      this.shadow.appendChild(componentRoot);
  
      return componentRoot;
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
        .card {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 400px;
          border: 1px solid #ccc;
          padding: 10px;
          background-color: #fff;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
  
        .card-left {
          flex: 1;
          padding: 10px;
        }
  
        .card-left span {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }
  
        .card-left a {
          display: block;
          color: blue;
          text-decoration: none;
          font-weight: bold;
          margin-bottom: 5px;
        }
  
        .card-right img {
          max-width: 120px;
          border-radius: 5px;
        }
      `;
      return style;
    }
  }
  
  customElements.define("card-news", Cardnews);
  