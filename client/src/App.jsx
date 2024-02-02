import './App.css'
import {Routes, Route} from "react-router-dom"
import SeeAllPokemon from "./displays/SeeAllPokemon/SeeAllPokemon"
import LandingPage from './displays/LandingPage/LandingPage'
import CreateTeam from './displays/CreateTeam/CreateTeam'
import EditTeam from './displays/EditTeam/EditTeam'
import CampaignMode from './displays/CampaignMode/CampaignMode'
import PvPMatchMaking from './displays/PvPMatchMaking/PvPMatchMaking'
import ConfirmPvEBattle from './displays/ConfirmPvEBattle/ConfirmPvEBattle'
import PvEBattle from './displays/PvEBattle/PvEBattle'

function App() {

  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/pokemon' element={<SeeAllPokemon/>}/>
        <Route path='/createTeam' element={<CreateTeam/>}/>
        <Route path='/editTeam' element={<EditTeam/>}/>
        <Route path='/campaign' element={<CampaignMode/>}/>
        <Route path='/pvp' element={<PvPMatchMaking/>}/>
        <Route path='/confirmPvEBattle/:name' element={<ConfirmPvEBattle/>} />
        <Route path='/PvEBattle/:name' element={<PvEBattle/>}/>
      </Routes>
  )
}

export default App
