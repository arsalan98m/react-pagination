import React from "react";

const Image = ({ avatar_url, login }) => {
  return <img src={avatar_url} alt={login} />;
};

export default Image;
