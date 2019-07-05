import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyCanceled extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">C</div>
        <h1>Canceled!</h1>
      </div>
    `;
  }
}

window.customElements.define('my-canceled', MyCanceled);
