import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import starImage from "@assets/generated_images/3d_neo-brutalist_glossy_star_shape.png";
import grainTexture from "@assets/generated_images/abstract_holographic_grain_texture.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-10"></div>

        <div className="relative z-10 w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Branding */}
            <div className="flex flex-col items-center lg:items-start gap-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-display font-black uppercase leading-[0.9] mb-4">
                  Welcome <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                    Back
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground font-medium max-w-sm">
                  Sign in to manage your events and connect with your audience.
                </p>
              </div>

              <div className="relative w-full max-w-sm h-64 hidden lg:block">
                <div className="absolute inset-0 bg-secondary rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                <img 
                  src={starImage}
                  alt="Decoration"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              <div className="space-y-4 pt-8 border-t-2 border-black">
                <p className="text-sm text-gray-600 font-medium">Don't have an account?</p>
                <Link href="/signup">
                  <button className="btn-neo bg-white text-black font-bold px-8 py-3 gap-2 w-full lg:w-auto">
                    Create Account <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="card-neo p-8 md:p-12">
              <h2 className="text-3xl font-display font-black uppercase mb-8">Sign In</h2>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block font-bold text-sm uppercase text-gray-700 mb-2 tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block font-bold text-sm uppercase text-gray-700 mb-2 tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:ring-0 outline-none font-medium text-gray-900 placeholder:text-gray-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-2 border-black rounded" />
                    <span className="font-medium">Remember me</span>
                  </label>
                  <a href="#" className="font-bold text-primary hover:opacity-80">
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="btn-neo w-full bg-gradient-to-r from-primary to-accent text-black font-bold text-lg py-3 disabled:opacity-50"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-600">or</span>
                  </div>
                </div>

                {/* Social Login */}
                <button type="button" className="w-full border-2 border-gray-300 rounded-lg py-3 font-bold hover:bg-gray-50 transition-colors">
                  Continue with Google
                </button>
              </form>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center mt-8">
                By signing in, you agree to our <a href="#" className="underline hover:text-primary">Terms of Service</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
