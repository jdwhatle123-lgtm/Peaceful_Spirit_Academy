'use client';

import { useState, useEffect } from 'react';

interface AIInsight {
  id: string;
  title: string;
  content: string;
  type: 'tip' | 'encouragement' | 'activity' | 'reflection';
  icon: string;
}

interface AILearningEnhancementProps {
  courseTopic?: string;
  childAge?: string;
  learningStyle?: string;
}

export default function AILearningEnhancement({ 
  courseTopic = 'spirituality', 
  childAge = 'all ages',
  learningStyle = 'visual'
}: AILearningEnhancementProps) {
  const [currentInsight, setCurrentInsight] = useState<AIInsight | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const aiInsights: AIInsight[] = [
    {
      id: 'meditation-tip',
      title: 'Personalized Meditation Tip',
      content: 'Based on your child\'s energy today, try a 5-minute nature meditation. Sit outside and listen to the sounds around you - this helps ground spiritual energy in the physical world.',
      type: 'tip',
      icon: '🧘‍♀️'
    },
    {
      id: 'nutrition-connection',
      title: 'Sacred Nutrition Connection',
      content: 'Did you know that eating colorful foods can enhance spiritual awareness? Try having your child eat a rainbow of foods today and notice how they feel during meditation.',
      type: 'activity',
      icon: '🌈'
    },
    {
      id: 'family-practice',
      title: 'Family Spiritual Practice',
      content: 'Your family would benefit from sharing gratitude together tonight. Take turns sharing three things you\'re grateful for - this creates positive energy for tomorrow\'s learning.',
      type: 'encouragement',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'energy-awareness',
      title: 'Energy Awareness Exercise',
      content: 'Before starting today\'s lesson, have your child rub their hands together quickly, then slowly pull them apart. Can they feel the energy between their palms? This helps them understand that we are energetic beings.',
      type: 'activity',
      icon: '⚡'
    },
    {
      id: 'reflection-prompt',
      title: 'Spiritual Reflection',
      content: 'After completing today\'s activities, ask your child: "What did you discover about yourself today?" Their answer will show you how their spiritual awareness is growing.',
      type: 'reflection',
      icon: '🌟'
    },
    {
      id: 'nature-connection',
      title: 'Nature Spiritual Connection',
      content: 'Take your learning outside today! Nature is our greatest spiritual teacher. Have your child find something in nature that reminds them of their inner strength.',
      type: 'tip',
      icon: '🌿'
    }
  ];

  useEffect(() => {
    // Simulate AI analysis and show personalized insight
    const timer = setTimeout(() => {
      const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
      setCurrentInsight(randomInsight);
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [courseTopic, childAge, learningStyle]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tip': return 'from-blue-500 to-blue-600';
      case 'encouragement': return 'from-green-500 to-green-600';
      case 'activity': return 'from-purple-500 to-purple-600';
      case 'reflection': return 'from-yellow-500 to-yellow-600';
      default: return 'from-purple-500 to-purple-600';
    }
  };

  const generateNewInsight = () => {
    const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
    setCurrentInsight(randomInsight);
  };

  if (!isVisible || !currentInsight) return null;

  return (
    <div className="fixed top-20 right-4 w-80 z-30 animate-in slide-in-from-right duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-purple-200 dark:border-purple-700 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getTypeColor(currentInsight.type)} p-4 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{currentInsight.icon}</div>
              <div>
                <h3 className="font-semibold text-sm">AI Learning Enhancement</h3>
                <p className="text-xs opacity-90">Personalized for your family</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {currentInsight.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {currentInsight.content}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={generateNewInsight}
              className="flex-1 py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
            >
              🔄 New Insight
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="py-2 px-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Got it! ✨
            </button>
          </div>
        </div>

        {/* AI Badge */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Powered by Spirit AI • Learning Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}