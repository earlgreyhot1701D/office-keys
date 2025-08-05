export interface TypingGrade {
  grade: string;
  color: string;
  description: string;
  icon: string;
}

export function calculateTypingGrade(wpm: number, accuracy: number): TypingGrade {
  // Weighted scoring: 70% WPM, 30% accuracy
  const wpmScore = Math.min(wpm / 80 * 100, 100); // 80 WPM = 100% WPM score
  const accuracyScore = accuracy;
  const totalScore = (wpmScore * 0.7) + (accuracyScore * 0.3);

  if (totalScore >= 95 && wpm >= 70 && accuracy >= 98) {
    return {
      grade: "A+",
      color: "from-emerald-500 to-green-400",
      description: "Outstanding! Professional typing level",
      icon: "🏆"
    };
  } else if (totalScore >= 90 && wpm >= 60 && accuracy >= 95) {
    return {
      grade: "A",
      color: "from-green-500 to-emerald-400",
      description: "Excellent typing performance",
      icon: "⭐"
    };
  } else if (totalScore >= 80 && wpm >= 50 && accuracy >= 90) {
    return {
      grade: "B+",
      color: "from-blue-500 to-cyan-400",
      description: "Very good typing skills",
      icon: "💎"
    };
  } else if (totalScore >= 70 && wpm >= 40 && accuracy >= 85) {
    return {
      grade: "B",
      color: "from-cyan-500 to-blue-400",
      description: "Good typing performance",
      icon: "👍"
    };
  } else if (totalScore >= 60 && wpm >= 30 && accuracy >= 80) {
    return {
      grade: "C+",
      color: "from-yellow-500 to-amber-400",
      description: "Above average typing",
      icon: "📈"
    };
  } else if (totalScore >= 50 && wpm >= 25 && accuracy >= 75) {
    return {
      grade: "C",
      color: "from-amber-500 to-yellow-400",
      description: "Average typing skills",
      icon: "✨"
    };
  } else if (totalScore >= 40 && wpm >= 20 && accuracy >= 70) {
    return {
      grade: "D+",
      color: "from-orange-500 to-amber-400",
      description: "Below average, keep practicing",
      icon: "💪"
    };
  } else if (totalScore >= 30 && wpm >= 15 && accuracy >= 60) {
    return {
      grade: "D",
      color: "from-red-500 to-orange-400",
      description: "Needs improvement",
      icon: "📚"
    };
  } else {
    return {
      grade: "F",
      color: "from-gray-500 to-slate-400",
      description: "Keep practicing, you'll get there!",
      icon: "🎯"
    };
  }
}

export function getGradeRequirements() {
  return [
    { grade: "A+", wpm: "70+", accuracy: "98%+", description: "Professional level" },
    { grade: "A", wpm: "60+", accuracy: "95%+", description: "Excellent" },
    { grade: "B+", wpm: "50+", accuracy: "90%+", description: "Very good" },
    { grade: "B", wpm: "40+", accuracy: "85%+", description: "Good" },
    { grade: "C+", wpm: "30+", accuracy: "80%+", description: "Above average" },
    { grade: "C", wpm: "25+", accuracy: "75%+", description: "Average" },
    { grade: "D+", wpm: "20+", accuracy: "70%+", description: "Below average" },
    { grade: "D", wpm: "15+", accuracy: "60%+", description: "Needs work" },
    { grade: "F", wpm: "Below 15", accuracy: "Below 60%", description: "Keep practicing" }
  ];
}