import React from "react";
import { Heading, ButtonOutline } from "@primer/components";
import history from "../../Utils/history";

const Card = props => {
  const { boardId } = props;

  const open = () => {
    history.push(`/board/` + boardId);
  };

  return (
    <ButtonOutline height="200px" onClick={open}>
      <Heading mb={2} fontSize={24} fontWeight="bold">
        {boardId}
      </Heading>
    </ButtonOutline>
  );
};

export default Card;
