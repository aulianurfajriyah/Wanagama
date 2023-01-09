// https://leafletjs.com/examples/choropleth/

let data = null;
getData();

const map = L.map('map').setView([-7.9, 110.5325], 14);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 14,
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// geojson initiate
const geojson = L.geoJson(wanagamaData, {
	onEachFeature: onEachFeature,
});

const geojsonDetail = L.geoJson(wanagamaDetailData, {
	style: { fillColor: 'yellow', color: 'green' },
	onEachFeature: onEachFeature,
});

const layerGroup = new L.LayerGroup();
layerGroup.addTo(map);
layerGroup.addLayer(geojson);

// zoom handler
map.on('zoom', function (e) {
	const currZoom = map.getZoom();
	if (currZoom > 14) {
		layerGroup.removeLayer(geojson);
		layerGroup.addLayer(geojsonDetail);
	} else {
		layerGroup.removeLayer(geojsonDetail);
		layerGroup.addLayer(geojson);
	}
});

function onEachFeature(feature, layer) {
	layer.on({
		click: onClickHandler,
	});
}

//onclick
async function onClickHandler(e) {
	const currentData = data.find(function (obj) {
		return obj.id === e.target.feature.properties.id;
	});

	console.log(currentData);

	document.getElementById('name').innerHTML = currentData.title;
	document.getElementById('description').innerHTML = currentData.description;
	document.getElementById('images').innerHTML = currentData.images
		.map(() => {
			return `<img src="https://picsum.photos/200/300" alt="" class="image-petak" />`;
		})
		.join('');
	document.getElementById('fungsi').innerHTML = currentData.fungsi;
	document.getElementById('potensi').innerHTML = currentData.potensi;
	map.fitBounds(e.target.getBounds());
}

// get json data
async function getData() {
	data = await fetch('assets/json/item.json')
		.then((response) => response.json())
		.catch((error) => {
			alert('Error: ' + error.message);
			console.log(error);
		});
}
