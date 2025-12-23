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
  ArrowLeft,
  Layout,
  Image as ImageIcon,
  Type,
  Palette
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

  const [editorTab, setEditorTab] = useState("build");
  const [activeSection, setActiveSection] = useState("basic");
  const [formTitle, setFormTitle] = useState(templateData?.title || "Sab AI kyun le rahe hai!?");
  const [formDesc, setFormDesc] = useState(templateData?.subtitle || "Join E-CELL KCCEMSR for a session that's actually fun. Relatable tech banter, zero boring lectures, and pure vibes.");
  const [headerImage, setHeaderImage] = useState(templateData?.image || eventImg);
  const [location_text, setLocation] = useState("K.C. College of Engineering & Management Studies & Research");
  const [dateTime, setDateTime] = useState({ date: "Friday 26 December", startTime: "13:30", endTime: "15:30" });
  const [guestCount, setGuestCount] = useState("29");
  const [bgColor, setBgColor] = useState("from-purple-600 via-pink-500 to-orange-400");

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

  const sections = [
    { id: "basic", label: "Basic Info", icon: Type },
    { id: "details", label: "Event Details", icon: Clock },
    { id: "image", label: "Image & Media", icon: ImageIcon },
    { id: "design", label: "Design", icon: Palette },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      {/* Header */}
      <nav className="h-16 bg-white border-b-2 border-black flex items-center justify-between px-6 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 font-bold cursor-pointer hover:opacity-70" />
          <div className="h-8 w-[1px] bg-gray-300"></div>
          <span className="font-display font-bold text-lg">VibeForm Editor</span>
        </Link>

        <div className="flex gap-4 items-center">
          <div className="flex border-2 border-black rounded-lg p-1">
            <button 
              onClick={() => setEditorTab("build")}
              className={`px-4 py-1 font-bold text-sm transition-all ${
                editorTab === "build"
                  ? "bg-primary text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Build
            </button>
            <button 
              onClick={() => setEditorTab("live")}
              className={`px-4 py-1 font-bold text-sm transition-all ${
                editorTab === "live"
                  ? "bg-primary text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Live
            </button>
          </div>

          <button className="btn-neo bg-white h-10 px-4 text-xs gap-2">
            <Share2 className="w-4 h-4" /> Publish
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Only show on Build tab */}
        {editorTab === "build" && (
          <div className="w-64 bg-white border-r-2 border-black p-4 overflow-y-auto">
            <div className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-4">Sections</div>
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-black font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Canvas */}
        <div className="flex-1 bg-gradient-to-br from-black via-black to-gray-900 p-8 overflow-y-auto flex justify-center">
          <div className="w-full max-w-2xl">
            {/* BUILD TAB */}
            {editorTab === "build" && (
              <>
            {/* Basic Info Section */}
            {activeSection === "basic" && (
              <div className="space-y-6">
                <div className="card-neo p-6 bg-white">
                  <h2 className="text-2xl font-display font-bold mb-4">Event Title</h2>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full text-3xl font-display font-black border-b-2 border-black p-2 focus:outline-none mb-6"
                  />
                  
                  <h2 className="text-2xl font-display font-bold mb-4">Description</h2>
                  <textarea
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none resize-none"
                    rows={5}
                  />
                </div>
              </div>
            )}

            {/* Event Details Section */}
            {activeSection === "details" && (
              <div className="space-y-6">
                <div className="card-neo p-6 bg-white">
                  <h2 className="text-2xl font-display font-bold mb-6">Event Details</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-sm uppercase mb-2">Date</label>
                      <input
                        type="text"
                        value={dateTime.date}
                        onChange={(e) => setDateTime({...dateTime, date: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-sm uppercase mb-2">Start Time</label>
                        <input
                          type="time"
                          value={dateTime.startTime}
                          onChange={(e) => setDateTime({...dateTime, startTime: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-sm uppercase mb-2">End Time</label>
                        <input
                          type="time"
                          value={dateTime.endTime}
                          onChange={(e) => setDateTime({...dateTime, endTime: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-sm uppercase mb-2">Location</label>
                      <input
                        type="text"
                        value={location_text}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-sm uppercase mb-2">Expected Guests</label>
                      <input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Image & Media Section */}
            {activeSection === "image" && (
              <div className="space-y-6">
                <div className="card-neo p-6 bg-white">
                  <h2 className="text-2xl font-display font-bold mb-6">Event Image</h2>

                  <div className="relative group mb-6">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl border-2 border-black shadow-hard-sm flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity overflow-hidden">
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

                  <p className="text-sm text-gray-600">Recommended: Square image, at least 1000x1000px</p>
                </div>
              </div>
            )}

            {/* Design Section */}
            {activeSection === "design" && (
              <div className="space-y-6">
                <div className="card-neo p-6 bg-white">
                  <h2 className="text-2xl font-display font-bold mb-6">Design & Theme</h2>

                  <div>
                    <label className="block font-bold text-sm uppercase mb-4">Color Scheme</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Purple", value: "from-purple-600 via-pink-500 to-orange-400" },
                        { name: "Blue", value: "from-blue-500 via-cyan-400 to-teal-400" },
                        { name: "Rose", value: "from-rose-400 via-pink-300 to-purple-300" },
                        { name: "Yellow", value: "from-yellow-400 via-orange-300 to-red-300" },
                      ].map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setBgColor(color.value)}
                          className={`p-4 rounded-lg border-4 transition-all ${
                            bgColor === color.value ? "border-black" : "border-gray-300"
                          }`}
                        >
                          <div className={`w-full h-12 rounded-lg bg-gradient-to-r ${color.value} mb-2`}></div>
                          <span className="font-bold text-sm">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Section */}
            {activeSection === "settings" && (
              <div className="space-y-6">
                <div className="card-neo p-6 bg-white">
                  <h2 className="text-2xl font-display font-bold mb-6">Form Settings</h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg">
                      <span className="font-bold">Require Approval</span>
                      <input type="checkbox" className="w-5 h-5 border-2 border-black rounded" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg">
                      <span className="font-bold">Allow Multiple Responses</span>
                      <input type="checkbox" className="w-5 h-5 border-2 border-black rounded" />
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg">
                      <span className="font-bold">Show Results Live</span>
                      <input type="checkbox" className="w-5 h-5 border-2 border-black rounded" />
                    </div>
                  </div>

                  <button className="btn-neo bg-black text-white w-full mt-6 font-bold">
                    Save All Settings
                  </button>
                </div>
              </div>
            )}
              </>
            )}

            {/* LIVE TAB - Show form as users see it */}
            {editorTab === "live" && (
              <div className="w-full">
                {/* Event Header */}
                <div className={`bg-gradient-to-r ${bgColor} rounded-2xl border-2 border-white shadow-2xl overflow-hidden mb-6`}>
                  <div className="relative h-64 flex items-center justify-center">
                    <img 
                      src={headerImage}
                      alt="Event"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                </div>

                {/* Event Details Card */}
                <div className="card-neo p-8 mb-6 bg-white">
                  <h1 className="text-4xl font-display font-black mb-3">{formTitle}</h1>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{formDesc}</p>

                  {/* Date, Time, Location */}
                  <div className="space-y-4 border-t-2 border-b-2 border-black py-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">{dateTime.date}</p>
                        <p className="text-gray-600">{dateTime.startTime} - {dateTime.endTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-lg">{location_text}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">{guestCount} going</p>
                      </div>
                    </div>
                  </div>

                  {/* Registration Form */}
                  <div className="mt-8">
                    <h2 className="text-2xl font-display font-bold mb-6">REGISTRATION</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block font-bold mb-2">Full Name *</label>
                        <input 
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Email Address *</label>
                        <input 
                          type="email"
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none"
                        />
                      </div>
                      <button className="btn-neo bg-black text-white w-full font-bold py-3 mt-4">
                        Request to Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
