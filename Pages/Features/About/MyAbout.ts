import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type props = {
  Permission: string;
}

@customElement('my-about')
export class MyAbout extends LitElement {
  @property({ type: Object }) props: props = { Permission: '' };

  render() {
    return html`
      <div>
        <h1>About</h1>
        <p>Permission: ${this.props?.Permission}</p>
      </div>
    `;
  }
}
