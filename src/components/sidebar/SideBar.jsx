import './sidebar.css';
import '../../app.css';
import {SideBarData} from './SideBarData'

export default function SideBar() {
  return (
    <div className='SideBar'>

        <ul className='SideBarList'>
            <div className="SearchRow">
                <div id='SearchIcon'><li><i className="fa-solid fa-magnifying-glass"></i></li></div>
                <div id='SearchInput'><li><input type="text" /></li></div>
            </div>
        {SideBarData.map((val, key)=>{
                return (
                        

                    <li 
                        key={key} 
                        className="row"
                        onClick={()=> {
                            window.location.pathname = val.link
                            }
                        }>
                        <div id='icon'>{val.icon}</div>{" "}
                        <div id='title'>
                            {val.title}
                        </div>
                    </li>


                )
        })}
        </ul>
        <div className="info">
            <div className='infoIcon'><a href="https://www.linkedin.com/in/%E5%A4%A7%E9%8A%98-%E9%84%AD-b006b022b/">
                    <i class="topIcon fa-brands fa-linkedin"></i></a></div>
            <div className='infoIcon'><a href="https://github.com/NightCat10759?tab=repositories">
                    <i className="topIcon fab fa-brands fa-github-square"></i></a></div>
        </div>
        <div className='infoEmail'>email: mike1688s@gmail.com</div>
    </div>
  )
}
