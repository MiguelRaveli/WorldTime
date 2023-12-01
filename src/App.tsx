import './App.css'
import Time from './Time'
function App() {


  return (
    <>
 <div>
    <Time key={Math.floor(Math.random() * 10000)} title='Veja os horários do mundo todo!'/>
 </div>
    </>
  )
}

export default App
