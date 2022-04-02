import React from 'react'
import UserCard from './UserCard'
import UserCardLoading from './UserCardLoading'
import ShowFullUser from './ShowFullUser'
import runnerMountain from '../../images/mountain_running.jpeg'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const Swipe = () => {
  const trainingParner = false
  let training = false
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }
  const handleDislike = () => {
    console.log('X - DONT LIKE ')
  }
  const handleLike = () => {
    console.log('Send A Match Request!')
  }

  let trainingPartner = {
    name:'Jimi Botanistia',
    img: runnerMountain,
    age: 28,
    location: 'Seattle',
    bio : 'I am a runner and a speedzter, open to track and trail workouts! Training for marathon and then an ironman, I love being outside!',
    training: true, 
    distance: 26.2,
    measurement: 'miles',
    upcomingRace: 'IronMan', 
    maxRun: 20
  }

  let runningBuddy = {
    name:'Jaxe Snakes',
    img: runnerMountain,
    age: 28,
    location: 'Seattle',
    bio : 'Casual Runner, I would love some company on weekend runs, and a few throughout the week! My Average pace is around 8 minutes per mile, on a good day. Let\'s enjoy the fresh air together! Will run at any pace/terrain of your prefrence. Seattle - Greenlake area',
    training: false, 
    distance: 5,
    measurement: 'miles',
    maxRun: 8
  }

  return (<>
  <div className='container'>
    <button onClick={() => setIsLoading(!isLoading)} >Switch Loading</button>
    <h2>Find a {trainingParner ? 'Training Partner' : 'Running Buddy'}</h2>
    {isLoading ? 
      <UserCardLoading /> :
      <UserCard 
        training={training} 
        trainingPartner={trainingPartner} 
        runningBuddy={runningBuddy}
        handleShow={handleShow}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    }
    {!isLoading && 
    <ShowFullUser 
      training={training} 
      trainingPartner={trainingPartner} 
      runningBuddy={runningBuddy} 
      setShowModal={setShowModal} 
      showModal={showModal}
      fullscreen={fullscreen}
      handleLike={handleLike}
      handleDislike={handleDislike}
    />
    }


  </div>
  </>
  )
}

export default Swipe