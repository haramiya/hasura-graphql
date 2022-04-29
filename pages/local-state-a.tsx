import { VFC } from "react";
import { LocalStateA } from "../components/LocalStateA";
import { Layout } from "../components/Layout";

const LocalStatePageA: VFC = () => {
  return (
    <Layout title="Home">
      <LocalStateA />
    </Layout>
  );
};

export default LocalStatePageA;
