import './App.css'
import BarChartData from './components/BarChartData/BarChartData'
import LineChart from './components/LineChart/LineChart'
import Nav from './components/Nav/Nav'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>

      <Nav></Nav>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChartData></BarChartData>
    </>
  )
}

export default App
