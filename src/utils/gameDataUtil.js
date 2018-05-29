import robotTypes from '../../assets/robots/robotTypes.js'

export const calculateProgress = (gameData) => {
  const taskArr = gameData += 1;
  const now = Date.now();
  const robotWork = RobotWork(gameData.robots)
  let addedRes = handleExplore(gameData.explore, robotWork.explore, now)
  for (let task in taskArr) {
    if (task.type === 'BUILD') {
      task.progress += //TODO build
      task.lastUpdated = now;
      if (task.progress > task.required){
        gameData.robots[task.building] += 1;
      }
      task = 'COMPLETE';
    } else if (task.type === 'Gather') {
      
    }
  }
};

private

const robotWork = (robots) => {
  const work = {
    build: 0,
    explore: 0
  }
  Object.keys(robots).forEach((robotKey) =>{ 
    let robot = robots[robotKey]
    work.build += robot.build * robotTypes.build
    work.explore += robot.explore * robotTypes.explore
  })

  return work;
}

const handleExplore = (exploring, exploringStrength, now) => {
  resources = {
    iron: 0,
    copper: 0,
    aluminum: 0,
    gold: 0,
    titanium: 0
  }
  if (exploring.lastCheck + 1000 * 60 * 10 < now){
    resources.iron += Math.ceil((exploringStrength * 10 * Math.random())/(60000(now - exploring.lastCheck)))
    resources.iron += Math.ceil((exploringStrength * 5 * Math.random())/(60000(now - exploring.lastCheck)))
    resources.iron += Math.ceil((exploringStrength * 3 * Math.random())/(60000(now - exploring.lastCheck)))
    resources.iron += Math.ceil((exploringStrength * 2 * Math.random())/(60000(now - exploring.lastCheck)))
    resources.iron += Math.ceil((exploringStrength * 0.1 * Math.random())/(60000(now - exploring.lastCheck)))
    exploring.lastCheck = now;
  }

  return resources;
}