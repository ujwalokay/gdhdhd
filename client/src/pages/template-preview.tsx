import { useLocation } from "wouter";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Star, Music, Users, Heart, Zap, BookOpen, ChevronDown, MapPin, Clock, DollarSign, Share2, Calendar } from "lucide-react";
import { useState } from "react";
import grainTexture from "@assets/generated_images/abstract_holographic_grain_texture.png";
import techConfImg from "@assets/generated_images/indian_tech_conference_networking_event.png";
import hackathonImg from "@assets/generated_images/indian_startup_hackathon_event.png";
import musicFestImg from "@assets/generated_images/indian_music_festival_concert.png";

const templateConfigs: Record<string, any> = {
  "event-registration": {
    title: "Sab AI Kyun Le Rahe Hai!?",
    subtitle: "Join E-CELL KCCEMSR for a session that's actually fun. Relatable tech banter, zero boring lectures, and pure vibes.",
    bgGradient: "from-purple-600 via-pink-500 to-orange-400",
    headerBg: "from-black to-gray-900",
    image: techConfImg,
    headerGradientText: true,
    icon: Music,
    location: "K.C. College of Engineering & Management Studies, Thane, Maharashtra",
    date: "Friday 26 December, 2025",
    time: "1:30 PM - 3:30 PM",
    price: "Free",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Jane Doe" },
      { label: "Email Address", type: "email", placeholder: "jane@example.com" },
      { label: "Ticket Type", type: "select", options: ["General Admission", "VIP", "Student"] },
      { label: "Dietary Restrictions", type: "text", placeholder: "Gluten free, vegan, etc..." },
    ]
  },
  "quiz": {
    title: "Web Dev Mastery Challenge",
    subtitle: "Test your web development skills with our interactive quiz. See how you rank among developers in India.",
    bgGradient: "from-blue-500 via-cyan-400 to-teal-400",
    headerBg: "from-blue-700 to-blue-900",
    image: hackathonImg,
    headerGradientText: false,
    icon: BookOpen,
    location: "Online - Anywhere in India",
    date: "December 27, 2025",
    time: "6:00 PM - 7:30 PM",
    price: "₹199",
    fields: [
      { label: "Name", type: "text", placeholder: "Your name" },
      { label: "What does 'const' mean?", type: "choice", options: ["Constant", "Constructor", "Container"] },
      { label: "What is a closure?", type: "choice", options: ["A function inside a function", "A loop", "An object property"] },
    ]
  },
  "feedback": {
    title: "Event Feedback Survey",
    subtitle: "Help us improve by sharing your thoughts about the event. Your feedback shapes our future events!",
    bgGradient: "from-rose-400 via-pink-300 to-purple-300",
    headerBg: "from-rose-600 to-pink-700",
    image: musicFestImg,
    headerGradientText: false,
    icon: Heart,
    location: "All Event Venues",
    date: "December 28, 2025",
    time: "Anytime",
    price: "Free",
    fields: [
      { label: "Your Name", type: "text", placeholder: "Optional" },
      { label: "Email", type: "email", placeholder: "your@email.com" },
      { label: "Rate Your Experience", type: "choice", options: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { label: "Comments", type: "textarea", placeholder: "What could we improve?" },
    ]
  },
  "waitlist": {
    title: "Early Access Waitlist",
    subtitle: "Be the first to know when we launch something special. No spam, just updates about our best events.",
    bgGradient: "from-yellow-400 via-orange-300 to-red-300",
    headerBg: "from-yellow-600 to-orange-700",
    image: techConfImg,
    headerGradientText: false,
    icon: Zap,
    location: "India",
    date: "Coming Soon",
    time: "Launching Q1 2026",
    price: "Free",
    fields: [
      { label: "Email Address", type: "email", placeholder: "you@example.com" },
      { label: "Your Website / Portfolio", type: "text", placeholder: "https://yoursite.com" },
      { label: "Interest Level", type: "choice", options: ["Curious", "Very Interested", "Can't Wait!"] },
    ]
  },
  "rsvp": {
    title: "New Year Bash 2026",
    subtitle: "Let us know if you're coming to the coolest New Year event in Mumbai. No cap, it's going to be W!",
    bgGradient: "from-pink-400 via-purple-300 to-indigo-400",
    headerBg: "from-pink-600 to-purple-700",
    image: musicFestImg,
    headerGradientText: false,
    icon: Users,
    location: "Taj Lands End, Mumbai",
    date: "December 31, 2025",
    time: "9:00 PM - 5:00 AM",
    price: "₹5,000 - ₹10,000",
    fields: [
      { label: "Your Name", type: "text", placeholder: "Full name" },
      { label: "Are You Coming?", type: "choice", options: ["Yes, I'm In! 🎉", "Maybe 🤔", "Can't Make It 😢"] },
      { label: "Number of Guests", type: "select", options: ["Just Me", "1 Guest", "2 Guests", "3+ Guests"] },
      { label: "Dietary Notes", type: "textarea", placeholder: "Any allergies or preferences?" },
    ]
  },
  "merch-order": {
    title: "Official Merch Store",
    subtitle: "Get exclusive limited-edition merchandise from your favorite Indian tech community.",
    bgGradient: "from-purple-500 via-pink-400 to-red-400",
    headerBg: "from-purple-700 to-pink-800",
    image: hackathonImg,
    headerGradientText: false,
    icon: Star,
    location: "Ships to All India",
    date: "Year Round",
    time: "Order Anytime",
    price: "₹299 - ₹1,999",
    fields: [
      { label: "Your Name", type: "text", placeholder: "Full name" },
      { label: "Email", type: "email", placeholder: "your@email.com" },
      { label: "T-Shirt Size", type: "select", options: ["XS", "S", "M", "L", "XL", "2XL"] },
      { label: "Color", type: "choice", options: ["Black", "White", "Navy", "Purple"] },
      { label: "Quantity", type: "select", options: ["1", "2", "3", "4", "5+"] },
    ]
  },
};

