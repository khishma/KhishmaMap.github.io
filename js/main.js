//Submitted by: Khishma Modoosoodun (S1070838)
// Using Leaflet for creating the Hallstatt tourist map and adding controls for interacting with the map 
//15 places of interest are chosen to display useful information bout the respective place with a picture
//Controlling the zooming of the respective features are done

//
//--- Part 1: adding base maps ---
//

//creating the map; defining the location in the center of the map (geographic coords) and the zoom level. These are properties of the leaflet map object
//the map window has been given the id 'map' in the .html file
var map = L.map('map', {
	center: [47.562233, 13.649262],
	zoom: 14
});

// alternatively the setView method could be used for placing the map in the window
//var map = L.map('map').setView([47.56, 13.6], 14);


//adding two base maps [OpenMapSurferRoads and Cyclosm]
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var CyclOSM = L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


//var landscape = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
//attribution: 'Tiles from Thunderforest'});

//var toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>' });
//	toner.addTo(map);

// for using the two base maps in the layer control, I defined a baseMaps variable

var baseMaps = {
	"OpenMapSurferRoads": OpenStreetMap_Mapnik,
	"BikePath": CyclOSM,
	
}



//
//---- Part 2: Adding a scale bar
//
L.control.scale({imperial:false, position:'bottomleft'}).addTo(map);



//adding a GeoJSON polygon feature set, I have created a new style for ferry routes and bus stops
var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
}

var myStyleferry = {
    "color": "#00fff8",
    "weight": 5,
    "opacity": 0.65
}



/*
var attractions= L.geoJson(attractions, {
    style: myStyle,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Name);
    }
});

attractions.addTo(map);
*/

/*var attractions = L.geoJson(attractions, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng);
	},
	onEachFeature: function(feature, marker) {
			marker.bindPopup("my text about: " +feature.properties.Name + " at location: " + marker.getLatLng() +"<img  class='popupimage' src='photos/Cave.jpg' />",{maxWidth:"auto"});
	}
});
attractions.addTo(map);
*/

//controlling the feature zoom
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


