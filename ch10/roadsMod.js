// Write a CommonJS module, based on the example from Chapter 7,
//  which contains the array of roads and exports the graph data structure
// representing them as roadGraph. It should depend on a module ./graph, which
// exports a function buildGraph that is used to build the graph. This function
// expects an array of two-element arrays (the start and end points of the roads).

// const {buildGraph} = require("./graph");
const buildMap = require("./graph");

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// exports.roadGraph = buildGraph(roads.map(r => r.split("-")));
const roadGraph = buildMap(roads);
console.log(roadGraph);

// {
// Alice's House:	{
// Bob's House:	1
// Cabin:	1
// Post Office:	1
// }
// Bob's House:	{Alice's House: 1, Town Hall: 1}
// Cabin:	{Alice's House: 1}
// Post Office:	{Alice's House: 1, Marketplace: 1}
// Town Hall:	{
// Bob's House:	1
// Daria's House:	1
// Marketplace:	1
// Shop:	1
// }
// Daria's House:	{Ernie's House: 1, Town Hall: 1}
// Ernie's House:	{Daria's House: 1, Grete's House: 1}
// Grete's House:	{Ernie's House: 1, Farm: 1, Shop: 1}
// Farm:	{Grete's House: 1, Marketplace: 1}
// Shop:	{
// Grete's House:	1
// Marketplace:	1
// Town Hall:	1
// }
// Marketplace:	{
// Farm:	1
// Post Office:	1
// Shop:	1
// Town Hall:	1
// }
