import { useState } from 'react';
import TypingGame from '@/components/TypingGame';
import TextSelector from '@/components/TextSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Clock, Zap, Award, HelpCircle } from 'lucide-react';
import { calculateTypingGrade, getGradeRequirements } from '@/lib/grading';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import HistoryCard from '@/components/HistoryCard';
import { saveResult } from '@/lib/history';

interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

const Index = () => {
  const [currentText, setCurrentText] = useState("The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. Practice makes perfect when learning to type faster.");
  const [gameMode, setGameMode] = useState<'select' | 'play'>('select');
  const [stats, setStats] = useState<TypingStats | null>(null);
  const [bestStats, setBestStats] = useState<TypingStats | null>(null);

  const handleTextSelect = (text: string) => {
    setCurrentText(text);
    setGameMode('play');
    setStats(null);
  };

  const handleGameComplete = (gameStats: TypingStats) => {
    setStats(gameStats);
    if (!bestStats || gameStats.wpm > bestStats.wpm) {
      setBestStats(gameStats);
    }
    // Save result to history
    saveResult({ ...gameStats, timestamp: Date.now() });
  };

  const handlePlayAgain = () => {
    setStats(null);
  };

  const handleChangeText = () => {
    setGameMode('select');
    setStats(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            TypeSpeed Pro
          </h1>
          <p className="text-xl text-muted-foreground">
            Master your typing skills through focused practice and repetition
          </p>
        </div>

        {/* Personal Best */}
        {bestStats && (
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Trophy className="w-5 h-5" />
                  Personal Best
                  {(() => {
                    const bestGrade = calculateTypingGrade(bestStats.wpm, bestStats.accuracy);
                    return (
                      <div className={`flex items-center gap-2 ml-auto px-3 py-1 rounded-full bg-gradient-to-r ${bestGrade.color} text-white text-sm font-bold`}>
                        <span>{bestGrade.icon}</span>
                        <span>{bestGrade.grade}</span>
                      </div>
                    );
                  })()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{bestStats.wpm}</div>
                    <div className="text-sm text-muted-foreground">WPM</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">{bestStats.accuracy}%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-error">{bestStats.errors}</div>
                    <div className="text-sm text-muted-foreground">Errors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">{bestStats.timeElapsed}s</div>
                    <div className="text-sm text-muted-foreground">Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Game Completion Stats */}
        {stats && (
          <div className="max-w-4xl mx-auto mb-8">
            {(() => {
              const currentGrade = calculateTypingGrade(stats.wpm, stats.accuracy);
              return (
                <Card className="bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-success">
                      <Target className="w-5 h-5" />
                      Test Complete!
                      <div className={`flex items-center gap-2 ml-auto px-4 py-2 rounded-full bg-gradient-to-r ${currentGrade.color} text-white font-bold text-lg`}>
                        <span className="text-xl">{currentGrade.icon}</span>
                        <span>Grade: {currentGrade.grade}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Grade Description */}
                    <div className="text-center">
                      <p className="text-lg font-medium text-foreground mb-2">{currentGrade.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            View Grading Scale
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <Award className="w-5 h-5" />
                              Typing Performance Grading Scale
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              Grades are calculated based on both typing speed (WPM) and accuracy percentage.
                            </p>
                            <div className="grid gap-3">
                              {getGradeRequirements().map((req, index) => (
                                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                                  <div className="flex items-center gap-3">
                                    <div className="font-bold text-lg">{req.grade}</div>
                                    <div className="text-sm">
                                      <div className="font-medium">{req.description}</div>
                                      <div className="text-muted-foreground">{req.wpm} WPM, {req.accuracy} accuracy</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary">{stats.wpm}</div>
                        <div className="text-sm text-muted-foreground">Words per minute</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-success">{stats.accuracy}%</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-error">{stats.errors}</div>
                        <div className="text-sm text-muted-foreground">Errors made</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-warning">{stats.timeElapsed}s</div>
                        <div className="text-sm text-muted-foreground">Time taken</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4 pt-4">
                      <Button onClick={handlePlayAgain} size="lg">
                        <Zap className="w-4 h-4 mr-2" />
                        Try Again
                      </Button>
                      <Button onClick={handleChangeText} variant="outline" size="lg">
                        <Clock className="w-4 h-4 mr-2" />
                        Change Text
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        )}

        {/* Main Game Area */}
        {gameMode === 'select' ? (
          <TextSelector
            onTextSelect={handleTextSelect}
            currentText={currentText}
          />
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <Button
                onClick={handleChangeText}
                variant="outline"
                size="sm"
              >
                Change Text
              </Button>
            </div>
            <TypingGame
              key={currentText} // Reset game when text changes
              text={currentText}
              onComplete={handleGameComplete}
            />
          </div>
        )}
        
        {/* History */}
        <div className="max-w-4xl mx-auto mt-12">
          <HistoryCard />
        </div>
        
        {/* Tips */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Typing Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• <strong>Posture:</strong> Sit straight with feet flat on the floor</p>
              <p>• <strong>Hand Position:</strong> Keep wrists straight and fingers curved</p>
              <p>• <strong>Home Row:</strong> Start with fingers on ASDF (left) and JKL; (right)</p>
              <p>• <strong>Look Ahead:</strong> Focus on the text, not your fingers</p>
              <p>• <strong>Practice Daily:</strong> Consistent practice builds muscle memory</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
