/**
 * Отрисовка баннера , рекламирующего новый фильм
 * 
 */

export const Banner = ()=>{
    return (
        <div className='banner'>
        <a href="/film">
            <div className="banner_title">ФАНТАСТИЧЕСКАЯ ЧЕТВЁРКА</div>
            <div className="banner_date">в кино с 1 АВГУСТА</div>
            <img
                className='image'
                src="https://sun9-79.userapi.com/NYd0alKhHamxQqSWmMD6R2H6VhrtI7435Tx9kA/kw5mxVrFNdE.jpg" alt=""       
            />
        </a>
    </div>
    )
}