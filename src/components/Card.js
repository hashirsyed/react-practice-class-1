
function Card({title,description,image}){
    
        return (
            
            <>
            <div style={{borderRadius : "10px", padding : "10px 20px",display:"inline-block",marginLeft:"10px",marginTop:"20px",width:"250px",border:"1px solid lightGray",height :"300px"}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} style={{borderRadius:"10px",width :"230px",height:"150px"}}/>
            </div>
            </>



)

}

export default Card;