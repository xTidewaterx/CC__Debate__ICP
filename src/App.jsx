import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { AppConfig } from "./components/strictlyData/AppConfig";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleSignOut } from "./components/auth/GoogleSignOut";
import { ListenAuthChanges } from "./components/ListenAuthChanges";
import { GoogleSignIn } from "./components/auth/GoogleSignIn";
import { Comment } from "./components/addData/Comment";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/cyberProtection/ProtectedRoute";
import { FetchData } from "./components/fetchData/FetchData";
import { EditData } from "./components/addData/EditData";
import { RenderComments } from "./components/fetchData/RenderComments";
import { OrganismID } from "./components/auth/OrganismID";
import { RenderAllLevels } from "./components/fetchData/RenderDataExperiment";
import { Reply } from "./components/addData/Reply";
import { RenderProfile } from "./components/auth/RenderProfile";
import { LogAsyncValue } from "./components/strictlyData/ReturnAsyncData";
import { TopBanner } from "./components/strictlyData/TopBanner";
import { TopText } from "./components/strictlyData/TopText";

import DataList2 from "./components/strictlyData/DataList2";
import DataList from "./components/strictlyData/DataList";

export const app = initializeApp(AppConfig);

//Context is what survives across applications
//our protected route is only rendered on our "/" then we log values, protective route is only /
//we have true values from component listenAuthChanges, there values are always updated, state top level changes
//destrucutred object sent trough function parameters ({state, setstate}) used for our destrucure exact link
//now context updates and then we must render corresponding link
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const Context = createContext(false);

//also no delay on our refresh of main page, we are in here and only check if big change - slight backwards
//our redirects works flawlessly, we have our by context, when context change we now have immediate response nad context navigate to "/"
function App() {
  const [context, setContext] = useState("");
  const [signInState, setSignInState] = useState({
    uid: "",
    accessToken: "",
    displayName: "",
  });
  //we  are free, the logic is there, create then have original elements
  const [ternaryAction, setTernaryAction] = useState(
    !signInState ? "Sign In" : "Sign Out"
  );

  console.log(context, "context, Context");
  console.log(signInState);

  const { uid, displayName, accessToken } = context[1] ? context[1] : {};
  //useEffect not called twice, single, on load
  //now useEffect renders extra, it now is all
  useEffect(() => {
    console.log(Context);
  }, [context]);

  return (
    <div className="App">
      {context[0] ? <GoogleSignOut /> : null}
      {/*bem naming:: The element name is separated from the block name by a double underscore (__). */}

      <Context.Provider value={[context, setContext]}>
        <ListenAuthChanges />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
                <div className="App__AuthIntel">
                  account: uid: {uid + "displayName:  " + displayName}
                </div>
                <TopText />
                <TopBanner />
                <RenderAllLevels />

                <Link to={"/profile/" + uid}>{uid}</Link>
              </ProtectedRoute>
            }
          />

          <Route path="/signIn" element={<GoogleSignIn />} />
          <Route
            path="/lists"
            element={
              <>
                <DataList />
              </>
            }
          />

          <Route path="/organismExperiment" element={<RenderAllLevels />} />

          <Route path="/profile/:id" element={<RenderProfile uid={uid} />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

//previously before top level
// context::     <Context.Provider value={[context, setContext]}>
//        {context ? <GoogleSignOut /> : <GoogleSignIn />}
