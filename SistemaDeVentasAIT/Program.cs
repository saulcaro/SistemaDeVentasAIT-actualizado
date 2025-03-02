using SistemaDeVentasAIT.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configurar autenticaci�n con cookies
builder.Services.AddAuthentication("CookieAuth")
    .AddCookie("CookieAuth", options =>
    {
        options.LoginPath = "/Login/Index";  // P�gina de login
        options.AccessDeniedPath = "/Home/AccessDenied"; // P�gina de acceso denegado
    });
builder.Services.AddAuthorization();
builder.Services.AddControllersWithViews();

// Configurar conexi�n a SQL Server
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString)); //aqui nos conectamos a la base de datos.

// Habilitar controladores con vistas (MVC)
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Middleware de autenticaci�n y autorizaci�n
app.UseAuthentication();
app.UseAuthorization();

//otros Middelwares
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Configurar la ruta principal
app.MapControllerRoute(
    name: "newRout",
    pattern: "{controller=Login}/{action=Index}/{id?}");

app.Run();
