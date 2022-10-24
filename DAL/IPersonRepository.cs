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
        Task <Portofolje> hentPortofolje(int id);
        Task<int> sjekkPerson(string email);
        Task<bool>registrerOrder(Ordre innOrder);
        Task<Firma>hentFirma(int id);
        Task<bool>slettBruker(int id);
        Task<Aksje>hentAksje(int id);
    }
}

 
