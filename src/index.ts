import { Hono } from 'hono'
import router_products from './routes/products'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.route('/api/products',router_products)

export default app

