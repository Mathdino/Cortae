import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="logo" width={120} height={18} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            {/*AVATAR*/}
            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png"/>
              </Avatar>
              <div>
                <p className="font-bold">Matheus Bernardino</p>
                <p className="text-xs">matheus.bernardino@cortae.com</p>
              </div>
            </div>

            {/*INICIO*/}
            <div className="flex flex-col gap-2 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="/">
                  <HomeIcon size={18} />
                  Início
                </Link>
              </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            {/*SERVIÇOS*/}
            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearchOptions.map((option) -> (
                <Button key={option.title} className="justify-start gap-2" variant="ghost">
                  <Image alt={option.title} src={option.imageUrl} height={18} width={18} />
                </Button>
              ))}
            </div>

            {/*LOGOUT*/}
             <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2"> 
                <LogOutIcon size={18} />
                Sair da Conta
                </Button>
              </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