export default function TemplatePreview() {
  const [location] = useLocation();
  const templateId = new URLSearchParams(location.split("?")[1]).get("template") || "event-registration";
  const config = templateConfigs[templateId];
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedSchedule, setExpandedSchedule] = useState<number | null>(null);
  const Icon = config.icon;

  const eventSchedule = [
    { time: "1:30 PM", title: "Registration Opens", description: "Welcome & check-in" },
    { time: "2:00 PM", title: "Opening Talk", description: "Why AI isn't boring anymore" },
    { time: "2:45 PM", title: "Interactive Session", description: "Q&A with tech experts" },
    { time: "3:30 PM", title: "Networking", description: "Connect with fellow tech enthusiasts" },
  ];

  const galleryImages = [
    techConfImg,
    hackathonImg,
    musicFestImg,
    techConfImg,
  ];

  if (!config) return <div>Template not found</div>;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r ${config.bgGradient} min-h-96 flex items-center justify-center overflow-hidden border-b-4 border-black`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
        <img src={config.image} alt="Event background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/60">
              <Icon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black uppercase mb-4 leading-tight">
            {config.title}
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto">{config.subtitle}</p>
          <button className="btn-neo bg-white text-black font-bold text-lg px-8 py-3 inline-flex items-center gap-2">
            <Share2 className="w-5 h-5" /> Share Event
          </button>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Date & Time</h3>
                <p className="text-lg font-display font-black">{config.date}</p>
                <p className="text-gray-600 font-medium">{config.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Location</h3>
                <p className="text-lg font-display font-black line-clamp-2">{config.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm flex-shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Price</h3>
                <p className="text-lg font-display font-black">{config.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-90`}></div>
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-2xl bg-white rounded-2xl border-2 border-black shadow-hard overflow-hidden">
            
            {/* Header */}
            <div className={`bg-gradient-to-r ${config.headerBg} text-white p-8 md:p-12 text-center relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black uppercase mb-2">
                  {config.title}
                </h1>
                <p className="text-lg text-white/90 font-medium">
                  {config.subtitle}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                {config.fields.map((field: any, idx: number) => (
                  <div key={idx}>
                    <label className="block text-sm font-bold uppercase text-gray-700 mb-2 tracking-wider">
                      {field.label}
                    </label>
                    
                    {field.type === "text" && (
                      <input 
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900"
                      />
                    )}
                    
                    {field.type === "email" && (
                      <input 
                        type="email"
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900"
                      />
                    )}
                    
                    {field.type === "textarea" && (
                      <textarea 
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900 resize-none"
                      ></textarea>
                    )}
                    
                    {field.type === "select" && (
                      <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900 bg-white">
                        <option value="">Select an option</option>
                        {field.options?.map((opt: string) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    )}
                    
                    {field.type === "choice" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {field.options?.map((opt: string) => (
                          <button 
                            key={opt}
                            className="p-3 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/10 transition-all font-bold text-sm text-left"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <button className="btn-neo w-full mt-8 bg-gradient-to-r from-primary to-accent text-black font-bold text-lg py-3">
                Submit <ArrowRight className="ml-2 inline w-5 h-5" />
              </button>

              <p className="text-center text-xs text-gray-400 font-medium mt-6">
                ✨ Built with VibeForm
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Event Schedule Section */}
      <div className="bg-white border-b-2 border-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-12">Event Schedule</h2>
          <div className="space-y-3">
            {eventSchedule.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedSchedule(expandedSchedule === idx ? null : idx)}
                className="w-full bg-white border-2 border-black p-6 text-left hover:shadow-hard-sm hover:translate-y-0.5 transition-all rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-display font-black text-2xl text-primary">{item.time}</span>
                      <div>
                        <h3 className="font-bold text-lg uppercase">{item.title}</h3>
                        {expandedSchedule === idx && (
                          <p className="text-gray-600 font-medium mt-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform ${expandedSchedule === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 border-b-2 border-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-12">Event Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-xl overflow-hidden border-2 border-black shadow-hard-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-bold">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white border-b-2 border-black py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display font-black text-xl uppercase mb-4">About</h3>
              <p className="text-gray-300 font-medium leading-relaxed">
                {config.subtitle}
              </p>
            </div>
            <div>
              <h3 className="font-display font-black text-xl uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-black text-xl uppercase mb-4">Details</h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>📅 {config.date}</li>
                <li>📍 {config.location.split(',')[0]}</li>
                <li>💰 {config.price}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 font-medium text-sm">© 2025 VibeForm Events. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to edit */}
      <div className="bg-white border-b-2 border-black p-4 md:p-8 flex justify-center gap-4 flex-wrap">
        <button className="btn-neo bg-white text-black">
          ← Back to Templates
        </button>
        <button className="btn-neo bg-black text-white">
          Customize This Template
        </button>
      </div>
    </div>
  );
}
