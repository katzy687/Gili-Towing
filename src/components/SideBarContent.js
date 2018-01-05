import React from 'react';
import Link from 'gatsby-link';

// icons
import MdClose from 'react-icons/lib/md/close';
import MdHome from 'react-icons/lib/md/home';
import FaAuto from 'react-icons/lib/fa/automobile';
import FaBattery1 from 'react-icons/lib/fa/battery-1';
import FaTrash from 'react-icons/lib/fa/trash';
import FaHeart from 'react-icons/lib/fa/heart';

const linkItems = [
  { name: 'Home Page', icon: <MdHome />, route: `` },
  { name: 'Towing Services', icon: <FaAuto />, route: `towing` },
  { name: 'Battery Replacement', icon: <FaBattery1 />, route: `battery` },
  { name: 'Metal Scrapping', icon: <FaTrash />, route: `scrap` },
  { name: 'Community Work', icon: <FaHeart />, route: `community` }
];

const SideBarContent = (props) => {
  const langKey = props.langKey;
  console.log(langKey);
  const menuLinks = linkItems.map((item) => {
    const newPath = `/${langKey}/${item.route}`
    return (
      <li key={item.name} >
        <Link to={newPath}>
          <span> {item.icon}  {item.name} </span>
        </Link>
      </li>
    )
  })

  return (
    <ul >
      <li key="close menu"><MdClose/> Close Menu</li>
      {menuLinks}
    </ul>
  )
}

export default SideBarContent;