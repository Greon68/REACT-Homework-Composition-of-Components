/**
 * Поле поиска страницы
 */

export const Search =()=>{
    return (
        <>
        <div className="search-block">
            <form className="search">
                <input type="search" name="search" id="search" className='input' />
                <label htmlFor="search" className='label'>Найти</label>               
            </form>
        </div>
        
        <div className='hint'>   
            <h3> Найдется всё. Например,<span className='hint-search'>фаза луны сегодня</span> </h3>
        </div>

        </>
    )
}