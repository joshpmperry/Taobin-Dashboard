'use client';
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function DashSales({sale}) {
  return (
    <div className="flex items-center gap-4">
    <Avatar className="hidden h-9 w-9 sm:flex">
      <AvatarFallback className="text-[#de794e]">{sale.shortHand}</AvatarFallback>
    </Avatar>
    <div className="grid gap-1">
      <p className="text-sm text-[#513c2f] font-medium leading-none">
        {sale.productName}
      </p>
      <p className="text-sm text-muted-foreground">
        {sale.productID}
      </p>
    </div>
    <div className="ml-auto font-medium">
      +{sale.price}$
    </div>
  </div>
  )
}
