/**
 * Отрисовка элементов блока новостей (верх страницы)
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const News = ({url, icon, color, content})=> {
    return (

        <a href={url} className='news'>
            <FontAwesomeIcon icon={icon} color={color} style={{ marginRight:'8px', marginTop:'5px', fontSize: '20px' }} />
            <h3 className='title_news'>{content}</h3>
        </a>
    )
}