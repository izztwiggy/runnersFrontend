import './styles/App.css';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from './UserContext';
import { Routes, Route } from 'react-router-dom'
import About from './components/sessions/About';
import Page404 from './components/sessions/Page404';
import Authenticate from './components/sessions/Authenticate';
import Profile from './components/profile/Profile';
import Prefrences from './components/profile/Prefrences';
import Dashboard from './components/dashboard/Dashboard';
import Matches from './components/profile/Matches'
import Swipe from './components/matches/Swipe';
import RoutesHub from './components/runRoutes/RoutesHub';
import RouteView from './components/runRoutes/RouteView'
import NewRoute from './components/runRoutes/NewRoute';
import Layout from './components/Layout'
// import Navigation from './components/Navigation'


function App() {
  return (
      <UserProvider>
        <Layout>
          <div className='App'>
              <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/auth" element={<Authenticate />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/matches" element={<Matches />}/>
                <Route path="/swipe" element={<Swipe />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/routes" element={<RoutesHub />} />


                {/* <Route path="/:userId" element={<Profile />} />
                <Route path="/:userId/prefrences" element={<Prefrences />} />
                <Route path="/:userId/dashboard" element={<Dashboard />} />
                <Route path="/:userId/matches" element={<Matches />} />
                <Route path="/:userId/swipe" element={<Swipe />} />
              
                
                <Route path="/routes/new" element={<NewRoute />} />
                <Route path="/routes/:routeId" element={<RouteView />} /> */}
              
                <Route path="/*" element={<Page404 />} />

              </Routes>
          </div>
        </Layout>
      </UserProvider>
  );
}

export default App;
