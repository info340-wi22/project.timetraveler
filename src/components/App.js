import { React, useState, useEffect } from 'react';
import NavBar from './NavBar';
import AboutPage from './AboutPage';
import { Routes, Route } from 'react-router-dom';
import Countdown from './Countdown';
import HomePage from './HomePage';
import {
  getDatabase,
  ref,
  set as firebaseSet,
  onValue,
  push as firebasePush
} from "firebase/database";

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

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage currentEventList={currentEventList} eventListRef={eventListRef}/>} />
          <Route path="countdown" element={<Countdown currentEventList={currentEventList} />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>

      </main>
      <footer className="container">
        <small>&copy; INFO340WI22 | Group B1 </small>
      </footer>
    </div>
  );
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
