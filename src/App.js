import {useState} from 'react';
import Akordiyon from './Akordiyon';

import './App.css';

function App() {

const [akorListe, setAkorListe] = useState([
  {question:"Do I have to allow the use of cookes?", answer:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."}, 
  {question:"How do I change my My Page password?", answer:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."}, 
  {question:"What is BankID?", answer:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."}, 
  {question:"Whose birth number can I use?", answer:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."}, 
  {question:"When do I recieve a password ordered by letter?", answer:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"}, 
]);

  return (
    <div className="App">
      <div id="panel">
        <div id="leftSide">
          <p id="lsHeader">Questions And Answers About Login</p>
        </div>
        <div id="rightSide">
          {akorListe.map((item, index)=> <Akordiyon key={index} question={item.question} answer={item.answer}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
