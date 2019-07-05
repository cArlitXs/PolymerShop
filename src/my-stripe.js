import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class MyStripe extends PolymerElement {
  static get properties() {
    return {
      stripe: { value: Stripe('pk_test_MzZvwHo2zlzC6iFCZqLWXc60')}
    };
  }
  // stripeCalling () {
  //   Stripe('pk_test_MzZvwHo2zlzC6iFCZqLWXc60').redirectToCheckout({
  //     items: [{ sku: 'sku_FK8ojS0i3qW24x', quantity: 1 }],
  //     successUrl: 'http://127.0.0.1:8081/success',
  //     cancelUrl: 'http://127.0.0.1:8081/canceled',
  //   })
  //   .then(function (result) {
  //     if (result.error) {
  //       var displayError = document.getElementById('error-message');
  //       displayError.textContent = result.error.message;
  //     }
  //   });
  // }
  clickToBuy(e){
    console.log(e.target.id);
    var itemId = e.target.id;
    this.stripe.redirectToCheckout({
      items: [{ sku: itemId, quantity: 1 }],
      successUrl: 'http://127.0.0.1:8081/success',
      cancelUrl: 'http://127.0.0.1:8081/canceled',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  }
  constructor() {
    super();
    // this.addEventListener('click', this.clickToBuy);
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
        paper-button[disabled]{
          background-color: #eaeaea;
          color: #a8a8a8;
        }
      </style>

      <div class="card">
        <div class="circle">S</div>
        <h1>Stripe</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>

        <div id="error-message"></div>
        
        <paper-button raised on-click="stripeCalling" disabled>
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>

        <hr>
        Item 1
        <paper-button raised id="sku_FK8ojS0i3qW24x" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
        <hr>
        Item 2
        <paper-button raised id="sku_FNf1Km4MaGLIWn" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
      </div>
    `;
  }
}

window.customElements.define('my-stripe', MyStripe);
