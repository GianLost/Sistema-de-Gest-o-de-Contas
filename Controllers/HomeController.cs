using Microsoft.AspNetCore.Mvc;

namespace SistemDeGerenciamentoDeContas.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
