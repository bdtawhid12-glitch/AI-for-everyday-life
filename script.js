
  // Custom JS function: moodAI
  function moodAI() {
    var mood = document.getElementById('mood').value.trim();
    var output = document.getElementById('aiResponse');
    if (!mood) {
      output.textContent = 'YOU CAN TELL ME, IT WILL ALWAYS BE A SCERET!';
      return;
    }
    var vibes = {
      'happy': 'Sounds like a great day — keep it up! 🎉',
      'sad': 'Take it easy. Little wins count. 🌱',
      'tired': 'Rest is productive too — short break suggested. 💤',
      'excited': 'Channel that energy into something creative! ⚡️',
	  'angry': 'Deep breath. Don’t let the day cook you — cool off first. 🔥',
	  'stressed': 'One thing at a time. You’re not a robot. 💆‍♂️',
	  'confused': 'Slow down and break it into small steps — clarity comes after. 🔍',
	  'bored': 'Do something tiny that moves your day forward. Momentum helps. ⚙️',
	  'lazy': 'Start with a 30-second task. Momentum > motivation. 😴➡️⚡',
	  'lonely': 'Reach out to one friend. Even a short chat helps. 💬',
	  'overwhelmed': 'Prioritize 1 task only. Everything else can wait. 🧘‍♂️',
	  'calm': 'Nice. Keep that peaceful energy going. 🌿',
	  'nervous': 'Your body’s just hyping you up. You got this. 💪',
	  'motivated': 'Go all in. Ride the energy while it’s fresh! 🚀'};
    var key = mood.toLowerCase();
    var result = vibes[key] || ('AI-style read: "' + key + '" — drink water and breathe 😌');
    output.textContent = result;
  }

  // Extra small function: randomFact
  function randomFact() {
    var facts = [
     'A 10-minute walk can boost your mood more than scrolling your phone.',
  'Drinking water before studying actually helps your brain stay sharp.',
  'If a task takes less than 2 minutes, do it immediately — future you wins.',
  'Cleaning your desk for 5 minutes can make you 2x more focused.',
  'Writing things down reduces stress because your brain stops holding it.',
  'Putting your phone in another room boosts productivity instantly.',
  'Small breaks every 25 minutes prevent burnout — try the Pomodoro method.',
  'Making your bed in the morning sets your brain to “productive mode”.'
    ];
    var f = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factArea').textContent = f;
  }
