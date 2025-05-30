import { SearchIcon } from "lucide-react"
import Header from "./components/header"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarImage } from "./components/ui/avatar"
import { db } from "./_lib/prisma"
import BabershopItem from "./components/barbershop-item"

const Home = async () => {
  //Chamar banco de Dados
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p>Quinta-feira, 29 de Maio</p>
        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua Busca.." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="Agende nos melhores com Cortaê"
            className="rounded-xl object-cover"
          />
        </div>
        {/* AGENDAMENTOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia do Marcos</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Maio</p>
              <p className="text-2xl">29</p>
              <p className="text-sm">22:00</p>
            </div>
          </CardContent>
        </Card>
        {/* RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BabershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
