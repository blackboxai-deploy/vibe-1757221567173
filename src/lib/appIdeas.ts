import { AppCategory, AppIdea, AppIdeaTemplate } from './types';

export const categories: AppCategory[] = [
  { id: 'productivity', name: 'Productivity', description: 'Task management and efficiency tools', icon: '⚡', color: 'bg-blue-500' },
  { id: 'health', name: 'Health & Fitness', description: 'Wellness and fitness applications', icon: '💪', color: 'bg-green-500' },
  { id: 'entertainment', name: 'Entertainment', description: 'Games and media applications', icon: '🎮', color: 'bg-purple-500' },
  { id: 'education', name: 'Education', description: 'Learning and skill development', icon: '📚', color: 'bg-orange-500' },
  { id: 'finance', name: 'Finance', description: 'Money management and investment tools', icon: '💰', color: 'bg-emerald-500' },
  { id: 'travel', name: 'Travel', description: 'Trip planning and navigation', icon: '✈️', color: 'bg-cyan-500' },
  { id: 'food', name: 'Food & Drink', description: 'Culinary and dining applications', icon: '🍕', color: 'bg-red-500' },
  { id: 'shopping', name: 'Shopping', description: 'E-commerce and retail solutions', icon: '🛍️', color: 'bg-pink-500' },
  { id: 'business', name: 'Business', description: 'Professional and enterprise tools', icon: '💼', color: 'bg-indigo-500' },
  { id: 'lifestyle', name: 'Lifestyle', description: 'Daily life enhancement apps', icon: '🌟', color: 'bg-yellow-500' },
];

