import React from 'react';
import styleLinks from './Links.module.scss'
import {NavLink} from "react-router-dom";


function Links(props:any) {

  return (
    <div className={styleLinks.container}>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework1'}>Homework 1</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework2'}>Homework 2</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework3'}>Homework 3</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework4'}>Homework 4</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 5</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework6'}>Homework 6</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework7'}>Homework 7</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework8'}>Homework 8</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework9'}>Homework 9</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink activeClassName={styleLinks.activeLink} to={'/homework10'}>Homework 10</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 11</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 12</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 13</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 14</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 15</NavLink></div>
        <div className={styleLinks.linksItem}><NavLink to={'/'}>Homework 16</NavLink></div>
    </div>
  );
}

export default Links;
