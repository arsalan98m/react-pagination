import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const FollowerSkeleton = () => {
  return (
    <article className="card" style={style}>
      <Skeleton variant="circle" width={130} height={130} />

      <Skeleton width="20%" />
      <Skeleton height={24} width="50%" />
    </article>
  );
};

export default FollowerSkeleton;
