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
    }
}

 