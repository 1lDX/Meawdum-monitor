import Image from "next/image";

const processes = [
  { pid: 1234, name: "node", cpu: 12, memory: 150, status: "running" },
  { pid: 2345, name: "nginx", cpu: 5    , memory: 50, status: "sleeping" },
  { pid: 3456, name: "postgres", cpu: 18, memory: 300, status: "running" },
]

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 ">CPU USAGE 00%
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
            </div>
        </div>
        <div className="p-4 ">MEMORY 00%
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
            </div>
        </div>
        <div className="p-4 ">DISK SPACE 00%
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
            </div>
        </div>
        <div className="p-4 ">NETWORK 00%
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
            </div>
        </div>
      </div>

    <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Top processess</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
                <th className="border-b p-1">PID</th>
                <th className="border-b p-1">Name</th>
                <th className="border-b p-1">CPU %</th>
                <th className="border-b p-1">Memory (MB)</th>
                <th className="border-b p-1">Status</th>
            </tr>
            </thead>
            <tbody>
            {processes.map((proc) => (
                <tr key={proc.pid}>
                <td className="border-b p-2">{proc.pid}</td>
                <td className="border-b p-2">{proc.name}</td>
                <td className="border-b p-2">{proc.cpu}%</td>
                <td className="border-b p-2">{proc.memory}</td>
                <td className="border-b p-2">{proc.status}</td>

                </tr>))}

            </tbody>
          </table> 
      </div>
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Alerts</h2>
        <div className="h-48 overflow-y-auto bg-gray-100 p-2 rounded">
            <p className="text-red-600">[2024-06-01 12:00:00] CPU usage high: 95%</p>
            <p className="text-red-600">[2024-06-01 12:05:00] Memory usage high: 90%</p>
            <p className="text-red-600">[2024-06-01 12:10:00] Disk space low: 5% remaining</p>
            <p className="text-red-600">[2024-06-01 12:15:00] Network latency high: 200ms</p>

        </div>
        </div>
    </div>
    
    ); 
}
