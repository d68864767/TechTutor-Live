// server/routes/dataStorage.js

const database = require('database-library');

// Function to save learner progress
const saveProgress = (learnerId, progressData) => {
  // Save progress data to the database
  database.saveProgress(learnerId, progressData);
};

// Function to retrieve learner progress
const getProgress = (learnerId) => {
  // Retrieve progress data from the database
  return database.getProgress(learnerId);
};

module.exports = {
  saveProgress,
  getProgress,
};
