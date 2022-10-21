﻿using System;
using AksjeHandelWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AksjeHandelWebApp.DAL
{
    public class PersonRepository :IPersonRepository
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
        
        public async Task<bool> registrerOrder(Ordre innOrder)
        {
            try
            {
                var nyOrder = new Ordre();
                nyOrder.Dato = innOrder.Dato;
                nyOrder.Id = innOrder.Id;

                var sjekkPortofolje = await _db.Portofoljer.FindAsync(innOrder.Portofolje);
                var sjekkAksje = await _db.Aksjer.FindAsync(innOrder.Aksje);
                if (sjekkPortofolje == null || sjekkAksje ==null)
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
        
        public async Task<bool> slettPerson(int id)
        {
            try {
                Person enPerson = await _db.Personer.FindAsync(id);
                Portofolje portofolje = await _db.Portofoljer.FindAsync(enPerson.Portofolje.Id);
                _db.Personer.Remove(enPerson);
                _db.Portofoljer.Remove(portofolje);
                await _db.SaveChangesAsync();
                return true; 
            }
            catch { 
                return false;
            }
        }
    }
}

    


