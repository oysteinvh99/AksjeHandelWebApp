using System;
using AksjeHandelWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AksjeHandelWebApp.DAL
{
    public class PersonRepository
    {
    
        private readonly DB _db;

        public PersonRepository(DB db)
        {
            _db = db;
        }

        public async Task<Portofolje> hentPortofolje(int id)
        {
            try
            {
                Portofolje enPortofolje = await _db.Portofoljer.FindAsync(id);
                var hentetPortofolje = new Portofolje()
                {
                    Id = enPortofolje.Id,
                    person = enPortofolje.person
                };
                return enPortofolje;
            }
            catch
            {
                return null;
            }
        }


        public async Task<List<Aksje>> hentAksjer()
        {
            try
            {

                List<Aksje> alleAksjer = await _db.Aksjer.Select(a => new Aksje
                {
                    Id = a.Id,
                    Verdi = a.Verdi,
                    Firma = a.Firma
                }).ToListAsync();

                return alleAksjer;
            }
            catch
            {
                return null;
            }
        }


        public async Task<Person> hentPerson(int id)
        {
            try
            {
                Person enPerson = await _db.Personer.FindAsync(id);
                var hentetPortofolje = new Person()
                {
                    Id = enPerson.Id,
                    Fornavn = enPerson.Fornavn,
                    Etternavn = enPerson.Etternavn,
                    Telefon = enPerson.Telefon,
                    Email = enPerson.Email,
                    Portofolje = enPerson.Portofolje
                };
                return enPerson;
            }
            catch
            {
                return null;
            }
        }
    }
}

    


