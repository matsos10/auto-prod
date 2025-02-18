const ProductTable = ({ products }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome do Produto</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Data</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.status}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable
