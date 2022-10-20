using System;
namespace AksjeHandelWebApp.Models
{
    public class Firma
    {
        public int Id { get; set; }
        public string Navn { get; set; }
        public int ForsteDagPaBors { get; set; }
        public bool Utbytte { get; set; }
    }
}