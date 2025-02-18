const MetricsCard = ({ title, value }) => {
  return (
    <div style={{
      border: '1px solid #ddd', 
      padding: '1rem', 
      borderRadius: '8px', 
      margin: '1rem',
      flex: '1'
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '2rem' }}>{value}</p>
    </div>
  )
}

export default MetricsCard
