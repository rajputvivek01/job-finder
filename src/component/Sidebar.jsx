import { Home, Briefcase, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col p-6 shadow-xl rounded-r-2xl">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">JobFinder</h2>
      <nav className="space-y-6 text-lg">
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300 transition-all duration-200">
          <Home size={24} /> <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300 transition-all duration-200">
          <Briefcase size={24} /> <span>Jobs</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-300 transition-all duration-200">
          <Settings size={24} /> <span>Settings</span>
        </a>
        
      </nav>
    </aside>
  );
}
