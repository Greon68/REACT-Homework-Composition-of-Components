/**
 * Отрисовка единичного блока карточки
 * @param {*} param0 
 * @returns 
 */


export const Card = ({title, content}) => {
    return (
        <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>  
            <p className="card-text">{content}</p>                     
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>        
    )
}