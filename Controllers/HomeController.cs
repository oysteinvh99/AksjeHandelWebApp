using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AksjeHandelWebApp.DAL;
using AksjeHandelWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace AksjeHandelWebApp.Controllers
{
    [Route("[controller]/[action]")]

    public class HomeController : ControllerBase
    {
        private readonly IPersonRepository _db;

        public HomeController(IPersonRepository db)
        {
            _db = db;
        }
        
        public async Task<Person> hentPerson(int id) { 
            return await _db.hentPerson(id);

        }
        
        public async Task<List<Aksje>> hentAksjer()
        {
            return await _db.hentAksjer();
       
        }
        public async Task<Portofolje> hentPortofolje(int id)

        {
            return await _db.hentPortofolje(id);
                
        }
        
        public async Task<bool> registrerOrder(Ordre innOrder)
        {
            return await _db.registrerOrder(innOrder);
        }

        public async Task<Firma> hentFirma(int id)
        {
            return await _db.hentFirma(id);
        }

        public async Task<bool> slettBruker(int id)
        {
            return await _db.slettBruker(id);
        }
        public async Task<int> sjekkPerson(string email)
        {
            return await _db.sjekkPerson(email);
        }
        public async Task<Aksje> hentAksje(int id)
        {
            return await _db.hentAksje(id);
        }
    }
}
