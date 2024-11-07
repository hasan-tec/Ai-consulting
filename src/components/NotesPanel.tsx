import React, { useState } from 'react';
import { Save, Download, Trash2, MessageSquare } from 'lucide-react';

interface Note {
  id: string;
  content: string;
  timestamp: Date;
}

export default function NotesPanel() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState('');

  const saveNote = () => {
    if (!currentNote.trim()) return;
    
    const newNote = {
      id: Date.now().toString(),
      content: currentNote,
      timestamp: new Date(),
    };
    
    setNotes([...notes, newNote]);
    setCurrentNote('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const downloadNotes = () => {
    const content = notes
      .map(note => `[${note.timestamp.toLocaleString()}]\n${note.content}\n\n`)
      .join('');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-accelerator-notes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Session Notes</h2>
        </div>
        {notes.length > 0 && (
          <button
            onClick={downloadNotes}
            className="text-blue-400 hover:text-blue-300 transition-colors"
            title="Download Notes"
          >
            <Download size={20} />
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            placeholder="Take notes during your session..."
            className="w-full h-32 bg-white/5 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
          <button
            onClick={saveNote}
            disabled={!currentNote.trim()}
            className="absolute bottom-3 right-3 text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
            title="Save Note"
          >
            <Save size={20} />
          </button>
        </div>

        <div className="space-y-3 max-h-[calc(100vh-24rem)] overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white/5 rounded-lg p-3 relative group"
            >
              <p className="text-sm text-gray-400 mb-1">
                {note.timestamp.toLocaleString()}
              </p>
              <p className="text-white whitespace-pre-wrap">{note.content}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-3 right-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                title="Delete Note"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}