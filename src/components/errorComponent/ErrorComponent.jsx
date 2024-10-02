import { Result } from "antd";

function ErrorComponent() {
  return (
    <Result
      status="404"
      title="Something went wrong"
      subTitle="Error occured in current page!"
    />
  );
}

export default ErrorComponent;
