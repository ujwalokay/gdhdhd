import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Plus, Trash2, Copy } from "lucide-react";
import { Link } from "wouter";

const fieldTypes = [
  { icon: "📝", label: "Text", type: "text" },
  { icon: "🔘", label: "Options", type: "options" },
  { icon: "👤", label: "Social Profile", type: "social" },
  { icon: "🏢", label: "Company", type: "company" },
  { icon: "☑️", label: "Checkbox", type: "checkbox" },
  { icon: "⚖️", label: "Terms", type: "terms" },
  { icon: "📱", label: "Phone", type: "phone" },
  { icon: "🌐", label: "Website", type: "website" },
];

export default function EventSettings() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, label: "Full Name", type: "text", required: true },
    { id: 2, label: "Email", type: "email", required: true },
    { id: 3, label: "Company Name", type: "text", required: false },
  ]);

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Math.random(),
      label: `New ${type} question`,
      type: type,
      required: false
    };
    setQuestions([...questions, newQuestion]);
    setShowAddModal(false);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <Link href="/event/1" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:opacity-70">
            <ArrowLeft className="w-5 h-5" /> Back to Event
          </Link>
          <h1 className="text-5xl md:text-6xl font-display font-black uppercase mb-2">
            Registration Settings
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Customize what information you collect from guests
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2">
            {/* Registration Email Section */}
            <div className="card-neo p-8 mb-8">
              <h2 className="text-2xl font-display font-bold mb-4">Registration Email</h2>
              <p className="text-gray-600 mb-4">
                Upon registration, we will send a confirmation email. You can add a custom message to welcome your guests.
              </p>
              <button className="btn-neo bg-white border-2 border-black px-6">
                Customize Email
              </button>
            </div>

            {/* Questions Section */}
            <div className="card-neo p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold">Registration Questions</h2>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="btn-neo bg-primary text-black font-bold px-4 gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Question
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                We will ask guests these questions when they register.
              </p>

              {/* Questions List */}
              <div className="space-y-3">
                {questions.map((question) => (
                  <div 
                    key={question.id}
                    className="p-4 border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="font-bold">{question.label}</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">
                        {question.type} • {question.required ? "Required" : "Optional"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                        <Copy className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={() => removeQuestion(question.id)}
                        className="p-2 hover:bg-red-100 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Modal */}
              {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl border-2 border-black shadow-hard max-w-lg w-full p-8">
                    <h3 className="text-2xl font-display font-bold mb-6">Add Question</h3>
                    <p className="text-gray-600 mb-6">Ask guests custom questions when they register.</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {fieldTypes.map((field) => (
                        <button
                          key={field.type}
                          onClick={() => addQuestion(field.type)}
                          className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-center"
                        >
                          <div className="text-2xl mb-2">{field.icon}</div>
                          <p className="font-bold text-sm">{field.label}</p>
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => setShowAddModal(false)}
                      className="w-full border-2 border-black rounded-lg py-2 font-bold hover:bg-black/5 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="card-neo p-6 sticky top-20">
              <h3 className="font-display font-bold text-lg mb-4">Quick Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-bold text-sm uppercase mb-2">Approval Required</label>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 border-2 border-black rounded" defaultChecked />
                    <span className="ml-2 text-sm">Manual approval</span>
                  </div>
                </div>

                <div className="border-t-2 border-black pt-4">
                  <label className="block font-bold text-sm uppercase mb-2">Max Capacity</label>
                  <input 
                    type="number" 
                    defaultValue="100"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg"
                  />
                </div>

                <div className="border-t-2 border-black pt-4">
                  <label className="block font-bold text-sm uppercase mb-2">Allow Guests</label>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 border-2 border-black rounded" />
                    <span className="ml-2 text-sm">Allow plus ones</span>
                  </div>
                </div>

                <button className="w-full btn-neo bg-black text-white mt-4 font-bold">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
