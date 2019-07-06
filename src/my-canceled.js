import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import '@polymer/app-route/app-location.js';

class MyCanceled extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .circle{
          background-color: Crimson;
          color: white;
        }
        paper-button{
          margin-top: 0.29em;
          margin-bottom: 0.29em;
        }
        iron-icon{
          margin-right: 5px;
        }
        .backhome{
          background-color: #4285f4;
          color: white;
        }
        .backstore{
          background-color: #00c853;
          color: white;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="card">
        <div class="circle">C</div>
        <h1>Canceled!</h1>
        <paper-button raised class="backhome" on-click="goToHome">
          <iron-icon icon="home"></iron-icon>
          Go to home
        </paper-button>

        <paper-button raised class="backstore" on-click="goToStore">
          <iron-icon icon="store"></iron-icon>
          Back to store
        </paper-button>
      </div>
    `;
  }
  goToHome () {
    this.set('route.path', '/home');
  }
  goToStore () {
    this.set('route.path', '/store');
  }
}

window.customElements.define('my-canceled', MyCanceled);
