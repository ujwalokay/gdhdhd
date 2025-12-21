import Navbar from "@/components/layout/Navbar";
import { ArrowRight, BarChart3, Layout, Ticket } from "lucide-react";
import starImage from "@assets/generated_images/3d_neo-brutalist_glossy_star_shape.png";
import grainTexture from "@assets/generated_images/abstract_holographic_grain_texture.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-2 border-black bg-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-accent px-4 py-1 rounded-full border-2 border-black shadow-hard-sm font-bold text-xs uppercase tracking-wider">
              The Google Forms Killer
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] uppercase tracking-tighter">
              Make Forms <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x bg-[length:200%_200%]">That Don't Suck</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg leading-relaxed">
              Build stunning event pages, quizzes, and surveys that Gen Z actually wants to fill out. No code required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/editor">
                <a className="btn-neo text-lg py-6 px-8 bg-primary">
                  Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Link>
              <Link href="/templates">
                <a className="btn-neo text-lg py-6 px-8 bg-white hover:bg-muted">
                  View Templates
                </a>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative w-full flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
               <div className="absolute inset-0 bg-secondary rounded-full blur-[100px] opacity-20 animate-pulse"></div>
               <img 
                src={starImage} 
                alt="3D Star" 
                className="relative z-10 w-full h-full object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Marquee - CSS only marquee for simplicity */}
      <div className="bg-black text-white border-b-2 border-black overflow-hidden py-3 whitespace-nowrap">
        <div className="inline-flex animate-scroll-left gap-8 uppercase font-bold text-xl tracking-widest font-display">
           <span>★ Custom Domains</span>
           <span>★ Ticketing System</span>
           <span>★ Analytics</span>
           <span>★ Aesthetic Templates</span>
           <span>★ Mobile First</span>
           <span>★ Custom Domains</span>
           <span>★ Ticketing System</span>
           <span>★ Analytics</span>
           <span>★ Aesthetic Templates</span>
           <span>★ Mobile First</span>
        </div>
      </div>

      {/* Feature Grid */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase font-display">
          More Than Just A Form
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-neo p-8 bg-accent/20 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-6 shadow-hard-sm">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">WP-Style Builder</h3>
            <p className="text-lg text-muted-foreground font-medium">
              Customize your event page like a mini-website. Add videos, maps, and custom headers. Not just a list of inputs.
            </p>
          </div>

          <div className="card-neo p-8 bg-secondary/20 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-6 shadow-hard-sm">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Sheets</h3>
            <p className="text-lg text-muted-foreground font-medium">
              View responses in a powerful, spreadsheet-like interface. Filter, sort, and export with one click.
            </p>
          </div>

          <div className="card-neo p-8 bg-primary/20 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-6 shadow-hard-sm">
              <Ticket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Built-in Ticketing</h3>
            <p className="text-lg text-muted-foreground font-medium">
              Hosting an event? Generate QR code tickets automatically and track check-ins in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}