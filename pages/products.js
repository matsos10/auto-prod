import ProductTable from '../components/ProductTable'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Exemplo de chamada à API para obter o histórico de produtos
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products') // Endpoint da API
        setProducts(response.data)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }
    fetchProducts()
  }, [])

  // Dados fictícios para demonstração, se a API não retornar resultados
  const dummyProducts = [
    { id: 1, name: 'Produto 1', status: 'Publicado', date: '2025-02-15' },
    { id: 2, name: 'Produto 2', status: 'Em análise', date: '2025-02-16' },
  ]

  return (
    <div>
      <h2>Histórico de Produtos</h2>
      <ProductTable products={products.length ? products : dummyProducts} />
    </div>
  )
}

export default Products
