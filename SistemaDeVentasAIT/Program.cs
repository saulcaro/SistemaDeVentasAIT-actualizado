using SistemaDeVentasAIT.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configurar autenticación con cookies
builder.Services.AddAuthentication("CookieAuth")
    .AddCookie("CookieAuth", options =>
    {
        options.LoginPath = "/Login/Index";  // Página de login
        options.AccessDeniedPath = "/Home/AccessDenied"; // Página de acceso denegado
    });
builder.Services.AddAuthorization();
builder.Services.AddControllersWithViews();

// Configurar conexión a SQL Server
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

// Middleware de autenticación y autorización
app.UseAuthentication();
app.UseAuthorization();

// Usar la política CORS
app.UseCors("PermitirTodo");

//otros Middelwares
app.UseStaticFiles(); // Permite servir archivos estáticos en wwwroot
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Configurar la ruta principal
app.MapControllerRoute(
    name: "newRout",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
