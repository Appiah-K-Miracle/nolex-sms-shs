// This is a server component by default in Next.js App Router

import dynamic from 'next/dynamic';

// Dynamic import with next/dynamic to avoid hydration errors
const ExamDetailsClient = dynamic(() => import('./ExamDetailsClient'));

// Server component that extracts the ID and passes it to the client component
export default function ExamDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const examId = params.id || "1";
  return <ExamDetailsClient examId={examId} />;
}