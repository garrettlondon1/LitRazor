using Carter;

namespace LitRazor.Pages.Features.FetchData;

public class WeatherForecast
{
    public string Date { get; set; }
    public int TemperatureC { get; set; }
    public string Summary { get; set; }
}

public class Routes : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/weatherforecast", () => {
            // Mock data that would normally come from a database
            var forecasts = new WeatherForecast[] {
                new WeatherForecast { Date = "2023-10-01", TemperatureC = 20, Summary = "Mild" },
                new WeatherForecast { Date = "2023-10-02", TemperatureC = 24, Summary = "Warm" },
                new WeatherForecast { Date = "2023-10-03", TemperatureC = 18, Summary = "Cool" },
                new WeatherForecast { Date = "2023-10-04", TemperatureC = 16, Summary = "Chilly" },
                new WeatherForecast { Date = "2023-10-05", TemperatureC = 27, Summary = "Hot" }
            };
            
            return TypedResults.Ok(forecasts);
        }).Produces<WeatherForecast[]>();
    }
}