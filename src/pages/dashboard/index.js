/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React, { useEffect } from "react";
import DashboardSection from "./../../components/DashboardSection";
import { useAuth } from "./../../util/auth.js";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth]);

  return (
    <DashboardSection
      color="white"
      size="large"
      title="Dashboard"
      subtitle="Welocome to the Dashboard. We are soon adding dashboard components here."
    />
  );
}

export default DashboardPage;
