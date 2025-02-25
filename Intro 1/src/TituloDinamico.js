class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Criando os elementos
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    const style = document.createElement("style");
    style.textContent = `
          h1 {
              color: red;
          }
      `;

    // Limpar o shadow antes de adicionar novos elementos
    this.shadow.innerHTML = "";
    this.shadow.appendChild(componentRoot);
    this.shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
