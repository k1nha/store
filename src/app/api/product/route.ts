import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { number, object, string } from 'yup'

export async function POST(req: Request) {
  const productSchema = object({
    name: string().required(),
    value: number().required().min(0),
    description: string().required(),
  })

  try {
    const body = await req.json()

    const { description, name, value } = await productSchema.validate(body)

    await prisma.product.create({
      data: {
        description,
        name,
        price: value,
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
