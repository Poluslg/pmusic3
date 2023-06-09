import React, { useEffect, useRef, useState } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'


export default function Afterlogin() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setheaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setHeaderBackground(false);
    // bodyRef.current.scrollTop >= 268
    //   ? setheaderBackground(true)
    //   : setheaderBackground(false);
  }
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };

      dispatch({ type: reducerCases.SET_USER, userInfo });

    };
    getUserInfo()
  }, [dispatch, token])
  return (
    <Container>
      <div className="spotify__body" >
        <Sidebar />
        <div className="body"ref={bodyRef} onScroll={bodyScrolled} >
          <Header navBackground={navBackground}  />
          <div className="body__contents">
            <Body  headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  )
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;

  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);

    .body {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .spotify__footer {
    background-color: #282828;
  }
`;
