﻿using System;
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

        public async Task<Portefolje> hentPortefolje(int id)
        {
            try
            {
                Portefolje enPortefolje = await _db.Portefoljer.FindAsync(id);
                var hentetPortefolje = new Portefolje()
                {
                    Id = enPortefolje.Id,
                 //   person = enportefolje.person
                };
                return enPortefolje;
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
                var hentetportefolje = new Person()
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
                var nyPortefolje = new Portefolje();
                nyPortefolje.Person = nyPerson;
                _db.Portefoljer.Add(nyPortefolje);
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

        public async Task<bool> registrerOrdre(Ordre innOrdre)
        {
            try
            {
                return true;
          

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
              //  portefolje portefolje = await _db.portefoljer.FindAsync(enPerson.portefolje.Id);
                _db.Personer.Remove(enPerson);
          //      _db.portefoljer.Remove(portefolje);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
        
         public async Task<Aksje> hentAksje(int id)
        {
            try
            {
                Aksje enAskje = await _db.Aksjer.FindAsync(id);
                Aksje hentetAksje = new Aksje()
                {
                    Id = enAskje.Id,
                    Firma = enAskje.Firma,
                    Verdi = enAskje.Verdi
                    
                };
                return hentetAksje;
            }
            catch
            {
                return null;
            }
        }
    }
}

    


