import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Palette, 
  Settings, 
  Eye, 
  Share2, 
  Plus, 
  Image as ImageIcon,
  Type,
  CheckSquare,
  AlignLeft,
  Trash2,
  GripVertical,
  Heading2,
  Minus
} from "lucide-react";
import { Link } from "wouter";
import { motion, Reorder } from "framer-motion";

export default function Editor() {
  const [fields, setFields] = useState([
    { id: "1", type: "section", label: "Personal Information", placeholder: "" },
    { id: "2", type: "text", label: "Full Name", placeholder: "e.g. Jane Doe" },
    { id: "3", type: "email", label: "Email Address", placeholder: "jane@example.com" },
    { id: "4", type: "section", label: "Event Preferences", placeholder: "" },
    { id: "5", type: "checkbox", label: "I agree to receive updates", placeholder: "" },
  ]);

  const [activeTab, setActiveTab] = useState("build");

  const addField = (type: string) => {
    setFields([...fields, { 
      id: Math.random().toString(36).substr(2, 9), 
      type, 
      label: type === "header" ? "New Section" : "New Question", 
      placeholder: "Type something..." 
    }]);
  };

  return (
    <div className="min-h-screen bg-muted/30 font-sans flex flex-col">
      <nav className="h-16 bg-white border-b-2 border-black flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/">
             <a className="font-display font-bold text-xl">←</a>
          </Link>
          <div className="h-8 w-[1px] bg-gray-300"></div>
          <input 
            type="text" 
            defaultValue="Untitled Event Form" 
            className="font-display font-bold text-lg bg-transparent border-none focus:outline-none hover:bg-gray-50 px-2 rounded"
          />
        </div>

        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
          {["build", "design", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-sm font-bold uppercase transition-all ${
                activeTab === tab 
                  ? "bg-white shadow-sm border border-gray-200 text-black" 
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Link href="/view/preview">
            <a className="btn-neo bg-white h-10 px-4 text-xs">
              <Eye className="w-4 h-4 mr-2" /> Preview
            </a>
          </Link>
          <button className="btn-neo h-10 px-4 text-xs">
            <Share2 className="w-4 h-4 mr-2" /> Publish
          </button>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r-2 border-black p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="font-bold text-xs uppercase text-gray-400 tracking-wider">Add Elements</div>
          
          <div className="grid grid-cols-2 gap-3">
             <button onClick={() => addField("section")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-primary/10 transition-colors">
                <Heading2 className="w-5 h-5" />
                <span className="text-xs font-bold">Section</span>
             </button>
             <button onClick={() => addField("text")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-accent/10 transition-colors">
                <Type className="w-5 h-5" />
                <span className="text-xs font-bold">Text</span>
             </button>
             <button onClick={() => addField("textarea")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-accent/10 transition-colors">
                <AlignLeft className="w-5 h-5" />
                <span className="text-xs font-bold">Long Text</span>
             </button>
             <button onClick={() => addField("checkbox")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-accent/10 transition-colors">
                <CheckSquare className="w-5 h-5" />
                <span className="text-xs font-bold">Checkbox</span>
             </button>
             <button onClick={() => addField("divider")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-secondary/10 transition-colors">
                <Minus className="w-5 h-5" />
                <span className="text-xs font-bold">Divider</span>
             </button>
             <button onClick={() => addField("image")} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-black hover:bg-accent/10 transition-colors">
                <ImageIcon className="w-5 h-5" />
                <span className="text-xs font-bold">Image</span>
             </button>
          </div>

          <div className="mt-8 font-bold text-xs uppercase text-gray-400 tracking-wider">Integrations</div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-500">
             Connect ticketing, payments, or notion here.
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 bg-muted/20 p-8 overflow-y-auto flex justify-center">
          <div className="w-full max-w-2xl bg-white min-h-[800px] border-2 border-black shadow-hard rounded-xl p-8 md:p-12 relative">
             {/* Mock WordPress-like header */}
             <div className="mb-8 group relative border-2 border-transparent hover:border-dashed hover:border-blue-300 rounded p-2 -m-2">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                  Header Image Area
                </div>
                <h1 className="text-4xl font-display font-bold mb-2 outline-none" contentEditable>
                  End of Year Bash 2025
                </h1>
                <p className="text-lg text-muted-foreground outline-none" contentEditable>
                  Join us for music, vibes, and code.
                </p>
             </div>

             <div className="space-y-6">
                <Reorder.Group axis="y" values={fields} onReorder={setFields} className="space-y-4">
                  {fields.map((field) => (
                    <Reorder.Item key={field.id} value={field}>
                      <div className={`group relative ${field.type === 'section' ? 'bg-gray-50 border-l-4 border-primary' : 'bg-white border border-gray-200'} hover:border-black hover:shadow-hard-sm transition-all rounded-lg p-6 pr-12`}>
                         <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 flex flex-col gap-2 transition-opacity">
                            <button className="p-1 hover:bg-red-50 hover:text-red-500 rounded"><Trash2 className="w-4 h-4" /></button>
                            <button className="p-1 cursor-grab active:cursor-grabbing"><GripVertical className="w-4 h-4 text-gray-400" /></button>
                         </div>
                         
                         {field.type === 'section' && (
                           <>
                             <input 
                               className="font-display font-bold text-2xl mb-1 w-full outline-none text-primary bg-transparent" 
                               defaultValue={field.label}
                               placeholder="Section Title"
                             />
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Section Break</p>
                           </>
                         )}
                         
                         {field.type === 'divider' && (
                           <div className="h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-full"></div>
                         )}
                         
                         {field.type !== 'section' && field.type !== 'divider' && (
                           <>
                             <input 
                               className="font-bold text-lg mb-2 w-full outline-none focus:border-b-2 focus:border-primary" 
                               defaultValue={field.label}
                               placeholder="Field Label"
                             />
                             
                             {field.type === 'text' && (
                               <input disabled className="input-neo bg-gray-50" placeholder={field.placeholder} />
                             )}
                             {field.type === 'textarea' && (
                               <textarea disabled className="input-neo bg-gray-50 h-24 resize-none" placeholder={field.placeholder} />
                             )}
                             {field.type === 'checkbox' && (
                               <div className="flex items-center gap-2">
                                 <div className="w-5 h-5 border-2 border-black rounded bg-gray-50"></div>
                                 <span className="text-gray-400">Option 1</span>
                               </div>
                             )}
                           </>
                         )}
                      </div>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>

                <button onClick={() => addField("text")} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-bold uppercase text-sm">
                  <Plus className="w-5 h-5" /> Add Block
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}