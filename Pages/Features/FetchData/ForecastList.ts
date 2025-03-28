import { WeatherForecast } from 'api/types';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('forecast-list')
export class ForecastList extends LitElement {
    @property({ type: Array }) forecasts: WeatherForecast[] = [];

    protected render() {
        return html`
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temp. (C)</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    ${this.forecasts.map(forecast => html`
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
}