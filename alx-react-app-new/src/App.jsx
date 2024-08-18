import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer '
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {

  return (
     
       <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="Evaline" age="25" bio="Student at ALX" />
        <Footer />
        <Counter />
       </div>

  )
}

export default App;
