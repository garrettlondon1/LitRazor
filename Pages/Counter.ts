import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
export class Counter extends LitElement {
  @property({type: Number}) count = 0;
  @property({type: Boolean}) isBusy = false;
  
  protected render() {
    return html`
      <p>
        <button 
          @click="${this._increment}" 
          ?disabled="${this.isBusy}"
          class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-xs font-medium text-emerald-600 bg-white hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-emerald-500 space-x-2 disabled:opacity-25 whitespace-nowrap">
          ${this.isBusy ? 
            html`<i class="fa-solid fa-spinner" style="animation: rotation 1000ms linear infinite;"></i>` : 
            ''}
          <span>Click Me!</span>
        </button>
      </p>
      <p>Click count: ${this.count}</p>
    `;
  }
  
  private _increment(e: Event) {
    e.preventDefault();
    this.count++;
  }
}