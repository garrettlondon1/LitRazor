import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
export class Counter extends LitElement {
    @property({type: Number}) count = 0;
    @property({type: Boolean}) isBusy = false;

    private async _increment(_e: Event) {
        this.count++;
    }

    protected render() {
        return html`
            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome to LitRazor!</h1>
                                    <p class="text-gray-600">This is a Razor component page styled with Tailwind
                                        CSS.</p>
                                    
                                    <div class="flex flex-col items-center justify-center h-screen">
                                        <p>
                                            <button
                                                    @click="${this._increment}"
                                                    class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-xs font-medium text-emerald-600 bg-white hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-emerald-500 space-x-2 disabled:opacity-25 whitespace-nowrap">
                                                <span>Click Me!</span>
                                            </button>
                                        </p>
                                        
                                        ${this.isBusy ? html`Loading...` : ''}
                                        
                                        <p>Click count: ${this.count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}