import myAlert from "../../modal-box/my-alert.js";
import html from "./template-navbar.html";
import logo from "../../../images/logo.svg";

class Navbar extends HTMLElement {
  connectedCallback() {
    this.statistik = this.getAttribute("stat-href") || "#";
    this.ketKamar = this.getAttribute("bedroom-href") || "#";

    this.render();
  }

  render() {
    this.innerHTML = html;

    // set the value of the custom element attribute on the href attribute
    document.getElementById("stat-href").href = this.statistik;
    document.getElementById("bedroom-href").href = this.ketKamar;

    // put a logo image for the brand
    document.getElementById("logo").src = logo;

    // when the toggle button onclick
    document.getElementById("toggle-btn").addEventListener("click", function () {
      this.classList.toggle("rotate-90");
      document.getElementById("nav").classList.toggle("hidden");
      document.getElementById("brand-container").classList.toggle("border-b-2");
    });

    // when the about button onclick, then show the sweetalert2 modal
    document.getElementById("about").addEventListener("click", function () {
      myAlert(
        "info",
        "Tentang Web Ini",
        "Semua data yang ditampilkan pada website ini merupakan hasil dari data John Hopkins University CSSE dan Satyawikananda."
      );
    });
  }
}

customElements.define("nav-bar", Navbar);
