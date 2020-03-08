import { Graph } from "react-d3-graph";
import React from "react";
import Card from "../Boards/Card";

export default function GraphView() {
  const data = {
    nodes: [
      { id: "id1", fx: 300, fy: 100 },
      { id: "id2", fx: 500, fy: 100 },
      { id: "id3", fx: 200, fy: 200 },
      { id: "id4", fx: 100, fy: 400 },
      { id: "id5", fx: 300, fy: 400 }
    ],
    links: [
      { source: "id1", target: "id2" },
      { source: "id3", target: "id1" },
      { source: "id5", target: "id3" },
      { source: "id3", target: "id4" }
    ]
  };

  const config = {
    background: "#00CED1",
    nodeHighlightBehavior: true,
    highlightDegree: 0,
    staticGraphWithDragAndDrop: true,
    height: 1000,
    width: 1000,
    node: {
      // size: 500,
      width: 400,
      height: 800,
      color: "lightgreen",
      highlightStrokeColor: "blue",
      renderLabel: false,
      viewGenerator: node => <Card boardId={"fghfsdfsdfasdssssssssssssssssssdfsd"} />
    },
    link: {
      highlightColor: "lightblue"
    }
  };

  // graph event callbacks
  const onClickGraph = function() {
    // window.alert(`Clicked the graph background`);
  };

  const onClickNode = function(nodeId) {
    // window.alert(`Clicked node ${nodeId}`);
  };

  const onDoubleClickNode = function(nodeId) {
    // window.alert(`Double clicked node ${nodeId}`);
  };

  const onRightClickNode = function(event, nodeId) {
    // window.alert(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = function(nodeId) {
    // window.alert(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = function(nodeId) {
    // window.alert(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    // window.alert(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function(event, source, target) {
    // window.alert(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = function(source, target) {
    // window.alert(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function(source, target) {
    // window.alert(`Mouse out link between ${source} and ${target}`);
  };

  const onNodePositionChange = function(nodeId, x, y) {
    window.alert(
      `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
    );
  };
  return (
    <Graph
      id="graph-id"
      data={data}
      config={config}
      onClickNode={onClickNode}
      onDoubleClickNode={onDoubleClickNode}
      onRightClickNode={onRightClickNode}
      onClickGraph={onClickGraph}
      onClickLink={onClickLink}
      onRightClickLink={onRightClickLink}
      onMouseOverNode={onMouseOverNode}
      onMouseOutNode={onMouseOutNode}
      onMouseOverLink={onMouseOverLink}
      onMouseOutLink={onMouseOutLink}
      onNodePositionChange={onNodePositionChange}
    />
  );
}
