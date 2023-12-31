import React from "react";
import NavIconLayout from "./components/NavIconLayout";
import NavIconHrefLayout from "./components/NavIconHrefLayout";

export default function LeftDesktopNav({
  activeComponents,
  addActiveComponent,
  removeActiveComponent,
}) {
  const handleLinkClick = (componentName) => {
    if (activeComponents.includes(componentName)) {
      removeActiveComponent(componentName);
      addActiveComponent(componentName);
    } else {
      addActiveComponent(componentName);
    }
  };
  return (
    <div className="navigation-desktop fixed left-2 top-3 text-white">
      <NavIconHrefLayout
        iconSrc={"/icons/48x48/computer_explorer_cool-0copy.png"}
        alt={"Home"}
        title={"Home"}
        linkTo={""}
        target={null}
      />

      <NavIconLayout
        iconSrc={
          "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
        }
        alt={"Projects"}
        title={"Projects"}
        linkTo={"Projects"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      />

      <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/message_file-0.png"}
        alt={"CV"}
        title={"CV"}
        linkTo={"Cv"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      />

      <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/notepad-5.png"}
        alt={"Todo"}
        title={"Todo"}
        linkTo={"Todo"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      />

      <NavIconHrefLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/msie1-2.png"}
        alt={"GitHub"}
        title={"GitHub"}
        linkTo={"https://github.com/cherrydub"}
        target={"blank"}
      />

      <NavIconLayout
        iconSrc={
          "https://win98icons.alexmeub.com/icons/png/outlook_express-4.png"
        }
        alt={"Contact"}
        title={"Contact"}
        linkTo={"Contact"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      />

      <NavIconLayout
        iconSrc={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
        }
        alt={"Crypto"}
        title={"Crypto"}
        linkTo={"Crypto"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      />
      {/* <NavIconLayout
        iconSrc={
          "https://win98icons.alexmeub.com/icons/png/outlook_express-4.png"
        }
        alt={"Memes"}
        title={"Memes"}
        linkTo={"Memes"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      /> */}
      {/* <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/msie1-2.png"}
        alt={"IE"}
        title={"IE"}
        linkTo={"IE"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      /> */}

      {/* <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/notepad_file-2.png"}
        alt={"Notes"}
        title={"Notes"}
        linkTo={"Notes"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      /> */}

      {/* <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/briefcase-2.png"}
        alt={"Resources"}
        title={"Resources"}
        linkTo={"Resources"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      /> */}
      {/* 
      <NavIconLayout
        iconSrc={"https://win98icons.alexmeub.com/icons/png/message_file-0.png"}
        alt={"Links"}
        title={"Links"}
        linkTo={"Links"}
        activeComponents={activeComponents}
        handleLinkClick={handleLinkClick}
      /> */}
    </div>
  );
}
