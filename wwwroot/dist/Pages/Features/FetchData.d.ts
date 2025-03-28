import { LitElement } from 'lit';
import { WeatherForecast } from 'api/types';
type props = {
    forecasts: Array<WeatherForecast>;
    loading: boolean;
    error: boolean;
};
export declare class ForecastList extends LitElement {
    forecasts: props['forecasts'];
    protected render(): import("lit-html").TemplateResult<1>;
}
export declare class FetchData extends LitElement {
    props: props;
    connectedCallback(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    private fetchData;
}
export {};
//# sourceMappingURL=FetchData.d.ts.map