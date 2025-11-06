
const imgStyle = {
    height: '250px',
    objectFit: 'contain',
    padding: '1rem'
}

function ProductCard({ product }) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={imgStyle}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    { }
                    {product.title}
                </h5>
                <p className="card-text mt-auto fs-4 text-end text-success fw-bold">
                    { }
                    ${product.price}
                </p>
            </div>
        </div>
    )
}

export default ProductCard