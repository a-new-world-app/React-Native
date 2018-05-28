
export const retreiveRobots = () =>
$.ajax({
  url: `api/robots/`,
  method: "GET"
});

export const retreiveRobot = robotId =>
$.ajax({
  url: `api/robots/${robotId}`,
  method: "GET"
});