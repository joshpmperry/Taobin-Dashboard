'use client'

import {
  File,
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {

  TooltipProvider,

} from "@/components/ui/tooltip"

import { useEffect, useState } from "react"
import { VendingCard } from "@/components/composite/vending-card"

import { useRouter} from 'next/navigation'
import PaginationControlInactive from "@/components/composite/paginationControlInactive"

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  const router = useRouter()

  const [data, setData] = useState([]);
  const [active, setActive] = useState();

  useEffect(()=>{
    fetch('http://localhost:5050/machine?isActive=0')
      .then(res => {
        return res.json();
      })
      .then(fetchdata => {
        console.log(fetchdata);
        setData(fetchdata);
      })
  }, []);

  const start = (Number(page) - 1) * Number(per_page) 
  const end = start + Number(per_page) 

  const entries = data.slice(start, end)
  return (
    <TooltipProvider>
    <div className="flex min-h-screen w-full flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all" >Inactive</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem onClick={ () => {router.push('/status')} }>
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem onClick={ () => {router.push('/status/active')} }>
                      Active
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Machine
                  </span>
                </Button>
              </div>
            </div>
              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>Machines</CardTitle>
                    <CardDescription>
                      Manage machines and view their sales performance and uptime.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                          </TableHead>
                          <TableHead>Location ID</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Sales
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            uptime
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            last maintained
                          </TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>alert</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                      {entries.map((entry, index) => (
                          <VendingCard machine={entry}/>
                        ))}
                      </TableBody>
                    </Table>
                    <PaginationControlInactive hasNextPage={end < data.length} hasPrevPage={start > 0}/>
                  </CardContent>
                </Card>
              </TabsContent>
          </Tabs>
          
        </main>
      </div></TooltipProvider>
  )
}
