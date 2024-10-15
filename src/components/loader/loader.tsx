import { Spin } from "antd";

function Loader() {
  return (
    <div style={{ textAlign: "center" }}>
      <Spin size={"large"} />
    </div>
  );
}

export default Loader;
