import React from 'react';
import LiveSession from './components/LiveSession';
import QA from './components/QA';
import PersonalizedLearning from './components/PersonalizedLearning';
import RecordingPlayback from './components/RecordingPlayback';
import ProgressTracking from './components/ProgressTracking';

function App() {
  return (
    <div>
      <h1>TechTutor Live</h1>
      <LiveSession />
      <QA />
      <PersonalizedLearning />
      <RecordingPlayback />
      <ProgressTracking />
    </div>
  );
}

export default App;
