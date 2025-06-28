import { useState } from 'react';
import { initialOKRs } from './okrSlice';
import OKRForm from './OKRForm';
import TypeLabel from '../../components/TypeLabel';
import { useAuth } from '../../hooks/useAuth';

const OKRList = () => {
  const { user } = useAuth();
  const [okrs, setOkrs] = useState(initialOKRs);
  const [filter, setFilter] = useState('company');
  const [editingOKR, setEditingOKR] = useState(null);

  const visibleTypesByRole = {
    admin: ['company', 'team', 'personal'],
    manager: ['company', 'team'],
    employee: ['team', 'personal'],
  };

  const visibleTypes = visibleTypesByRole[user?.role || 'employee'];
  const filteredOKRs = okrs.filter(
    (okr) => visibleTypes.includes(okr.type) && okr.type === filter
  );

  const handleAdd = (newOKR) => {
    setOkrs([newOKR, ...okrs]);
  };

  const handleDelete = (id) => {
    setOkrs(okrs.filter((okr) => okr.id !== id));
  };

  const handleEdit = (okr) => {
    setEditingOKR(okr);
  };

  const handleUpdate = (updatedOKR) => {
    setOkrs(
      okrs.map((okr) =>
        okr.id === updatedOKR.id ? { ...updatedOKR, type: okr.type } : okr
      )
    );
    setEditingOKR(null);
  };

  return (
    <div>
      {/* OKR Type Tabs */}
      <div className="flex space-x-4 mb-4">
        {visibleTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              setEditingOKR(null);
            }}
            className={`px-4 py-2 rounded ${
              filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} OKRs
          </button>
        ))}
      </div>

      {/* OKR Form */}
      <OKRForm
        onAdd={editingOKR ? handleUpdate : (okr) => handleAdd({ ...okr, type: filter })}
        editingOKR={editingOKR}
        isEditing={!!editingOKR}
      />

      <h2 className="text-xl font-bold mb-4">
        {filter.charAt(0).toUpperCase() + filter.slice(1)} OKRs
      </h2>

      {/* OKR List */}
      <ul className="space-y-4">
        {filteredOKRs.map((okr) => (
          <li key={okr.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-base text-gray-800">
                {okr.objective}
              </h3>
              <TypeLabel type={okr.type} />
            </div>

            <ul className="ml-4 mt-2 list-disc">
              {okr.keyResults.map((kr) => (
                <li key={kr.id}>
                  {kr.title} –{' '}
                  <span className="text-green-600">{kr.progress}%</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 space-x-2">
              <button
                onClick={() => handleEdit(okr)}
                className="text-sm text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(okr.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OKRList;
