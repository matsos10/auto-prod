import MetricsCard from '../components/MetricsCard'

const Dashboard = () => {
  // Dados fictícios para demonstração
  const metrics = [
    { title: 'Produtos Criados', value: 120 },
    { title: 'Produtos Publicados', value: 95 },
    { title: 'Testes A/B Realizados', value: 30 },
    { title: 'Créditos Restantes', value: 50 },
  ]

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {metrics.map((metric, index) => (
          <MetricsCard key={index} title={metric.title} value={metric.value} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
