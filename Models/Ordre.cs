using System;
using System.Collections.Generic;

namespace AksjeHandelWebApp.Models
{
    public class Ordre
    {
        public int Id { get; set; }
        public string Dato { get; set; }
        public bool Type { get; set; }  //Kjp/salg
        public bool Godkjent { get; set; }
        public virtual Aksje Aksje { get; set; }
        public virtual Portofolje Portofolje { get; set; }
    }
}