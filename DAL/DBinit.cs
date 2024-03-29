﻿using System;
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
                    Fornavn = "Ola",
                    Etternavn="Nordmann",
                    Telefon="99995555",
                    Email="123@gmail.com"

                };

                var nyPortefolje = new Portefolje
                {
                    Person = nyPerson
                };

                var nyFirma = new Firma
                {
                    Navn = "Tesla",
                    ForsteDagPaBors = "11.11.09",
                    Utbytte = true
                };

                var nyFirma1 = new Firma
                {
                    Navn = "Equinor",
                    ForsteDagPaBors = "11.11.18",
                    Utbytte = true
                };
                var nyFirma2 = new Firma
                {
                    Navn = "Apple",
                    ForsteDagPaBors = "01.12.18",
                    Utbytte = true
                };
                var nyFirma3 = new Firma
                {
                    Navn = "Kahoot",
                    ForsteDagPaBors = "11.04.19",
                    Utbytte = true
                };
                var nyFirma4 = new Firma
                {
                    Navn = "Samsung",
                    ForsteDagPaBors = "05.12.20",
                    Utbytte = true
                };
                var nyFirma5 = new Firma
                {
                    Navn = "Amazon",
                    ForsteDagPaBors = "02.04.19",
                    Utbytte = true
                };
                var nyFirma6 = new Firma
                {
                    Navn = "Google",
                    ForsteDagPaBors = "01.02.20",
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
                var nyAksje3 = new Aksje
                {
                    Verdi = 18,
                    Firma = nyFirma3
                };
                var nyAksje4 = new Aksje
                {
                    Verdi = 9,
                    Firma = nyFirma4
                };
                var nyAksje5 = new Aksje
                {
                    Verdi = 15,
                    Firma = nyFirma5
                };
                var nyAksje6 = new Aksje
                {
                    Verdi = 20,
                    Firma = nyFirma6
                };

                var nyOrdre = new Ordre
                {
                    Dato = "24/9/2022 16:12:01",
                    Type = true,
                    AntallAksjer = 48,
                    Aksje = nyAksje,
                    Kjøpspris = 576
                };

                var nyOrdre1 = new Ordre
                {
                    Dato = "20/10/2022 12:22:23",
                    Type = true,
                    AntallAksjer = 312,
                    Aksje = nyAksje1,
                    Kjøpspris = 2184
                };

                var nyOrdre2 = new Ordre
                {
                    Dato = "20/10/2022 13:11:05",
                    Type = true,
                    AntallAksjer = 172,
                    Aksje = nyAksje,
                    Kjøpspris = 2064
                };

                var nyOrdre3 = new Ordre
                {
                    Dato = "21/10/2022 14:01:44",
                    Type = true,
                    AntallAksjer = 149,
                    Aksje = nyAksje1,
                    Kjøpspris=1043
                };
                var nyeOrdre = new List<Ordre>();
                nyeOrdre.Add(nyOrdre1);
                nyeOrdre.Add(nyOrdre2); 
                nyeOrdre.Add(nyOrdre3);
                nyeOrdre.Add(nyOrdre);
                nyPortefolje.Ordre=nyeOrdre;
                

              
                context.Portefoljer.Add(nyPortefolje);
                context.Firmaer.Add(nyFirma);
                context.Firmaer.Add(nyFirma1);
                context.Firmaer.Add(nyFirma2);
                context.Firmaer.Add(nyFirma3);
                context.Firmaer.Add(nyFirma4);
                context.Firmaer.Add(nyFirma5);
                context.Firmaer.Add(nyFirma6);
                context.Aksjer.Add(nyAksje);
                context.Aksjer.Add(nyAksje1);
                context.Aksjer.Add(nyAksje2);
                context.Aksjer.Add(nyAksje3);
                context.Aksjer.Add(nyAksje4);
                context.Aksjer.Add(nyAksje5);
                context.Aksjer.Add(nyAksje6);
                context.Ordre.Add(nyOrdre);
                context.Ordre.Add(nyOrdre1);
                context.Ordre.Add(nyOrdre2);
                context.Ordre.Add(nyOrdre3);
                context.SaveChanges();
            }

            

        }

    }
}

