using System;
using AksjeHandelWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace AksjeHandelWebApp.DAL
{
    public class PersonRepository : IPersonRepository
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
                 //   person = enPortofolje.person
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
                  
                };
                return enPerson;
            }
            catch
            {
                return null;
            }
        }
        public async Task<int> sjekkPerson(string email)
        {

            try
            {
                Person enPerson = _db.Personer.Single(x => x.Email.Equals(email));
                return enPerson.Id;
            }
            catch
            {
                return 0;
            }
        }
        public async Task<int>lagrePerson(Person innPerson)
        {
            try
            {
                var nyPerson = new Person();
                nyPerson.Fornavn = innPerson.Fornavn;
                nyPerson.Etternavn = innPerson.Etternavn;
                nyPerson.Email = innPerson.Email;
                nyPerson.Telefon = innPerson.Telefon;
                var nyPortefolje = new Portofolje();
                nyPortefolje.person = nyPerson;
                _db.Portofoljer.Add(nyPortefolje);
                _db.Personer.Add(innPerson);
                await _db.SaveChangesAsync();
                Person enPerson = _db.Personer.First(x => x.Email == innPerson.Email);
                return enPerson.Id;
            }
            catch
            {
                return 0;
            }

        }

        public async Task<bool> registrerOrder(Ordre innOrder)
        {
            try
            {
                var nyOrder = new Ordre();
                nyOrder.Dato = innOrder.Dato;
                nyOrder.Id = innOrder.Id;

                var sjekkPortofolje = await _db.Portofoljer.FindAsync(innOrder.Portofolje);
                var sjekkAksje = await _db.Aksjer.FindAsync(innOrder.Aksje);
                if (sjekkPortofolje == null || sjekkAksje == null)
                {
                    return false;
                }
                else
                {
                    nyOrder.Portofolje = innOrder.Portofolje;
                    nyOrder.Aksje = innOrder.Aksje;
                    _db.Ordre.Add(nyOrder);
                    await _db.SaveChangesAsync();
                    return true;
                }

            }
            catch
            {
                return false;
            }
        }

        public async Task<Firma> hentFirma(int id)
        {
            try
            {
                Firma etFirma = await _db.Firmaer.FindAsync(id);
                var hentetFirma = new Firma()
                {
                    Id = etFirma.Id,
                    Navn = etFirma.Navn,
                    ForsteDagPaBors = etFirma.ForsteDagPaBors,
                    Utbytte = etFirma.Utbytte
                };
                return etFirma;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> slettBruker(int id)
        {
            try
            {
                Person enPerson = await _db.Personer.FindAsync(id);
              //  Portofolje portofolje = await _db.Portofoljer.FindAsync(enPerson.Portofolje.Id);
                _db.Personer.Remove(enPerson);
          //      _db.Portofoljer.Remove(portofolje);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

    


