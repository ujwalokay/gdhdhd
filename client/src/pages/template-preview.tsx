import { useLocation } from "wouter";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Star, Music, Users, Heart, Zap, BookOpen, ChevronDown, MapPin, Clock, DollarSign, Share2, Calendar } from "lucide-react";
import { useState } from "react";
import grainTexture from "@assets/generated_images/abstract_holographic_grain_texture.png";
import heroImage from "@assets/generated_images/3d_neo-brutalist_glossy_star_shape.png";

const templateConfigs: Record<string, any> = {
  "event-registration": {
    title: "End of Year Bash 2025",
    subtitle: "Join us for an unforgettable night of music, vibes, and code.",
    bgGradient: "from-secondary via-pink-400 to-accent",
    headerBg: "from-black to-gray-900",
    headerGradientText: true,
    icon: Music,
    fields: [
      { label: "Full Name", type: "text", placeholder: "Jane Doe" },
      { label: "Email Address", type: "email", placeholder: "jane@example.com" },
      { label: "Ticket Type", type: "select", options: ["General Admission", "VIP", "Student"] },
      { label: "Dietary Restrictions", type: "text", placeholder: "Gluten free, vegan, etc..." },
    ]
  },
  "quiz": {
    title: "JavaScript Mastery Quiz",
    subtitle: "Test your JavaScript knowledge and see how you rank.",
    bgGradient: "from-blue-400 via-blue-300 to-cyan-300",
    headerBg: "from-blue-600 to-blue-800",
    headerGradientText: false,
    icon: BookOpen,
    fields: [
      { label: "Name", type: "text", placeholder: "Your name" },
      { label: "What does 'const' mean?", type: "choice", options: ["Constant", "Constructor", "Container"] },
      { label: "What is a closure?", type: "choice", options: ["A function inside a function", "A loop", "An object property"] },
    ]
  },
  "feedback": {
    title: "Your Feedback Matters",
    subtitle: "Help us improve by sharing your thoughts about today's event.",
    bgGradient: "from-red-300 via-pink-300 to-purple-300",
    headerBg: "from-red-500 to-pink-600",
    headerGradientText: false,
    icon: Heart,
    fields: [
      { label: "Your Name", type: "text", placeholder: "Optional" },
      { label: "Email", type: "email", placeholder: "your@email.com" },
      { label: "Rate Your Experience", type: "choice", options: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { label: "Comments", type: "textarea", placeholder: "What could we improve?" },
    ]
  },
  "waitlist": {
    title: "Join Our Waitlist",
    subtitle: "Be the first to know when we launch. No spam, just updates.",
    bgGradient: "from-yellow-300 via-orange-300 to-red-300",
    headerBg: "from-yellow-500 to-orange-600",
    headerGradientText: false,
    icon: Zap,
    fields: [
      { label: "Email Address", type: "email", placeholder: "you@example.com" },
      { label: "Your Website / Portfolio", type: "text", placeholder: "https://yoursite.com" },
      { label: "Interest Level", type: "choice", options: ["Curious", "Very Interested", "Can't Wait!"] },
    ]
  },
  "rsvp": {
    title: "RSVP to Our Party",
    subtitle: "Let us know if you're coming to the coolest event this season.",
    bgGradient: "from-pink-300 via-purple-300 to-indigo-300",
    headerBg: "from-pink-500 to-purple-600",
    headerGradientText: false,
    icon: Users,
    fields: [
      { label: "Your Name", type: "text", placeholder: "Full name" },
      { label: "Are You Coming?", type: "choice", options: ["Yes, I'm In! 🎉", "Maybe 🤔", "Can't Make It 😢"] },
      { label: "Number of Guests", type: "select", options: ["Just Me", "1 Guest", "2 Guests", "3+ Guests"] },
      { label: "Dietary Notes", type: "textarea", placeholder: "Any allergies or preferences?" },
    ]
  },
  "merch-order": {
    title: "Get Our Merch",
    subtitle: "Order exclusive limited-edition merchandise.",
    bgGradient: "from-purple-400 via-pink-400 to-red-400",
    headerBg: "from-purple-600 to-pink-700",
    headerGradientText: false,
    icon: Star,
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
    { time: "6:00 PM", title: "Doors Open", description: "Welcome drinks & appetizers" },
    { time: "7:00 PM", title: "Opening Remarks", description: "Host introduction" },
    { time: "8:00 PM", title: "Live Performance", description: "Special musical guest" },
    { time: "9:30 PM", title: "Networking", description: "Mingle and connect" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1501281668479-f6270e1e2353?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=400&h=300&fit=crop",
  ];

  if (!config) return <div>Template not found</div>;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r ${config.bgGradient} min-h-96 flex items-center justify-center overflow-hidden border-b-4 border-black`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <img src={heroImage} alt="Event" className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-6xl font-display font-black uppercase mb-4">
            {config.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">{config.subtitle}</p>
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
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Date</h3>
                <p className="text-2xl font-display font-black">Dec 31, 2025</p>
                <p className="text-gray-600 font-medium">8:00 PM - 12:00 AM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Location</h3>
                <p className="text-2xl font-display font-black">Golden Hall</p>
                <p className="text-gray-600 font-medium">123 Event Street, NYC</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg border-2 border-black flex items-center justify-center shadow-hard-sm flex-shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-500 mb-1">Price</h3>
                <p className="text-2xl font-display font-black">$25 - $75</p>
                <p className="text-gray-600 font-medium">General to VIP</p>
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
                Join us for an unforgettable experience. Limited spots available—secure yours today!
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
              <h3 className="font-display font-black text-xl uppercase mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>📧 hello@event.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 123 Event St, NYC</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 font-medium text-sm">© 2025 Event Organizers. All rights reserved.</p>
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