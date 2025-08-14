/**
 * Центральный элемент нижнего блока страницы
 */

export const FooterCentre = ()=> {
    return (
        <div className='footer-item'>

            <a href="/Russia">
                <div className='map-Russia main-title'>Карта России</div>
            </a>
            <h3 className='schedules'> Расписания </h3>

            <a href="/tv">
                <div className='tv-program-title'>Телепрограмма</div>
            </a>

            <div className='tv-program'>
                <b className='broadcast'>02:00 THT Best</b>
                <b className='broadcast'>02:15 Наша Russia</b>
                <b className='broadcast'>03:00 Comedy Club </b>
                <b className='broadcast'>05:00 Comedy Club Women</b>
            </div>
            
        </div>
    )
}