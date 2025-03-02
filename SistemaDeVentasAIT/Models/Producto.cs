using System.ComponentModel.DataAnnotations;

namespace SistemaDeVentasAIT.Models
{
    public class Producto
    {
        [Key] //hace referencia a que es una clave primaria
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es obligatorio")] //required quiere decir que debe ir un dato de manera obligatoria
        public string Nombre { get; set; } = string.Empty; //valor por defecto es un string vacio

        [Range(0.01, 9999.99, ErrorMessage = "El precio debe ser mayor a 0")] // valida que el valor sea decimal y mayor que 0
        public decimal Precio { get; set; }

        [Required(ErrorMessage = "El stok es obligatorio")] //campo obligatorio 
        public int Stock { get; set; }
    }
}
