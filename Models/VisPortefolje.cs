namespace AksjeHandelWebApp.Models
{
    public class VisPortefolje
    {
        public float Verdi { get; set; }
        public virtual Aksje Aksje { get; set; }    

        public float Antall { get; set; }   

    }
}
