import './topbar.css';

export default function TopBar() {
    const user = true;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-brands fa-facebook-square"></i>
            <i className="topIcon fab fa-brands fa-twitter-square"></i>
            <i className="topIcon fab fa-brands fa-github-square"></i>
            <i className="topIcon fab fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <p>隨機聊天</p>
                </li>
                <li className="topListItem">
                    <p>遊戲區</p>
                </li>
                <li className="topListItem">
                    <p>討論區</p>
                </li>
                <li className="topListItem">
                    <p>好友清單</p>
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
                        className='topImg'
                        src="https://i.ibb.co/RvFf7Qz/selfie01.jpg" 
                        alt="" 
                    />
                ) : (
                    <>
                        <ul className="topList">
                            <li className="topListItem">
                            </li>
                            <li className="topListItem">
                            </li>
                        </ul>
                   </>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
