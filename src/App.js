import logo from './logo.svg';
import './App.css';
import './index.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
function App() {
  return (
    <div className="App">
      <div className="">
        <h2 className="text-2xl">
          Iteration 2
        </h2>
        <Greetings lang="de" children="Ludwig" />
        <Greetings lang="fr" children="François" />
      </div>
        <h2 className="text-2xl">
          Iteration 3
        </h2>
        <Random  min={1} max={6}/>
        <Random  min={1} max={100}/>
        <h2 className="text-2xl">
          Iteration 4
        </h2>
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={128} g={255} b={0} />
        <h2 className="text-2xl">
          Iteration 5
        </h2>
        
      <div className="p-12 m-auto flex flex-wrap">
        <CreditCard
          type="visa.png"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="mastercard.png"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
        <h2 className="text-2xl">
          Iteration 6
        </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex flex-col m-auto">

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
  
        </div>
    
      </div>
        <h2 className="text-2xl">
          Iteration 7
        </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex min-w-full">

          <DriverCard 
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} />
  
        </div>
    
      </div>
      <h2 className="text-2xl">
        Iteration 1
      </h2>
      <div className="container p-12 m-auto flex flex-wrap">
        <IdCard 
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          // birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          // birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        
        />
        <IdCard
          lastName='Annie'
          firstName='Juan'
          gender='female'
          height={178}
          // birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/women/26.jpg"
        
        />
      </div>

    </div>
  );
}

export default App;
