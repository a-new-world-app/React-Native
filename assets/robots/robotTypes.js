const robotTypes = {
  1: {
    pic: require('./bob.png'),
    mark: require('./mark.robo1.png'),
    name: "Bob",
    description: "Not great at anything but REALLY enthusiastic",
    build: 1,
    explore: 1,
    carry: 1,
    buildReq: {
      work: 100000,
      iron: 10000,
      copper: 5000,
      aluminum: 1000,
      gold: 0,
      titanium: 0
    }
  },

  2: {
    pic: require('./drew.png'),
    mark: require('./mark.robo2.png'),
    name: "Drew",
    description: "Good with his hands but slightly agoraphobic",
    build: 5,
    explore: 0,
    carry: 0,
    buildReq: {
      work: 200000,
      iron: 10000,
      copper: 5000,
      aluminum: 1000,
      gold: 50,
      titanium: 5
    }
  },

  3: {
    pic: require('./leslie.png'),
    mark: require('./mark.robo3.png'),
    name: "Leslie",
    build: 1,
    explore: 1,
    carry: 5,
    buildReq: {
      work: 200000,
      iron: 10000,
      copper: 5000,
      aluminum: 1000,
      gold: 100,
      titanium: 10
    }
  },

  4: {
    pic: require('./shannon.png'),
    mark: require('./mark.robo4.png'),
    name: "Shannon",
    build: 3,
    explore: 3,
    carry: 3,
    buildReq: {
      work: 500000,
      iron: 10000,
      copper: 5000,
      aluminum: 1000,
      gold: 150,
      titanium: 15
    }
  },

  5: {
    pic: require('./spark.png'),
    mark: require('./mark.robo5.png'),
    name: "Spark",
    build: 0,
    explore: 5,
    carry: 1,
    buildReq: {
      work: 200000,
      iron: 10000,
      copper: 5000,
      aluminum: 1000,
      gold: 1,
      titanium: 1
    }
  }
};

export default robotTypes;
