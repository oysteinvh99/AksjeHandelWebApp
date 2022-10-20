using System;
using Microsoft.EntityFrameworkCore;
namespace AksjeHandelWebApp.Models
{
    public class DB:DbContext


    {
        public DB(DbContextOptions<DB> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Person> Personer { get; set; }

        public virtual DbSet<Firma> Firmaer { get; set; }

        public virtual DbSet<Portofolje> Portofoljer { get; set; }

        public virtual DbSet<Ordre> Ordre { get; set; }

        public virtual DbSet<Aksje> Aksjer { get; set; }

        public virtual DbSet<OrdreLinje> Ordrelinjer { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
    
    
}

