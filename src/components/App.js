import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
import Countdown from './Countdown';
import * as Static from './StaticPage';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CloseEvent from './CloseEvent';

function App() {
  const db = getDatabase();
  const [currentEventList, setCurrentEventList] = useState("");
  const eventListRef = ref(db, "eventList");

  useEffect(() => {
    const offFunction = onValue(eventListRef, (snapshot) => {
      const allDataValue = snapshot.val();
      if (allDataValue != null) {
        const keysArray = Object.keys(allDataValue);
        const arrayObj = keysArray.map((key) => {
          const singleEvent = { ...allDataValue[key], firebaseKey: key };
          return singleEvent;
        });
        setCurrentEventList(arrayObj);
      }
    })
    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [db])

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();

    //addEventListener("loginEvent", () => {})
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      //cleanup
      unregisterAuthListener();
    };
  }, []);
  if (currentUser) {
    return (
      <div>
        <NavBar auth={getAuth()} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage currentEventList={currentEventList} eventListRef={eventListRef} />} />
            <Route path="countdown" element={<Countdown currentEventList={currentEventList} />} />
            <Route path="about" element={<Static.AboutPage />} />
            <Route path="*" element={<Static.ErrorPage />} />
            <Route path="/countdown/closeevent/:eventId" element={<CloseEvent/>} />
          </Routes>

        </main>
        <footer className="container">
          <small>&copy; INFO340WI22 | Group B1 </small>
        </footer>
      </div>
    );
  } else {
    return <SignInPage />;
  }
}

export default App;




// function App(props) {


//     /* const auth = getAuth();
//     const [user, loading, error] = useAuthState(auth);
//     const currentUser = user;
//     const loginUser = (userId, userName) => {}; */
//     return (
//       <div>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<EventList currentEventList={currentEventList} />} />
//             <Route path="countdown" element={<Countdown />} />
//             <Route path="about" element={<AboutPage />} />
//             {/* <Route path="signin" element={<SignInPage  user={currentUser} loginFunction={loginUser} /> } /> */}
//           </Routes>

//         </main>
//         <footer className="container">
//           <small>&copy; INFO340WI22 | Group B1 </small>
//         </footer>
//       </div>
//     );
//   }
// export default App;
