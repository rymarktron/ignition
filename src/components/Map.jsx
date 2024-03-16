//Code for map
import React from 'react'

/*
//CODE USING GOOGLE EARTH ENGINE
var country = 'x';
// Canopy cover percentage (e.g. 10%).
var cc = ee.Number(10);
// Minimum forest area in pixels (e.g. 6 pixels, ~ 0.5 ha in this example).
var pixels = ee.Number(6);
// Minimum mapping area for tree loss (usually same as the minimum forest area).
var lossPixels = ee.Number(6);
// Load country features from Large Scale International Boundary (LSIB) dataset.
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var selected = countries.filter(ee.Filter.eq('country_na', ee.String(country)));
var gfc2018 = ee.Image('UMD/hansen/global_forest_change_2018_v1_6');
var canopyCover = gfc2018.select(['treecover2000']);
var canopyCover10 = canopyCover.gte(cc).selfMask();
var contArea = canopyCover10.connectedPixelCount();
// Apply the minimum area requirement.
var minArea = contArea.gte(pixels).selfMask();
var prj = gfc2018.projection();
var scale = prj.nominalScale();
Map.addLayer(minArea.reproject(prj.atScale(scale)), {
    palette: ['#96ED89']
}, 'tree cover: >= min canopy cover & area (light green)');
var forestArea = minArea.multiply(ee.Image.pixelArea()).divide(10000);
var forestSize = forestArea.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: selected.geometry(),
    scale: 30,
    maxPixels: 1e13
});
print(
    'Year 2000 tree cover (ha) \nmeeting minimum canopy cover and \nforest area thresholds \n ',
    forestSize.get('treecover2000'));
var pixelCount = minArea.reduceRegion({
    reducer: ee.Reducer.count(),
    geometry: selected.geometry(),
    scale: 30,
    maxPixels: 1e13
});
var onePixel = forestSize.getNumber('treecover2000')
    .divide(pixelCount.getNumber('treecover2000'));
var minAreaUsed = onePixel.multiply(pixels);
print('Minimum forest area used (ha)\n ', minAreaUsed);
var treeLoss = gfc2018.select(['lossyear']);
var treeLoss01 = treeLoss.eq(1).selfMask(); // tree loss in year 2001
// Select the tree loss within the derived tree cover
// (>= canopy cover and area requirements).
var treecoverLoss01 = minArea.and(treeLoss01).rename('loss2001').selfMask();
var contLoss = treecoverLoss01.connectedPixelCount();
// Apply the minimum area requirement.
var minLoss = contLoss.gte(lossPixels).selfMask();
var lossArea = minLoss.multiply(ee.Image.pixelArea()).divide(10000);
var lossSize = lossArea.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: selected.geometry(),
    scale: 30,
    maxPixels: 1e13
});
print(
    'Year 2001 tree loss (ha) \nmeeting minimum canopy cover and \nforest area thresholds \n ',
    lossSize.get('loss2001'));
var minLossUnmask = minLoss.unmask();
// Switch the binary value of the loss (0, 1) to (1, 0).
var notLoss = minLossUnmask.select('loss2001').eq(0);
// Combine the derived tree cover and not-loss with 'and'.
var treecoverLoss01 = minArea.and(notLoss).selfMask();
var contArea01 = treecoverLoss01.connectedPixelCount();
var minArea01 = contArea01.gte(pixels);
Map.addLayer(minArea01.reproject(prj.atScale(scale)), {
    palette: ['#168039']
}, 'tree cover 2001 (gain not considered) (light green)');
var forestArea01 = minArea01.multiply(ee.Image.pixelArea()).divide(10000);
var forestSize01 = forestArea01.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: selected.geometry(),
    scale: 30,
    maxPixels: 1e13
});
//print(
//    'Year 2001 tree cover (ha) \nmeeting minimum canopy cover and \nforest area thresholds \n ',
//    forestSize01.get('treecover2000'));
*/

function Map() {
  return (
    <div>
        Hi
    </div>
  )
}

export default Map