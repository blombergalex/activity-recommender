import { useState, useEffect } from 'react'
import Header from './components/Header'
import Activity from './components/Activity'
import ParticipantsButton from './components/ParticipantsButton'
import './App.css'

function App() {
  const [numberOfParticipants, setNumberOfParticipants] = useState(null)
  const [userActivity, setUserActivity] = useState(null);

  useEffect ( () => {
    const getActivity = async () => {
      const participantString = numberOfParticipants ? `?participants=${numberOfParticipants}` : '';

      try {
        let response = await fetch(`http://www.boredapi.com/api/activity/${participantString}`);
        let data = await response.json();
        setUserActivity(data);
      } catch(error){
        console.log(error)
      }
    }

    getActivity();

  }, [numberOfParticipants] )

  return(
    <>
      <Header />
      < main className='content'>
        {userActivity && <Activity chosenActivity={userActivity?.activity}/>  }
        <p>Choose the number of participants</p>  
        < ParticipantsButton participantNumber='1' updateFunction={setNumberOfParticipants}/>
        < ParticipantsButton participantNumber='2' updateFunction={setNumberOfParticipants}/>
        < ParticipantsButton participantNumber='4' updateFunction={setNumberOfParticipants}/>
      </main>
    </>
  )
}

export default App
