import {fetchCity, fetchCountry,fetchState} from './apiFetch';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list,setList] = useState({
    countryList:[],
    stateList:[],
    cityList:[]


  })
  const [selected,setSelected] = useState({
    selectedCountry:'',
    selectedState:'',
    selectedCity:''

  })

  useEffect(() =>{
    if(fetchCountry){
      fetchCountry().then((res) => {
        setList({...list,countryList:[...res]})
      })
    }
   },[])

 useEffect(() =>{
  if(selected.selectedCountry){

    fetchState(selected.selectedCountry).then((res) => {
      //console.log(res);
      setList({...list,stateList:[...res]})
    })  
  }

 },[selected.selectedCountry])

 useEffect(() =>{
  if(selected.selectedCountry && selected.selectedState){

    fetchCity(selected.selectedCountry,selected.selectedState).then((res) => {
      //console.log(res);
      setList({...list,cityList:[...res]})
    })  
  }

 },[selected.selectedState])

function sCountry(e){
  //console.log(e.target.name)
  setSelected( {...selected,
    [e.target.name]:document.getElementById(e.target.id).value});
}
  return (
    <div className="App">
      <h2>Select Location</h2>
      <select id='country' onChange={sCountry} name='selectedCountry'>
        <option selected>Select Country</option>
        {list.countryList.map((country) => (
          <option value={country}>{country}</option>
        ))
        }
      </select>
      <select id='state' disabled={selected.selectedCountry ? '':'disabled'} name='selectedState' onChange={sCountry}>
        <option selected>Select State</option>
        {list.stateList.map((state) => (
          <option value={state}>{state}</option>
        ))
        }
      </select>
      <select id='city' disabled={selected.selectedCountry && selected.selectedState ? '':'disabled' } name='selectedCity' onChange={sCountry}>
        <option selected>Select City</option>
        {list.cityList.map((city) => (
          <option value={city}>{city}</option>
        ))
        }
      </select>
<br/>
{selected.selectedCity ? 
  <div>
      <h4>You selected </h4><h2>{selected.selectedCountry}, </h2><h4>{selected.selectedState}, {selected.selectedCity}</h4>
      </div>
      :
      <></>}
    </div>
  );
}

export default App;
