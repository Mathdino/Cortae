import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"


const SidebarSheet = () => {
  return (
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

            {/*CATEGORIAS*/}
            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button key={option.title} className="justify-start gap-2" variant="ghost">
                  <Image alt={option.title} src={option.imageUrl} height={18} width={18} />
                  {option.title}
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
    );
}
 
export default SidebarSheet;