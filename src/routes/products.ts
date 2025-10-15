import { Hono } from 'hono'
import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient()

const router_products = new Hono()

router_products.get('/:id', (c) => {
  return c.json({ message: 'Hello from products!', id: c.req.param('id') })
})

router_products.get('/', async (c) => {
  const products = await prisma.user.findMany()
  return c.json({ message: 'Hello from products!', products })
})

export default router_products