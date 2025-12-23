import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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
  Upload,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import eventImg from "@assets/stock_images/indian_people_at_eve_4220b17f.jpg";
import techConfImg from "@assets/generated_images/indian_tech_conference_networking_event.png";
import hackathonImg from "@assets/generated_images/indian_startup_hackathon_event.png";
import musicFestImg from "@assets/generated_images/indian_music_festival_concert.png";

const templateConfigs: Record<string, any> = {
  "event-registration": {
    title: "Sab AI Kyun Le Rahe Hai!?",
    subtitle: "Join E-CELL KCCEMSR for a session that's actually fun. Relatable tech banter, zero boring lectures, and pure vibes.",
    image: techConfImg,
  },
  "quiz": {
    title: "Web Dev Mastery Challenge",
    subtitle: "Test your web development skills with our interactive quiz. See how you rank among developers in India.",
    image: hackathonImg,
  },
  "feedback": {
    title: "Event Feedback Survey",
    subtitle: "Help us improve by sharing your thoughts about the event. Your feedback shapes our future events!",
    image: musicFestImg,
  },
  "waitlist": {
    title: "Early Access Waitlist",
    subtitle: "Be the first to know when we launch something special. No spam, just updates about our best events.",
    image: techConfImg,
  },
  "rsvp": {
    title: "New Year Bash 2026",
    subtitle: "Let us know if you're coming to the coolest New Year event in Mumbai. No cap, it's going to be W!",
    image: musicFestImg,
  },
  "merch-order": {
    title: "Official Merch Store",
    subtitle: "Get exclusive limited-edition merchandise from your favorite Indian tech community.",
    image: hackathonImg,
  },
};

export default function Editor() {
  const [location] = useLocation();
  const templateId = new URLSearchParams(location.split("?")[1]).get("template");
  const templateData = templateId ? templateConfigs[templateId] : null;

  const [formTitle, setFormTitle] = useState(templateData?.title || "Sab AI kyun le rahe hai!?");
  const [formDesc, setFormDesc] = useState(templateData?.subtitle || "Join E-CELL KCCEMSR for a session that's actually fun. Relatable tech banter, zero boring lectures, and pure vibes.");
  const [isEditing, setIsEditing] = useState(false);
  const [headerImage, setHeaderImage] = useState(templateData?.image || eventImg);

  useEffect(() => {
    if (templateData) {
      setFormTitle(templateData.title);
      setFormDesc(templateData.subtitle);
      setHeaderImage(templateData.image);
    }
  }, [templateData]);

  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setHeaderImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
                <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl border-2 border-white shadow-2xl flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity overflow-hidden">
                  <img 
                    src={headerImage} 
                    alt="Event header" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <label className="absolute bottom-4 right-4 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <Upload className="w-4 h-4 text-black" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              {/* Presenter Info */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-xs uppercase text-white/70 font-bold mb-3">Presented By</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <div className="font-bold text-white text-sm">FocusDyn</div>
                    <div className="text-xs text-white/60">Community Of Driven Individuals</div>
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
                      rows={3}
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
                    <div className="font-bold text-sm">K.C. College of Engineering & Management Studies & Research</div>
                    <div className="text-sm text-white/70">Thane East, Thane, Maharashtra 400603, India</div>
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
                <p className="text-white/80 text-sm leading-relaxed">
                  Join E-CELL KCCEMSR for a session that's actually fun. Relatable tech banter, zero boring lectures, and pure vibes.
                </p>
                <div className="space-y-2 text-sm text-white/80 font-medium">
                  <div className="flex gap-2">
                    <span>•</span>
                    <span>Date: Dec 26</span>
                  </div>
                  <div className="flex gap-2">
                    <span>•</span>
                    <span>Location: KCCEMSR, Thane</span>
                  </div>
                  <div className="flex gap-2">
                    <span>•</span>
                    <span>Vibe: Interactive, fun, and maybe some surprises!</span>
                  </div>
                </div>
                <p className="text-white/70 text-xs mt-4">
                  Chahe tum tech-pro ho ya bilkul clueless, bas aa jao. Don't miss the FOMO, it's going to be a total W!
                </p>
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
