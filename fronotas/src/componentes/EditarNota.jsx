// NoteEditor.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const NoteEditor = () => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    // Lógica para guardar la nota
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="5"
        placeholder="Escribe tu nota aquí..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Guardar
      </button>
    </div>
  );
};

export default NoteEditor;