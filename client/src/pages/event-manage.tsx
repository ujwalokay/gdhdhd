import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Users, MessageSquare, Zap, BarChart3, Settings, Share2, Edit3 } from "lucide-react";
import { Link } from "wouter";
import techConfImg from "@assets/generated_images/indian_tech_conference_networking_event.png";

export default function EventManage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: null },
    { id: "guests", label: "Guests", icon: Users },
    { id: "registration", label: "Registration", icon: null },
    { id: "blasts", label: "Blasts", icon: MessageSquare },
    { id: "insights", label: "Insights", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      {/* Event Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-white font-bold mb-4 hover:opacity-80">
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <img 
              src={techConfImg}
              alt="Event"
              className="w-24 h-24 rounded-lg object-cover border-2 border-white shadow-hard-sm"
            />
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                Sab AI Kyun Le Rahe Hai!?
              </h1>
              <p className="text-white/90 font-medium mb-4">
                Friday 26 December • K.C. College, Thane
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Event
                </button>
                <button className="bg-white/20 backdrop-blur text-white font-bold px-4 py-2 rounded-lg border-2 border-white hover:bg-white/30 transition-colors flex items-center gap-2">
                  <Edit3 className="w-4 h-4" /> Edit Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-start p-4 border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition-colors">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <span className="font-bold text-lg">29</span>
              <span className="text-sm text-gray-600">Invite Guests</span>
            </button>
            <button className="flex flex-col items-start p-4 border-2 border-purple-400 rounded-lg hover:bg-purple-50 transition-colors">
              <MessageSquare className="w-6 h-6 text-purple-600 mb-2" />
              <span className="font-bold text-lg">Send a Blast</span>
              <span className="text-sm text-gray-600">Message guests</span>
            </button>
            <button className="flex flex-col items-start p-4 border-2 border-pink-400 rounded-lg hover:bg-pink-50 transition-colors">
              <Share2 className="w-6 h-6 text-pink-600 mb-2" />
              <span className="font-bold text-lg">Share Event</span>
              <span className="text-sm text-gray-600">Spread the word</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-black sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 font-bold uppercase text-sm tracking-wider border-b-4 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-black border-b-black"
                    : "text-gray-500 border-b-transparent hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-neo p-6">
              <div className="text-gray-500 font-bold text-sm uppercase mb-2">At a Glance</div>
              <div className="text-4xl font-display font-black text-primary mb-4">29</div>
              <div className="bg-green-100 border-l-4 border-green-600 p-3 rounded text-sm font-medium text-green-800">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                1 Going
              </div>
            </div>

            <div className="card-neo p-6">
              <div className="text-gray-500 font-bold text-sm uppercase mb-4">Recent Activity</div>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b">
                  <p className="font-bold">Registration Confirmed</p>
                  <p className="text-gray-600">Today, 8:58 PM</p>
                </div>
                <div className="pb-3 border-b">
                  <p className="font-bold">New Registration</p>
                  <p className="text-gray-600">Today, 8:58 PM</p>
                </div>
              </div>
            </div>

            <div className="card-neo p-6">
              <div className="text-gray-500 font-bold text-sm uppercase mb-4">Location Status</div>
              <div className="bg-yellow-100 border-l-4 border-yellow-600 p-3 rounded text-sm font-medium text-yellow-800">
                <span className="text-lg">⚠️</span> Location Missing
              </div>
              <p className="text-xs text-gray-600 mt-3">Please enter location before event starts</p>
            </div>
          </div>
        )}

        {activeTab === "guests" && (
          <div>
            <div className="mb-6 flex gap-4">
              <input 
                type="text"
                placeholder="Search guests..."
                className="input-neo flex-1"
              />
              <button className="btn-neo bg-white border-2 border-black px-6">
                Filter
              </button>
            </div>

            <div className="card-neo p-0 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-black">
                  <tr>
                    <th className="p-4 text-left font-bold text-sm uppercase">Guest</th>
                    <th className="p-4 text-left font-bold text-sm uppercase">Status</th>
                    <th className="p-4 text-left font-bold text-sm uppercase">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Ujwal", email: "ujwal.guru999@gmail.com", status: "Going", time: "In 3m" },
                    { name: "Priya", email: "priya@example.com", status: "Going", time: "2h ago" },
                    { name: "Aditya", email: "aditya@example.com", status: "Going", time: "5h ago" },
                  ].map((guest, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-bold">{guest.name}</p>
                          <p className="text-sm text-gray-600">{guest.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 font-bold text-xs rounded-full">
                          {guest.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{guest.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "registration" && (
          <div className="card-neo p-8">
            <h2 className="text-3xl font-display font-black mb-4">Registration Form</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-bold text-sm uppercase mb-2">Full Name</label>
                <div className="p-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-600 font-medium">
                  Required
                </div>
              </div>
              <div>
                <label className="block font-bold text-sm uppercase mb-2">Email Address</label>
                <div className="p-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-600 font-medium">
                  Required
                </div>
              </div>
              <button className="btn-neo bg-black text-white font-bold">
                Customize Registration Form
              </button>
            </div>
          </div>
        )}

        {activeTab === "blasts" && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold mb-2">No blasts sent yet</h2>
            <p className="text-gray-600 mb-6">Send messages to your guests</p>
            <button className="btn-neo bg-primary text-black font-bold">
              Send First Blast
            </button>
          </div>
        )}

        {activeTab === "insights" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-neo p-6">
              <h3 className="text-xl font-display font-bold mb-4">Registration Over Time</h3>
              <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                Chart will appear here
              </div>
            </div>
            <div className="card-neo p-6">
              <h3 className="text-xl font-display font-bold mb-4">Response Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Registrations</span>
                  <span className="text-2xl font-display font-black">29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Confirmed</span>
                  <span className="text-2xl font-display font-black text-green-600">29</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
