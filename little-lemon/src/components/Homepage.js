import Layout from "../Layout";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Footer from "./Footer";
import Specials from "./Specials";

export default function Homepage() {
    return  (
        <Layout>
          <CallToAction/>
          <Specials/>
          <CustomersSay/>
          <Chicago/>
        </Layout>
    )
}