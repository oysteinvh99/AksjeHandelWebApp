using System;
using AksjeHandelWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc.RazorPages;

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
                Portefolje enPortefolje = _db.Portefoljer.Single(x => x.Person.Id.Equals(id));
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
                Person enPerson = _db.Personer.First(x => x.Email == email);
                return enPerson.Id;
            }
            catch
            {
                return 0;
            }
        }
        public async Task<int> lagrePerson(Person innPerson)
        {
            try
            {
              /*  var nyPerson = new Person();
                nyPerson.Fornavn = innPerson.Fornavn;
                nyPerson.Etternavn = innPerson.Etternavn;
                nyPerson.Email = innPerson.Email;
                nyPerson.Telefon = innPerson.Telefon;*/
                var nyPortefolje = new Portefolje();
                nyPortefolje.Person = innPerson; 
                _db.Portefoljer.Add(nyPortefolje);
             //   _db.Personer.Add(innPerson);
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
                var nyeOrdre = new List<Ordre>();
                nyeOrdre.Add(innOrdre);
                Portefolje enPortefolje = await _db.Portefoljer.FindAsync(innOrdre.Portefolje.Id);
                enPortefolje.Ordre = nyeOrdre;
                await _db.SaveChangesAsync();

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
                Portefolje enPortefolje =await _db.Portefoljer.FirstAsync(x => x.Person.Id == id);
                _db.Personer.Remove(enPortefolje.Person);
                foreach(Ordre ordre in enPortefolje.Ordre)
                {
                    _db.Ordre.Remove(ordre);
                }
              
                _db.Portefoljer.Remove(enPortefolje);
               
                
                
               
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
                return enAskje;
            }
            catch
            {
                return null;
            }
        }
        public async Task<List<VisPortefolje>> visPortefolje(int id)
        {
            try
            {
                List<VisPortefolje> nyVisning = new List<VisPortefolje>();
                Portefolje enPortefolje = _db.Portefoljer.First(x => x.Person.Id == id);
                bool sjekk = false;
                foreach (Ordre s in enPortefolje.Ordre)
                {
                    foreach (VisPortefolje enport in nyVisning)
                    {
                        if (enport.Aksje.Id == s.Aksje.Id)
                        {
                            sjekk = true;
                            if (s.Type)
                            {
                                enport.Antall = enport.Antall + s.AntallAksjer;
                            }
                            else
                            {
                                enport.Antall = enport.Antall - s.AntallAksjer;
                            }


                        }


                    }
                    if (sjekk == false)
                    {
                        var NyLinje = new VisPortefolje();
                        NyLinje.Aksje = s.Aksje;
                        if (s.Type)
                        {
                            NyLinje.Antall = s.AntallAksjer;
                        }
                        else
                        {
                            NyLinje.Antall = 0 - s.AntallAksjer;

                        }
                        nyVisning.Add(NyLinje);

                    }
                    sjekk = false;


                }
                List<VisPortefolje> port = new List<VisPortefolje>();
                foreach (VisPortefolje enport in nyVisning)
                {
                    if (enport.Antall > 0)
                    {

                        enport.Verdi = enport.Antall * enport.Aksje.Verdi;
                        port.Add(enport);
                    }
                   
                }
 
                    return port;
                
            }






            catch
            {
                return null;


            }
        }
        public async Task<bool> Endre(Person innPerson)
        {
            try
            {
                var endreObjekt = await _db.Personer.FindAsync(innPerson.Id);
                endreObjekt.Fornavn = innPerson.Fornavn;
                endreObjekt.Etternavn = innPerson.Etternavn;
                endreObjekt.Email = innPerson.Email;
                endreObjekt.Telefon = innPerson.Telefon;
                await _db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }

        public async Task<Portefolje> hentOrdre(int id)
        {
            try
            {
                Portefolje enPortefolje = _db.Portefoljer.Single(x => x.Person.Id.Equals(id));
                return enPortefolje;



            }
            catch
            {
                return null;

            }
        }
      

    }
}
    



    


