import DashboardLayout from '../components/DashboardLayout';
import OKRList from '../features/okrs/OKRList';

export default function OKRs() {
  return (
    <DashboardLayout title="OKRs">
      <OKRList />
    </DashboardLayout>
  );
}
