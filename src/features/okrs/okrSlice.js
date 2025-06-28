// src/features/okrs/okrSlice.js

export const initialOKRs = [
  {
    id: 1,
    type: 'company',
    objective: 'Increase revenue by 20%',
    keyResults: [{ id: 1, title: 'Launch new pricing', progress: 0 }],
    dueDate: '2025-09-30',
  },
  {
    id: 2,
    type: 'team',
    teamId: 'team-123',
    objective: 'Improve onboarding speed',
    keyResults: [{ id: 1, title: 'Automate setup', progress: 0 }],
    dueDate: '2025-08-15',
  },
  {
    id: 3,
    type: 'personal',
    assignedTo: 'user-456',
    objective: 'Complete certification',
    keyResults: [{ id: 1, title: 'Finish modules', progress: 0 }],
    dueDate: '2025-07-01',
  },
];
