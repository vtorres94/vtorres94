<style>
    .row {
        display: flex;
    }
    .column {
        flex: 50%;
    }
    button {
        background-color: #26DFE5;
        width: 100px;
        padding: 5px;
        border-radius: 10px;
        &:hover {
            cursor: pointer;
            background-color: #10A2A8;
        }
    }
</style>
<script>
    function sendMessage(event) {
        event.preventDefault();
        const message = document.getElementById('message').value;
        const url = `https://wa.me/5214492284747?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
</script>

<div align="center">
    <h1>Hi 👋, I'm Vladimir Torres</h1>
    <h3>Software Developer</h3>
</div>
<p align="left"> 
    <img src="https://komarev.com/ghpvc/?username=vtorres94&label=Profile%20views&color=0e75b6&style=flat" alt="vtorres94" /> 
</p>
<p>

-   🔭 I’m currently working on [CWVL Consultoría](https://cwvlconsultoria.com)

-   👨‍💻 All of my projects are available at [https://vladimir-torres.netlify.app](https://vladimir-torres.netlify.app)

-   💬 Ask me about **react, node, python, flutter, django**

-   📫 How to reach me **vladimir.tordavi@gmail.com**
    </p>
    <h3 align="left">Connect with me:</h3>
    <p align="left" style="padding-left: 50px">
        <a href="https://www.linkedin.com/in/vladimir-tordavi" target="blank">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="vladimir-torres-205072185" height="30" width="40" />
        </a>
    </p>
    <div align="center">
        <h2>SKILLS</h2>
        <h3>Tools</h3>
        <p>
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> 
            </a>
            <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> 
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer"> 
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> 
            </a>
        </p>
        <h2>BACKEND</h2>
        <div class="row">
            <div class="column">
                <h3>NODE</h3>
                <p>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> 
                    </a>
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
                        <img src="https://vectorified.com/images/express-js-icon-20.png" alt="express" width="40" height="40"/> 
                    </a>
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
                    </a>
                </p>
            </div>
            <div class="column">
                <h3>DJANGO</h3>
                <p>
                    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> 
                        <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/> 
                    </a>
                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
                    </a>
                </p>
            </div>
        </div>
        <h2>FRONTEND</h2>
        <div class="row">
            <div class="column">
                <h3>WEB</h3>
                <p>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
                    </a>
                    <a href="https://redux.js.org/" target="_blank" rel="noreferrer"> 
                        <img src="https://redux.js.org/img/redux.svg" alt="redux" width="40" height="40"/> 
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
                    </a>
                    <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> 
                    </a>
                </p>
            </div>
            <div class="column">
                <h3>MOBILE</h3>
                <p>
                    <a href="https://flutter.dev" target="_blank" rel="noreferrer"> 
                        <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/> 
                    </a> 
                </p>
            </div>
        </div>
        <h2>AUTOMATION</h2>
        <h3>SCRAPING</h3>
        <p>
            <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
            </a>
            <a href="https://www.selenium.dev" target="_blank" rel="noreferrer"> 
                <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" alt="selenium" width="40" height="40"/> 
            </a>
        </p><hr/>
        <div>
            <form onsubmit="sendMessage(event)">
                <h3>SEND ME A MESSAGE</h3>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Write a message..."></textarea><br><br>
                <button type="submit">SEND</button>
            </form>
        </div>

    </div>
