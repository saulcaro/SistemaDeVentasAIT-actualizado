using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SistemaDeVentasAIT.Models;
using Microsoft.AspNetCore.Authorization;

namespace SistemaDeVentasAIT.Controllers;


public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public string AccessDenied()
    {
        return "ACCESO DENEGADO ";
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
