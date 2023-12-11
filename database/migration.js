// database/migration.js

const db = require('your-database-library');

async function migrateDatabase() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS learner_progress (
        id INT AUTO_INCREMENT PRIMARY KEY,
        learner_id VARCHAR(255) NOT NULL,
        progress_data JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS live_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        expert_id VARCHAR(255) NOT NULL,
        start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        end_time TIMESTAMP,
        CONSTRAINT fk_expert
          FOREIGN KEY (expert_id)
          REFERENCES experts (id)
          ON DELETE CASCADE
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS experts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        expertise VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS learners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id INT NOT NULL,
        learner_id INT NOT NULL,
        question_text TEXT NOT NULL,
        answered BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_session
          FOREIGN KEY (session_id)
          REFERENCES live_sessions (id)
          ON DELETE CASCADE,
        CONSTRAINT fk_learner
          FOREIGN KEY (learner_id)
          REFERENCES learners (id)
          ON DELETE CASCADE
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS recordings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id INT NOT NULL,
        url VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_session
          FOREIGN KEY (session_id)
          REFERENCES live_sessions (id)
          ON DELETE CASCADE
      );
    `);

    console.log('Database migration completed successfully.');
  } catch (error) {
    console.error('Error migrating database:', error);
  }
}

migrateDatabase();
