/**
 * Главная страница сайта
 */

import { NewsBlock } from '../News/NewsBlock';
import { Menu } from '../Menu/Menu';
import { Search } from '../Search/Search';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';


export const Page = ()=> {
    return (
        <div className="container">

            <NewsBlock/>
            <Menu/>
            <Search/>
            <Banner/>
            <Footer/>

        </div>
    )
}