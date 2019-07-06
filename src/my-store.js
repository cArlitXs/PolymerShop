import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class MyStore extends PolymerElement {
  static get properties() {
    return {
      stripe: { value: Stripe('pk_test_MzZvwHo2zlzC6iFCZqLWXc60')},
      quantityValue: { type: Number }
      // ,quantityMax: {
      //   type: Array,
      //   value() {
      //     return [
      //       {q: '1'},
      //       {q: '2'},
      //       {q: '3'},
      //       {q: '4'},
      //       {q: '5'},
      //     ];
      //   }
      // }
    };
  }
  constructor() {
    super();
    this.quantityValue = 1;
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
        paper-dropdown-menu{
          max-width: 100px;
        }
      </style>

      <!-- <div class="card">
        <div class="circle">S</div>
        <h1>Stripe</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>

        <div id="error_message"></div>
        
        <paper-button raised on-click="stripeCalling" disabled>
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>

        <hr>
        <p>Item 1:</p>
        <p><small>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit quis odio auctor auctor.</small></p>
        
        <paper-dropdown-menu label="Quantity:" noink no-animations>
          <paper-listbox slot="dropdown-content" class="dropdown-content" selected="0">
            <template is="dom-repeat" items="{{quantityMax}}">
              <paper-item id="{{item.q}}" on-tap="quantityFunc">{{item.q}}</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>

        <br>
        <paper-button raised id="sku_FK8ojS0i3qW24x" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
        <hr>
        <p>Item 2:</p>
        <p><small>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit quis odio auctor auctor.</small></p>
        <paper-button raised id="sku_FNf1Km4MaGLIWn" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
      </div> -->

      <div id="error_message"></div>

      <div class="card">
        <div class="circle">S</div>
        <h1>Shop</h1>
        <p>Polymer with Stripe</p>
      </div>

      <div class="card">
        <p>Item 1:</p>
        <p><small>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit quis odio auctor auctor.</small></p>
        <paper-button raised id="sku_FK8ojS0i3qW24x" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
      </div>

      <div class="card">
        <p>Item 2:</p>
        <p><small>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit quis odio auctor auctor.</small></p>
        <paper-button raised id="sku_FNf1Km4MaGLIWn" on-click="clickToBuy">
          <iron-icon icon="payment"></iron-icon>
          Pay
        </paper-button>
      </div>
    `;
  }
  clickToBuy(e){
    var skuCode = e.target.id;
    this.stripe.redirectToCheckout({
      items: [{ sku: skuCode, quantity: this.quantityValue }],
      successUrl: 'http://127.0.0.1:8081/success',
      cancelUrl: 'http://127.0.0.1:8081/canceled',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = this.$.error_message;
        displayError.textContent = result.error.message;
      }
    });
  }
  // quantityFunc(e){
  //   var qntt = parseInt(e.target.id);
  //   this.quantityValue = qntt;
  // }
}

window.customElements.define('my-store', MyStore);
