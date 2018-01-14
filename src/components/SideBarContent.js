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
  const linkItems = [
    { name: getProp(langKey, 'Home', 'דף בית'), 
      icon: <MdHome />, 
      route: `` 
    },
    { name: getProp(langKey, 'Towing Services', 'שרותי גרירה'), 
      icon: <FaAuto />, 
      route: `towing` 
    },
    { name: getProp(langKey, 'Battery Replacement', 'מצברים'), 
      icon: <FaBattery1 />, 
      route: `battery` 
    },
    { name: getProp(langKey, 'Metal Scrapping', 'גרוטאות מתכת'), 
      icon: <FaTrash />, 
      route: `scrap` 
    },
    { name: getProp(langKey, 'Community Work', 'עבודות שירות'),
      icon: <FaHeart />, 
      route: `community` 
    }
  ];
  const menuLinks = linkItems.map((item) => {
    const newPath = `/${langKey}/${item.route}`
    return (
      <li key={item.name} onClick={props.closeHandler} >
        <Link to={newPath}>
          <span> {item.icon}  {item.name} </span>
        </Link>
      </li>
    )
  })

  return (
    <ul >
      <li key="close menu" onClick={props.closeHandler} ><MdClose /> Close Menu</li>
      {menuLinks}
    </ul>
  )
}

export default SideBarContent;