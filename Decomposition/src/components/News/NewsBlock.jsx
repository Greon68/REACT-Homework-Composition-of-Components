/**
 * Верхний блок новостей страницы
 */

import {faUsers, faVideoCamera, faMobile , faPencil, faHeart} from '@fortawesome/free-solid-svg-icons';
import { News } from './News';

export const NewsBlock =()=>{
    return (
        <div className='news_block'>

        <div className="title_block">
            <h2> Сейчас в СМИ  </h2>
        </div>

        <News url= {"/family"} icon={faHeart} color={'rgb(77, 26, 139)'} content = {'Названы 3 самых крепких брака в российском кино'}/>
        <News url= {"/films"} icon={faVideoCamera} color={'rgb(77, 26, 139)'} content = {'В «Кавказской пленнице» нашли явный киноляп'}/>
        <News url= {"/tv"} icon={faUsers} color={'rgb(71, 17, 17)'} content = {'Популярные телеведущие из 1990-х: что с ними и где они сейчас'}/>
        <News url= {"/health"} icon={faPencil} color={'rgb(71, 17, 17)'} content = {'Как понять, что у вас пористые волосы'}/>
        <News url= {"/gadgets"} icon={faMobile} color={'rgb(15, 83, 79)'} content = {'Топ-10 гаджетов для школьника в 2025-м'}/>
 
    </div>
    )
}