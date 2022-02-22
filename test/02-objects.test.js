const { crearClaseLibro } = require("../02-Objects/02-Objects");

describe("Clase", function () {
  describe("crearClaseLibro", function () {
    it("should return a book constructor that correctly builds book objects", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      expect(libro.titulo).toBe("Harry Potter y la piedra filosofal");
      expect(libro.autor).toBe("J. K. Rowling");
      expect(libro.traducciones).toEqual([
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ],
      ]);
    });
    it("should get the title with getTitulo", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      expect(libro.getTitulo()).toBe("Harry Potter y la piedra filosofal");
    });
    it("should get the author of the book", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      expect(libro.getAutor()).toBe("J. K. Rowling");
    });
    it("should add a new translation", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      libro.addTraduccion("portugues", "Presença");
      expect(libro.traducciones[3]).toEqual({
        idioma: "portugues",
        editorial: "Presença",
      });
    });
    it("should get all the lenguages that the book is on", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      expect(libro.getTraducciones()).toEqual([
        "inglés",
        "castellano",
        "francés",
      ]);
    });
    it("should get full name with getFullName", function () {
      const Libro = crearClaseLibro();
      const libro = new Libro(
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        [
          { idioma: "inglés", editorial: "Scholastic" },
          { idioma: "castellano", editorial: "emece" },
          { idioma: "francés", editorial: "Éditions Gallimard" },
        ]
      );
      expect(libro.getAlcance()).toBe(3);
    });
  });
});
