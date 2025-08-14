/**
 * Правый элемент нижнего блока страницы
 */

import { VideoNews } from "../VideoNews/VideoNews"

export const FooterRight =()=>{
    return (
        <div className='footer-item'>

        <a href="/ether">
                <div className='main-title'>Эфир</div>
        </a>

        <div className="video-block">

            < VideoNews url= {'/video1'} title={'Ночь в музее'}/>
            < VideoNews url= {'/video2'} title={'Ночь в музее-2'}/>
            < VideoNews url= {'/video3'} title={'Матушка - земля'}/>
            < VideoNews url= {'/video3'} title={'Вместе за одной партой'}/>

        </div>
    </div>
    )
}