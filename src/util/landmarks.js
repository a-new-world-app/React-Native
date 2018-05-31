import {getDistanceFromLatLonInKm} from './submition';
var landmarks = [
  {
    "Name": "Mission Dolores",
    "Image": "NULL",
    "Address": "320 Dolores St.",
    "Date": "4/11/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4266667,
    "latD": 37.76416667
  }, {
    "Name": "Old Saint Mary's Cathedral",
    "Image": "NULL",
    "Address": "660 California St.",
    "Date": "4/11/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4058333,
    "latD": 37.79277778
  }, {
    "Name": "Bank of California Building",
    "Image": "NULL",
    "Address": "400 California St.",
    "Date": "9/3/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4016667,
    "latD": 37.79333333
  }, {
    "Name": "Saint Patrick's Church",
    "Image": "NULL",
    "Address": "756 Mission St.",
    "Date": "9/3/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4036111,
    "latD": 37.78555556
  }, {
    "Name": "Saint Francis of Assisi Church",
    "Image": "NULL",
    "Address": "610 Vallejo St.",
    "Date": "9/3/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4077778,
    "latD": 37.79888889
  }, {
    "Name": "Audiffred Building",
    "Image": "NULL",
    "Address": "1-21 Mission St.",
    "Date": "10/13/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.3925,
    "latD": 37.79333333
  }, {
    "Name": "South San Francisco Opera House",
    "Image": "NULL",
    "Address": "1601 Newcomb Ave.",
    "Date": "12/8/68",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.39,
    "latD": 37.73527778
  }, {
    "Name": "Belli Building (Langerman's Building)",
    "Image": "NULL",
    "Address": "722 Montgomery St.",
    "Date": "2/3/69",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4033333,
    "latD": 37.79611111
  }, {
    "Name": "Genella Building",
    "Image": "NULL",
    "Address": "728 Montgomery St.",
    "Date": "2/3/69",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4033333,
    "latD": 37.79611111
  }, {
    "Name": "Hotaling Building",
    "Image": "NULL",
    "Address": "451 Jackson St.",
    "Date": "2/3/69",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4027778,
    "latD": 37.79638889
  }, {
    "Name": "Colonial Dames Octagon House",
    "Image": "NULL",
    "Address": "2645 Gough St.",
    "Date": "2/3/69",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4275,
    "latD": 37.79777778
  }, {
    "Name": "Palace Hotel and Garden Court Room",
    "Image": "NULL",
    "Address": "2 New Montgomery St. and 633 Market St.",
    "Date": "3/9/69",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4019444,
    "latD": 37.78833333
  }, {
    "Name": "San Francisco City Hall",
    "Image": "NULL",
    "Address": "1 Dr. Carlton B. Goodlett Place",
    "Date": "3/13/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4191667,
    "latD": 37.77916667
  }, {
    "Name": "Solari Building (Old French Consulate)",
    "Image": "NULL",
    "Address": "472 Jackson St.",
    "Date": "3/16/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4030556,
    "latD": 37.79638889
  }, {
    "Name": "Old Holy Virgin Russian Orthodox Cathedral",
    "Image": "NULL",
    "Address": "858-864 Fulton St.",
    "Date": "5/3/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4308333,
    "latD": 37.77805556
  }, {
    "Name": "Ghirardelli Square",
    "Image": "NULL",
    "Address": "Block bounded by North Point, Larkin, Beach and Polk Streets",
    "Date": "5/3/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4216667,
    "latD": 37.80583333
  }, {
    "Name": "Abner Phelps House",
    "Image": "NULL",
    "Address": "1111 Oak St.",
    "Date": "5/31/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4380556,
    "latD": 37.77277778
  }, {
    "Name": "Columbus Tower (Sentinel Building)",
    "Image": "NULL",
    "Address": "916-920 Kearny St.",
    "Date": "6/13/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.405,
    "latD": 37.79638889
  }, {
    "Name": "Original United States Mint and Subtreasury",
    "Image": "NULL",
    "Address": "608 Commercial St.",
    "Date": "6/14/70",
    "la": 37,
    "t": "°",
    "": ".0″N",
    "lngD": 122.4069444,
    "latD": 37.78277778
  }, {
    "Name": "Feusier Octagon House",
    "Image": "NULL",
    "Address": "1067 Green St.",
    "Date": "12/5/70",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4166667,
    "latD": 37.79833333
  }, {
    "Name": "Hallidie Building",
    "Image": "NULL",
    "Address": "130 Sutter St.",
    "Date": "4/4/71",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4030556,
    "latD": 37.79
  }, {
    "Name": "Cable Car Barn and Power House",
    "Image": "NULL",
    "Address": "Washington and Mason Streets, northwest corner",
    "Date": "10/10/71",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4113889,
    "latD": 37.79472222
  }, {
    "Name": "Nightingale House",
    "Image": "NULL",
    "Address": "201 Buchanan St.",
    "Date": "10/1/72",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4272222,
    "latD": 37.77166667
  }, {
    "Name": "Conservatory of Flowers",
    "Image": "NULL",
    "Address": "Golden Gate Park, John F. Kennedy Memorial Dr.",
    "Date": "12/4/72",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4602778,
    "latD": 37.7725
  }, {
    "Name": "Haslett Warehouse",
    "Image": "NULL",
    "Address": "680 Beach St.",
    "Date": "2/4/74",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.42,
    "latD": 37.80694444
  }, {
    "Name": "Mish House",
    "Image": "NULL",
    "Address": "1153 Oak St.",
    "Date": "7/6/74",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4383333,
    "latD": 37.77277778
  }, {
    "Name": "Flood Mansion (Pacific Union Club)",
    "Image": "NULL",
    "Address": "1000 California St.",
    "Date": "8/2/74",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4113889,
    "latD": 37.79194444
  }, {
    "Name": "Haas-Lilienthal House",
    "Image": "NULL",
    "Address": "2007 Franklin St.",
    "Date": "1/4/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4247222,
    "latD": 37.79333333
  }, {
    "Name": "Goodman Building",
    "Image": "NULL",
    "Address": "1117 Geary Blvd.",
    "Date": "2/28/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4222222,
    "latD": 37.78555556
  }, {
    "Name": "Lotta's Fountain",
    "Image": "NULL",
    "Address": "Pedestrian Island, at Intersection of Market, Geary and Kearny Streets",
    "Date": "7/19/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4033333,
    "latD": 37.78777778
  }, {
    "Name": "California Historical Society (Whittier Mansion)",
    "Image": "NULL",
    "Address": "2090 Jackson St.",
    "Date": "11/8/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4294444,
    "latD": 37.79333333
  }, {
    "Name": "Mills Building and Tower",
    "Image": "NULL",
    "Address": "220 Montgomery St. and 220 Bush St.",
    "Date": "11/8/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4016667,
    "latD": 37.79111111
  }, {
    "Name": "Alfred E. Clarke Mansion",
    "Image": "NULL",
    "Address": "250 Douglas St.",
    "Date": "12/7/75",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4394444,
    "latD": 37.75972222
  }, {
    "Name": "Geary Theater",
    "Image": "NULL",
    "Address": "415 Geary St.",
    "Date": "7/11/76",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4102778,
    "latD": 37.78694444
  }, {
    "Name": "St. John's Presbyterian Church",
    "Image": "NULL",
    "Address": "25 Lake St.",
    "Date": "9/12/76",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4586111,
    "latD": 37.78666667
  }, {
    "Name": "San Francisco Art Institute",
    "Image": "NULL",
    "Address": "800 Chestnut St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4172222,
    "latD": 37.80333333
  }, {
    "Name": "Jessie Street Substation",
    "Image": "NULL",
    "Address": "220 Jessie St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4036111,
    "latD": 37.78611111
  }, {
    "Name": "Palace of Fine Arts",
    "Image": "NULL",
    "Address": "3301 Lyon St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4483333,
    "latD": 37.80277778
  }, {
    "Name": "Old Firehouse, Engine Company No. 2 and Truck No. 6",
    "Image": "NULL",
    "Address": "1152 Oak St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.405,
    "latD": 37.79083333
  }, {
    "Name": "Ferry Building",
    "Image": "NULL",
    "Address": "The Embarcadero, foot of Market St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.3936111,
    "latD": 37.79527778
  }, {
    "Name": "Gibb-Sanborn Warehouse (Trinidad Bean and Elevator Company)",
    "Image": "NULL",
    "Address": "855 Front St., and 101 Vallejo St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4002778,
    "latD": 37.79944444
  }, {
    "Name": "Orpheum Theatre",
    "Image": "NULL",
    "Address": "1192 Market St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4147222,
    "latD": 37.77916667
  }, {
    "Name": "Koshland House",
    "Image": "NULL",
    "Address": "3800 Washington St.",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4558333,
    "latD": 37.78888889
  }, {
    "Name": "Francis Scott Key Monument",
    "Image": "NULL",
    "Address": "Golden Gate Park, East End of Music Concourse",
    "Date": "7/9/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4675,
    "latD": 37.77055556
  }, {
    "Name": "Castro Theatre",
    "Image": "NULL",
    "Address": "429 Castro St.",
    "Date": "9/3/77",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.435,
    "latD": 37.76194444
  }, {
    "Name": "Calvary Presbyterian Church (Sanctuary)",
    "Image": "NULL",
    "Address": "2501 Fillmore St.",
    "Date": "1/10/78",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4347222,
    "latD": 37.79277778
  }, {
    "Name": "Market Street Railway Substation",
    "Image": "NULL",
    "Address": "1190 Fillmore Street, at Turk Street",
    "Date": "4/23/79",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4319444,
    "latD": 37.78027778
  }, {
    "Name": "Chambord Apartments",
    "Image": "NULL",
    "Address": "1298 Sacramento St.",
    "Date": "4/23/79",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4141667,
    "latD": 37.7925
  }, {
    "Name": "Rincon Annex",
    "Image": "NULL",
    "Address": "101-199 Mission St.",
    "Date": "2/10/80",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.3933333,
    "latD": 37.79277778
  }, {
    "Name": "State Armory and Arsenal",
    "Image": "NULL",
    "Address": "14th and Mission",
    "Date": "2/10/80",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4205556,
    "latD": 37.76777778
  }, {
    "Name": "John McMullen House",
    "Image": "NULL",
    "Address": "827 Guerrero St.",
    "Date": "1/4/81",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4233333,
    "latD": 37.75777778
  }, {
    "Name": "Mechanics' Institute",
    "Image": "NULL",
    "Address": "57-65 Post Street",
    "Date": "9/6/81",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4030556,
    "latD": 37.78888889
  }, {
    "Name": "Westerfeld House",
    "Image": "NULL",
    "Address": "1198 Fulton St.",
    "Date": "12/6/81",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4363889,
    "latD": 37.77722222
  }, {
    "Name": "Notre Dame School (San Francisco)",
    "Image": "NULL",
    "Address": "351 Dolores Street",
    "Date": "12/6/81",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4063889,
    "latD": 37.79083333
  }, {
    "Name": "Dutch Windmill",
    "Image": "NULL",
    "Address": "Golden Gate Park",
    "Date": "6-Dec-81",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.5094444,
    "latD": 37.77055556
  }, {
    "Name": "Flood Building",
    "Image": "NULL",
    "Address": "870-898 Market Street",
    "Date": "7/10/82",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4075,
    "latD": 37.785
  }, {
    "Name": "Federal Reserve Bank Building (San Francisco)",
    "Image": "NULL",
    "Address": "400 Sansome St.",
    "Date": "1/7/83",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4011111,
    "latD": 37.79416667
  }, {
    "Name": "Lillie Hitchcock Coit Tower",
    "Image": "NULL",
    "Address": "1 Telegraph Hill Blvd.",
    "Date": "1/1/84",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4058333,
    "latD": 37.8025
  }, {
    "Name": "Crown Zellerbach Building",
    "Image": "NULL",
    "Address": "1 Bush St./523 Market St.",
    "Date": "5/17/87",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4,
    "latD": 37.79083333
  }, {
    "Name": "Mark Hopkins Hotel",
    "Image": "NULL",
    "Address": "850 Mason St./1 Nob Hill",
    "Date": "5/17/87",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4102778,
    "latD": 37.79166667
  }, {
    "Name": "Fairmont Hotel",
    "Image": "NULL",
    "Address": "950 Mason St.",
    "Date": "6/13/87",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4105556,
    "latD": 37.7925
  }, {
    "Name": "Frank G. Edwards House",
    "Image": "NULL",
    "Address": "1366 Guerrero St.",
    "Date": "12/17/88",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4227778,
    "latD": 37.74916667
  }, {
    "Name": "Islam Temple (Alcazar Theater)",
    "Image": "NULL",
    "Address": "650 Geary Street",
    "Date": "10/18/89",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4138889,
    "latD": 37.78666667
  }, {
    "Name": "Balboa High School",
    "Image": "NULL",
    "Address": "1000 Cayuga Avenue at Onondaga Street",
    "Date": "2/19/95",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4411111,
    "latD": 37.72194444
  }, {
    "Name": "Odd Fellows Columbarium",
    "Image": "NULL",
    "Address": "1 Loraine Court",
    "Date": "3/3/96",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4569444,
    "latD": 37.78055556
  }, {
    "Name": "Alhambra Theater",
    "Image": "NULL",
    "Address": "2320-2336 Polk Street",
    "Date": "3/3/96",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4222222,
    "latD": 37.79833333
  }, {
    "Name": "Former Engine House No. 31",
    "Image": "NULL",
    "Address": "1088 Green St.",
    "Date": "4/8/98",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4169444,
    "latD": 37.79861111
  }, {
    "Name": "Golden Gate Bridge",
    "Image": "NULL",
    "Address": "At the Presidio, U.S. Highway 101 and California Highway 1",
    "Date": "5/21/99",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4786111,
    "latD": 37.81972222
  }, {
    "Name": "Carmel Fallon Building",
    "Image": "NULL",
    "Address": "1800 Market Street",
    "Date": "11/8/98",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4241667,
    "latD": 37.77166667
  }, {
    "Name": "City Lights Bookstore",
    "Image": "NULL",
    "Address": "261-271 Columbus Avenue",
    "Date": "8/26/01",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4066667,
    "latD": 37.7975
  }, {
    "Name": "Old U.S. Mint",
    "Image": "NULL",
    "Address": "88 Fifth St.",
    "Date": "2/21/03",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4072222,
    "latD": 37.78277778
  }, {
    "Name": "Drexler-Colombo Building",
    "Image": "NULL",
    "Address": "1-21 Columbus Ave.",
    "Date": "8/23/02",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4036111,
    "latD": 37.79555556
  }, {
    "Name": "New Mission Theater",
    "Image": "NULL",
    "Address": "2550 Mission",
    "Date": "5/27/04",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4188889,
    "latD": 37.75638889
  }, {
    "Name": "Golden Gate Park Music Concourse",
    "Image": "NULL",
    "Address": "Tea Garden Drive",
    "Date": "12/16/05",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4675,
    "latD": 37.77055556
  }, {
    "Name": "Doggie Diner sign",
    "Image": "NULL",
    "Address": "Sloat and 45th Avenue",
    "Date": "8/11/06",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.5030556,
    "latD": 37.73555556
  }, {
    "Name": "Mission High School",
    "Image": "NULL",
    "Address": "3750 18th Street",
    "Date": "9/2/07",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4272222,
    "latD": 37.76166667
  }, {
    "Name": "Metro Theater",
    "Image": "NULL",
    "Address": "2055 Union Street",
    "Date": "7/21/09",
    "la": 37,
    "t": "°",
    "": "″N",
    "lngD": 122.4330556,
    "latD": 37.79694444
  }
];

