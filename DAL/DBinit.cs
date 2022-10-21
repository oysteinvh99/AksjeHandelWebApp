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
                context.Database.EnsureCreated();


                var NyPerson = new Person
                {
                    Fornavn = "Emil Hengy"
                };

                context.Personer.Add(NyPerson);
                context.SaveChanges();
            }

        }

    }
}

