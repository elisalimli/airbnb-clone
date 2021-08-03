import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  console.log(router, "router");
  return <div>{router?.query?.testId}</div>;
};

export default Test;
