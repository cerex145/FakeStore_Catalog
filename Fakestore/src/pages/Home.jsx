
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">FakeStore Catalog</h1>
                <p className="col-md-8 fs-4">
                    Bienvenido a nuestro catálogo de productos. Este es un proyecto de
                    demostración construido con React, Vite, React Router y Bootstrap,
                    consumiendo datos de la FakeStore API.
                </p>
                <Link className="btn btn-primary btn-lg" to="/entities">
                    Ver Productos
                </Link>
            </div>
        </div>
    )
}

export default Home