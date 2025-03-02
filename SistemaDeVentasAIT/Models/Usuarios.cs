using System.ComponentModel.DataAnnotations;
namespace SistemaDeVentasAIT.Models
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage ="EL NOMBRE ES OBLIGATORIO")]
        public string Nombre { get; set; } = string.Empty;
        [Required(ErrorMessage = "Contraseña obligatoria")]
        public string Password { get; set; } = string.Empty;
        [Required(ErrorMessage = "Estado obligatorio")]
        public int Estado { get; set; }
    }
}
