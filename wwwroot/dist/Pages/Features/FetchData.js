var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getApiWeatherforecast } from 'api/sdk';
let ForecastList = class ForecastList extends LitElement {
    constructor() {
        super(...arguments);
        this.forecasts = [];
    }
    render() {
        return html `
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temp. (C)</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    ${this.forecasts.map(forecast => html `
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${forecast.date}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${forecast.temperatureC}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${forecast.summary}</td>
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }
};
__decorate([
    property({ type: Array })
], ForecastList.prototype, "forecasts", void 0);
ForecastList = __decorate([
    customElement('forecast-list')
], ForecastList);
export { ForecastList };
let FetchData = class FetchData extends LitElement {
    constructor() {
        super(...arguments);
        this.props = { forecasts: [], loading: true, error: false };
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.fetchData();
        this.requestUpdate();
    }
    render() {
        return html `
            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Weather Forecast</h1>
                                    <p class="text-gray-600">This component demonstrates fetching data from an API.</p>
                                    
                                    <div class="mt-6">
                                        ${this.props.loading
            ?
                html `<p class="text-center text-gray-500">Loading...</p>`
            :
                this.props.error ?
                    html `<p class="text-center text-red-500">Error loading data. Please try again later.</p>` :
                    html `<forecast-list .forecasts=${this.props.forecasts}></forecast-list>`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    async fetchData() {
        this.props.loading = true;
        this.props.error = false;
        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            this.props.forecasts = await getApiWeatherforecast();
        }
        catch (e) {
            this.props.error = true;
            console.error('Error fetching weather data:', e);
        }
        finally {
            this.props.loading = false;
        }
    }
};
__decorate([
    property({ type: Object })
], FetchData.prototype, "props", void 0);
FetchData = __decorate([
    customElement('my-fetchdata')
], FetchData);
export { FetchData };
//# sourceMappingURL=FetchData.js.map