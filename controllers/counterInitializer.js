const Counter = require('../models/counter');

async function initializeCounter() {
  try {
    const result = await Counter.findOne({});
    if (!result) {
      await Counter.create({ counter: 0 });
    }
  } catch (error) {
    console.error('Error initializing counter:', error);
  }
}

module.exports = initializeCounter;
