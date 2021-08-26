import html from "./template-banner.html";
import heroImg from "../../../images/person-fight-covid.jpg";

class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = html;
    document.getElementById("banner-hero").src = heroImg;
  }
}

customElements.define("banner-stat", Banner);
