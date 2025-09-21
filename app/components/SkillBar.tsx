type VerticalSkillBarProps = {
  skill: string;
  years: number;         // actual years of experience
  totalYears: number;    // total expected for full proficiency
  darkMode?: boolean;
};

export default function SkillBar({ skill, years, totalYears, darkMode = false }: VerticalSkillBarProps) {
  const percent = Math.min((years / totalYears) * 100, 100);
  
  // Determine proficiency level and color based on percentage
  const getProficiencyColor = () => {
    if (percent >= 90) return 'bg-gradient-to-t from-emerald-400 to-emerald-600';
    if (percent >= 70) return 'bg-gradient-to-t from-green-400 to-green-600';
    if (percent >= 50) return 'bg-gradient-to-t from-blue-400 to-blue-600';
    if (percent >= 30) return 'bg-gradient-to-t from-amber-400 to-amber-600';
    return 'bg-gradient-to-t from-gray-400 to-gray-600';
  };
  
  const getProficiencyLevel = () => {
    if (percent >= 90) return 'Expert';
    if (percent >= 70) return 'Advanced';
    if (percent >= 50) return 'Intermediate';
    if (percent >= 30) return 'Beginner+';
    return 'Beginner';
  };

  return (
    <div className="group relative flex flex-col items-center space-y-2 w-20 p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
      {/* Skill bar container */}
      <div className="relative h-20 w-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        {/* Animated fill bar */}
        <div
          className={`absolute bottom-0 w-3 rounded-full ${getProficiencyColor()} transition-all duration-1000 ease-out`}
          style={{ height: `${percent}%` }}
        />
        
        {/* Measurement markers */}
        <div className="absolute left-0 w-3 h-px bg-gray-300 dark:bg-gray-600 top-1/4"></div>
        <div className="absolute left-0 w-3 h-px bg-gray-300 dark:bg-gray-600 top-1/2"></div>
        <div className="absolute left-0 w-3 h-px bg-gray-300 dark:bg-gray-600 top-3/4"></div>
      </div>
      
      {/* Skill name */}
      <span className="text-xs font-medium text-center text-gray-800 dark:text-gray-500">
        {skill}
      </span>
      
      {/* Years indicator */}
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
          {years} {years === 1 ? 'yr' : 'yrs'}
        </span>
        <div className="w-10 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
          <div 
            className={`h-full ${getProficiencyColor().replace('to-t', 'to-r')} rounded-full`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
      
      {/* Hover tooltip with proficiency level */}
      <div className={`absolute -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      px-2 py-1 text-xs font-medium rounded-md shadow-lg
                      ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} 
                      whitespace-nowrap pointer-events-none z-10`}>
        {getProficiencyLevel()} - {Math.round(percent)}%
        {/* Tooltip arrow */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45
                        ${darkMode ? 'bg-gray-700' : 'bg-white'}`}></div>
      </div>
    </div>
  );
}