export const SFLandmarks = landmarks.map((maphash) => {
  let hash = {};
  hash['pos'] = {
    latitude: parseFloat(maphash['latD']),
    longitude: parseFloat(-maphash['lngD'])
  };
  hash['name'] = maphash['Name'];
  return hash;
});
// getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2)
export function selectedLandmarks(curlat, curlng, previousArr) {
  console.log('prev arr', previousArr);
  let sortedLandmarks = SFLandmarks.sort(function (a, b) {

    let landmarklatA = a.pos.latitude;
    let landmarklngA = a.pos.longitude;
    let landmarklatB = b.pos.latitude;
    let landmarklngB = b.pos.longitude;
    let distanceA = getDistanceFromLatLonInKm(landmarklatA, landmarklngA, curlat, curlng);
    let distanceB = getDistanceFromLatLonInKm(landmarklatB, landmarklngB, curlat, curlng);
    const distanceBetween = distanceA - distanceB;
    return (distanceBetween > 0.05)
      ? distanceBetween
      : 1000;
  });
  sortedLandmarks = sortedLandmarks.filter((landmark) => !(previousArr.includes(landmark.latitude)));
  console.log('sortedLandmark', sortedLandmarks.slice(0, 5));
  return sortedLandmarks.slice(0, 5);
}
