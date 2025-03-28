var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyAdmin = class MyAdmin extends LitElement {
    constructor() {
        super(...arguments);
        this.props = { Permission: '' };
    }
    render() {
        var _a;
        return html `
      <div>
        <h1>Admin</h1>
        <p>Permission: ${(_a = this.props) === null || _a === void 0 ? void 0 : _a.Permission}</p>
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], MyAdmin.prototype, "props", void 0);
MyAdmin = __decorate([
    customElement('my-admin')
], MyAdmin);
export { MyAdmin };
//# sourceMappingURL=MyAdmin.js.map