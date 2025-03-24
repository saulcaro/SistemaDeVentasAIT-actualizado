using SistemaDeVentasAIT.Data;
using SistemaDeVentasAIT.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SistemaDeVentasAIT.Controllers
{
    [Authorize]
    public class UsuariosController : Controller
    {
        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        //metodo para listar usuarios de la base de datos
        public async Task<IActionResult> Index()
        {
            var usuarios = await _context.Usuarios.ToListAsync();
            return View(usuarios);
        }

        public IActionResult Crear()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Crear(Usuarios usuario) //metodo para crear un usuario
        {
            if (ModelState.IsValid) //si el modelo es valido se agrega el usuario a la base de datos
            {
                _context.Usuarios.Add(usuario); //agregar usuario a la base de datos
                await _context.SaveChangesAsync(); //guardar cambios en la base de datos
                return RedirectToAction("Index"); //redireccionar a la vista index
            }
            return View(usuario); //si el modelo no es valido se devuelve la vista con el modelo
        }

        

    }
}
