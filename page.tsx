import Image from "next/image";
import AIAssistant from "./components/AIAssistant";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            6D Virtual Peaceful Spirit Academy
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            A Transformative University for All Children
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200 dark:border-purple-700 shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 mb-4">🌟 Spiritual Understanding</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Discover how spirituality connects to every aspect of life - from the foods we eat to our mental and physical well-being.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-700 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4">🧠 Holistic Health</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Learn how medicine, nutrition, and consciousness work together to create our physical and mental reality.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-indigo-200 dark:border-indigo-700 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">💬 Language & Civilization</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Understand how the language we use shapes our thoughts, defines civilization, and creates our external reality.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-green-200 dark:border-green-700 shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-4">⚡ Personal Power</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Come into your power by understanding yourself and how inner wisdom creates the world around us.
            </p>
          </div>
        </div>

        <div className="text-center w-full">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 italic">
            "Understanding oneself is the key to understanding all of creation"
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            — Jennifer Dionne Whatley, CEO & Founder
          </p>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white gap-2 hover:from-purple-700 hover:to-blue-700 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8"
              href="/auth"
            >
              👤 Join Academy
            </a>
            <a
              className="rounded-full border border-solid border-purple-300 dark:border-purple-600 transition-colors flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-400 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 text-purple-700 dark:text-purple-300"
              href="/learning"
            >
              🎯 Try Interactive Learning
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4 w-full max-w-3xl mx-auto">
          <a
            href="/courses"
            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-700 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl mb-2">🎓</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Courses</span>
          </a>
          <a
            href="/shop"
            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-700 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl mb-2">🛒</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Shop</span>
          </a>
          <a
            href="/pricing"
            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-700 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl mb-2">💎</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pricing</span>
          </a>
          <a
            href="/learning"
            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-700 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl mb-2">🎯</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Interactive</span>
          </a>
          <a
            href="/contact"
            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-700 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl mb-2">📧</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact</span>
          </a>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span>🌈</span>
          <span>Nurturing Young Spirits</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🧘</span>
          <span>Holistic Education</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🌍</span>
          <span>Global Consciousness</span>
        </div>
      </footer>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}