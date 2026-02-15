"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { usePathname } from "next/navigation"



export default function UnderNavbar() {
    const pathname = usePathname();
    const pageName = pathname.replace("/", "")
    const formatted = pageName.charAt(0).toUpperCase() + pageName.slice(1)
return (
    <div className="w-full h-16 flex items-center space-x-96 px-4">
        
        <Button className="bg-gray-500 hover:bg-gray-700 text-white shadow-md">
        <Plus className="mr-2 h-4 w-4" />
            Add new server
        </Button>
        

        {/* <p className="text-black text-4xl font-bold">{formatted}</p> */}
    </div>
  )
}   