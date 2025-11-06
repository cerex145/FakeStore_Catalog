
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error('No se pudo obtener la respuesta de la red')
                }
                const data = await response.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])


    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }


    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>
    }


    return (
        <div>
            <h2 className="mb-4">Catálogo de Productos</h2>
            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products