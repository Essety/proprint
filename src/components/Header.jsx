import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";
import AuthDrawer from "./AuthDrawer";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

function Header() {

  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
const [showCart,setShowCart] = useState(false);
const [showAuth,setShowAuth] = useState(false);

  const handleEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        fontFamily: "Arial, sans-serif"
      }}
    >

      {/* HEADER BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          borderBottom: "1px solid #ddd",
          background: "#fff"
        }}
      >

        {/* LOGO */}
        <Link to="/">
  <img
    src="/logo.jpg"
    alt="Pro Prints Logo"
    style={{ height: "50px", objectFit: "contain", cursor: "pointer" }}
  />
</Link>

        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            fontWeight: "500",
            fontSize: "15px"
          }}
        >

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("stationery")}
          >
            Stationery ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("promotional")}
          >
            Promotional Materials ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("signs")}
          >
            Signs & Marketing ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("box")}
          >
            Box & Packaging ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("gift")}
          >
            Gift & Award ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("apparel")}
          >
            Apparel ▾
          </div>

          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleEnter("services")}
          >
            Services within hours ▾
          </div>

        </div>

       {/* ICONS */}
<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

  {/* SEARCH */}
  <FiSearch
    size={22}
    style={{ cursor: "pointer" }}
    onClick={() => setShowSearch(true)}
  />

  {/* USER LOGIN */}
  <FiUser
    size={22}
    style={{ cursor: "pointer" }}
    onClick={() => setShowAuth(true)}
  />

  {/* CART */}
  <div
    style={{ position: "relative", cursor: "pointer" }}
    onClick={() => setShowCart(true)}
  >

    <FiShoppingCart size={22} />

    {/* CART COUNT */}
    <span
      style={{
        position: "absolute",
        top: "-8px",
        right: "-8px",
        background: "red",
        color: "white",
        fontSize: "11px",
        borderRadius: "50%",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      0
    </span>

  </div>

</div>

      </div>

      {/* MEGA MENU */}
      {activeMenu && (
        <div
          onMouseEnter={() => setActiveMenu(activeMenu)}
          style={{ width: "100%" }}
        >
          <MegaMenu type={activeMenu} />
        </div>
      )}

      {showSearch && (
  <SearchOverlay closeSearch={() => setShowSearch(false)} />
)}

{showAuth && (
  <AuthDrawer closeAuth={() => setShowAuth(false)} />
)}

{showCart && (
  <CartDrawer closeCart={() => setShowCart(false)} />
)}

    </div>
  );
}

export default Header;