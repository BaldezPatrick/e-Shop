import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../Utils/constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">Logo</Link>
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 100%;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
    list-style: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: black;
        font-size: 1rem;
        text-transform: capitalize;
        text-decoration: none;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid black;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default NavBar;
