export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Meawdum Monitor</h2>

      <nav className="space-y-2">
        <a href="/dashboard" className="block hover:text-gray-300">
          Dashboard
        </a>
        <a href="/servers" className="block hover:text-gray-300">
          Servers
        </a>
      </nav>
    </div>
  )
}
