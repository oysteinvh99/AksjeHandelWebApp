using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.Routing;
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


                var nyPerson = new Person
                {
                    Fornavn = "Emil ",
                    Etternavn="Hengy",
                    Telefon="99995555",
                    Email="emilhengy@gmail.com"

                };

                var nyPortefolje = new Portefolje
                {
                    Person = nyPerson
                };

                var nyFirma = new Firma
                {
                    Navn = "Tesla",
                    ForsteDagPaBors = "11.11.11",
                    Utbytte = true
                };

                var nyFirma1 = new Firma
                {
                    Navn = "Equinor",
                    ForsteDagPaBors = "11.11.11",
                    Utbytte = true
                };
                var nyFirma2 = new Firma
                {
                    Navn = "Apple",
                    ForsteDagPaBors = "11.11.11",
                    Utbytte = true
                };



                var nyAksje = new Aksje
                {
                    Verdi = 12,
                    Firma = nyFirma
                };

                var nyAksje1 = new Aksje
                {
                    Verdi = 7,
                    Firma = nyFirma1
                };
                var nyAksje2 = new Aksje
                {
                    Verdi = 15,
                    Firma = nyFirma2
                };

                var nyOrdre = new Ordre
                {
                    Dato = "24.10.2022",
                    Type = true,
                    AntallAksjer = 48,
                    Aksje = nyAksje
                };

                var nyOrdre1 = new Ordre
                {
                    Dato = "20.10.2022",
                    Type = true,
                    AntallAksjer = 312,
                    Aksje = nyAksje1
                };

                var nyOrdre2 = new Ordre
                {
                    Dato = "20.10.2022",
                    Type = true,
                    AntallAksjer = 172,
                    Aksje = nyAksje
                };

                var nyOrdre3 = new Ordre
                {
                    Dato = "20.10.2022",
                    Type = true,
                    AntallAksjer = 149,
                    Aksje = nyAksje1
                };
                var nyeOrdre = new List<Ordre>();
                nyeOrdre.Add(nyOrdre1);
                nyeOrdre.Add(nyOrdre2); 
                nyeOrdre.Add(nyOrdre3);
                nyeOrdre.Add(nyOrdre);
                nyPortefolje.Ordre=nyeOrdre;
                

                context.Personer.Add(nyPerson);
                context.Portefoljer.Add(nyPortefolje);
                context.Firmaer.Add(nyFirma);
                context.Firmaer.Add(nyFirma1);
                context.Firmaer.Add(nyFirma2);
                context.Aksjer.Add(nyAksje);
                context.Aksjer.Add(nyAksje1);
                context.Aksjer.Add(nyAksje2);
                context.Ordre.Add(nyOrdre);
                context.Ordre.Add(nyOrdre1);
                context.Ordre.Add(nyOrdre2);
                context.Ordre.Add(nyOrdre3);
                context.SaveChanges();
            }

            

        }

    }
}

