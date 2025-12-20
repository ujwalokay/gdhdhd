import Navbar from "@/components/layout/Navbar";
import { Link } from "wouter";
import { Sparkles, Music, Heart, BookOpen, Zap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  {
    id: "event-registration",
    name: "Event Registration",
    description: "Perfect for conferences, parties, and gatherings.",
    icon: Music,
    color: "from-primary to-accent",
    fields: ["Full Name", "Email", "Ticket Type", "Dietary Restrictions"]
  },
  {
    id: "quiz",
    name: "Knowledge Quiz",
    description: "Interactive quiz with scoring and instant feedback.",
    icon: BookOpen,
    color: "from-secondary to-primary",
    fields: ["Question 1", "Question 2", "Question 3", "Results"]
  },
  {
    id: "feedback",
    name: "Feedback Form",
    description: "Collect feedback from your customers or attendees.",
    icon: Heart,
    color: "from-accent to-secondary",
    fields: ["Name", "Email", "Rating", "Comments"]
  },
  {
    id: "waitlist",
    name: "Waitlist Signup",
    description: "Build hype and collect early interest.",
    icon: Zap,
    color: "from-yellow-400 to-primary",
    fields: ["Email", "Website URL", "Interest Level"]
  },
  {
    id: "rsvp",
    name: "RSVP Form",
    description: "Manage party RSVPs with style.",
    icon: Users,
    color: "from-pink-400 to-secondary",
    fields: ["Name", "Guest Count", "Dietary Notes", "Plus One"]
  },
  {
    id: "merch-order",
    name: "Merch Order",
    description: "Sell and track merchandise orders.",
    icon: Sparkles,
    color: "from-purple-400 to-accent",
    fields: ["Size", "Color", "Quantity", "Shipping Address"]
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="border-b-2 border-black bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-black uppercase mb-4 leading-tight">
              Pick a Vibe
            </h1>
            <p className="text-xl font-medium text-muted-foreground">
              Start with a template and customize it to match your aesthetic. All templates are fully editable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, idx) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/template-preview?template=${template.id}`}>
                  <div className="group block cursor-pointer">
                    <div className="card-neo p-8 h-full hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden">
                      {/* Background gradient accent */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${template.color} transition-opacity pointer-events-none`}></div>
                      
                      <div className={`inline-flex w-12 h-12 rounded-lg border-2 border-black bg-gradient-to-br ${template.color} items-center justify-center mb-6 shadow-hard-sm group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all`}>
                        <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {template.name}
                      </h3>
                      
                      <p className="text-muted-foreground font-medium mb-6">
                        {template.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">Includes:</div>
                        <div className="flex flex-wrap gap-2">
                          {template.fields.map((field) => (
                            <span key={field} className="text-xs bg-gray-100 border border-gray-300 rounded-full px-2.5 py-1 font-medium">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-sm font-bold text-primary gap-2 group-hover:gap-4 transition-all">
                        Use Template
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white border-t-2 border-black py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl font-medium mb-8 text-gray-300 max-w-2xl mx-auto">
            Start from scratch and design your own form. All our templates are just starting points.
          </p>
          <Link href="/editor">
            <button className="btn-neo bg-primary text-lg px-8 py-3">
              Create Blank Form
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}