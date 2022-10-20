using System;
namespace AksjeHandelWebApp.Models
{
    public class Aksje
    {
        public int Id { get; set; }
        public float Verdi { get; set; }
        [ForeignKey(typeof(Firma))]
        [ManyToOne]
        public Firma FirmaID { get; set; }



    }
}

