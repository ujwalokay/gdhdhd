import { Link } from "wouter";
import { Star } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 font-display text-2xl font-bold uppercase hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 bg-primary border-2 border-black flex items-center justify-center rounded-md shadow-hard-sm">
              <Star className="w-5 h-5 fill-current" />
            </div>
            VibeForm
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase">
          <Link href="/templates">
            <div className="hover:text-primary transition-colors cursor-pointer">Templates</div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <div className="font-bold text-sm uppercase hidden sm:block hover:underline cursor-pointer">Login</div>
          </Link>
          <Link href="/editor">
            <button className="btn-neo bg-secondary text-black">
              Create Form
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}