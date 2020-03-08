import React, { useState, useEffect } from "react";
import Navbar from "../Components/Shared/Navbar";
import { withRouter } from "react-router";
import GraphView from "../Components/Board/GraphView";

export default withRouter(function Board(props) {

  const [boardId, setBoardId ] = useState(null);

  useEffect(() => {
    setBoardId(props.match.params.id);
  }, [props]);

  return (
    <div>
      <Navbar path={"boards > " + boardId} />
      <GraphView />
    </div>
  );
});
