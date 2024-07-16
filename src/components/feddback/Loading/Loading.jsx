/* eslint-disable react/prop-types */
import LottieHandler from "../LottieHandler/LottieHandler";
import Skeletons from "../skeletons/Skeletons";

const Loading = ({ status, error, children, type }) => {
  if (status === "pending") {
    return <Skeletons skeletonType={type} />;
  }
  if (status === "failed") {
    return <LottieHandler type="error" message={error} />;
  }

  return <div>{children}</div>;
};

export default Loading;
