using System;
namespace AksjeHandelWebApp.Model
{
    public class Portofolje
    {
        public int PortofoljeID { get; set; }
        public float Verdi { get; set; }
        public Person BrukerID { get; set; }
        public List<Ordre> Ordreliste { get; set; }

    }
}