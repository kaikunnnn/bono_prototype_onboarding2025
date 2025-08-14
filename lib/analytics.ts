// イベント計測のモック実装
// 本番環境では Google Analytics や Segment などに置き換え

export const trackEvent = (eventName: string, payload?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    console.log(`📊 Event: ${eventName}`, payload || {})
    
    // 将来的にはここで実際のアナリティクスサービスにイベントを送信
    // window.gtag('event', eventName, payload)
    // window.analytics.track(eventName, payload)
  }
}

// プリセットイベント
export const events = {
  // オンボーディング
  onboardingView: () => trackEvent('onboarding_view'),
  onboardingLevelSelect: (level: string) => 
    trackEvent('onboarding_level_select', { level }),
  onboardingPlanSelect: (minutes: number) => 
    trackEvent('onboarding_plan_select', { minutes }),
  onboardingStartClick: (level: string) => 
    trackEvent('onboarding_start_click', { level }),
  
  // コミュニティ
  communityJoinClick: () => trackEvent('community_join_click'),
  
  // コース
  courseView: (courseId: string) => 
    trackEvent('course_view', { courseId }),
  resumeClick: (chapterSlug: string) => 
    trackEvent('resume_click', { chapterSlug }),
  
  // 章
  chapterView: (chapterSlug: string) => 
    trackEvent('chapter_view', { chapterSlug }),
  checklistCheck: (chapterSlug: string, index: number, checked: boolean) => 
    trackEvent('checklist_check', { chapterSlug, index, checked }),
  nextClick: (fromSlug: string, toSlug: string) => 
    trackEvent('next_click', { fromSlug, toSlug }),
  progressComplete: (courseId: string) => 
    trackEvent('progress_complete', { courseId }),
  
  // クイズ
  quizAnswer: (quizId: string, answer: string | number, correct: boolean) => 
    trackEvent('quiz_answer', { quizId, answer, correct }),
}