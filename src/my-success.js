import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MySuccess extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">S</div>
        <h1>Success!</h1>
      </div>
    `;
  }
}

window.customElements.define('my-success', MySuccess);
