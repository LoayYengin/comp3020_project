class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a href="#" class="navbar-brand">GameStat</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
                            aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="toggleMobileMenu">
                        <ul class="navbar-nav">
                            <li><a href="index.html" class="nav-link">Dashboard</a></li>
                            <li><a href="playtime.html" class="nav-link">Playtime</a></li>
                            <li><a href="spending.html" class="nav-link">Spending</a></li>
                            <li><a href="globalRanking.html" class="nav-link">Global Rankings</a></li>
                            <li><a href="tags.html" class="nav-link">Favourite Tags</a></li>
                            <li><a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#goalsModal">Goals</a></li>
                            <li><a href="#" class="nav-link">Library</a></li>
                            <li> <a href="../signin/signin.html" class="nav-link">Log In</a></li>
                        </ul>
                    </div>
                </nav>
            </div>


            <div class="modal fade" id="goalsModal" tabindex="-1" aria-labelledby="Goals" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Goals</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="alert alert-primary" role="alert" style = "display:none" id = "saveAlert">
                      A simple primary alert—check it out!
                    </div>
                    Spending Goal:
                    <div class="progress" style="height: 30px";>
                      <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">10$ / 40$</div>
                    </div>
                    <br>
                    Playtime Goal:
                    <div class="progress" style="height: 30px";>
                      <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">12 hrs /20 hrs</div>
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveButton()">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        `;
    }
}

customElements.define('header-component', Header);
