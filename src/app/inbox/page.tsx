import { redirect } from 'next/navigation';
import { conversations } from './[id]/page';

export default function InboxPage() {
  // If there are conversations, redirect to the first one
  if (conversations.length > 0) {
    redirect(`/inbox/${conversations[0].id}`);
  }

  // If there are no conversations, show a simple message
  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Messages</h2>
        <p className="text-gray-600">You don't have any messages yet.</p>
      </div>
    </div>
  );
} 