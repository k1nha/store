import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { string, array, object, number } from 'yup'

export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json( products , { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        message: err,
      },
      { status: 400 },
    )
  }
}

export async function POST(req: Request) {
  const productSchema = object({
    name: string().required(),
    value: number().required().min(0),
    description: string().required(),
    badges: array().required(),
  })

  try {
    const body = await req.json()

    const { description, name, value, badges } =
      await productSchema.validate(body)

    await prisma.product.create({
      data: {
        description,
        name,
        price: value,
        badges,
      },
    })

    return NextResponse.json('', { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        message: err,
      },
      { status: 400 },
    )
  }
}
