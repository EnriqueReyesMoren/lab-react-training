import React, { Component } from 'react';
import IdCardComponent from "./components/idCards";
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <h1> IdCard </h1> 
            <IdCardComponent lastName = 'Doe'
            firstName = 'John'
            gender = 'male'
            height = { 178 }
            birth = { new Date("1992-07-14") }
            picture = "https://randomuser.me/api/portraits/men/44.jpg" />

            <IdCardComponent lastName = 'Delores '
            firstName = 'Obrien'
            gender = 'female'
            height = { 172 }
            birth = { new Date("1993-05-11") }
            picture = "https://randomuser.me/api/portraits/women/8.jpg" />

            <h1>Greetings</h1>
            
            <Greetings lang="es">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>

            <h1>Random</h1>
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>

            <h1>BoxColor</h1>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />  


            <h1>Credit Cards</h1>

            <CreditCard 
             type="Visa"
             number="0123456789018845"
             expirationMonth={3}
             expirationYear={2021}
             bank="BNP"
             owner="Maxence Bouret"
             bgColor="#11aa99"
             color="white" />
           <CreditCard 
             type="Master Card"
             number="0123456789010995"
             expirationMonth={3}
             expirationYear={2021}
             bank="N26"
             owner="Maxence Bouret"
             bgColor="#eeeeee"
             color="#222222" />
           <CreditCard 
             type="Visa"
             number="0123456789016984"
             expirationMonth={12}
             expirationYear={2019}
             bank="Name of the Bank"
             owner="Firstname Lastname"
             bgColor="#ddbb55"
             color="white" />  

        </div>



        );
    }
}

export default App;