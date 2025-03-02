using Microsoft.EntityFrameworkCore;
using SistemaDeVentasAIT.Models;

namespace SistemaDeVentasAIT.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
    }
}
