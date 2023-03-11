const request = require("supertest");
const app = require("../../src/indexRoute/indexRoute");

describe("Validaciones a rutas definidas", () => {
  it("Validar Inicio Sesión ", async () => {
    const resultado = await request(app).post("/login").send({
      email: "estoesunaprueba@example.com",
      password: "Contraseña123",
    });    
    expect(resultado.statusCode).toBe(201);
  },5000);

  it("Validar registro de usuario ", async () => {
    const usuario = {
      id: 5,
      nombre: "Usuario",
      apellido_paterno: "Prueba",
      rut: "11.111.111-1",
      email: "usuario.prueba@test.cl",
      telefono: "123456789",
      direccion: "Los Tulipanes 15",
      comuna: "Villa Alemana",
      tipo_user: 0,
      password: "123123",
    };
    const resultado = await request(app).post("/registro").send(usuario);
    expect(resultado.statusCode).toBe(201);
    expect(resultado.body).toContainEqual(usuario);
  },5000);

  it("Validar actualizar usuario", async () => {
    const usuario = {
      id: 5,
      nombre: "Usuario",
      apellido_paterno: "Prueba",
      rut: "11.111.111-1",
      email: "usuario.prueba@test.cl",
      telefono: "987654321",
      direccion: "Las acacias 20",
      comuna: "Villa Alemana",
      tipo_user: 0,
      password: "123123",
    };
    const id_usuario = 5;
    const resultado = await request(app)
      .put(`/usuario/${id_usuario}`)
      .send(usuario);
    expect(resultado.statusCode).toBe(403);
  },5000);

  it("Validar registro del recinto ", async () => {
    const recinto = {
      id: 5,
      id_usuario: 6,
      nombre: "Recinto de prueba",
      telefono: "123456789",
      email: "recinto.prueba@test.cl",
      direccion: "San Enrique 15",
      comuna: "Villa Alemana",
      estado: 1,
    };
    const resultado = await request(app)
      .post("/registro/recinto")
      .send(recinto);
    expect(resultado.statusCode).toBe(201);
    expect(resultado.body).toContainEqual(recinto);
  },5000);

  it("Validar actualizar recinto", async () => {
    const recinto = {
      id: 5,
      id_usuario: 6,
      nombre: "Recinto de prueba",
      telefono: "123456789",
      email: "recinto.prueba@test.cl",
      direccion: "San Enrique 15",
      comuna: "Villa Alemana",
      estado: 1,
    };
    const id_recinto = 5;
    const resultado = await request(app)
      .put(`/recinto/${id_recinto}`)
      .send(recinto);
    expect(resultado.statusCode).toBe(403);
  },5000);
});
