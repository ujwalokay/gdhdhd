import Navbar from "@/components/layout/Navbar";
import { ArrowDown, Download, Filter, Search, MoreHorizontal } from "lucide-react";
import { Link } from "wouter";

export default function Results() {
  const dummyData = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: ["Alex Chen", "Sarah Jones", "Mike Ross", "Jessica Pearson", "Harvey Specter", "Louis Litt", "Donna Paulsen", "Rachel Zane", "Katrina Bennett", "Robert Zane"][i],
    email: `user${i}@example.com`,
    status: i % 3 === 0 ? "Checked In" : i % 3 === 1 ? "Registered" : "Waitlist",
    ticketId: `TK-${2025 + i}-X`,
    timestamp: "2 mins ago"
  }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-black uppercase">End of Year Bash 2025</h1>
            <p className="text-muted-foreground font-medium">142 Responses • 85 Checked In</p>
          </div>
          
          <div className="flex gap-2">
            <Link href="/editor">
                <a className="btn-neo bg-white text-xs h-10 px-4">Edit Form</a>
            </Link>
            <button className="btn-neo bg-accent text-xs h-10 px-4">
              <Download className="w-4 h-4 mr-2" /> Export CSV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
           <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
              <div className="text-xs font-bold uppercase text-gray-400 mb-1">Total Views</div>
              <div className="text-3xl font-black font-mono">1,204</div>
              <div className="text-xs text-green-600 font-bold mt-2">↑ 12% today</div>
           </div>
           <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
              <div className="text-xs font-bold uppercase text-gray-400 mb-1">Conversion Rate</div>
              <div className="text-3xl font-black font-mono">68%</div>
              <div className="text-xs text-gray-400 font-bold mt-2">Avg. 45%</div>
           </div>
           <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
              <div className="text-xs font-bold uppercase text-gray-400 mb-1">Total Revenue</div>
              <div className="text-3xl font-black font-mono">$4,250</div>
              <div className="text-xs text-green-600 font-bold mt-2">12 tickets sold today</div>
           </div>
           <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
              <div className="text-xs font-bold uppercase text-gray-400 mb-1">Check-ins</div>
              <div className="text-3xl font-black font-mono">85/150</div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-3 border border-black overflow-hidden">
                 <div className="bg-primary h-full w-[56%]"></div>
              </div>
           </div>
        </div>

        {/* Custom Sheet View */}
        <div className="bg-white border-2 border-black rounded-xl shadow-hard overflow-hidden">
           <div className="p-4 border-b-2 border-black flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input className="pl-9 h-9 w-64 rounded-md border border-gray-300 text-sm focus:border-black focus:ring-0 outline-none" placeholder="Search entries..." />
                 </div>
                 <button className="h-9 px-3 border border-gray-300 bg-white rounded-md flex items-center gap-2 text-sm font-bold hover:bg-gray-50">
                    <Filter className="w-4 h-4" /> Filter
                 </button>
              </div>
              <div className="flex gap-2">
                 <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-200 rounded"><MoreHorizontal className="w-4 h-4" /></button>
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
               <thead>
                 <tr className="bg-gray-50 border-b-2 border-black">
                    <th className="p-4 font-bold uppercase font-display border-r border-gray-200 w-16 text-center">#</th>
                    <th className="p-4 font-bold uppercase font-display border-r border-gray-200 min-w-[200px]">Name</th>
                    <th className="p-4 font-bold uppercase font-display border-r border-gray-200 min-w-[200px]">Email</th>
                    <th className="p-4 font-bold uppercase font-display border-r border-gray-200 min-w-[150px]">Ticket ID</th>
                    <th className="p-4 font-bold uppercase font-display border-r border-gray-200 min-w-[150px]">Status</th>
                    <th className="p-4 font-bold uppercase font-display min-w-[150px]">Time</th>
                 </tr>
               </thead>
               <tbody>
                 {dummyData.map((row) => (
                   <tr key={row.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors group">
                      <td className="p-4 text-center font-mono text-gray-500 border-r border-gray-200">{row.id}</td>
                      <td className="p-4 font-bold border-r border-gray-200">{row.name}</td>
                      <td className="p-4 text-gray-600 border-r border-gray-200 font-mono text-xs">{row.email}</td>
                      <td className="p-4 font-mono text-xs border-r border-gray-200">
                        <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300">{row.ticketId}</span>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                          row.status === 'Checked In' ? 'bg-green-100 text-green-800 border-green-200' :
                          row.status === 'Registered' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                          'bg-yellow-100 text-yellow-800 border-yellow-200'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-xs">{row.timestamp}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           <div className="p-4 border-t-2 border-black bg-gray-50 flex justify-between items-center text-xs font-bold text-gray-500 uppercase">
              <span>Showing 1-10 of 142</span>
              <div className="flex gap-2">
                 <button className="px-3 py-1 border border-gray-300 bg-white rounded hover:border-black">Previous</button>
                 <button className="px-3 py-1 border border-gray-300 bg-white rounded hover:border-black">Next</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}