import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className={"title"}>
        <center><h1>LIHKG WYSIWYG Editor 0.1.1</h1></center>
      </header>
      <figure class="ext_image">
        <img alt="extension_img" src="https://na.cx/i/thG5DGr.png" />
      </figure>
      <figure class="ext_image">
        <img alt="extension_img2" src="https://na.cx/i/OsP7crV.gif" />
      </figure>
      <main>
        <section>
          <header>
            <h2>Security tips</h2>
          </header>
          <article>
              <p>Make sure to confirm the lihkg account number also with the URL on this website.</p>
              <pre>
                Lihkg #no: #61985
              </pre>
          </article>
        </section>
        <section>
          <header>
            <h2>Google Chrome Browser</h2>
          </header>
          <article>
            <p>Follow the below steps to add the extension to your Google Chrome browser:</p>
            <ol className={"leading_tab"}>
              <li>Download the extension crx file <a href="./lihkg_wysiwyg_editor.crx">here</a></li>
              <li>Go to the extension manager page chrome://extensions</li>
              <li>Drag and Drop the extension crx file to your chrome browser</li>
              <li>Confirm to install the extension</li>
              <li>Confirm the app id <code>kajbhaokhejchokeeaeghickdcgpghde</code> in extension manager page</li>
              <li>You are all-set now, head over to lihkg.com, a transparent toolbar appears at the bottom left borner<img alt="minimized_ext" src="https://imgur.com/eczddHD.png"/></li>
              <li>Enjoy keyboard fighting!</li>
            </ol>
            <p>
              Please get in touch if you need any help! <br />
              If everything is going well, feel free to buy me a cup of coffee. <br />
              Email: qlmviro2ke@protonmail.com
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
