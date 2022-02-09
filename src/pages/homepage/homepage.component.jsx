import React from "react";
import Directory from "../../components/directory-component/directory.component";
import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
