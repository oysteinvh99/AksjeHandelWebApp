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
        public async Task<Portefolje> hentPortefolje(int id)

        {
            return await _db.hentPortefolje(id);
                
        }
        
        public async Task<bool> registrerOrdre(Ordre innOrdre)
        {
            return await _db.registrerOrdre(innOrdre);
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
        public async Task<int> lagrePerson(Person innPerson)
        {
            return await _db.lagrePerson(innPerson);
        }
        
          public async Task<Aksje> hentAksje(int id)
        {
            return await _db.hentAksje(id);
        }
       public async Task<List<VisPortefolje>>visPortefolje(int Id)

        {
            return await _db.visPortefolje(Id);
            
       

        }
        public async Task<bool> endrePerson(Person innPerson)
        {
            return await _db.endrePerson(innPerson);
        }
        public async Task<Portefolje> hentOrdre(int id)
        {
            return await _db.hentOrdre(id);
        }
        public async Task<List<Aksje>>oppdaterBors()
        {
            return await _db.oppdaterBors();
        }

        public async Task<float> kjoptFor(int id)
        {
            return await _db.kjoptFor(id);
        }
    }
}
