using System;
using System.Collections.Generic;

namespace AksjeHandelWebApp.Models
{
    public class Aksje
    {
        public int Id { get; set; }
        public float Verdi { get; set; }
        public virtual Firma Firma { get; set; }
        public virtual List<OrdreLinje> OrdreLinjer { get; set; }
        



    }
}

