import reactLogo from './assets/react.svg'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <>
      <Header logo={reactLogo} />
      <MainContent logo={reactLogo} />
    </>
  )
}

export default App
