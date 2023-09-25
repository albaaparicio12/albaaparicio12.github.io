class LinksComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="links">
            <a class="social" href="https://github.com/albaaparicio12"><img src="img/github.png" alt="Github"></a>
            <a class="social" href="https://www.linkedin.com/in/alba-aparicio-perez/"><img src="img/linkedin.png"
                    alt="Linkedin"></a>
            <a class="social" href="https://www.instagram.com/albaaparicio12/"><img src="img/instagram.png"
                    alt="Instagram"></a>
        </div>
        `;
    }
}


customElements.define('links-component', LinksComponent);