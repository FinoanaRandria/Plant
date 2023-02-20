import {React,useState} from "react";
import logo from "../../assets/png/logo.png";
import "./Body.scss";
const Body = ({ data }) => {

    const [coche, setcoche] = useState(data)
    
    const [filter,setfilter] = useState('')
       
    const [checked ,setchecked] = useState({classique:false,exterieu:false,planteGrasse:false })


      const filtersFunc = (f)=>{
          
         const fd =  data.filter((elemt)=> elemt.categorie == f )
           console.log(f)
         console.log(fd)
         setcoche(fd)
      }


  return (
    <div>
      <nav>
        <div>
          <img className="logo" src={logo} alt="logo" width={300} />
        </div>

        <hr />
      </nav>
      {/* =================================================================body==================================== */}
        <div>

        <input  onChange={()=> filtersFunc("classique") } type="checkbox"/>
             <label>classique</label>
                <br/>
                <input onChange={()=> filtersFunc("exterieur") } type="checkbox"/>
             <label>exterieur</label>
                <br/>
                <input onChange={()=> filtersFunc("plante grasse") } type="checkbox"/>
             <label>plante grasse</label>
                <br/>
                <br/>
        </div>
      <div className="plant-content">
        {coche.map((elment) => (
          <div key={elment.id} className="plant">
            <img className="plant-img" src={elment.photo} width={100} alt="plante" />
            <p> {elment.nom}</p>
            
            <div>
                 {
                     
                         
                     Object.keys([...Array(elment.lumiere)]).map((_,index)=>(
                        <span key={index}>🌞</span>
                     ))
                 }
                
            </div>

            <div>
                 {
                     
                         
                     Object.keys([...Array(elment.eau)]).map((_,index)=>(
                        <span key={index}>💧</span>
                     ))
                 }
                
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================================================================= */}
      <footer>
        <div className="f-container">
          <div>
            <h1>Prix</h1>
          </div>

          <div>
            <ul>
              <li>niveau1:8000ar</li>
              <li>niveau2:10000ar</li>
              <li>niveau3:15000ar</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
