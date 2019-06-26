import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

// import 'https://js.stripe.com/v3';

class MyStripe extends PolymerElement {
  static get properties() {
    return {
    };
  }
  constructor() {
    super();
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        iron-icon{
          margin-right: 5px;
        }
        paper-button{
          background-color: #00c853;
          color: white;
        }
      </style>

      <div class="card">
        <div class="circle">S</div>
        <h1>Stripe</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>

        <div id="error-message"></div>
        
        <paper-button raised>
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
        
      </div>
    `;
  }
}

window.customElements.define('my-stripe', MyStripe);
