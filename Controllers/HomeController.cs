namespace AksjeHandelWebApp.Controllers
{
    [Route("[controller]/[action]")]

    public class HomeController : ControllerBase
    {
        private readonly DB _db;

        public HomeController(DB db)
        {
            _db = db;
        }

        public List<Portifolje> hentPortofoljer()
        {
            return _db.Portofoljer.ToList();
        }

        public List<Firma> hentFirmaer()
        {
            return _db.Firmaer.ToList();
        }

        public List<Person> hentPersoner()
        {
            return _db.Personer.ToList();
        }
    }
}
