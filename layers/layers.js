var wms_layers = [];

var format_ground_0 = new ol.format.GeoJSON();
var features_ground_0 = format_ground_0.readFeatures(json_ground_0,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ground_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ground_0.addFeatures(features_ground_0);
var lyr_ground_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ground_0,
                style: style_ground_0,
                interactive: false,
                title: '<img src="styles/legend/ground_0.png" /> ground'
            });
var format_rows_1 = new ol.format.GeoJSON();
var features_rows_1 = format_rows_1.readFeatures(json_rows_1,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rows_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rows_1.addFeatures(features_rows_1);
var lyr_rows_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rows_1,
                style: style_rows_1,
                interactive: false,
                title: '<img src="styles/legend/rows_1.png" /> rows'
            });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_2,
                style: style_road_2,
                interactive: false,
                title: '<img src="styles/legend/road_2.png" /> road'
            });
var format_locationData_3 = new ol.format.GeoJSON();
var features_locationData_3 = format_locationData_3.readFeatures(json_locationData_3,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locationData_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locationData_3.addFeatures(features_locationData_3);
var lyr_locationData_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_locationData_3,
                style: style_locationData_3,
                interactive: true,
                title: '<img src="styles/flag.png" height="30px" /> Veterans'
            });

lyr_ground_0.setVisible(true);lyr_rows_1.setVisible(true);lyr_road_2.setVisible(true);lyr_locationData_3.setVisible(true);
var layersList = [lyr_ground_0,lyr_rows_1,lyr_road_2,lyr_locationData_3];
lyr_ground_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_rows_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_road_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_locationData_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_ground_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rows_1.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_road_2.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_locationData_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Lat': '', 'Lng': '', });
lyr_ground_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_rows_1.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_road_2.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_locationData_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Lat': 'no label', 'Lng': 'no label', });
lyr_locationData_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
