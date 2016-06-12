import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
    <h1>iHealth BP Mantra Demo</h1>
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='/'>Home</a> &amp;</small>
    </footer>
  </div>
);

export default Layout;
