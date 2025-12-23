import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Plus, MoreVertical, Users, Eye, Share2, Settings } from "lucide-react";
import { Link } from "wouter";
import techConfImg from "@assets/generated_images/indian_tech_conference_networking_event.png";
import hackathonImg from "@assets/generated_images/indian_startup_hackathon_event.png";
import musicFestImg from "@assets/generated_images/indian_music_festival_concert.png";

const myEvents = [
  {
    id: 1,
    title: "Sab AI Kyun Le Rahe Hai!?",
    date: "Friday 26 December",
    location: "K.C. College, Thane",
    guests: 29,
    status: "Live",
    image: techConfImg,
    responses: 12
  },
  {
    id: 2,
    title: "Web Dev Mastery Challenge",
    date: "December 27, 2025",
    location: "Online",
    guests: 156,
    status: "Live",
    image: hackathonImg,
    responses: 87
  },
  {
    id: 3,
    title: "New Year Bash 2026",
    date: "December 31, 2025",
    location: "Mumbai",
    guests: 0,
    status: "Draft",
    image: musicFestImg,
    responses: 0
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-black uppercase mb-2">
                My Events
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Manage and track all your events in one place
              </p>
            </div>
            <Link href="/editor">
              <button className="btn-neo bg-primary text-black font-bold px-6 py-3 gap-2 whitespace-nowrap">
                <Plus className="w-5 h-5" /> Create Event
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        {myEvents.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-display font-black mb-4">No events yet</h2>
            <p className="text-muted-foreground mb-8">Create your first event to get started</p>
            <Link href="/editor">
              <button className="btn-neo bg-primary text-black font-bold px-6 py-3">
                Create First Event
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myEvents.map((event) => (
              <div key={event.id} className="card-neo p-0 overflow-hidden hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                {/* Image */}
                <div className="relative h-40 bg-gray-100 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white border border-white ${
                      event.status === "Live" ? "bg-green-600" : "bg-gray-600"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <p className="font-medium">{event.date}</p>
                    <p className="font-medium">{event.location}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t-2 border-b-2 border-black">
                    <div className="text-center">
                      <div className="text-2xl font-display font-black text-primary">{event.guests}</div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Guests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-black text-accent">{event.responses}</div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Responses</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/event/${event.id}`} className="flex-1">
                      <button className="w-full py-2 border-2 border-black rounded-lg font-bold text-sm uppercase hover:bg-black/5 transition-colors">
                        Manage
                      </button>
                    </Link>
                    <button className="p-2 border-2 border-black rounded-lg hover:bg-black/5 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
