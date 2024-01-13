import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { name: string } },
) {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: params.name,
        },
      },
    })

    return NextResponse.json(products, { status: 200 })
  } catch (e) {
    return NextResponse.json(e, { status: 400 })
  }
}
