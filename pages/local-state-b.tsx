import { VFC } from "react";
import { LocalStateB } from "../components/LocalStateB";
import { Layout } from "../components/Layout";

const LocalStatePageB: VFC = () => {
  return (
    <Layout title="Home">
      <LocalStateB />
    </Layout>
  );
};

export default LocalStatePageB;
