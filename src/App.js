import './App.css';
import Card from './components/Card';

function App() {
  var message = "Welcome to React";
  const cards = [
    {
    id : 1,
    title : "Peshawar",
    description : "City of Flowers",
    image : "https://lh5.googleusercontent.com/p/AF1QipNerW-SYbPrrA_trfp_noMCKLEPDKLVr3uwkHic=w675-h390-n-k-no"
},
    {
    id : 2,
    title : "Lahore",
    description : "City of Five Rivers",
    image :"https://lh6.googleusercontent.com/proxy/p8ix-1fWgI1pOP4Rlg4Azz4TDg-Fdep-BG9YeuVRWefO48ZFErqO7VpoCGekScxTJgTip6C9Jv0mLL8ch-iY7hktyaU32BxqcbRe4Fe3DPwttt-nmNsnp2LX6sGGmGdvLX-A9e5y9QP0i-khUEzR_maiwiYzzlQ=w675-h390-n-k-no"
},
    {
    id : 3,
    title : "Karachi",
    description : "City of Lights",
    image : "https://lh5.googleusercontent.com/p/AF1QipN3KfpYYmGpOxnTB-LAw3RzjDlQHxjlxTyn29JY=w675-h390-n-k-no"
}
]
  return (
    <>
    <h1 className='top-heading'>React App</h1>
    <p>{message}</p>
    <a href='https://github.com/hashirsyed' target="_blank"><button className='btn'>Visit My Github Profile</button></a><br/>

    {cards.map((card)=> <Card key={card.id} title={card.title} description={card.description} image={card.image}/>)}
    
    </>
  );
}

export default App;