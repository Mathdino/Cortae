import { db } from "../_lib/prisma"
import BarbershopItem from "../components/barbershop-item"
import BarbershopPage from "./[id]/page"

interface BarberShopsPageProps {
  searchParams: {
    search?: string
  }
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  })

  return (
    <div>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Resultados para &quot;{searchParams.search}&quot;
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default BarberShopsPage
