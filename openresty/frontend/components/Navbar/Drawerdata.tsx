import React, { useState, useEffect } from "react";
import Contactusform from "./Contactus";
import {useTranslations} from "next-intl";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'aboutUs', href: '#aboutus-section', current: true },
  { name: 'services', href: '#services-section', current: false },
  { name: 'cases', href: '/cases', current: false },
  { name: 'faq', href: '#faq-section', current: false },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  const t = useTranslations('Navbar');

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  useEffect(() => {
    // Автоматически открываем форму при монтировании компонента
    setContactFormVisible(true);
  }, []);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
    setMenuVisible(false); // Close the menu when opening the contact form
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                  'block py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {t(`${item.name}`)}
              </a>
              
            ))}
            <div className="mt-4"></div>
            {/* <button
              onClick={toggleContactForm}
              className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded"
            >
              Связаться с нами
            </button> */}
            {isContactFormVisible && <Contactusform />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
