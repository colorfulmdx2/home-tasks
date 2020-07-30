import React from 'react';
import background from './assets/images/background.jpg'
import './App.css';
import Message from "./HT-1-message/Message";
import Links from "./links/Links";
import { Route } from 'react-router-dom';
import Todolist from "./HT-2-todolist/Todolist";
import InputHT from "./HT-3-input/InputHT";
import {Hometask4} from "./HT-4-EditebleSpan/Hometask4";
import {Hometask6} from "./HT-6-Local-Storage/Hometask-6";


function App(props:any) {



  return (
    <div className='parent' style={{ backgroundImage:`url(${background})` }}>

        <Links/>
        <Route path='/homework1' render = {() => <Message avatar={"V"}
                                                          name={'Viki'}
                                                          message={"are u at home??"}
                                                          time={'21:44'}/>}/>
        <Route path='/homework2' render = {() => <Todolist/>}/>
        <Route path='/homework3' render = {() => <InputHT/> }/>
        <Route path='/homework4' render = {() => <Hometask4/>}/>
        {/*<Route path='/homework5' render = {() => }/>*/}
        <Route path='/homework6' render = {() => <Hometask6/>}/>
        {/*<Route path='/homework7' render = {() => }/>*/}
        {/*<Route path='/homework8' render = {() => }/>*/}
        {/*<Route path='/homework9' render = {() => }/>*/}
        {/*<Route path='/homework10' render = {() => }/>*/}
        {/*<Route path='/homework11' render = {() => }/>*/}
        {/*<Route path='/homework12' render = {() => }/>*/}
        {/*<Route path='/homework13' render = {() => }/>*/}
        {/*<Route path='/homework14' render = {() => }/>*/}
        {/*<Route path='/homework15' render = {() => }/>*/}
    </div>
  );
}

export default App;
