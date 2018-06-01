import robotTypes from '../../assets/robots/robotTypes.js';

export const calculateProgress = (gameData) => {
  const now = Date.now();
  if (gameData.lastCheck + 60 * 1000 > now) 
    return gameData;
  const resourceTypes = ['iron', 'copper', 'aluminum', 'gold', 'titanium'];
  const gatherArr = gameData.gather;
  const robotWorkStrength = robotWork(gameData.robots);
  const build = gameData.build;
  const robots = gameData.robots;
  let addedRes = handleExplore(gameData.explore, robotWorkStrength.explore, now);
  gatherArr.forEach((task) => {
    if (now > task.end) {
      gameData.robots[task.robot].waiting += 1;
      gameData.robots[task.robot].gathering -= 1;
      addedRes[task.resource] += task.amount;
      task.complete = true;
    }
  });

  gameData.build = handleBuild(build, robotWorkStrength.build, robots, now);
  resourceTypes.forEach((resource) => {
    gameData.resources[resource] += addedRes[resource];
  });

  const ongoingTasks = gatherArr.filter((task) => !task.complete);
  gameData.gather = ongoingTasks;
  gameData.lastCheck = now;
  return gameData;
};

function robotWork(robots) {
  const work = {
    build: 0,
    explore: 0
  };
  Object
    .keys(robots)
    .forEach((robotKey) => {
      let robot = robots[robotKey];
      work.build += robot.build * robotTypes[robotKey].build;
      work.explore += robot.explore * robotTypes[robotKey].explore;
    });
  return work;
}

function handleExplore(exploring, exploringStrength, now) {
  let resources = {
    iron: 0,
    copper: 0,
    aluminum: 0,
    gold: 0,
    titanium: 0
  };
  if (exploring.lastCheck + 1000 * 60 * 10 < now) {
    const diff = now - exploring.lastCheck;
    resources.iron += Math.ceil((exploringStrength * 10 * Math.random() * diff) / (60000));
    resources.copper += Math.ceil((exploringStrength * 5 * Math.random() * diff) / (60000));
    resources.aluminum += Math.ceil((exploringStrength * 3 * Math.random() * diff) / (60000));
    resources.gold += Math.ceil((exploringStrength * 2 * Math.random() * diff) / (60000));
    resources.titanium += Math.ceil((exploringStrength * 0.1 * Math.random() * diff) / (60000));
    exploring.lastCheck = now;
  }
  return resources;
}

function handleBuild(building, str, robots, now) {
  if (!building.robot) 
    return {};
  const timeDif = now - building.lastCheck;
  building.lastCheck = now;
  building.progress += str * timeDif / 1000;
  if (building.progress > building.needed) {
    robots[building.robot].waiting += 1;
    return {};
  }
  return building || {};
}