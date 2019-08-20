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
                SHA-256: c97a8d6914eee9a0f317bd5ddac9310df4bcdb46cc6f679fc7dbaeea958aa2fa <br />
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
              <li>Open the Extension Manager</li>
              <li>Turn on the developer mode</li>
              <li>Download the extension zip file <a href="#">here</a></li>
              <li>Now click on Load unpacked button on the top left and select the extracted folder</li>
              <li>You are all-set now, head over to lihkg.com and enjoy keyboard fighting!</li>
            </ol>
            <p>
              Please get in touch if you need any help! <br />
              If everything is going well, please feel free to buy me a cup of coffee.
              Email: qlmviro2ke@protonmail.com
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
