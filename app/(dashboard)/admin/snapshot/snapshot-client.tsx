"use client";

import { useState } from "react";
import { updateSnapshotSetting } from "@/app/actions/snapshot";
import { toast } from "sonner";

export default function SnapshotAdminClient({ initialSettings }: { initialSettings: any[] }) {
  const [settings, setSettings] = useState(initialSettings);
  const [loading, setLoading] = useState<string | null>(null);

  const handleToggle = async (key: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    setLoading(key);
    
    const res = await updateSnapshotSetting(key, newStatus);
    
    if (res.error) {
      toast.error(`Failed to update ${key}: ${res.error}`);
    } else {
      setSettings(prev => prev.map(s => s.metric_key === key ? { ...s, status: newStatus } : s));
      toast.success(`${key} is now ${newStatus}`);
    }
    setLoading(null);
  };

  const statusColor = (status: string) => {
    switch(status) {
      case 'published': return 'bg-green-100 text-green-800 border-green-200';
      case 'archived': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b text-sm font-medium text-gray-500">
            <th className="p-4">Metric Key</th>
            <th className="p-4">Current Status</th>
            <th className="p-4">Last Updated</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {settings.map(setting => (
            <tr key={setting.metric_key} className="border-b last:border-0 hover:bg-gray-50/50">
              <td className="p-4 font-medium font-mono text-sm">{setting.metric_key}</td>
              <td className="p-4">
                <span className={`px-2.5 py-1 text-xs rounded-full border ${statusColor(setting.status)}`}>
                  {setting.status.toUpperCase()}
                </span>
              </td>
              <td className="p-4 text-sm text-gray-500">
                {new Date(setting.updated_at).toLocaleString()}
              </td>
              <td className="p-4 text-right">
                <button
                  onClick={() => handleToggle(setting.metric_key, setting.status)}
                  disabled={loading === setting.metric_key}
                  className="btn btn-outline btn-sm"
                >
                  {loading === setting.metric_key ? "Updating..." : (setting.status === "published" ? "Unpublish" : "Publish")}
                </button>
              </td>
            </tr>
          ))}
          {settings.length === 0 && (
            <tr>
              <td colSpan={4} className="p-8 text-center text-gray-500">
                No metrics found. Please run the database migration.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
