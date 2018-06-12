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
  }, {
    "Name": "Salesforce Tower",
    "latD": 37.79,
    "lngD": 122.3969444
  }, {
    "Name": "Transamerica Pyramid",
    "latD": 37.7952,
    "lngD": 122.4028
  }, {
    "Name": "181 Fremont",
    "latD": 37.78972222,
    "lngD": 122.3952778
  }, {
    "Name": "555 California Street",
    "latD": 37.7919,
    "lngD": 122.4038
  }, {
    "Name": "345 California Center",
    "latD": 37.7925,
    "lngD": 122.4005
  }, {
    "Name": "Millennium Tower",
    "latD": 37.7904,
    "lngD": 122.3961
  }, {
    "Name": "One Rincon Hill South Tower",
    "latD": 37.78577778,
    "lngD": 122.3921389
  }, {
    "Name": "50 Fremont Center",
    "latD": 37.79047222,
    "lngD": 122.39725
  }, {
    "Name": "101 California Street",
    "latD": 37.79285,
    "lngD": 122.3979306
  }, {
    "Name": "Market Center",
    "latD": 37.78955,
    "lngD": 122.4003
  }, {
    "Name": "Four Embarcadero Center",
    "latD": 37.7952,
    "lngD": 122.3961
  }, {
    "Name": "One Embarcadero Center",
    "latD": 37.7945,
    "lngD": 122.3997
  }, {
    "Name": "44 Montgomery Street",
    "latD": 37.7898,
    "lngD": 122.4018
  }, {
    "Name": "Spear Tower",
    "latD": 37.79328889,
    "lngD": 122.3945194
  }, {
    "Name": "One Sansome Street",
    "latD": 37.79041667,
    "lngD": 122.4012778
  }, {
    "Name": "One Rincon Hill North Tower",
    "latD": 37.7864,
    "lngD": 122.3920667
  }, {
    "Name": "One Front Street",
    "latD": 37.79180556,
    "lngD": 122.3988056
  }, {
    "Name": "First Market Tower",
    "latD": 37.7905,
    "lngD": 122.3991
  }, {
    "Name": "McKesson Plaza",
    "latD": 37.7887,
    "lngD": 122.4026
  }, {
    "Name": "425 Market Street",
    "latD": 37.7911,
    "lngD": 122.3981
  }, {
    "Name": "One Montgomery Tower",
    "latD": 37.7891,
    "lngD": 122.4033
  }, {
    "Name": "333 Bush Street",
    "latD": 37.7906,
    "lngD": 122.403
  }, {
    "Name": "Hilton San Francisco Tower I",
    "latD": 37.7853,
    "lngD": 122.4109
  }, {
    "Name": "Pacific Gas &amp; Electric Building",
    "latD": 37.7916,
    "lngD": 122.3958
  }, {
    "Name": "50 California Street",
    "latD": 37.794,
    "lngD": 122.3974
  }, {
    "Name": "555 Mission Street",
    "latD": 37.7885,
    "lngD": 122.3986
  }, {
    "Name": "St. Regis Museum Tower",
    "latD": 37.7863,
    "lngD": 122.4013
  }, {
    "Name": "100 Pine Center",
    "latD": 37.79258889,
    "lngD": 122.3989472
  }, {
    "Name": "45 Fremont Street",
    "latD": 37.7912,
    "lngD": 122.3971
  }, {
    "Name": "333 Market Street",
    "latD": 37.79193889,
    "lngD": 122.3975
  }, {
    "Name": "650 California Street",
    "latD": 37.79283333,
    "lngD": 122.4051944
  }, {
    "Name": "LUMINA I",
    "latD": 37.78869444,
    "lngD": 122.3922194
  }, {
    "Name": "100 First Plaza",
    "latD": 37.78916667,
    "lngD": 122.3975
  }, {
    "Name": "340 Fremont Street",
    "latD": 37.78700833,
    "lngD": 122.3927389
  }, {
    "Name": "399 Fremont Street",
    "latD": 37.78720556,
    "lngD": 122.3920389
  }, {
    "Name": "One California",
    "latD": 37.7932,
    "lngD": 122.3972
  }, {
    "Name": "San Francisco Marriott Marquis",
    "latD": 37.7849,
    "lngD": 122.4043
  }, {
    "Name": "Russ Building",
    "latD": 37.7912,
    "lngD": 122.4028
  }, {
    "Name": "140 New Montgomery",
    "latD": 37.787,
    "lngD": 122.4
  }, {
    "Name": "Jasper",
    "latD": 37.78588611,
    "lngD": 122.3937806
  }, {
    "Name": "The Infinity II",
    "latD": 37.78937778,
    "lngD": 122.3906639
  }, {
    "Name": "JPMorgan Chase Building",
    "latD": 37.78877778,
    "lngD": 122.3994444
  }, {
    "Name": "The Paramount",
    "latD": 37.78666667,
    "lngD": 122.4019444
  }, {
    "Name": "Providian Financial Building",
    "latD": 37.79122222,
    "lngD": 122.3950444
  }, {
    "Name": "Three Embarcadero Center",
    "latD": 37.79513889,
    "lngD": 122.3973611
  }, {
    "Name": "Two Embarcadero Center",
    "latD": 37.79494444,
    "lngD": 122.3984722
  }, {
    "Name": "350 Mission Street",
    "latD": 37.79091944,
    "lngD": 122.3967361
  }, {
    "Name": "595 Market Street",
    "latD": 37.78925278,
    "lngD": 122.4008111
  }, {
    "Name": "123 Mission Street",
    "latD": 37.7919,
    "lngD": 122.3945
  }, {
    "Name": "101 Montgomery",
    "latD": 37.7904,
    "lngD": 122.4024
  }, {
    "Name": "Embarcadero West",
    "latD": 37.79386111,
    "lngD": 122.4004444
  }, {
    "Name": "100 Van Ness Avenue",
    "latD": 37.77672222,
    "lngD": 122.4191944
  }, {
    "Name": "LUMINA II",
    "latD": 37.78874167,
    "lngD": 122.3915028
  }, {
    "Name": "Farallon Islands",
    "latD": 37.69916667,
    "lngD": 123.0027778
  }, {
    "Name": "Geneva Office Building and Power House",
    "latD": 37.72083333,
    "lngD": 122.4463889
  }, {
    "Name": "Drydock 4 Hunters Point Naval Shipyard",
    "latD": 37.72555556,
    "lngD": 122.365
  }, {
    "Name": "Hunters Point Commercial Drydock Historic District",
    "latD": 37.72694444,
    "lngD": 122.3613889
  }, {
    "Name": "Delia Fleishhacker Memorial Building",
    "latD": 37.73361111,
    "lngD": 122.5063889
  }, {
    "Name": "South San Francisco Opera House",
    "latD": 37.735,
    "lngD": 122.3902778
  }, {
    "Name": "Frank G. Edwards House",
    "latD": 37.74916667,
    "lngD": 122.4227778
  }, {
    "Name": "Ohlandt Newlyweds House",
    "latD": 37.75222222,
    "lngD": 122.4063889
  }, {
    "Name": "Trinity Presbyterian Church",
    "latD": 37.75388889,
    "lngD": 122.4175
  }, {
    "Name": "Moss Flats Building",
    "latD": 37.75611111,
    "lngD": 122.5086111
  }, {
    "Name": "New Mission Theater",
    "latD": 37.75638889,
    "lngD": 122.4188889
  }, {
    "Name": "Henry Geilfuss House",
    "latD": 37.75694444,
    "lngD": 122.4130556
  }, {
    "Name": "Liberty Street Historic District",
    "latD": 37.7575,
    "lngD": 122.4236111
  }, {
    "Name": "John McMullen House",
    "latD": 37.75777778,
    "lngD": 122.4233333
  }, {
    "Name": "Irving Murray Scott School",
    "latD": 37.75861111,
    "lngD": 122.3894444
  }, {
    "Name": "Schoenstein and Company Pipe Organ Factory",
    "latD": 37.75888889,
    "lngD": 122.4116667
  }, {
    "Name": "Union Iron Works Historic District",
    "latD": 37.76083333,
    "lngD": 122.3844444
  }, {
    "Name": "Girls Club",
    "latD": 37.76111111,
    "lngD": 122.4183333
  }, {
    "Name": "Pioneer Trunk Factory-C. A. Malm &amp; Co.",
    "latD": 37.76222222,
    "lngD": 122.4147222
  }, {
    "Name": "Mission Dolores",
    "latD": 37.76416667,
    "lngD": 122.4266667
  }, {
    "Name": "St. Joseph's Hospital",
    "latD": 37.7675,
    "lngD": 122.44
  }, {
    "Name": "Delano House",
    "latD": 37.76777778,
    "lngD": 122.4383333
  }, {
    "Name": "San Francisco National Guard Armory and Arsenal",
    "latD": 37.76805556,
    "lngD": 122.4202778
  }, {
    "Name": "Park View Hotel",
    "latD": 37.76833333,
    "lngD": 122.4533333
  }, {
    "Name": "Golden Gate Park",
    "latD": 37.76916667,
    "lngD": 122.4836111
  }, {
    "Name": "Beach Chalet",
    "latD": 37.76944444,
    "lngD": 122.5102778
  }, {
    "Name": "U.S. Mint",
    "latD": 37.77027778,
    "lngD": 122.4275
  }, {
    "Name": "Richard P. Doolan Residence and Storefronts",
    "latD": 37.77027778,
    "lngD": 122.4463889
  }, {
    "Name": "Building at 465 Tenth St.",
    "latD": 37.77083333,
    "lngD": 122.41
  }, {
    "Name": "San Francisco Juvenile Court and Detention Center",
    "latD": 37.77083333,
    "lngD": 122.4205556
  }, {
    "Name": "John Spencer House",
    "latD": 37.77111111,
    "lngD": 122.4402778
  }, {
    "Name": "Baker and Hamilton",
    "latD": 37.77138889,
    "lngD": 122.4019444
  }, {
    "Name": "National Carbon Company Building",
    "latD": 37.77138889,
    "lngD": 122.4052778
  }, {
    "Name": "San Francisco State Teacher's College",
    "latD": 37.77138889,
    "lngD": 122.4255556
  }, {
    "Name": "Jackson Brewing Company",
    "latD": 37.77194444,
    "lngD": 122.4138889
  }, {
    "Name": "Golden Gate Park Conservatory",
    "latD": 37.7725,
    "lngD": 122.4602778
  }, {
    "Name": "Abner Phelps House",
    "latD": 37.77277778,
    "lngD": 122.4380556
  }, {
    "Name": "Mish House",
    "latD": 37.77277778,
    "lngD": 122.4383333
  }, {
    "Name": "House at 584 Page Street",
    "latD": 37.77333333,
    "lngD": 122.4302778
  }, {
    "Name": "St. Joseph's Church and Complex",
    "latD": 37.77361111,
    "lngD": 122.4144444
  }, {
    "Name": "Southern Pacific Company Hospital Historic District",
    "latD": 37.77361111,
    "lngD": 122.4408333
  }, {
    "Name": "Russell Warren House",
    "latD": 37.77416667,
    "lngD": 122.4269444
  }, {
    "Name": "Sacred Heart Parish Complex",
    "latD": 37.77472222,
    "lngD": 122.4311111
  }, {
    "Name": "William Westerfeld House",
    "latD": 37.77722222,
    "lngD": 122.4363889
  }, {
    "Name": "Camera Obscura",
    "latD": 37.77833333,
    "lngD": 122.5141667
  }, {
    "Name": "U.S. Post Office and Courthouse",
    "latD": 37.77944444,
    "lngD": 122.4111111
  }, {
    "Name": "San Francisco Civic Center Historic District",
    "latD": 37.77944444,
    "lngD": 122.4175
  }, {
    "Name": "Point Lobos Archaeological Sites",
    "latD": 37.78,
    "lngD": 122.5138889
  }, {
    "Name": "Federal Office Building",
    "latD": 37.78055556,
    "lngD": 122.4144444
  }, {
    "Name": "The Lydia",
    "latD": 37.78083333,
    "lngD": 122.3883333
  }, {
    "Name": "Building at 1840-1842 Eddy Street",
    "latD": 37.78083333,
    "lngD": 122.4388889
  }, {
    "Name": "House at 1239-1245 Scott Street",
    "latD": 37.78138889,
    "lngD": 122.4375
  }, {
    "Name": "House at 1249-1251 Scott Street",
    "latD": 37.78166667,
    "lngD": 122.4375
  }, {
    "Name": "Market Street Theatre and Loft District",
    "latD": 37.78194444,
    "lngD": 122.4108333
  }, {
    "Name": "House at 1321 Scott Street",
    "latD": 37.78194444,
    "lngD": 122.4375
  }, {
    "Name": "House at 1331-1335 Scott Street",
    "latD": 37.78222222,
    "lngD": 122.4375
  }, {
    "Name": "Building at 33-35 Beideman Place",
    "latD": 37.78222222,
    "lngD": 122.4386111
  }, {
    "Name": "Building at 45-47 Beideman Place",
    "latD": 37.78222222,
    "lngD": 122.4386111
  }, {
    "Name": "Veterans Affairs Medical Center-San Francisco, California",
    "latD": 37.78222222,
    "lngD": 122.5044444
  }, {
    "Name": "Haas Candy Factory",
    "latD": 37.7825,
    "lngD": 122.4077778
  }, {
    "Name": "YMCA Hotel",
    "latD": 37.7825,
    "lngD": 122.415
  }, {
    "Name": "Stadtmuller House",
    "latD": 37.7825,
    "lngD": 122.4216667
  }, {
    "Name": "St. Paulus Lutheran Church",
    "latD": 37.7825,
    "lngD": 122.4238889
  }, {
    "Name": "Old U.S. Mint",
    "latD": 37.78277778,
    "lngD": 122.4072222
  }, {
    "Name": "Fort Miley Military Reservation",
    "latD": 37.78277778,
    "lngD": 122.5088889
  }, {
    "Name": "Herald Hotel",
    "latD": 37.78388889,
    "lngD": 122.4127778
  }, {
    "Name": "Uptown Tenderloin Historic District",
    "latD": 37.78388889,
    "lngD": 122.4141667
  }, {
    "Name": "Don Lee Building",
    "latD": 37.785,
    "lngD": 122.4211111
  }, {
    "Name": "Myrtle Street Flats",
    "latD": 37.78527778,
    "lngD": 122.4222222
  }, {
    "Name": "Goodman Building",
    "latD": 37.78555556,
    "lngD": 122.4222222
  }, {
    "Name": "Jessie Street Substation",
    "latD": 37.78611111,
    "lngD": 122.4036111
  }, {
    "Name": "Hotel Californian",
    "latD": 37.78638889,
    "lngD": 122.4113889
  }, {
    "Name": "Building at 1813-1813B Sutter Street",
    "latD": 37.78638889,
    "lngD": 122.4305556
  }, {
    "Name": "Building at 735 Market Street",
    "latD": 37.78666667,
    "lngD": 122.4041667
  }, {
    "Name": "Bush Street-Cottage Row Historic District",
    "latD": 37.78666667,
    "lngD": 122.4322222
  }, {
    "Name": "St. John's Presbyterian Church",
    "latD": 37.78666667,
    "lngD": 122.4594444
  }, {
    "Name": "Geary Theatre",
    "latD": 37.78694444,
    "lngD": 122.4102778
  }, {
    "Name": "Building at 1735-1737 Webster Street",
    "latD": 37.78694444,
    "lngD": 122.4319444
  }, {
    "Name": "Second and Howard Streets District",
    "latD": 37.78722222,
    "lngD": 122.3991667
  }, {
    "Name": "Rialto Building",
    "latD": 37.78722222,
    "lngD": 122.4002778
  }, {
    "Name": "Theodore F. Payne House",
    "latD": 37.78722222,
    "lngD": 122.4238889
  }, {
    "Name": "City of Paris Building",
    "latD": 37.7875,
    "lngD": 122.4063889
  }, {
    "Name": "Grabhorn Press Building",
    "latD": 37.7875,
    "lngD": 122.4225
  }, {
    "Name": "Lotta Crabtree Fountain",
    "latD": 37.78777778,
    "lngD": 122.4033333
  }, {
    "Name": "Mutual Savings Bank Building",
    "latD": 37.78777778,
    "lngD": 122.4038889
  }, {
    "Name": "Fillmore-Pine Building",
    "latD": 37.78777778,
    "lngD": 122.4336111
  }, {
    "Name": "Dr. Martin M. Krotoszyner Medical Offices and House",
    "latD": 37.78805556,
    "lngD": 122.4166667
  }, {
    "Name": "Coffin-Redington Building",
    "latD": 37.78861111,
    "lngD": 122.3927778
  }, {
    "Name": "Lower Nob Hill Apartment Hotel District",
    "latD": 37.78861111,
    "lngD": 122.4136111
  }, {
    "Name": "Woman's Athletic Club of San Francisco",
    "latD": 37.78888889,
    "lngD": 122.4111111
  }, {
    "Name": "Koshland House",
    "latD": 37.78888889,
    "lngD": 122.4558333
  }, {
    "Name": "Four Fifty Sutter Building",
    "latD": 37.78944444,
    "lngD": 122.4077778
  }, {
    "Name": "Tobin House",
    "latD": 37.78944444,
    "lngD": 122.4266667
  }, {
    "Name": "Temple Sherith Israel",
    "latD": 37.78944444,
    "lngD": 122.4319444
  }, {
    "Name": "Hunter-Dulin Building",
    "latD": 37.79,
    "lngD": 122.4025
  }, {
    "Name": "Hallidie Building",
    "latD": 37.79,
    "lngD": 122.4030556
  }, {
    "Name": "Atherton House",
    "latD": 37.79,
    "lngD": 122.4272222
  }, {
    "Name": "Swedenborgian Church",
    "latD": 37.79027778,
    "lngD": 122.4461111
  }, {
    "Name": "The Real Estate Associates (TREA) Houses",
    "latD": 37.79055556,
    "lngD": 122.4347222
  }, {
    "Name": "Roos House",
    "latD": 37.79055556,
    "lngD": 122.4527778
  }, {
    "Name": "San Francisco Fire Department Engine Co. Number 2",
    "latD": 37.79083333,
    "lngD": 122.405
  }, {
    "Name": "Folger Coffee Company Building",
    "latD": 37.79111111,
    "lngD": 122.3925
  }, {
    "Name": "Mills Building and Tower",
    "latD": 37.79111111,
    "lngD": 122.4016667
  }, {
    "Name": "Paige Motor Car Co. Building",
    "latD": 37.79111111,
    "lngD": 122.4227778
  }, {
    "Name": "Dallam-Merritt House",
    "latD": 37.79166667,
    "lngD": 122.4322222
  }, {
    "Name": "Julian Waybur House",
    "latD": 37.79166667,
    "lngD": 122.4480556
  }, {
    "Name": "James C. Flood Mansion",
    "latD": 37.79194444,
    "lngD": 122.4113889
  }, {
    "Name": "C. A. Belden House",
    "latD": 37.79222222,
    "lngD": 122.4258333
  }, {
    "Name": "Pacific Gas and Electric Company General Office Building and Annex",
    "latD": 37.7925,
    "lngD": 122.3969444
  }, {
    "Name": "Fairmont Hotel",
    "latD": 37.7925,
    "lngD": 122.4105556
  }, {
    "Name": "Chambord Apartments",
    "latD": 37.7925,
    "lngD": 122.4141667
  }, {
    "Name": "Rincon Annex",
    "latD": 37.79277778,
    "lngD": 122.3933333
  }, {
    "Name": "Matson Building and Annex",
    "latD": 37.79277778,
    "lngD": 122.3966667
  }, {
    "Name": "Calvary Presbyterian Church",
    "latD": 37.79277778,
    "lngD": 122.4347222
  }, {
    "Name": "Audiffred Building",
    "latD": 37.79333333,
    "lngD": 122.3925
  }, {
    "Name": "Haas-Lilienthal House",
    "latD": 37.79333333,
    "lngD": 122.4247222
  }, {
    "Name": "Whittier Mansion",
    "latD": 37.79333333,
    "lngD": 122.4294444
  }, {
    "Name": "Six-Inch Rifled Gun No. 9",
    "latD": 37.79361111,
    "lngD": 122.4827778
  }, {
    "Name": "Ferry Station Post Office Building",
    "latD": 37.79388889,
    "lngD": 122.3922222
  }, {
    "Name": "Pacific Gas and Electric Company Substation J",
    "latD": 37.79388889,
    "lngD": 122.4022222
  }, {
    "Name": "San Francisco Cable Cars",
    "latD": 37.79388889,
    "lngD": 122.4161111
  }, {
    "Name": "Apollo",
    "latD": 37.79416667,
    "lngD": 122.4005556
  }, {
    "Name": "Federal Reserve Bank of San Francisco",
    "latD": 37.79416667,
    "lngD": 122.4011111
  }, {
    "Name": "Bank of Italy",
    "latD": 37.79472222,
    "lngD": 122.4030556
  }, {
    "Name": "Niantic",
    "latD": 37.795,
    "lngD": 122.4016667
  }, {
    "Name": "Union Ferry Depot",
    "latD": 37.79527778,
    "lngD": 122.3936111
  }, {
    "Name": "Albert Wilford Houses",
    "latD": 37.79527778,
    "lngD": 122.4322222
  }, {
    "Name": "Colombo Building",
    "latD": 37.79555556,
    "lngD": 122.4036111
  }, {
    "Name": "International Hotel",
    "latD": 37.79611111,
    "lngD": 122.405
  }, {
    "Name": "U.S. Customhouse",
    "latD": 37.79638889,
    "lngD": 122.4008333
  }, {
    "Name": "U.S. Appraisers Stores and Immigration Station",
    "latD": 37.79638889,
    "lngD": 122.4016667
  }, {
    "Name": "Burr House",
    "latD": 37.79638889,
    "lngD": 122.4263889
  }, {
    "Name": "Presidio",
    "latD": 37.79638889,
    "lngD": 122.4652778
  }, {
    "Name": "Pier One",
    "latD": 37.79694444,
    "lngD": 122.3947222
  }, {
    "Name": "Port of San Francisco Embarcadero Historic District",
    "latD": 37.79694444,
    "lngD": 122.395
  }, {
    "Name": "Jackson Square Historic District",
    "latD": 37.79694444,
    "lngD": 122.4033333
  }, {
    "Name": "Central Embarcadero Piers Historic District",
    "latD": 37.7975,
    "lngD": 122.3955556
  }, {
    "Name": "Russian Hill-Vallejo Street Crest District",
    "latD": 37.79777778,
    "lngD": 122.4144444
  }, {
    "Name": "McElroy Octagon House",
    "latD": 37.79777778,
    "lngD": 122.4275
  }, {
    "Name": "Old Ohio Street Houses",
    "latD": 37.79805556,
    "lngD": 122.4030556
  }, {
    "Name": "M.V.",
    "latD": 37.79833333,
    "lngD": 122.3952778
  }, {
    "Name": "Russian Hill-Paris Block Architectural District",
    "latD": 37.79833333,
    "lngD": 122.4163889
  }, {
    "Name": "Feusier Octagon House",
    "latD": 37.79833333,
    "lngD": 122.4166667
  }, {
    "Name": "Engine House No. 31",
    "latD": 37.79861111,
    "lngD": 122.4169444
  }, {
    "Name": "Russian Hill-Macondray Lane District",
    "latD": 37.79916667,
    "lngD": 122.4147222
  }, {
    "Name": "Daniel Gibb &amp; Co. Warehouse",
    "latD": 37.79944444,
    "lngD": 122.4002778
  }, {
    "Name": "San Francisco–Oakland Bay Bridge",
    "latD": 37.80055556,
    "lngD": 122.3752778
  }, {
    "Name": "Fuller Company Glass Warehouse",
    "latD": 37.80083333,
    "lngD": 122.4005556
  }, {
    "Name": "House at 1254-1256 Montgomery Street",
    "latD": 37.80083333,
    "lngD": 122.4041667
  }, {
    "Name": "Armour &amp; Co. Building",
    "latD": 37.80111111,
    "lngD": 122.4013889
  }, {
    "Name": "San Francisco Public Library North Beach Branch",
    "latD": 37.80194444,
    "lngD": 122.4127778
  }, {
    "Name": "Coit Memorial Tower",
    "latD": 37.8025,
    "lngD": 122.4058333
  }, {
    "Name": "Palace of Fine Arts",
    "latD": 37.80277778,
    "lngD": 122.4483333
  }, {
    "Name": "Frederick Griffing's",
    "latD": 37.80305556,
    "lngD": 122.4022222
  }, {
    "Name": "San Francisco Art Institute",
    "latD": 37.80333333,
    "lngD": 122.4172222
  }, {
    "Name": "Sinton House",
    "latD": 37.80361111,
    "lngD": 122.4219444
  }, {
    "Name": "One Lombard Street",
    "latD": 37.80416667,
    "lngD": 122.4027778
  }, {
    "Name": "Belt Railroad Engine House and Sandhouse",
    "latD": 37.80472222,
    "lngD": 122.4033333
  }, {
    "Name": "Pioneer Woolen Mills and D. Ghirardelli Company",
    "latD": 37.80555556,
    "lngD": 122.4236111
  }, {
    "Name": "San Francisco Maritime National Historic Park",
    "latD": 37.80555556,
    "lngD": 122.4280556
  }, {
    "Name": "Haslett Warehouse",
    "latD": 37.80694444,
    "lngD": 122.42
  }, {
    "Name": "Aquatic Park Historic District",
    "latD": 37.80694444,
    "lngD": 122.4227778
  }, {
    "Name": "Yerba Buena Island Lighthouse",
    "latD": 37.80722222,
    "lngD": 122.3622222
  }, {
    "Name": "San Francisco Port of Embarkation, US Army",
    "latD": 37.80722222,
    "lngD": 122.4311111
  }, {
    "Name": "Otis Elevator Company Building",
    "latD": 37.80777778,
    "lngD": 122.4094444
  }, {
    "Name": "Lewis Ark",
    "latD": 37.80805556,
    "lngD": 122.4208333
  }, {
    "Name": "Pumping Station No. 2 San Francisco Fire Department Auxiliary Water Supply Syste" +
        "m",
    "latD": 37.80805556,
    "lngD": 122.4269444
  }, {
    "Name": "Tubbs Cordage Company Office Building",
    "latD": 37.80888889,
    "lngD": 122.4211111
  }, {
    "Name": "C. A. Thayer",
    "latD": 37.80916667,
    "lngD": 122.4216667
  }, {
    "Name": "Eureka",
    "latD": 37.80972222,
    "lngD": 122.4216667
  }, {
    "Name": "Balclutha",
    "latD": 37.80972222,
    "lngD": 122.4225
  }, {
    "Name": "USS",
    "latD": 37.81,
    "lngD": 122.4163889
  }, {
    "Name": "Hercules",
    "latD": 37.81,
    "lngD": 122.4222222
  }, {
    "Name": "ALMA",
    "latD": 37.81027778,
    "lngD": 122.4227778
  }, {
    "Name": "Fort Point National Historic Site",
    "latD": 37.81083333,
    "lngD": 122.4769444
  }, {
    "Name": "SS",
    "latD": 37.81111111,
    "lngD": 122.4180556
  }, {
    "Name": "Quarters 10 and Building 267, Yerba Buena Island",
    "latD": 37.81194444,
    "lngD": 122.3641667
  }, {
    "Name": "Quarters 1, Yerba Buena Island Naval Training Station",
    "latD": 37.81277778,
    "lngD": 122.3636111
  }, {
    "Name": "Senior Officers Quarters Historic District, Yerba Buena Island",
    "latD": 37.81305556,
    "lngD": 122.3641667
  }, {
    "Name": "Torpedo Storehouse-Torpedo (Mine) Assembly Building &amp; Long Range Accuracy St" +
        "orage Building",
    "latD": 37.81472222,
    "lngD": 122.3591667
  }, {
    "Name": "Administration Building, Treasure Island",
    "latD": 37.81722222,
    "lngD": 122.3711111
  }, {
    "Name": "Hall of Transportation, Treasure Island",
    "latD": 37.81861111,
    "lngD": 122.3677778
  }, {
    "Name": "Palace of Fine and Decorative Arts, Treasure Island",
    "latD": 37.81972222,
    "lngD": 122.3661111
  }, {
    "Name": "Alcatraz",
    "latD": 37.82666667,
    "lngD": 122.4227778
  }, {
    "Name": "Penguin's Prayer",
    "latD": 37.71313611,
    "lngD": 122.4853667
  }, {
    "Name": "Peace",
    "latD": 37.714775,
    "lngD": 122.4758917
  }, {
    "Name": "Captain Juan Bautista de Anza",
    "latD": 37.72833611,
    "lngD": 122.4936111
  }, {
    "Name": "Florence Nightingale",
    "latD": 37.74775833,
    "lngD": 122.4572889
  }, {
    "Name": "Bear",
    "latD": 37.76301389,
    "lngD": 122.4599222
  }, {
    "Name": "Bear and Cubs",
    "latD": 37.76321111,
    "lngD": 122.4589083
  }, {
    "Name": "Father Junipero Serra",
    "latD": 37.76404722,
    "lngD": 122.4269444
  }, {
    "Name": "Beethoven",
    "latD": 37.76958889,
    "lngD": 122.4678889
  }, {
    "Name": "Roald Amundsen",
    "latD": 37.76993333,
    "lngD": 122.5104333
  }, {
    "Name": "Thomas Garrigue Masaryk",
    "latD": 37.77125833,
    "lngD": 122.47095
  }, {
    "Name": "Roman Gladiator",
    "latD": 37.77171667,
    "lngD": 122.4682361
  }, {
    "Name": "Thomas Starr King",
    "latD": 37.77228889,
    "lngD": 122.466275
  }, {
    "Name": "Horse",
    "latD": 37.77360556,
    "lngD": 122.4557583
  }, {
    "Name": "Balanced-Unbalanced: Balanced-Unbalanced T",
    "latD": 37.77745833,
    "lngD": 122.4200444
  }, {
    "Name": "Large Four Piece Reclining Figure",
    "latD": 37.7781,
    "lngD": 122.4200444
  }, {
    "Name": "Harry Lundeberg (1901-1957)",
    "latD": 37.78644167,
    "lngD": 122.3926806
  }, {
    "Name": "Andrew Furuseth",
    "latD": 37.78646667,
    "lngD": 122.3927833
  }, {
    "Name": "Tau",
    "latD": 37.79165,
    "lngD": 122.3932694
  }, {
    "Name": "Redding School, Self-Portrait",
    "latD": 37.78436389,
    "lngD": 122.4119167
  }, {
    "Name": "Dr. Sun Yat-sen",
    "latD": 37.79206944,
    "lngD": 122.4054528
  }, {
    "Name": "Doors of Paradise",
    "latD": 37.79194444,
    "lngD": 122.4130556
  }, {
    "Name": "Transcendence",
    "latD": 37.79246111,
    "lngD": 122.4040306
  }, {
    "Name": "Guardian",
    "latD": 37.79279444,
    "lngD": 122.4049417
  }, {
    "Name": "International Longshoreman's and Warehousemen's Union Memorial",
    "latD": 37.79341667,
    "lngD": 122.3934167
  }, {
    "Name": "Bronze Sculpture",
    "latD": 37.79353889,
    "lngD": 122.3988389
  }, {
    "Name": "Dyonisos",
    "latD": 37.79444444,
    "lngD": 122.3994444
  }, {
    "Name": "Hermes",
    "latD": 37.79444444,
    "lngD": 122.3994444
  }, {
    "Name": "Goddess of Democracy",
    "latD": 37.79490556,
    "lngD": 122.4053639
  }, {
    "Name": "Puddle Jumpers",
    "latD": 37.79496667,
    "lngD": 122.4019
  }, {
    "Name": "Untitled",
    "latD": 37.79573333,
    "lngD": 122.401475
  }, {
    "Name": "Horse",
    "latD": 37.796025,
    "lngD": 122.3988056
  }, {
    "Name": "Chinese Foo Dogs",
    "latD": 37.79676944,
    "lngD": 122.4076361
  }, {
    "Name": "The Thinker",
    "latD": 37.78475278,
    "lngD": 122.5004722
  }, {
    "Name": "Dragon Relief",
    "latD": 37.79723056,
    "lngD": 122.4113083
  }, {
    "Name": "Two Open Rectangles Eccentric Variation VII Triangle Section",
    "latD": 37.79766667,
    "lngD": 122.3992417
  }, {
    "Name": "Guglielmo Marconi Memorial Plaque",
    "latD": 37.80355833,
    "lngD": 122.4064806
  }, {
    "Name": "Andrea",
    "latD": 37.80600278,
    "lngD": 122.4225028
  }, {
    "Name": "Saint Francis de la Varenne",
    "latD": 37.80743889,
    "lngD": 122.4140333
  }, {
    "Name": "Skygate",
    "latD": 37.808075,
    "lngD": 122.4080972
  }, {
    "Name": "Guardians of the Gate",
    "latD": 37.80873333,
    "lngD": 122.4108056
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
  console.log('prev arr', previousArr, curlat, curlng);
  // make sure user won't visit visted landmark
  const filteredLandmarks = SFLandmarks.filter((landmark) => !(previousArr.includes(landmark.name)));

  let sortedLandmarks = filteredLandmarks.sort(function (a, b) {

    let landmarklatA = a.pos.latitude;
    let landmarklngA = a.pos.longitude;
    let landmarklatB = b.pos.latitude;
    let landmarklngB = b.pos.longitude;
    let distanceA = getDistanceFromLatLonInKm(landmarklatA, landmarklngA, curlat, curlng);
    let distanceB = getDistanceFromLatLonInKm(landmarklatB, landmarklngB, curlat, curlng);
    const distanceBetween = distanceA - distanceB;
    return distanceBetween;
  });

  sortedLandmarks.filter(landmark => getDistanceFromLatLonInKm(curlat, curlng, landmark.pos.latitude, landmark.pos.longitude) > 0.05);
  let slicedLandmarks = sortedLandmarks.slice(0, 5);
  appendType(slicedLandmarks);
  console.log('sliced', slicedLandmarks);
  return slicedLandmarks;
}

function appendType(landArr) {
  const resources = ['iron', 'copper', 'aluminum', 'gold', 'titanium'];
  landArr.forEach(landmark => {
    landmark.resource = resources[Math.floor(Math.random() * resources.length)];
  });
}