//the variable pop-up features and styles to display picture and text description respectively
var cave= L.marker([47.5352, 13.7184], {title:'Giant Ice Cave', clickable:true}).addTo(map).bindPopup("<b>Giant Ice Cave</b>" + "</br>" + "The Dachstein Giant Ice Cave is a must while visiting Hallstatt.  You will get to visit an astounding adventure to the shadows of the rocks, cracks and ice crevices.  Through the ice glistening shapes, you will enjoy a guided cave tour, immersed in light and music.  These giant ice palaces rank among the greatest wonders of the Alps." + "<img  class='popupimage' src='photos/Cave.jpg' />",{maxWidth:'100px'} );
var fingers=L.marker([47.5279, 13.6929], {title:'Five Fingers', clickable:true}).addTo(map).bindPopup("<b>Five Fingers</b>" + "</br>" + "The five fingers is a fantastic viewing platform in the form of a hand with 5 fingers that overhangs from a sheer rock face.  The five fingers in the Daschtein region is the number one attractions in Hallstatt to visit for you to afford a panoramic view. This adrenaline rush journey can also be done from the cable car to enjoy a quiet and peaceful trip in the mountains." + "<img  class='popupimage' src='photos/fingers.jpg' />",{maxWidth:"auto"});
var krippenstein=L.marker([47.537, 13.6913], {title:'Krippstein', clickable:true}).addTo(map).bindPopup("<b>Freesport krippenstein</b>" + "</br>" + "Freesports Arena Dachstein Krippenstein in the Upper Austrian Salzkammergut region has been chosen as a hot spot for having exciting outdoor skiing or snowboarding on the Dachstein plateau.  Numerous other activities can be done such as on and off piste, freeride training and snow camps, snow-shoe hikes, ski tours, ice climbing, paragliding." + "<img  class='popupimage' src='photos/krippenstein.jpg' />",{maxWidth:"auto"});
var waterfall=L.marker([47.5496, 13.6157], {title:'Waldbachstrub Waterfall', clickable:true}).addTo(map).bindPopup("<b>Waldbachstrub Waterfall</b>" + "</br>" + "Going for a hike or a simple tour to discover the impressive waterfall in the wild Hallstätter Echerntal is a place to find happiness.  A mass of water dives over the edge of a 90m high gorge and rushes into the depths that is one of the most energetic natural places in the UNESCO World Heritage Dachstein Salzkammergut." + "<img  class='popupimage' src='photos/waterfall.jpg' />",{maxWidth:"auto"});
var boat=L.marker([47.5591, 13.6783], {title:'Boat Trip', clickable:true}).addTo(map).bindPopup("<b>Boat Trip</b>" + "</br>" + "An unforgettable boat trip not to miss the famous Hallstatt lake view with friends or whole family!  A number of boat rentals are available to book a rowing, sleek electric or pedal boat to enjoy the lake tranquil experiences in Hallstatt." + "<img  class='popupimage' src='photos/boat.jpg' />",{maxWidth:"auto"});
var bathing=L.marker([47.5532, 13.6508], {title:'Bathing Island', clickable:true}).addTo(map).bindPopup("<b>Bathing Island</b>" + "</br>" + "A small bathing island that is connected by a bridge from the shore is located just ten minutes from the town centre.  It is the best recreational fun for families and friends to swim and relax in the small beach during summer.  From the bathing island, a unique panoramic view over the fjord-like Lake Hallstatt and the World Heritage town of Hallstatt is appreciated. " + "<img  class='popupimage' src='photos/bathing.jpg' />",{maxWidth:"auto"});
var mines=L.marker([47.5556, 13.6455], {title:'Salt Mines', clickable:true}).addTo(map).bindPopup("<b>Salt Mines</b>" + "</br>" + "The oldest salt mine in the world, Europe’s oldest wooden staircase and the free-floating Skywalk with its “World Heritage View”, 360 meters above the ground: Hallstatt Salt Mine is a mine of superlatives. One can experience up-close the very breath of history." + "<img  class='popupimage' src='photos/mines.jpg' />",{maxWidth:"auto"});
var heritage=L.marker([47.5612, 13.6435], {title:'World Heritage Skywalk', clickable:true}).addTo(map).bindPopup("<b>World Heritage Skywalk</b>" + "</br>" + "The platform floats freely in almost 360 meters above sea level and offers a unique view of the UNESCO World Heritage town of Hallstatt and the hiking region of Dachstein Salzkammergut.  You look down on the world-famous World Heritage town, the cradle of the Hallstatt Period. " + "<img  class='popupimage' src='photos/heritage.jpg' />",{maxWidth:"auto"});
var viewpoint=L.marker([47.5615, 13.6446], {title:'World Heritage Viewpoint', clickable:true}).addTo(map).bindPopup("<b>World Heritage Viewpoint</b>" + "</br>" + "To enjoy the breath-taking Alpine panorama of the UNESCO World Heritage region of Hallstatt Dachstein Salzkammergut, then the impressive viewing platform is a must. The ‘World Heritage Skywalk’ hovers 350 meters above the roofs of Hallstatt and offers a unique panoramic view over Lake Hallstatt and the impressive mountain scenery." + "<img  class='popupimage' src='photos/viewpoint.jpg' />",{maxWidth:"auto"});
var diving=L.marker([47.5612, 13.6487], {title:'Underwater Diving', clickable:true}).addTo(map).bindPopup("<b>Underwater Diving</b>" + "</br>" + "The best diving time for underwater lake experiences is from June to October, with September being the best to enjoy the warm water.  You can enjoy the beautiful fauna around the crystal clear lakes. The “Vordere Gosausee” lake, which is 96 meters deep in the summer months, is particularly popular with recreational divers due to its incredible visibility." + "<img  class='popupimage' src='photos/diving.jpg' />" ,{maxWidth:"auto"});
var museum=L.marker([47.5619, 13.6489], {title:'Museum', clickable:true}).addTo(map).bindPopup("<b>World Heritage Museum</b>" + "</br>" + "The World Heritage Museum in the centre of Hallstatt is one of the most popular excursions in the Salzkammergut. You will know how the Iron Age, known as Hallstatt culture was named after the town and the most important events such as the Great Fire of 1750, which gave the town a new look. The spectrum spans from Illyrians, Celts, and Romans to the great salt lords and simple people. " + "<img  class='popupimage' src='photos/museum.jpg' />",{maxWidth:"auto"});
var cruise=L.marker([47.5621, 13.6501], {title:'Cruise Ferry Tours', clickable:true}).addTo(map).bindPopup("<b>Cruise Ferry Tour</b>" + "</br>" + "You can enjoy special cruise trips throughout the year over the peaceful Hallstatt lake.  The regularly scheduled service provides theme rides for your family and friends to take spectacular photos and feel the lake." + "<img  class='popupimage' src='photos/cruise.jpg' />",{maxWidth:"auto"});
var market=L.marker([47.5627, 13.6493], {title:'Old Town and Market Square', clickable:true}).addTo(map).bindPopup("<b>Old Town and Market Square</b>" + "</br>" + "The market square of the UNESCO World Heritage town is definitely one of the nicest places in Hallstatt. Each year guests, from around the world, meet at the historic square, surrounded by picturesque little houses to celebrate many events." + "<img  class='popupimage' src='photos/market.jpg' />",{maxWidth:"auto"});
var bone=L.marker([47.5635, 13.6488], {title:'Charnel Bone House', clickable:true}).addTo(map).bindPopup("<b>Charnel Bone House</b>" + "</br>" + "The Charnel ‘Bone House’ in St. Michael’s Chapel is one of the most interesting tourist sites in Hallstatt.  The chapel dates back to the 12th century and is located next to the catholic parish church.  The historical skulls were decorated at the end of the 18th century, but a few are from even the 20th century." + "<img  class='popupimage' src='photos/bone.jpg' />",{maxWidth:"auto"});
var village=L.marker([47.5646, 13.64995], {title:'Classic Village View', clickable:true}).addTo(map).bindPopup("<b>Classic Village View</b>" + "</br>" + "One of the beautiful features of the village is that many of the buildings are built climbing up the mountain which is wonderful to see. The village is small with traditional Austrian architecture and built near the Dachstein mountains on Hallstatt lake which is one of the world’s beautiful places." + "<img  class='popupimage' src='photos/village.jpg' />",{maxWidth:"auto"});

