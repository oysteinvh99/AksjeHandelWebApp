using System;
using System.Collections.Generic;

namespace AksjeHandelWebApp.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Fornavn { get; set; }
        public string Etternavn  { get; set; }
        public string Telefon { get; set; }
        public string Email { get; set; }
        public virtual Portofolje Portofolje { get; set; }
    }
}