using System;
namespace AksjeHandelWebApp.Models
{
    public class OrdreLinje
    {
        public int Id { get; set; }
        public int AntallAksjer { get; set; }
        public virtual Aksje Aksje { get; set; }
        public virtual Ordre Ordre { get; set; }

    }
}