const appIdeaTemplates: Record<string, AppIdeaTemplate> = {
  productivity: {
    nameTemplates: [
      'TaskMaster Pro', 'FocusFlow', 'ProductiveMe', 'WorkSmart', 'EfficiencyHub',
      'TimeWise', 'GoalGetter', 'ProductivePal', 'WorkFlow Manager', 'TaskGenius'
    ],
    descriptionTemplates: [
      'A comprehensive task management platform that combines AI-powered scheduling with team collaboration features.',
      'An intelligent productivity suite that learns your work patterns and optimizes your daily workflow.',
      'A minimalist yet powerful tool for managing projects, tasks, and deadlines with smart notifications.',
      'A gamified productivity app that turns your daily tasks into an engaging RPG-like experience.',
      'An all-in-one workspace that integrates calendars, notes, tasks, and team communication.'
    ],
    features: [
      'AI-powered task prioritization', 'Smart scheduling algorithms', 'Team collaboration tools',
      'Time tracking with analytics', 'Habit tracking integration', 'Voice command support',
      'Cross-platform synchronization', 'Customizable workflows', 'Progress visualization',
      'Integration with popular tools', 'Offline functionality', 'Advanced reporting'
    ],
    audiences: [
      'Remote workers and freelancers', 'Small to medium businesses', 'Students and academics',
      'Busy professionals', 'Project managers', 'Creative teams'
    ],
    monetizationModels: [
      'Freemium subscription model', 'One-time premium purchase', 'Team licensing',
      'Enterprise solutions', 'In-app productivity courses', 'Premium templates'
    ],
    techRequirements: [
      'React Native for mobile', 'Node.js backend', 'Real-time synchronization',
      'Cloud storage integration', 'Push notifications', 'AI/ML algorithms',
      'Database optimization', 'API integrations'
    ],
    uniquePoints: [
      'AI learns personal productivity patterns', 'Seamless integration with existing tools',
      'Gamification elements increase engagement', 'Advanced analytics and insights',
      'Voice-first interaction design'
    ]
  },
  health: {
    nameTemplates: [
      'HealthTracker+', 'FitLife Companion', 'WellnessWise', 'HealthHub', 'VitalityVault',
      'FitGenius', 'HealthMate Pro', 'WellBeingApp', 'LifeBalance', 'HealthyHabits'
    ],
    descriptionTemplates: [
      'A holistic health management app that tracks fitness, nutrition, and mental wellness with AI insights.',
      'A personalized fitness companion that creates custom workout plans based on your goals and preferences.',
      'A comprehensive wellness platform combining meditation, exercise tracking, and health monitoring.',
      'An AI-powered health coach that provides personalized recommendations for diet, exercise, and lifestyle.',
      'A community-driven fitness app that connects users with similar health goals and challenges.'
    ],
    features: [
      'Workout plan generation', 'Nutrition tracking', 'Sleep quality monitoring',
      'Heart rate integration', 'Progress photo comparison', 'Meditation sessions',
      'Calorie counting with barcode scanner', 'Habit tracking', 'Water intake reminders',
      'Integration with wearables', 'Social challenges', 'Health goal setting'
    ],
    audiences: [
      'Fitness enthusiasts', 'Health-conscious individuals', 'Weight management seekers',
      'Chronic condition managers', 'Mental wellness focused users', 'Seniors'
    ],
    monetizationModels: [
      'Premium subscription for advanced features', 'Personal trainer consultations',
      'Nutrition plan purchases', 'In-app workout programs', 'Health supplement partnerships',
      'Corporate wellness programs'
    ],
    techRequirements: [
      'Wearable device integration', 'Computer vision for form analysis',
      'Machine learning for personalization', 'Health data encryption',
      'Real-time activity tracking', 'Cloud data synchronization'
    ],
    uniquePoints: [
      'AI-powered form correction during workouts', 'Personalized meal planning',
      'Integration with medical professionals', 'Gamified health challenges',
      'Comprehensive wellness tracking'
    ]
  },
  entertainment: {
    nameTemplates: [
      'GameHub Central', 'EntertainMe', 'FunZone Pro', 'PlayMaster', 'AmusementApp',
      'ContentCrafter', 'StreamlineHub', 'PlayTime Pro', 'Entertainment Plus', 'FunFactory'
    ],
    descriptionTemplates: [
      'A social gaming platform that combines multiplayer games with streaming and content creation tools.',
      'An interactive entertainment hub featuring mini-games, quizzes, and social challenges.',
      'A personalized content discovery app that curates movies, shows, games, and books based on your preferences.',
      'A creative sandbox app where users can create, share, and play custom mini-games and experiences.',
      'A multiplayer party game platform designed for both in-person and remote gatherings.'
    ],
    features: [
      'Multiplayer game rooms', 'Live streaming integration', 'User-generated content',
      'Social leaderboards', 'Cross-platform play', 'Virtual rewards system',
      'Content recommendation engine', 'Interactive polls and quizzes', 'Video chat integration',
      'Custom avatar creation', 'Achievement system', 'Tournament organization'
    ],
    audiences: [
      'Casual gamers', 'Social media enthusiasts', 'Content creators',
      'Friend groups and families', 'Party organizers', 'Gaming communities'
    ],
    monetizationModels: [
      'In-app purchases for cosmetics', 'Premium game modes', 'Ad-supported free tier',
      'Creator revenue sharing', 'Virtual currency sales', 'Tournament entry fees'
    ],
    techRequirements: [
      'Real-time multiplayer networking', 'Video streaming infrastructure',
      'Content delivery network', 'User authentication system',
      'In-app purchase processing', 'Social media integrations'
    ],
    uniquePoints: [
      'Seamless transition between playing and streaming', 'AI-powered content curation',
      'Cross-platform social features', 'Creator monetization tools',
      'Interactive audience engagement'
    ]
  },
  education: {
    nameTemplates: [
      'LearnMaster Pro', 'EduGenius', 'SkillBuilder+', 'KnowledgeHub', 'StudySmart',
      'BrainBooster', 'LearnWise', 'EducationPlus', 'SkillForge', 'MindExpander'
    ],
    descriptionTemplates: [
      'An adaptive learning platform that personalizes educational content based on individual learning styles.',
      'A comprehensive skill development app offering courses, certifications, and hands-on projects.',
      'An AI-powered study companion that creates personalized study plans and tracks learning progress.',
      'A collaborative learning platform connecting students with peers and expert mentors.',
      'A gamified education app that makes learning engaging through quests, badges, and competitions.'
    ],
    features: [
      'Adaptive learning algorithms', 'Progress tracking analytics', 'Peer collaboration tools',
      'Interactive video lessons', 'Practice quiz generation', 'Offline content download',
      'Certificate generation', 'Live tutoring sessions', 'Study group formation',
      'Flashcard creation', 'Learning path recommendations', 'Performance analytics'
    ],
    audiences: [
      'Students of all ages', 'Professional learners', 'Career changers',
      'Certification seekers', 'Homeschooling families', 'Corporate training programs'
    ],
    monetizationModels: [
      'Course subscriptions', 'One-time course purchases', 'Certification fees',
      'Premium tutoring services', 'Corporate training licenses', 'Educational content licensing'
    ],
    techRequirements: [
      'Video streaming optimization', 'Learning management system',
      'AI recommendation engine', 'Progress tracking database',
      'Payment processing integration', 'Content authoring tools'
    ],
    uniquePoints: [
      'Personalized learning paths', 'Real-world project integration',
      'Industry expert mentorship', 'Micro-learning approach',
      'Skills-based job matching'
    ]
  },
  finance: {
    nameTemplates: [
      'MoneyMaster Pro', 'FinanceGenius', 'WealthBuilder', 'BudgetSmart', 'InvestWise',
      'CashFlow Manager', 'FinancialFreedom', 'MoneyTracker+', 'WealthWise', 'BudgetBuddy'
    ],
    descriptionTemplates: [
      'An intelligent personal finance app that automatically categorizes expenses and provides investment insights.',
      'A comprehensive wealth management platform offering budgeting, investing, and financial planning tools.',
      'An AI-powered financial advisor that provides personalized recommendations for saving and investing.',
      'A social finance app that gamifies saving goals and connects users with similar financial objectives.',
      'A business finance management tool designed for freelancers and small business owners.'
    ],
    features: [
      'Automated expense categorization', 'Investment portfolio tracking', 'Bill reminder system',
      'Savings goal visualization', 'Credit score monitoring', 'Tax calculation assistance',
      'Financial goal planning', 'Bank account integration', 'Spending analytics',
      'Investment recommendations', 'Budget alerts', 'Debt payoff planning'
    ],
    audiences: [
      'Personal finance beginners', 'Investment enthusiasts', 'Small business owners',
      'Debt management seekers', 'Retirement planners', 'College students'
    ],
    monetizationModels: [
      'Premium subscription features', 'Investment advisory fees', 'Referral commissions',
      'Premium financial insights', 'Tax preparation services', 'Financial product partnerships'
    ],
    techRequirements: [
      'Bank API integrations', 'Financial data encryption', 'Real-time market data',
      'Machine learning for insights', 'Secure payment processing', 'Regulatory compliance'
    ],
    uniquePoints: [
      'AI-powered spending predictions', 'Automated savings optimization',
      'Social savings challenges', 'Integrated tax planning', 'Robo-advisor features'
    ]
  },
  travel: {
    nameTemplates: [
      'TravelGenius Pro', 'WanderlustApp', 'JourneyPlanner+', 'ExploreMore', 'TripMaster',
      'AdventureHub', 'TravelWise', 'GlobeTrotter Pro', 'VoyageVault', 'TravelCompanion'
    ],
    descriptionTemplates: [
      'An AI-powered travel planning app that creates personalized itineraries based on preferences and budget.',
      'A comprehensive travel companion featuring offline maps, language translation, and local recommendations.',
      'A social travel platform that connects travelers with similar interests and local guides.',
      'An adventure planning app specializing in outdoor activities and off-the-beaten-path destinations.',
      'A business travel management tool that streamlines booking, expense tracking, and itinerary management.'
    ],
    features: [
      'AI itinerary generation', 'Offline map access', 'Real-time language translation',
      'Local experience booking', 'Travel expense tracking', 'Weather integration',
      'Flight price monitoring', 'Accommodation reviews', 'Photo journey documentation',
      'Emergency contact system', 'Currency converter', 'Travel document storage'
    ],
    audiences: [
      'Leisure travelers', 'Business travelers', 'Adventure seekers',
      'Budget backpackers', 'Family vacationers', 'Solo travelers'
    ],
    monetizationModels: [
      'Booking commission fees', 'Premium itinerary features', 'Travel insurance partnerships',
      'Local experience marketplace', 'Premium offline content', 'Travel gear affiliate sales'
    ],
    techRequirements: [
      'Mapping and GPS integration', 'Travel API integrations', 'Offline data synchronization',
      'Real-time translation services', 'Payment gateway integration', 'Cloud photo storage'
    ],
    uniquePoints: [
      'AI-powered local recommendations', 'Integrated expense management',
      'Offline functionality for remote areas', 'Social travel matching',
      'Emergency assistance features'
    ]
  }
};

