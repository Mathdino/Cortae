"use client"

import { DollarSignIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PixItemProps {
  pix: string
}

const PixItem = ({ pix }: PixItemProps) => {
  const handleCopypixClick = (pix: string) => {
    navigator.clipboard.writeText(pix)
    toast.success("Pix copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={pix}>
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <DollarSignIcon />
        <p className="text-sm">{pix}</p>
      </div>
      {/* DIREITA */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopypixClick(pix)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PixItem
