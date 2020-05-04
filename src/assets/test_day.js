const Day = require('./day.js');

actors = ["Chair", "Table", "Nick"];
day = new Day(actors);

day.describe();
day.nextDay(["Bob", "Fred"]);

day.describe();
day.nextDay(["Dog"]);

