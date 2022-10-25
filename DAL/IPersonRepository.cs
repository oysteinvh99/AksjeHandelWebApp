using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AksjeHandelWebApp.Models;

namespace AksjeHandelWebApp.DAL
{
    public interface IPersonRepository
    {
        Task<Person> hentPerson(int id);
        Task<List<Aksje>> hentAksjer();
        Task<Portefolje> hentPortefolje(int id);
        Task<int> sjekkPerson(string email);
        Task<bool>registrerOrdre(Ordre innOrdre);
        Task<Firma>hentFirma(int id);
        Task<bool>slettBruker(int id);
        Task<int> lagrePerson(Person innPerson);
        Task<Aksje>hentAksje(int id);
        Task<List<VisPortefolje>> visPortefolje(int id);
        Task<bool> Endre(Person innPerson);
        Task<Portefolje> hentOrdre(int id);
    }
}

 
