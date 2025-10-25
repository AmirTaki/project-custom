import "./styles.css"
import { BrowserRouter } from "react-router-dom";
import ColumnFooter from "./columnFotter";
import ListColumn from "./listColumn";
import FormFooter from "./formFooter";
import SocialIcons from "./socialIcons";
const listLink = ['home', 'Services', 'AboutUs', 'Features', 'Contacts']

const FooterAnimated  = () => {
    return(
        <footer className="w-[100%]  bg-[linear-gradient(to_right,#00093c,#2d0b00)]
            text-white p-[100px_0_30px] rounded-tl-[125px] text-[14px] leading-[20px]     max-md:bottom-auto font-sans
            max-md:unset
        ">
            {/* row */}
            <div className="w-[90%] m-auto flex flex-wrap items-strat justify-between ">
                {/* col */}
                <div className="basis-[23%] p-[10px] max-md:basis-[100%]">
                    {/* logo img */}
                    <img src="https://cdn.pixabay.com/photo/2017/05/31/16/39/windows-2360920_1280.png" alt="" className="w-[80px]"/>
                    <p>Subscribe Easy Tutorials Youtube channel to watch more videos on website development and Press the bell icon to get immediate notification of latest videos.</p>
                </div>
                {/* col 2 */}
                <ColumnFooter  title = {"Office"} >
                    <p>ITPL Road Whitefield, Bangalore Karnataka, PIN 560066, Tehran</p>
                    <p></p>
                    <p className="w-fit border-b-1 border-b-[#ccc] my-[20px]">email@gamil.com</p>
                    <h4>+98-0123456789</h4>
                </ColumnFooter>
                
                {/* col 3 */}
                <ColumnFooter title = {"Links"} >
                    <BrowserRouter>
                        <ul>
                            {listLink.map((link, index) => {
                                return(
                                    <ListColumn link = {link} key = {index} />
                                )
                            })}
                        </ul>
                    </BrowserRouter>
                </ColumnFooter >

                {/* col 4 */}
                <ColumnFooter title = {'Newsletter'}>
                    <FormFooter />
                    <SocialIcons />
                </ColumnFooter>
           </div>
           <hr className="w-[90%] border-0 border-b-1 border-b-[#ccc] my-[20px] mx-auto" />
           {/* copy right */}
           <p className="text-center">Easy Totorials © 2021 - All Rights Reserved</p>
        </footer>
    )
}

export default FooterAnimated;