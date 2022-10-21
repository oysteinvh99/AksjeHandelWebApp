using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace AksjeHandelWebApp.Models
{
    public static class DBinit
    {
        public static void init(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DB>();
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();


                var NyPerson = new Person
                {
                    Fornavn = "Emil ",
                    Etternavn="Hengy",
                    Telefon="99995555",
                    Email="emilhengy@gmail.com"

                };
                var nyFirma = new Firma
                {
                    Id = 1,
                    Navn = "Tesla",
                    ForsteDagPaBors = "11.11.11",
                    Utbytte = true
                };


                var nyAksje = new Aksje
                {
                    Id = 1,
                    Verdi = 12,
                    Firma = nyFirma
                };
                context.Firmaer.Add(nyFirma);
                context.Aksjer.Add(nyAksje);
                context.Personer.Add(NyPerson);
                context.SaveChanges();
            }

        }

    }
}

