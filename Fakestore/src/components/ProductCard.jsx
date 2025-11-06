
const imgStyle = {
    height: '250px',
    objectFit: 'contain',
    padding: '1rem'
}

function ProductCard({ product }) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={product.image} // Propiedad 1: Imagen
                className="card-img-top"
                alt={product.title}
                style={imgStyle}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    {/* Propiedad 2: Nombre (Título) */}
                    {product.title}
                </h5>
                <p className="card-text mt-auto fs-4 text-end text-success fw-bold">
                    {/* Propiedad 3: Precio */}
                    ${product.price}
                </p>
            </div>
        </div>
    )
}

export default ProductCard