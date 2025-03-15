using SistemaDeVentasAIT.Data;
using SistemaDeVentasAIT.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SistemaDeVentasAIT.Controllers;

[Authorize]
public class ProductoController : Controller
{
    private readonly AppDbContext _context; //variable de solo lectura que se va a utilizar en la clase

    public ProductoController(AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    public async Task<IActionResult> Index()
    {
        var productos = await _context.Productos.ToListAsync();
        return View(productos);
    }

    //son metodos o funciones.
    public IActionResult Crear()
    {
        return View();
    }

    public IActionResult Perfil()
    {
        return View();
        //devuelvele una vista al usuario que se encuentra en la carpeta PRODUCTO con el archivo perfil
    }

    //Método GET para mostrar el formulario de edición
    [HttpGet]
    public async Task<IActionResult> Editar(int id)
    {
        var producto = await _context.Productos.FindAsync(id);
        if (producto == null)
        {
            TempData["ErrorMessage"] = "Producto no encontrado.";
            return RedirectToAction("Index");
        }

        return View(producto);
    }

    public string Saludo()
    {
        return "Hola Mundo esto es un texto plano";
    }

    [HttpPost]
    public async Task<IActionResult> Crear(Producto producto)
    {
        if (ModelState.IsValid)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }
        return View(producto);
    }

    [HttpPost]
    public async Task<IActionResult> Eliminar(int id)
    {
        var producto = await _context.Productos.FindAsync(id);
        if (producto == null)
        {
            TempData["ErrorMessage"] = "Usuario no encontrado.";
            return RedirectToAction("Index");
        }

        _context.Productos.Remove(producto);
        await _context.SaveChangesAsync();

        TempData["SuccessMessage"] = "Usuario eliminado correctamente.";
        return RedirectToAction("Index");
    }

    //Método POST para actualizar el producto en la base de datos
    [HttpPost]
    public async Task<IActionResult> Editar(Producto producto)
    {
        if (ModelState.IsValid)
        {
            _context.Productos.Update(producto);
            await _context.SaveChangesAsync();

            TempData["SuccessMessage"] = "Producto actualizado correctamente.";
            return RedirectToAction("Index");
        }

        return View(producto);
    }


}