//Initialising the feature zoom display on the map
village.on('click', function(e){
	map.setView(e.latlng,18);
});

fingers.on('click', function(e){
	map.setView(e.latlng,15);
});

krippenstein.on('click', function(e){
	map.setView(e.latlng,15);
});

waterfall.on('click', function(e){
	map.setView(e.latlng,15);
});

boat.on('click', function(e){
	map.setView(e.latlng,15);
});

bathing.on('click', function(e){
	map.setView(e.latlng,15);
});

mines.on('click', function(e){
	map.setView(e.latlng,18);
});

heritage.on('click', function(e){
	map.setView(e.latlng,18);
});

viewpoint.on('click', function(e){
	map.setView(e.latlng,15);
});

diving.on('click', function(e){
	map.setView(e.latlng,18);
});

museum.on('click', function(e){
	map.setView(e.latlng,16);
});

cruise.on('click', function(e){
	map.setView(e.latlng,18);
});

market.on('click', function(e){
	map.setView(e.latlng,18);
});

bone.on('click', function(e){
	map.setView(e.latlng,18);
});

village.on('click', function(e){
	map.setView(e.latlng,18);
});



var skiresort= L.geoJson(skiresortjs, {
    style: myStyle,
    onEachFeature: function (feature, layer) {
		layer.on('click', zoomToFeature);
        
    }
});


skiresort.addTo(map);

//---- Part 4: adding features from the geojson file 

//the variable ski resort and bus stations are created as .js file

var ferryroutes= L.geoJson(ferryroutes, {
    style: myStyleferry,
    onEachFeature: function (feature, layer) {
		layer.on('click', zoomToFeature);
        
    }
});

ferryroutes.addTo(map);

//New bus stations icon created
var stationsicon = L.icon({
iconUrl: 'css/images/station.png',
iconSize: [18, 18]
});


var stations = L.geoJson(stations, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng, {icon: stationsicon});
	},
	onEachFeature: function(feature, marker) {
			marker.bindPopup("my text about: " +feature.properties.NAME + " at location: " + marker.getLatLng());
	}
});
stations.addTo(map);



//the variable features lists layers that I want to control with the layer control
//adding the skiresort and ferry routes to the legend 


var features = {
	"ferry routes": ferryroutes,
	"skiresort": skiresort,
	"Cave": cave,
	"Five Fingers": fingers,
	"Free Port Arena krippenstein": krippenstein,
	"Waldbachstrub Waterfall": waterfall,
	"Boat Trip": boat,
	"Bathing Island": bathing,
	"Salt Mines": mines,
	"World Heritage Skywalk": heritage,
	"World Heritage Viewpoint": viewpoint,
	"Underwater Diving": diving,
	"Museum": museum,
	"Cruise ferry Tours": cruise,
	"Old Town and Market Square": market,
	"Charnel Bone House": bone,
	"Classic Village View": village,
	
	
}

L.control.layers(baseMaps, features).addTo(map);

//the legend uses the layer control with entries for the base maps and two of the layers we added
//in case either base maps or features are not used in the layer control, the respective element in the properties is null








