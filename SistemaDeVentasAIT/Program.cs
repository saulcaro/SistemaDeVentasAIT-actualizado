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

// Habilitar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTodo",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();

// Middleware de autenticaci�n y autorizaci�n
app.UseAuthentication();
app.UseAuthorization();

// Usar la pol�tica CORS
app.UseCors("PermitirTodo");

//otros Middelwares
app.UseStaticFiles(); // Permite servir archivos est�ticos en wwwroot
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Configurar la ruta principal
app.MapControllerRoute(
    name: "newRout",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
