export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Minute-Mind
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your intelligent meeting companion for better collaboration and productivity.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Schedule Meetings
            </h2>
            <p className="text-gray-600">
              Easily schedule and manage your team meetings with smart scheduling.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Take Notes
            </h2>
            <p className="text-gray-600">
              Capture meeting notes in real-time with AI-powered assistance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              AI Summaries
            </h2>
            <p className="text-gray-600">
              Get intelligent meeting summaries and action items automatically.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Team Collaboration
            </h2>
            <p className="text-gray-600">
              Work together seamlessly with shared notes and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
