import { Card } from "../Card"
export const Cards = () =>{
    return (
        <div className="container" >

        {/* <div className="card" >
            <img src="" className="card-img-top" alt="Image cap"/>             
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                 the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>           
        </div> */}

       

 
            <div className="card" > 
                <img src="https://i.ytimg.com/vi/jg8ixdQzrjc/maxresdefault.jpg" className="card-img-top" alt="Image cap"/>               
                <Card 
                    title="Card title" 
                    content={'Some quick example text to build onthe card title and make up the bulk of the cards content.'}
                />                 
            </div>

            <div className="card" >                
                <Card 
                    title="Card title-2" 
                    content={'New text. Some quick example text to build onthe card title and make up the bulk of the cards content.'}
                />                 
            </div>            


        </div>
        
    )
}

