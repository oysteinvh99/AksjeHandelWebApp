using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AksjeHandelWebApp.Models
{
    public class Portefolje
    {
        public int Id { get; set; }
        public virtual Person Person { get; set; }
        public virtual List<Ordre> Ordre { get; set; }
       
    }
}