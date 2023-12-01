using Microsoft.AspNetCore.Mvc;

namespace SistemDeGerenciamentoDeContas.Controllers
{
    public class FornecedorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Cadastro()
        {
            return View();
        }
    }
}