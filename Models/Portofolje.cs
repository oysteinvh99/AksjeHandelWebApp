using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AksjeHandelWebApp.Models
{
    public class Portofolje
    {
        public int Id { get; set; }
        [ForeignKey("Person")]
        public virtual Person person { get; set; }
    }
}