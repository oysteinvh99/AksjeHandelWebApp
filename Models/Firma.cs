using System;
namespace AksjeHandelWebApp.Model
{
    public class Firma
    {
        public int FirmaId { get; set; }
        public string Navn { get; set; }
        public int ForsteDagPaBors { get; set; }
        public bool Utbytte { get; set; }
    }
}