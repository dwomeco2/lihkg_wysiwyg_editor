import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className={"title"}>
        <center><h1>LIHKG WYSIWYG Editor 0.1.0</h1></center>
      </header>
      <figure class="ext_image">
        <img alt="extension_img" src="https://na.cx/i/thG5DGr.png" />
      </figure>
      <main>
        <section>
          <header>
            <h2>Security tips</h2>
          </header>
          <article>
              <p>Make sure to confirm the SHA-256 for the downloaded zip package, lihkg account number also with the URL on this website.</p>
              <pre>
                SHA-256: df8f717c1666df29b476e5f9fad8cd20c56014cffdb422d88fa5fe618adcfee5 <br />
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
              <li>Open the <a href="chrome://extensions" target="_blank">Extension Manager</a></li>
              <li>Turn on the developer mode</li>
              <li>Download the extension zip file <a href="./build.zip">here</a></li>
              <li>Now click on <em>Load unpacked</em> button on the top left and select the extracted folder</li>
              <li>You are all-set now, head over to lihkg.com and enjoy keyboard fighting!</li>
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
