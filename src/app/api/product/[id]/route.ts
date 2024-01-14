import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const searchParams = req.nextUrl.searchParams
    const pageIndex = Number(searchParams.get('pageIndex'))

    if (params.id != 'null') {
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: params.id,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 18,
        skip: (pageIndex - 1) * 18,
      })

      const length = await prisma.product.count({
        where: {
          name: {
            contains: params.id,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      })

      const result = {
        products,
        page: pageIndex,
        perPage: 18,
        total: length,
      }

      return NextResponse.json(result, { status: 200 })
    }

    const products = await prisma.product.findMany({
      take: 18,
      skip: (pageIndex - 1) * 18,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const length = await prisma.product.count()

    const result = {
      products,
      page: pageIndex,
      perPage: 18,
      total: length,
    }

    return NextResponse.json(result, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json(e, { status: 400 })
  }
}
