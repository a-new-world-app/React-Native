import robotTypes from '../../assets/robots/robotTypes.js';

export const calculateProgress = (gameData) => {
  const resourceTypes = [
    'iron',
    'copper',
    'aluminum',
    'gold',
    'titanium',
  ];
  const gatherArr = gameData.gather;
  const now = Date.now();
  const robotWorkStrength = robotWork(gameData.robots);
  const build = gameData.build;
  const robots = gameData.robots;
  console.log('rws', robotWorkStrength);

  let addedRes = handleExplore(gameData.explore, robotWorkStrength.explore, now);
  for (let task in gatherArr) {
    if (now > task.end){
      addedRes[task.resource] += task.amount;
      gameData.robots[task.robot] += 1;
      task = 'COMPLETE';
    }
  }

  gameData.build = handleBuild(build, robotWorkStrength.build, robots,  now);

  resourceTypes.forEach ((resource) => {
    gameData.resources[resource] += addedRes[resource];
  });

  const ongoingTasks = gatherArr.map((task)=> Array.isArray(task));
  gameData.tasks = ongoingTasks;
  console.log('gameData', gameData);
  return gameData;
};


function robotWork(robots) {
  const work = {
    build: 0,
    explore: 0
  };
  Object.keys(robots).forEach((robotKey) =>{ 
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
  if (exploring.lastCheck + 1000 * 60 * 10 < now){
    const diff = now - exploring.lastCheck;
    resources.iron += Math.ceil((exploringStrength * 10 * Math.random() * diff)/(60000));
    resources.copper += Math.ceil((exploringStrength * 5 * Math.random() * diff)/(60000));
    resources.aluminum += Math.ceil((exploringStrength * 3 * Math.random() * diff)/(60000));
    resources.gold += Math.ceil((exploringStrength * 2 * Math.random() * diff)/(60000));
    resources.titanium += Math.ceil((exploringStrength * 0.1 * Math.random() * diff)/(60000));
    exploring.lastCheck = now;
  }
  return resources;
}

function handleBuild(building, str, robots, now){
  if (!building.robot) return; 
  const timeDif = now - building.lastCheck;
  building.lastCheck = now;
  building.progress += str * timeDif / 1000;
  if (building.progress > building.needed){
    robots[building.robot].waiting += 1;
    return {};
  }
  console.log('building', building);
  return building;
}