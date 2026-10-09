"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle2,
  Filter,
  Star,
  Archive,
  Trash2,
  Reply,
  Info
} from "lucide-react";

export default function AdminInboxPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMsgId, setSelectedMsgId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch('/api/admin/messages');
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
          if (data.length > 0) {
            setSelectedMsgId(data[0].id);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMessages();
  }, []);

  const selectedMsg = messages.find(m => m.id === selectedMsgId);

  return (
    <div className="max-w-[1400px] mx-auto h-[calc(100vh-140px)] flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Contact Submissions</h1>
          <p className="text-slate-400 mt-1">Review and manage form submissions from your website.</p>
        </div>
      </div>

      {/* Inbox Container */}
      <div className="flex-1 bg-[#0A1628] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Sidebar (List) */}
        <div className="w-full md:w-[350px] lg:w-[400px] border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-[#050A14]/50">
          <div className="p-4 border-b border-white/5 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-[#050A14] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inbox ({messages.filter(m => m.status === 'UNREAD').length} unread)</span>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
               <div className="p-8 text-center text-slate-500">Loading messages...</div>
            ) : messages.map((msg) => (
              <div 
                key={msg.id}
                onClick={() => setSelectedMsgId(msg.id)}
                className={`p-4 border-b border-white/5 cursor-pointer transition-colors relative ${selectedMsgId === msg.id ? 'bg-[#00C2FF]/5 border-l-2 border-l-[#00C2FF]' : 'hover:bg-white/[0.02] border-l-2 border-l-transparent'}`}
              >
                {msg.status === 'UNREAD' && (
                  <div className="absolute top-4 left-3 w-2 h-2 rounded-full bg-[#00C2FF]" />
                )}
                <div className={`pl-4 flex justify-between items-start mb-1`}>
                  <h3 className={`font-medium ${msg.status === 'UNREAD' ? 'text-white' : 'text-slate-300'} truncate pr-2`}>
                    {msg.name}
                  </h3>
                  <span className="text-xs text-slate-500 shrink-0 mt-0.5">{new Date(msg.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="pl-4">
                  <h4 className={`text-sm mb-1 truncate ${msg.status === 'UNREAD' ? 'text-slate-200' : 'text-slate-400'}`}>
                    {msg.subject || 'No Subject'}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Details) */}
        <div className="flex-1 flex flex-col bg-[#0A1628]">
          {selectedMsg ? (
            <>
              {/* Message Toolbar */}
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Archive">
                    <Archive className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" title="Delete">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-colors" title="Star">
                    <Star className={`w-5 h-5 ${selectedMsg.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Message Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{selectedMsg.subject || 'No Subject'}</h2>
                  <span className="text-sm text-slate-400 shrink-0">{new Date(selectedMsg.createdAt).toLocaleString()}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg border border-blue-500/20">
                    {selectedMsg.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">{selectedMsg.name}</div>
                    <div className="text-sm text-slate-400 flex items-center gap-2">
                      <span>{selectedMsg.email}</span>
                      {selectedMsg.company && (
                        <>
                          <span className="w-1 h-1 bg-slate-600 rounded-full" />
                          <span>{selectedMsg.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Body */}
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {selectedMsg.message}
                  </p>
                </div>
                
                {/* Meta Data Box */}
                <div className="mt-12 bg-[#050A14] border border-white/5 rounded-xl p-4 flex gap-4">
                  <Info className="w-5 h-5 text-[#00C2FF] shrink-0" />
                  <div className="text-sm text-slate-400">
                    <p className="mb-1"><strong className="text-slate-300">Submitted Via:</strong> Contact Us Form</p>
                    <p className="mb-1"><strong className="text-slate-300">Status:</strong> {selectedMsg.status}</p>
                    <p><strong className="text-slate-300">Consent:</strong> Agreed to privacy policy.</p>
                  </div>
                </div>
              </div>

              {/* Reply Box */}
              <div className="p-6 border-t border-white/5 bg-[#050A14]/50">
                <div className="flex items-center gap-4">
                  <a href={`mailto:${selectedMsg.email}`} className="flex items-center gap-2 px-6 py-2.5 bg-[#0A1628] border border-white/10 hover:bg-white/5 rounded-xl text-white font-medium transition-colors">
                    <Reply className="w-4 h-4" /> Reply via Email
                  </a>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
                    <CheckCircle2 className="w-4 h-4" /> Mark as Read
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-10 h-10 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">No Message Selected</h2>
              <p className="text-slate-400 max-w-sm">Select a contact submission from the list on the left to view its full details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
