using System;
namespace AksjeHandelWebApp.Model
{
    public class Portofolje
    {
        public int Id { get; set; }
        public string Navn { get; set; }
        public int ForsteDagPaBors { get; set; }
        public bool Utbytte { get; set; }
    }
}