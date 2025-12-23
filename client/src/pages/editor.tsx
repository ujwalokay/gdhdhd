import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  MapPin,
  Clock,
  Users,
  Edit2,
  Save,
  Eye,
  Share2,
  Settings,
  Image as ImageIcon,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

export default function Editor() {
  const [formTitle, setFormTitle] = useState("End of Year Bash 2025");
  const [formDesc, setFormDesc] = useState("Join us for music, vibes, and code.");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Header */}
      <nav className="h-16 bg-white border-b-2 border-black flex items-center justify-between px-6 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 font-bold cursor-pointer hover:opacity-70" />
          <div className="h-8 w-[1px] bg-gray-300"></div>
          <span className="font-display font-bold text-lg">VibeForm Editor</span>
        </Link>

        <div className="flex gap-2">
          <button className="btn-neo bg-white h-10 px-4 text-xs gap-2">
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button className="btn-neo h-10 px-4 text-xs gap-2">
            <Share2 className="w-4 h-4" /> Publish
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-black via-black to-gray-900 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Event Form Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Event Image */}
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl border-2 border-white shadow-2xl flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <ImageIcon className="w-16 h-16 text-white opacity-50" />
                </div>
                <button className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <Edit2 className="w-4 h-4 text-black" />
                </button>
              </div>
              
              {/* Presenter Info */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-xs uppercase text-white/70 font-bold mb-3">Presented By</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <div className="font-bold text-white text-sm">Organizer Name</div>
                    <div className="text-xs text-white/60">Community of Developers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Event Details & Registration */}
            <div className="flex flex-col gap-6">
              {/* Event Location Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500 px-3 py-1 rounded-full border-2 border-white w-fit">
                <span className="text-xs font-bold text-white">Featured in Mumbai</span>
              </div>

              {/* Event Title & Description */}
              <div className="space-y-3">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full bg-white/10 border-2 border-white text-white text-4xl font-display font-black placeholder-white/40 rounded-lg p-3 focus:outline-none"
                    />
                    <textarea
                      value={formDesc}
                      onChange={(e) => setFormDesc(e.target.value)}
                      className="w-full bg-white/10 border-2 border-white text-white text-lg placeholder-white/40 rounded-lg p-3 focus:outline-none resize-none"
                      rows={2}
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                      {formTitle}
                    </h1>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {formDesc}
                    </p>
                  </>
                )}
              </div>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Friday 26 December</div>
                    <div className="text-sm text-white/70">13:30 - 15:30</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">K.C. College of Engineering & Management</div>
                    <div className="text-sm text-white/70">Thane, Maharashtra</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">29 Going</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="bg-white/5 border-2 border-white/20 rounded-xl p-6 backdrop-blur-sm space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded bg-orange-500">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <h3 className="font-bold text-white text-sm">Registration</h3>
                  </div>
                  <p className="text-xs text-white/70">Approval Required</p>
                  <p className="text-xs text-white/60">Your registration is subject to host approval.</p>
                </div>

                <p className="text-white text-sm leading-relaxed">
                  Welcome! To join the event, please register below.
                </p>

                <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:shadow-lg transition-shadow">
                  Request to Join
                </button>
              </div>

              {/* About Event */}
              <div className="space-y-3">
                <h3 className="font-bold text-white text-lg">About Event</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Confused ki har jagah bas AI-AI kyun ho raha hai? No cap, AI is everywhere, but hum ise boring nahi banayenge!
                </p>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Date: Dec 26</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Location: K.C. College</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Vibe: Interactive, fun, and maybe some surprises!</span>
                  </div>
                </div>
              </div>

              {/* Edit Toggle */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-neo bg-primary text-black font-bold py-3 gap-2 w-full"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" /> Save Changes
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" /> Edit Event Details
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
