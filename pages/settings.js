import { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'pt-BR',
    priceMultiplier: 1.2,
    defaultCategory: 'Geral',
  })

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviar as configurações atualizadas para a API
    console.log('Configurações atualizadas:', settings)
  }

  return (
    <div>
      <h2>Configurações</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Idioma:</label>
          <select name="language" value={settings.language} onChange={handleChange}>
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">Inglês (Estados Unidos)</option>
            <option value="es-ES">Espanhol (Espanha)</option>
          </select>
        </div>
        <div>
          <label>Multiplicador de Preço:</label>
          <input 
            type="number" 
            name="priceMultiplier" 
            value={settings.priceMultiplier} 
            onChange={handleChange} 
            step="0.1" 
          />
        </div>
        <div>
          <label>Categoria Padrão:</label>
          <input 
            type="text" 
            name="defaultCategory" 
            value={settings.defaultCategory} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Salvar Configurações</button>
      </form>
    </div>
  )
}

export default Settings
