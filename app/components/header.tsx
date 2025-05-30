import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import {
  Sheet,
  SheetTrigger,
} from "./ui/sheet"
import { Card, CardContent } from "./ui/card"
import SidebarSheet from "./sidebar-sheet"

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
          <SidebarSheet />
        </Sheet>
        
      </CardContent>
    </Card>
  )
}
export default Header
