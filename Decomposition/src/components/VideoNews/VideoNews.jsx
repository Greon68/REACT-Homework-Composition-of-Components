/**
 * Отрисовка элементов видео в нижнем правом блоке страницы
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export const VideoNews =({url, title})=> {
    return (
        <a href={url} className='video'>
            <FontAwesomeIcon icon={faPlayCircle} color={'cornflowerblue'} style={{ marginRight:'8px', marginTop:'5px', fontSize: '20px' }} />
            <h3 className='title_news'>{title}</h3>            
        </a>
    )
}