export function generateRandomAppIdea(category?: string): AppIdea {
  const selectedCategory = category && category !== 'all' 
    ? category 
    : categories[Math.floor(Math.random() * categories.length)].id;
  
  const template = appIdeaTemplates[selectedCategory];
  const categoryInfo = categories.find(cat => cat.id === selectedCategory)!;
  
  if (!template) {
    throw new Error(`No template found for category: ${selectedCategory}`);
  }

  const randomSelect = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
  const randomSelectMultiple = <T>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
  };

  const id = `idea_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const name = randomSelect(template.nameTemplates);
  const description = randomSelect(template.descriptionTemplates);
  const keyFeatures = randomSelectMultiple(template.features, 4 + Math.floor(Math.random() * 4));
  const targetAudience = randomSelect(template.audiences);
  const monetizationModel = randomSelectMultiple(template.monetizationModels, 2 + Math.floor(Math.random() * 2));
  const technicalRequirements = randomSelectMultiple(template.techRequirements, 3 + Math.floor(Math.random() * 3));
  const uniqueSellingPoints = randomSelectMultiple(template.uniquePoints, 2 + Math.floor(Math.random() * 2));
  
  const marketPotentials: Array<AppIdea['marketPotential']> = ['Low', 'Medium', 'High', 'Very High'];
  const complexities: Array<AppIdea['developmentComplexity']> = ['Simple', 'Moderate', 'Complex', 'Very Complex'];
  const timeframes = ['2-4 weeks', '1-3 months', '3-6 months', '6-12 months', '12+ months'];

  return {
    id,
    name,
    description,
    category: categoryInfo.name,
    targetAudience,
    keyFeatures,
    monetizationModel,
    technicalRequirements,
    marketPotential: randomSelect(marketPotentials),
    developmentComplexity: randomSelect(complexities),
    estimatedTimeframe: randomSelect(timeframes),
    competitorAnalysis: `This app would compete with existing ${categoryInfo.name.toLowerCase()} solutions by offering ${uniqueSellingPoints[0] ? uniqueSellingPoints[0].toLowerCase() : 'innovative features'} and focusing on ${targetAudience.toLowerCase()}.`,
    uniqueSellingPoints,
    createdAt: new Date()
  };
}

export function searchAppIdeas(ideas: AppIdea[], query: string): AppIdea[] {
  if (!query.trim()) return ideas;
  
  const searchTerm = query.toLowerCase();
  return ideas.filter(idea => 
    idea.name.toLowerCase().includes(searchTerm) ||
    idea.description.toLowerCase().includes(searchTerm) ||
    idea.category.toLowerCase().includes(searchTerm) ||
    idea.keyFeatures.some(feature => feature.toLowerCase().includes(searchTerm))
  );
}