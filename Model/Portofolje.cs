using System;
namespace AksjeHandelWebApp.Model
{
    public class Portofolje
    {
        public int PortofoljeID { get; set; }
        public virtual List<Aksje> Aksjer { get; set }
        public float Verdi { get; set; }
        public virtual Person BrukerID { get; set; }
        public virtual List<Ordre> Ordreliste { get; set; }

    }
}