using System;
using System.Collections.Generic;

namespace AksjeHandelWebApp.Models
{
    public class Ordre
    {
        public int Id { get; set; }
        public string Dato { get; set; }
        public bool Type { get; set; }  //Kjøp/salg
        public int AntallAksjer { get; set; }
        public virtual Aksje Aksje { get; set; }
    }
}