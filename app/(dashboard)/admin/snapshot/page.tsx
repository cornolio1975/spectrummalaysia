import { getSnapshotSettings } from "@/app/actions/snapshot";
import SnapshotAdminClient from "./snapshot-client";

export const metadata = {
  title: "Public Snapshot Management",
};

export default async function SnapshotAdminPage() {
  const { data, error } = await getSnapshotSettings();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Public Snapshot Management</h1>
          <p className="text-gray-500 text-sm mt-1">Control which metrics are published to the public landing page API.</p>
        </div>
      </div>
      
      {error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">Error loading settings: {error}</div>
      ) : (
        <SnapshotAdminClient initialSettings={data || []} />
      )}
    </div>
  );
}
