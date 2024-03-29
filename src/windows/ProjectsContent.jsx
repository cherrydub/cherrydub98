import React from "react";

export default function ProjectsContent({
  site,
  setSite,
  siteObj,
  addActiveComponent,
}) {
  return (
    <div className="flex flex-wrap p-4 gap-4" style={{ color: "#0000ff" }}>
      {/* <a target="_blank" href="https://portfolio.cherrydub.com/"> */}
      <div
        onClick={() => {
          setSite(siteObj.Nft);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">NFT</div>
      </div>

      <div
        onClick={() => {
          setSite(siteObj.Portfolio);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">Portfolio</div>
      </div>
      {/* </a> */}

      <div
        onClick={() => {
          setSite(siteObj.Crypto);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">Crypto App</div>
      </div>

      {/* <a target="_blank" href="https://json.cherrydub.com/"> */}
      <div
        onClick={() => {
          setSite(siteObj.JSON);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">JSON</div>
      </div>
      {/* </a> */}

      {/* <a target="_blank" href="https://smartbrain.cherrydub.com/"> */}
      <div
        onClick={() => {
          setSite(siteObj.Smartbrain);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">Smart Brain</div>
      </div>
      {/* </a> */}

      {/* <a target="_blank" href="https://popcorntime.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Popcorn Time</div>
        </div>
      </a> */}

      {/* <a target="_blank" href="https://crypto1.cherrydub.com/"> */}

      {/* </a> */}

      <div
        onClick={() => {
          setSite(siteObj.PizzaShop);
          setTimeout(() => {
            addActiveComponent("IE");
          }, 100);
        }}
        className="flex flex-col items-center overflow-auto hover:cursor-pointer"
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/html-5.png"
          alt=""
        />
        <div className="text-center">Pizza Shop</div>
      </div>

      <a
        target="_blank"
        href="https://northcoders.com/projects/may-2023/blocklist"
      >
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html2_new-4.png"
            alt=""
          />
          <div className="text-center">Blocklist</div>
        </div>
      </a>

      {/* <a target="_blank" href="https://worldwise.cherrydub.com/">
        <div className="flex flex-col items-center overflow-auto">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html2_new-4.png"
            alt=""
          />
          <div className="text-center">World Wise</div>
        </div>
      </a> */}

      {/* <a target="_blank" href="https://ncgames.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">NC Games</div>
        </div>
      </a> */}

      {/* <a target="_blank" href="https://smartbrain.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Smart Brain</div>
        </div>
      </a>

      <a target="_blank" href="https://pokedex.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Pokedex</div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://northcoders.com/projects/may-2023/blocklist"
      >
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Blocklist</div>
        </div>
      </a>

      <a target="_blank" href="https://ncgames.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">NC Games</div>
        </div>
      </a> */}
      {/* 
      <a target="_blank" href="https://smartbrain.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Smart Brain</div>
        </div>
      </a>

      <a target="_blank" href="https://pokedex.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Pokedex</div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://northcoders.com/projects/may-2023/blocklist"
      >
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Blocklist</div>
        </div>
      </a>

      <a target="_blank" href="https://ncgames.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">NC Games</div>
        </div>
      </a>

      <a target="_blank" href="https://smartbrain.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Smart Brain</div>
        </div>
      </a>

      <a target="_blank" href="https://pokedex.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Pokedex</div>
        </div>
      </a>

      <a
        target="_blank"
        href="https://northcoders.com/projects/may-2023/blocklist"
      >
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">Blocklist</div>
        </div>
      </a>

      <a target="_blank" href="https://ncgames.cherrydub.com/">
        <div className="flex flex-col items-center">
          <img
            src="https://win98icons.alexmeub.com/icons/png/html-5.png"
            alt=""
          />
          <div className="text-center">NC Games</div>
        </div>
      </a> */}
    </div>
  );
}
