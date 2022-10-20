using System;
namespace AksjeHandelWebApp.Model
{
    public class Ordre
    {
        public int OrdreId { get; set; }
        public int AntallAksjer { get; set; }
        public float AksjePris { get; set; }
        public bool Type { get; set; }          //Kjøp/salg
        public bool Godkjent { get; set; }      //Ja/Nei
    }
}