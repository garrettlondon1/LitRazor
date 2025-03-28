import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-fetchdata')
export class FetchData extends LitElement {
    @property({type: Array}) forecasts: { date: string; temperatureC: number; summary: string }[] = [];
    @property({type: Boolean}) loading = true;
    @property({type: Boolean}) error = false;

    async connectedCallback() {
        super.connectedCallback();
        await this.fetchData();
    }

    protected render() {
        return html`
            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Weather Forecast</h1>
                                    <p class="text-gray-600">This component demonstrates fetching data from an API.</p>
                                    
                                    <div class="mt-6">
                                        ${this.loading ? 
                                            html`<p class="text-center text-gray-500">Loading...</p>` : 
                                            this.error ? 
                                                html`<p class="text-center text-red-500">Error loading data. Please try again later.</p>` :
                                                html`
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
                                                `
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    private async fetchData() {
        this.loading = true;
        this.error = false;
        
        try {
            // Simulate API call with a delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock data that would normally come from an API
            this.forecasts = [
                { date: '2023-10-01', temperatureC: 20, summary: 'Mild' },
                { date: '2023-10-02', temperatureC: 24, summary: 'Warm' },
                { date: '2023-10-03', temperatureC: 18, summary: 'Cool' },
                { date: '2023-10-04', temperatureC: 16, summary: 'Chilly' },
                { date: '2023-10-05', temperatureC: 27, summary: 'Hot' }
            ];
        } catch (e) {
            this.error = true;
            console.error('Error fetching weather data:', e);
        } finally {
            this.loading = false;
        }
    }
}