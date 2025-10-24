import ColumnFooter from "./columnFotter";
import "./styles.css"

const FooterAnimated  = () => {
    return(
        <footer className="w-[100%] absolute bottom-0  bg-[linear-gradient(to_right,#00093c,#2d0b00)]
            text-white p-[100px_0_30px] rounded-tl-[125px] text-[13px] leading-[20px]
        ">
            {/* row */}
            <div className="w-[85%] m-auto flex flex-wrap items-start justify-between">
                {/* col */}
                <div className="basis-[25%] p-[10px]">
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
                    <ul>
                        <li className="list-none mb-[12px]">
                            <a href="" className="decoration-0 cursor-pointer text-whtie">Home</a>
                        </li>
                    </ul>
                </ColumnFooter >

           
           </div>
        </footer>
    )
}

export default FooterAnimated;