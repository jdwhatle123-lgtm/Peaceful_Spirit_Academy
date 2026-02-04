'use client';

import { useState, useEffect } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "🌟 Hi there! I'm Spirit AI, your personal learning companion at 6D Virtual Peaceful Spirit Academy. I'm here to help children and families on their spiritual journey. How can I assist you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = {
    greeting: [
      "Hello! 🌟 Welcome to our spiritual learning academy. I'm here to help you understand how spirituality connects to everyday life!",
      "Hi there! 😊 I'm Spirit AI, and I love helping children and families discover their inner wisdom. What would you like to explore today?",
      "Welcome, young spirit! ✨ I'm excited to help you on your learning journey. What spiritual topic interests you most?"
    ],
    spirituality: [
      "Spirituality is like having a special connection to the energy that flows through everything - including you! 🌟 It's about understanding that we're all connected to something bigger and more beautiful than we can see.",
      "Think of spirituality as your inner wisdom - that quiet voice inside that knows what's right and helps you feel peaceful and strong. ✨ Everyone has this special gift!",
      "Spirituality means recognizing the magic in everyday life - like how plants grow, how we breathe, and how love makes us feel warm inside. 🌱 It's all connected!"
    ],
    nutrition: [
      "Sacred nutrition means understanding that the food we eat affects not just our bodies, but our thoughts and feelings too! 🍎 Fresh, colorful foods give us bright, happy energy!",
      "Food is like fuel for our spirit! 🌈 When we eat with gratitude and choose foods that grow from the earth, we feel more connected to nature and ourselves.",
      "Did you know that when we eat mindfully - really tasting and appreciating our food - it becomes more nutritious? 🙏 Our attitude affects everything, even our meals!"
    ],
    meditation: [
      "Meditation is like giving your mind a peaceful vacation! 🧘‍♀️ You can start by just sitting quietly and noticing your breath for a few minutes.",
      "Try the Rainbow Breathing technique! 🌈 Breathe in colors - red for strength, orange for creativity, yellow for joy, green for love, blue for peace, indigo for wisdom, and violet for connection to spirit!",
      "Meditation doesn't have to be sitting still - you can meditate while walking in nature, drawing, or even just being really present while playing! ✨"
    ],
    family: [
      "Families are spiritual teams! 👨‍👩‍👧‍👦 When families practice gratitude, kindness, and mindfulness together, they create a beautiful energy that helps everyone grow.",
      "Your family is your first spiritual community. 💕 You can practice being loving, patient, and understanding with each other - that's spiritual growth in action!",
      "Family spiritual practices can be simple - like sharing what you're grateful for at dinner, having quiet time together, or helping each other when someone feels sad. 🤗"
    ],
    learning: [
      "Every experience is a chance to learn something about yourself and the world! 📚 Even challenges help us grow stronger and wiser.",
      "Learning with 6D means understanding how everything connects - your thoughts, feelings, body, relationships, and spiritual growth all work together! 🔗",
      "The best learning happens when you're curious and excited! ✨ What makes you feel most curious and alive?"
    ],
    default: [
      "That's a wonderful question! 🤔 Our 6D Learning Framework can help you explore that topic through spirituality, health, relationships, and personal growth.",
      "I love your curiosity! 🌟 Remember, every question you ask helps your spirit grow. Would you like to explore this through meditation, family activities, or sacred nutrition?",
      "What a thoughtful question! ✨ In our academy, we believe that understanding yourself helps you understand everything else. How does this topic make you feel?"
    ]
  };

  const getAIResponse = (message: string) => {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi') || lowercaseMessage.includes('hey')) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
    } else if (lowercaseMessage.includes('spiritual') || lowercaseMessage.includes('spirit') || lowercaseMessage.includes('soul')) {
      return aiResponses.spirituality[Math.floor(Math.random() * aiResponses.spirituality.length)];
    } else if (lowercaseMessage.includes('food') || lowercaseMessage.includes('nutrition') || lowercaseMessage.includes('eat')) {
      return aiResponses.nutrition[Math.floor(Math.random() * aiResponses.nutrition.length)];
    } else if (lowercaseMessage.includes('meditat') || lowercaseMessage.includes('breath') || lowercaseMessage.includes('calm')) {
      return aiResponses.meditation[Math.floor(Math.random() * aiResponses.meditation.length)];
    } else if (lowercaseMessage.includes('family') || lowercaseMessage.includes('parent') || lowercaseMessage.includes('together')) {
      return aiResponses.family[Math.floor(Math.random() * aiResponses.family.length)];
    } else if (lowercaseMessage.includes('learn') || lowercaseMessage.includes('study') || lowercaseMessage.includes('understand')) {
      return aiResponses.learning[Math.floor(Math.random() * aiResponses.learning.length)];
    } else {
      return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: getAIResponse(inputMessage)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What is spirituality?",
    "How can I meditate?",
    "Tell me about sacred nutrition",
    "How can my family practice together?",
    "What is the 6D framework?"
  ];

  return (
    <>
      {/* AI Assistant Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-purple-600 hover:bg-purple-700' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
        }`}
      >
        <div className="text-white text-2xl">
          {isOpen ? '✕' : '🤖'}
        </div>
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">✨</span>
          </div>
        )}
      </button>

      {/* AI Assistant Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-40 border border-purple-200 dark:border-purple-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌟</span>
            </div>
            <div>
              <h3 className="font-semibold">Spirit AI Assistant</h3>
              <p className="text-sm opacity-90">Your Learning Companion</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🌟</span>
                      <span className="text-sm font-medium">Spirit AI</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🌟</span>
                    <span className="text-sm font-medium">Spirit AI</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Try asking:</p>
              <div className="space-y-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(question);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="block w-full text-left text-xs text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 p-2 rounded transition-colors"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about spirituality, meditation, or learning..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="text-sm">💫</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}