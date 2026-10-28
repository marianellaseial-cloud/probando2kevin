const express = require('express')
const cors = require('cors')
require('dotenv').config()

const clientesRoutes = require('./routes/clientesRoutes')

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/clientes', clientesRoutes)

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend del parcial funcionando' })
})

// Ruta de prueba específica para la API
app.get('/api/test', (req, res) => {
  res.json({ ok: true, mensaje: 'API respondiendo en Vercel' })
})

// Exportar app PRIMERO (necesario para Vercel)
module.exports = app;

// Solo escuchar puerto cuando se corre en entorno local, NO en Vercel
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
  })
}
