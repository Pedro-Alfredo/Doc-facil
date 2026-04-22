export default function Home() {
  return (
    <main className="container">
      <header className="topo">
        <h1>DocFácil</h1>
        <p>Empregos & Concursos</p>
      </header>

      <section className="hero">
        <h2>Últimas Oportunidades</h2>

        <div className="card">
          <h3>Assistente Administrativo</h3>
          <p>Maputo, Moçambique</p>
        </div>

        <div className="card">
          <h3>Government Jobs</h3>
          <p>South Africa</p>
        </div>

        <div className="card">
          <h3>Bolsa de Estudo 2026</h3>
          <p>Botswana</p>
        </div>
      </section>
    </main>
  );
}
