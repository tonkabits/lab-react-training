
import './App.css';
import './index.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';


function App() {
  return (
    <div className="App">
      <h2 className="text-2xl">
        Iteration 1
      </h2>
      <div className="p-12 m-auto flex flex-wrap">
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
        <div className="flex m-auto">

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
        Iteration 8
      </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex m-auto">
            <LikeButton />
            <LikeButton />
        </div>
      </div>
      <h2 className="text-2xl">
        Iteration 9
      </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex m-auto">
        <ClickablePicture />
        </div>
      </div>
      <h2 className="text-2xl">
        Iteration 10
      </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex m-auto">
        <Dice />
        </div>
      </div>
      <h2 className="text-2xl">
        Iteration 11
      </h2>
      <div className="p-12 m-auto flex flex-wrap">
        <div className="flex m-auto">
            <Carousel 
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
            
            
            />
        </div>
      </div>
      <h2 className="text-2xl">
        Iteration 12
      </h2>
      <div className="p-12 m-auto flex flex-wrap mb-64">
        <div className="flex w-full h-64">
          <NumbersTable limit={12}/>
        </div>
      </div>
      <h2 className="text-2xl">
        Iteration 13 Facebook (simple)
      </h2>
      <div className="p-12 m-auto flex flex-wrap mb-64">
        <div className="flex w-full h-64">
          <Facebook />
        </div>
      </div>
  

    </div>
  );
}

export default App;
