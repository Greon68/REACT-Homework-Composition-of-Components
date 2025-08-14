/**
 * Левый элемент нижнего блока страницы
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudRain } from '@fortawesome/free-solid-svg-icons';

export const FooterLeft =()=>{
    return (
        <div className='footer-item'>
            <div className='weather'>
                <a href="/gismeteo">
                    <h2 className='weather-title'> Погода </h2>
                </a>
                <div className="weathe-icone">
                    <FontAwesomeIcon icon={faCloudRain} color={'cornflowerblue'} style={{  fontSize: '60px' }} />
                </div>
                <div className="weathe-item">
                    +17°
                </div>
                <div className="weathe-morning">
                    Утром:+17,
                </div>
                <div className="weathe-day">
                    днём:+24
                </div>
            </div>

            <div className='visited'>

                <a href="">
                    <h2 className='visited-title'> Посещаемое </h2> 
                </a>
                
                <div className='visited-content'>
                    <div className='visited-content-item'>
                        <b>Недвижимость</b><span>-о сталинках</span> <br />
                    </div> 
                    <div className='visited-content-item'>                                      
                        <b>Автомобили</b><span>- электрокары</span> <br />
                    </div>  
                    <div className='visited-content-item'>                                         
                        <b>Маркет</b><span>- люстры и светильники</span>
                    </div> 
                </div>

            </div>
        </div>
    
    )
}