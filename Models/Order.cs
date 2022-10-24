using System;
using System.Collections.Generic;

namespace AksjeHandelWebApp.Models
{
    public class Ordre
    {
        public int Id { get; set; }
        public string Dato { get; set; }
        public bool Type { get; set; }  //Kjp/salg
<<<<<<< Updated upstream
        public int AntallAksjer { get; set; }
=======
        public int Antall { get; set; }
>>>>>>> Stashed changes
        public virtual Aksje Aksje { get; set; }
        public virtual Portofolje Portofolje { get; set; }
    }
}