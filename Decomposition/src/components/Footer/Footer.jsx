/**
 * Нижний блок страницы
 */

import { FooterLeft } from "./FooterLeft";
import { FooterCentre } from "./FooterCentre";
import { FooterRight } from "./FooterRight";

export const Footer = ()=>{
    return (
        <div className='footer'>

            <FooterLeft />
            <FooterCentre/>
            <FooterRight/>

         </div>

    )
}