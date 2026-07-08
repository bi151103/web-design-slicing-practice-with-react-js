import SearchSvgIcon from "../assets/svg-icons/search.svg";
import BellSvgIcon from "../assets/svg-icons/bell.svg";
import { useEffect, useRef, useState } from "react";

export function L1ListComponent() {
  const inputRef = useRef(null);
  const [accsList, setAccsList] = useState([]);

  useEffect(() => {
    const accountsList = [
      {
        appName: "Dropbox",
        appSite: "https://www.dropbox.com",
        noOfAccs: 24,
        appThumbSrc: "assets/images/dropbox.png",
      },
      {
        appName: "Pinterest",
        appSite: "https://www.pinterest.com",
        noOfAccs: 3,
        appThumbSrc: "assets/images/pinterest.png",
      },
      {
        appName: "Microsoft",
        appSite: "https://www.microsoft.com",
        noOfAccs: 3,
        appThumbSrc: "assets/images/microsoft.png",
      },
    ];
    const id = setTimeout(() => {
      setAccsList(accountsList);
    }, 1500);
    return () => {
      clearTimeout(id);
    };
  }, []);

  function focusOnInput() {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }
  return (
    <>
      <div className="l1-list-container">
        <div className="l1-list-content">
          <header className="l1-list-content--header">
            <div
              className="l1-list-header-search-container"
              onClick={focusOnInput}
            >
              <img src={SearchSvgIcon} />
              <input
                ref={inputRef}
                placeholder="Search"
                className="l1-list-header-search-input font-bold"
              />
            </div>
            <div className="l1-list-header-right-actions-container">
              <div className="l1-list-header-noti-icon">
                <img src={BellSvgIcon} width={25} height={25} />
              </div>
              <a className="l1-list-header-avatar" href="/profile">
                PD
              </a>
            </div>
          </header>
          <main>
            <h1>Accounts</h1>
            {accsList.length > 0 ? (
              <ul className="l1-list-main-heading">
                {accsList.map((acc) => (
                  <li key={acc.appName} className="l1-list-item">
                    <a
                      href={acc.appSite}
                      target="_blank"
                      className="l1-list-item--link"
                    >
                      <img
                        src={acc.appThumbSrc}
                        className="l1-list-item-thumb"
                      />
                      <div className="l1-list-item-title-container">
                        <p className="l1-list-item-main-title">{acc.appName}</p>
                        <p>{acc.appSite.substring(12)}</p>
                      </div>
                      <div className="l1-list-item-account">
                        {acc.noOfAccs + " "}
                        {acc.noOfAccs === 1 ? "account" : "accounts"}
                      </div>
                      <button className="l1-list-item-action-menu-btn">
                        <img src="assets/svg-icons/dot-horizontal-menu.svg" />
                      </button>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <h2>Loading...</h2>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
