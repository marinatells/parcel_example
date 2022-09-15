import Toggle from "./js/toggle";
import Graph from "./js/graph";

const toggleContainer = document.querySelector(".toggle-container");
const toggle1 = new Toggle("Раздел 1", "Привет!!!");
const toggle2 = new Toggle("Раздел 2", "Урая мы используем джс компоненты");
const toggle3 = new Toggle("Раздел 3", "Но так много кода ещё нужно написать");

toggle1.render(toggleContainer);
toggle2.render(toggleContainer);
toggle3.render(toggleContainer);

const graphContainer = document.querySelector(".graph-container");
const graph = new Graph();
graph.render(graphContainer);
