import Image from "next/image"
<Image
  src="/images/logo.png"
  alt="Logo"
  width={120}
  height={40}
/>
export default function Navbar() {
  return (
    <div className="bg-gray-800 w-full h-16 flex items-center justify-between px-4">
        <p className="text-white">Meawdum Monitor</p>
        <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">Status pages</button>
            <button className="text-gray-300 hover:text-white">Dashboard</button>
        </div>
    </div>
  )
}   
    
