import { useState, useEffect } from 'react';

const OKRForm = ({ onAdd, editingOKR, isEditing }) => {
  const [objective, setObjective] = useState('');
  const [keyResults, setKeyResults] = useState([{ title: '', progress: 0 }]);
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (isEditing && editingOKR) {
      setObjective(editingOKR.objective);
      setKeyResults(editingOKR.keyResults);
      setDueDate(editingOKR.dueDate || '');
    }
  }, [isEditing, editingOKR]);

  const handleKRChange = (index, field, value) => {
    const updatedKRs = [...keyResults];
    updatedKRs[index][field] = value;
    setKeyResults(updatedKRs);
  };

  const addKeyResultField = () => {
    setKeyResults([...keyResults, { title: '', progress: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!objective.trim()) return;

    const newOKR = {
      id: isEditing && editingOKR ? editingOKR.id : Date.now(),
      objective,
      keyResults: keyResults.map((kr, i) => ({ ...kr, id: i + 1 })),
      dueDate,
    };

    onAdd(newOKR);

    setObjective('');
    setKeyResults([{ title: '', progress: 0 }]);
    setDueDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 mb-6 rounded shadow space-y-4"
    >
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit OKR' : 'Create New OKR'}
      </h3>

      <input
        type="text"
        placeholder="Objective"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <div className="space-y-2">
        {keyResults.map((kr, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              placeholder="Key Result"
              value={kr.title}
              onChange={(e) =>
                handleKRChange(index, 'title', e.target.value)
              }
              className="flex-1 p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="%"
              value={kr.progress}
              onChange={(e) =>
                handleKRChange(index, 'progress', parseInt(e.target.value))
              }
              className="w-20 p-2 border rounded"
              min="0"
              max="100"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addKeyResultField}
          className="text-blue-600 text-sm hover:underline"
        >
          + Add Key Result
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isEditing ? 'Update OKR' : 'Add OKR'}
      </button>
    </form>
  );
};

export default OKRForm;
