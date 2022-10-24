using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AksjeHandelWebApp.Models
{
    public class Portofolje
    {
        public int Id { get; set; }
<<<<<<< Updated upstream
        public virtual Person person { get; set; }
       
=======
        public virtual List<Ordre> order { get; set;}
>>>>>>> Stashed changes
      
       



    }
}