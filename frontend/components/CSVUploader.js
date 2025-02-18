import React, { useState } from 'react'
import Papa from 'papaparse'
import axios from 'axios'

const CSVUploader = () => {
  const [csvData, setCsvData] = useState([])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          setCsvData(results.data)
        }
      })
    }
  }

  const handleSubmit = async () => {
    // Enviar os dados do CSV para a API do backend
    try {
      const response = await axios.post('/api/upload-csv', { data: csvData })
      console.log('CSV enviado com sucesso:', response.data)
    } catch (error) {
      console.error('Erro ao enviar CSV:', error)
    }
  }

  return (
    <div>
      <h2>Upload de CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {csvData.length > 0 && (
        <div>
          <p>{csvData.length} registros carregados.</p>
          <button onClick={handleSubmit}>Enviar CSV</button>
        </div>
      )}
    </div>
  )
}

export default CSVUploader
