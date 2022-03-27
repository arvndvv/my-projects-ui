import './App.css';
import { useState } from 'react';
function App() {
  const [active, setActive] = useState('in-progress');
  const [menu, setMenuActive] = useState('home');
  return (
    <div className="App">
      <div className="container">
        <div className='heading'>
          <small>My</small>
          <h2>Projects</h2>
        </div>
        <div className='tab'>
          <div className={'tab-item ' + (active === 'in-progress' ? 'active' : '')} onClick={() => { setActive('in-progress') }}>In Progress</div>
          <div className={'tab-item ' + (active === 'all' ? 'active' : '')} onClick={() => { setActive('all') }}>All Projects</div>
        </div>
        <div className='projects'>
          {[...Array(8)].map((e, i) => (
            <div className='project' key={i}>
              <div className='project__extra'>
                <div className='project__authors'>
                  <div className='project__author'></div>
                  <div className='project__author'></div>
                </div>
                <div className='project__elipsis'></div>
              </div>
              <div className='project__title'>
                Draft onboarding documentation for design team.
              </div>
              <div className='project__description'>Refer documentation templates from company Wiki.</div>
              <div className='project__tags'>
                <span className='project__tag project__tag--primary'>Work</span>
                <span className='project__tag project__tag--secondary'>Design Team</span>
              </div>
            </div>
          ))}
        </div>
        <div className='menu'>
          <div className='menu__item menu__item--add'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.26193 0.214386H10.7381V8.26172H18.7857V10.7379H10.7381V18.7858H8.26193V10.7379H0.214294V8.26172H8.26193V0.214386Z" fill="white" />
            </svg>

          </div>
          <div className={'menu__item ' + (menu === 'home' ? 'active' : '')} onClick={()=>{setMenuActive('home')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.49C2.99989 9.33761 3.03462 9.18721 3.10152 9.0503C3.16841 8.91338 3.26572 8.79356 3.386 8.7L11.386 2.478C11.5615 2.34144 11.7776 2.2673 12 2.2673C12.2224 2.2673 12.4385 2.34144 12.614 2.478L20.614 8.7C20.7343 8.79356 20.8316 8.91338 20.8985 9.0503C20.9654 9.18721 21.0001 9.33761 21 9.49V20ZM19 19V9.978L12 4.534L5 9.978V19H19Z" fill="#9C9EA8" />
            </svg>
          </div>
          <div className={'menu__item '  + (menu === 'favourite' ? 'active' : '')} onClick={()=>{setMenuActive('favourite')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M6 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V22.143C19.0001 22.2324 18.9763 22.3202 18.9309 22.3973C18.8855 22.4743 18.8204 22.5378 18.7421 22.5811C18.6639 22.6244 18.5755 22.6459 18.4861 22.6434C18.3968 22.641 18.3097 22.6146 18.234 22.567L12 18.03L5.766 22.566C5.69037 22.6135 5.60339 22.6399 5.5141 22.6424C5.42482 22.6449 5.33649 22.6235 5.2583 22.5803C5.1801 22.5371 5.11491 22.4738 5.06948 22.3969C5.02406 22.32 5.00007 22.2323 5 22.143V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2ZM17 4H7V19.432L12 15.671L17 19.432V4Z" fill="#9C9EA8" />
              </g>
            </svg>

          </div>
          <div className={'menu__item ' + (menu === 'cart' ? 'active' : '')} onClick={()=>{setMenuActive('cart')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M4.00002 6.41399L0.757019 3.17199L2.17202 1.75699L5.41402 4.99999H20.656C20.8119 4.99998 20.9656 5.0364 21.1049 5.10636C21.2442 5.17631 21.3652 5.27785 21.4583 5.40288C21.5513 5.52792 21.6139 5.67297 21.6409 5.82648C21.668 5.97998 21.6588 6.13768 21.614 6.28699L19.214 14.287C19.1523 14.4931 19.0257 14.6737 18.8531 14.8022C18.6806 14.9306 18.4712 15 18.256 15H6.00002V17H17V19H5.00002C4.7348 19 4.48045 18.8946 4.29291 18.7071C4.10538 18.5196 4.00002 18.2652 4.00002 18V6.41399ZM6.00002 6.99999V13H17.512L19.312 6.99999H6.00002ZM5.50002 23C5.10219 23 4.72066 22.842 4.43936 22.5606C4.15805 22.2793 4.00002 21.8978 4.00002 21.5C4.00002 21.1022 4.15805 20.7206 4.43936 20.4393C4.72066 20.158 5.10219 20 5.50002 20C5.89784 20 6.27938 20.158 6.56068 20.4393C6.84198 20.7206 7.00002 21.1022 7.00002 21.5C7.00002 21.8978 6.84198 22.2793 6.56068 22.5606C6.27938 22.842 5.89784 23 5.50002 23ZM17.5 23C17.1022 23 16.7207 22.842 16.4394 22.5606C16.1581 22.2793 16 21.8978 16 21.5C16 21.1022 16.1581 20.7206 16.4394 20.4393C16.7207 20.158 17.1022 20 17.5 20C17.8978 20 18.2794 20.158 18.5607 20.4393C18.842 20.7206 19 21.1022 19 21.5C19 21.8978 18.842 22.2793 18.5607 22.5606C18.2794 22.842 17.8978 23 17.5 23Z" fill="#9C9EA8" />
              </g>
            </svg>

          </div>
          <div className={'menu__item ' + (menu === 'profile' ? 'active' : '')} onClick={()=>{setMenuActive('profile')}}>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#BABBC2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#BABBC2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
