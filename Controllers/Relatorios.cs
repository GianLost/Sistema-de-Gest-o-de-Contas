using Microsoft.AspNetCore.Mvc;

namespace SistemDeGerenciamentoDeContas.Controllers
{
    public class Relatorios : Controller
    {
        public IActionResult GerarRelatorio()
        {
            return View();
        }

        public IActionResult FiltrarContas()
        {
            return View();
        }
    }
}