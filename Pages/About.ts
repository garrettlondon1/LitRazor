import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-about')
export class About extends LitElement {
  @property()
  name = 'LitRazor';

  render() {
    return html`
      <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-3xl font-bold text-emerald-600 mb-4">About ${this.name}</h2>
        <div class="space-y-4 text-gray-700">
          <p class="text-lg">This is a web application that combines the power of Blazor with Lit components.</p>
          <p class="text-lg">Built with modern web technologies to create a fast and responsive user experience.</p>
        </div>
      </div>
    `;
  }
}
