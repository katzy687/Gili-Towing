import React from 'react';
import Link from 'gatsby-link';

// icons
import MdClose from 'react-icons/lib/md/close';
import MdHome from 'react-icons/lib/md/home';
import FaAuto from 'react-icons/lib/fa/automobile';
import FaBattery1 from 'react-icons/lib/fa/battery-1';
import FaTrash from 'react-icons/lib/fa/trash';
import FaHeart from 'react-icons/lib/fa/heart';

const getProp = (langKey, enProp, heProp) => langKey === 'en' ? enProp : heProp;

const SideBarContent = (props) => {
  const langKey = props.langKey;
  const closeBtn = props.langKey === 'en' ? 'Close Menu' : 'סגור';
  const linkItems = [
    { name: getProp(langKey, 'Home Page', 'דף בית'), 
      icon: <MdHome />, 
      route: `` 
    },
    // { name: getProp(langKey, 'Towing Services', 'שרותי גרירה'), 
    //   icon: <FaAuto />, 
    //   route: `towing` 
    // },
    // { name: getProp(langKey, 'Battery Replacement', 'מצברים'), 
    //   icon: <FaBattery1 />, 
    //   route: `battery` 
    // },
    // { name: getProp(langKey, 'Metal Scrapping', 'גרוטאות מתכת'), 
    //   icon: <FaTrash />, 
    //   route: `scrap` 
    // },
    { name: getProp(langKey, 'Community Work', 'שירותי עזרה לקהילה'),
      icon: <FaHeart />, 
      route: `community` 
    }
  ];
  const menuLinks = linkItems.map((item) => {
    const newPath = `/${langKey}/${item.route}`
    return (
      <li key={item.name} onClick={props.closeHandler} >
        <Link to={newPath}>
          <p><span style={{marginRight: '0.5rem'}}>{item.icon}</span>  {item.name}</p>
        </Link>
      </li>
    )
  })

  return (
    <ul >
      <li key="close menu" onClick={props.closeHandler} ><MdClose style={{marginRight: '0.5rem'}}/>{closeBtn}</li>
      {menuLinks}
    </ul>
  )
}

export default SideBarContent;