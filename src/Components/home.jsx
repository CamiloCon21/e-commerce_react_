import { FaLaptop, FaMobileAlt, FaHeadphones, FaRocket, FaExternalLinkAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold mb-4">
        Bienvenido a <span className="text-primary"> Camilo TechStore</span>
      </h1>

      <p className="lead mb-5">
        Somos una empresa apasionada por la <strong>tecnología</strong>. Encuentra los mejores productos electrónicos, equipos de última generación y accesorios para todos tus dispositivos.
      </p>

      <div className="row justify-content-center g-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaLaptop className="display-4 text-primary mb-3" />
              <h5 className="card-title">Computadores</h5>
              <p className="card-text">Equipos de alto rendimiento para trabajo y gaming.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaMobileAlt className="display-4 text-success mb-3" />
              <h5 className="card-title">Smartphones</h5>
              <p className="card-text">Modelos de última generación con la mejor tecnología.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaHeadphones className="display-4 text-warning mb-3" />
              <h5 className="card-title">Accesorios</h5>
              <p className="card-text">Auriculares, cargadores y más al mejor precio.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <FaRocket className="text-danger me-2" size={24} />
        <strong>Envíos rápidos a todo el país</strong>
      </div>

        <div className="mt-4">
        <p className="mb-2">¿Quieres conocer más sobre mí?</p>
        <a
          href="https://mi-portafolio-six-tau.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          Ver mi portafolio <FaExternalLinkAlt className="ms-2" />
        </a>
      </div>
    </div>

    
  );
}

export default Home;
