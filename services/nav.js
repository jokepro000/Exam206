class Navtest extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML=`<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <a href="/" class="navbar-brand mb-0 h1">
                <img class="d-inline-block align-top" src="image/logo.png" height="30"/>
            </a>
            <button 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            class="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
    
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="/admission" class="nav-link">
                            ADMISSION
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/academic" class="nav-link">
                            ACADEMIC
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/research" class="nav-link">
                            RESEARCH
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/contact" class="nav-link">
                            CONTACT
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="/login" class="nav-link">
                            LOGIN
                        </a>
                    </li>
                </ul>
        </div>
    </nav>`
    }
}
customElements.define("nav-test",Navtest)