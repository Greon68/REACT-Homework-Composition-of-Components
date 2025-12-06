/**
 * Отрисовка единичного блока карточки
 * @param {*} param0 
 * @returns 
 */


export const Card = ({title, content}) => {
    return (
        <div className="card-body">
            <h3 className="card-title">{title}</h3>  
            <p className="card-text">{content}</p>                     
            <a href="#" className="btn btn-primary"> Go somewhere </a>
        </div>        
    )
}