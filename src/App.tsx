import { FC } from "react";
import Router from "./components/Router/Router";
import { ROUTER_CONFIG } from "./constants/router";

const App: FC = () => <Router config={ROUTER_CONFIG} />;

export default App;
