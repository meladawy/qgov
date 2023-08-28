document.addEventListener('DOMContentLoaded', function () {
  // Add subscribe action to the subscribe button.
  newsletterSubscribeAction();
  // Add custom login when window loaded using javascript and without using jQuery.
  const megaMenu = `
  <nav class="mega-menu">
        <div class="menu-container">
            <ul class="menu-items">
                <li class="submenu-parent">
                    <a href="#">About</a>
                    <div class="submenu">
                        <div class="submenu-links-wrapper">
                            <div class="submenu-section">
                                <a class="dropdown-nav-link" href="/about">What is Quantgov</a>
                            </div>
                            <div class="submenu-section">
                                <a class="dropdown-nav-link" href="/our-work-in-action">Our work in action</a>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="submenu-parent">
                    <a href="#">Data</a>
                    <div class="submenu">
                        <div class="submenu-links-wrapper">
                            <div class="submenu-section">
                                <a target="_blank" class="dropdown-nav-link" href="https://www.reghub.ai/data/bulk">CSVs</a>
                            </div>
                            <div class="submenu-section">
                                <a target="_blank" class="dropdown-nav-link" href="https://www.reghub.ai/data/custom">Interactive
                                    Downloader</a>
                            </div>
                            <div class="submenu-section" data-extra-details="submenu-section-apis">
                                <p class="dropdown-nav-link">API <i class="fas fa-chevron-right"></i></p>
                            </div>
                            <div class="submenu-section" data-extra-details="submenu-section-documentation">
                                <p class="dropdown-nav-link">Documentation <i class="fas fa-chevron-right"></i></p>
                            </div>
                        </div>

                        <div class="submenu-extra-content-wrapper">
                            <div class="submenu-extra-section-item" id="submenu-section-apis">
                                <p class="style-1">Our API</p>
                                <ul>
                                    <li><a target="_blank" href="https://api.quantgov.org/">RegCensus API</a></li>
                                    <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-python">Python API
                                            Package</a></li>
                                    <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-client-R">R API Package</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.quantgov.org/api-python-library-full-tutorial">API Help
                                            Guide</a></li>
                                </ul>
                            </div>
                            <div class="submenu-extra-section-item" id="submenu-section-documentation">
                                <p class="style-1">Guides and Docs</p>
                                <ul>
                                    <li><a target="_blank" href="https://www.reghub.ai/guide">User's Guide</a></li>
                                    <li><a href="/documentation">Documentation</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Add more submenu-sections as needed -->
                    </div>
                </li>
                <li><a target="_blank" href="/visuals">Visuals</a></li>
                <li><a href="/regcensus-explorer">State Snapshots</a></li>
                <li class="submenu-parent">
                    <a target="_blank" href="https://www.reghub.ai/">AI-Readable Laws & Rules</a>
                    <div class="submenu right-menu" style="display: none;">
                        <div class="submenu-links-wrapper">
                            <div class="submenu-section">
                                <p class="style-1">Do more with QuantGov</p>
                                <p class="misc">
                                    Access pre-compiled downloads of cleaned text files and metadata. Or create your own
                                    customized download of documents and data from tens of millions of legal documents
                                    from around the world.
                                </p>

                                <div class="text-center">
                                    <a class="btn-primary margin-top-50" href="#">Login for full access</a>
                                    <a href="#" class="btn-secondary margin-top-25">Don't have an account? Sign up.</a>
                                </div>
                            </div>
                        </div>

                        <div class="submenu-extra-content-wrapper">
                            <div class="submenu-extra-section-item" id="submenu-section-apis">
                                <p class="style-1">Our API</p>
                                <ul>
                                    <li><a target="_blank" href="https://api.quantgov.org/">RegCensus API</a></li>
                                    <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-python">Python API
                                            Package</a></li>
                                    <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-client-R">R API Package</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.quantgov.org/api-python-library-full-tutorial">API Help
                                            Guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="submenu-parent">
                    <a href="#">Get Involved</a>
                    <div class="submenu right-menu">
                        <div class="submenu-links-wrapper">
                            <div class="submenu-section" data-extra-details="submenu-section-join-research">
                                <p class="dropdown-nav-link">Join Our Research <i class="fas fa-chevron-right"></i></p>
                            </div>
                            <div class="submenu-section" data-extra-details="submenu-section-learn-nlp">
                                <p class="dropdown-nav-link">Learn Natural Language Processing <i class="fas fa-chevron-right"></i></p>
                            </div>
                        </div>

                        <div class="submenu-extra-content-wrapper">
                            <div class="submenu-extra-section-item" id="submenu-section-join-research">
                                <p class="style-1">Policy Analytics Research Program</p>
                                <div class="misc">
                                    Cultivating research at the intersection of the social sciences, technology, and public policy.
                                </div>
                                <ul>
                                    <li><a href="/policy-analytics-program">Program Overview</a></li>
                                    <li><a href="/policy-research-program">Student Application</a></li>
                                    <li><a href="/research-proposals">Research Proposal Application</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="submenu-extra-section-item" id="submenu-section-learn-nlp">
                                <p class="style-1">How to use the platform</p>
                                <ul>
                                    <li><a target="_blank" href="https://quantgov.github.io/quantgov-tutorial/pages/intro.html">Platform Tutorial</a></li>
                                    <li><a target="_blank" href="https://quantgov-website-files.s3.amazonaws.com/file-backup/QuantGov-An-Overview.pdf">Platform Overview</a></li>
                                    <li><a target="_blank" href="https://github.com/QuantGov/quantgov">GitHub Repository</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Add more submenu-sections as needed -->
                    </div>
                </li>
            </ul>
        </div>
    </nav>
`;

  const megaMenuMobile = `
<nav class="mega-menu">
    <div class="menu-container">
        <ul class="menu-items">
            <li>
                <a class="" href="#">About <i class="fas fa-chevron-right"></i></a>

                <ul class="submenu-section">
                    <li>
                        <a class="" href="/about">What is Quantgov</a>
                    </li>
                    <li>
                        <a class="" href="/our-work-in-action">Our work in action</a>
                    </li>
                </ul>
            </li>

            <li>
                <a class="" href="#">Data <i class="fas fa-chevron-right"></i></a>
                <ul class="submenu-links-wrapper">
                    <li class="submenu-section">
                        <a class="" href="https://www.reghub.ai/data/bulk">CSVs</a>
                    </li>
                    <li class="submenu-section">
                        <a class="" href="https://www.reghub.ai/data/custom">Interactive Downloader</a>
                    </li>
                    <li class="submenu-section" data-extra-details="submenu-section-apis">
                        <a href="#" class="">API <i class="fas fa-chevron-right"></i></a>
                        <ul class="submenu-extra-section-item">
                            <li><a target="_blank" href="https://api.quantgov.org/">RegCensus API</a></li>
                            <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-python">Python API Package</a></li>
                            <li><a target="_blank" href="https://github.com/QuantGov/regcensus-api-client-R">R API Package</a></li>

                        </ul>
                    </li>
                    <li class="submenu-section" data-extra-details="submenu-section-documentation">
                        <a href="#" class="">Documentation <i class="fas fa-chevron-right"></i></a>
                        <ul class="submenu-extra-section-item">
                            <li><a target="_blank" href="https://www.reghub.ai/guide">User's Guide</a></li>
                            <li><a href="/documentation">Documentation</a></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li><a href="/visuals">Visuals</a></li>
            <li><a href="/regcensus-explorer">State Snapshots</a></li>
            <li>
                <a target="_blank" href="https://www.reghub.ai/">AI-Readable Laws & Rules</a>
            </li>

            <li>
                <a class="" href="#">Get Involved <i class="fas fa-chevron-right"></i></a>

                <ul class="submenu-links-wrapper">
                    <li class="submenu-section" data-extra-details="submenu-section-join-research">
                        <a href="#" class="">Join Our Research <i class="fas fa-chevron-right"></i></a>
                        <ul class="submenu-extra-section-item" id="submenu-section-join-research">
                            <li><a href="/policy-analytics-program">Program Overview</a></li>
                            <li><a href="/policy-research-program">Student Application</a></li>
                            <li><a href="/research-proposals">Research Proposal Application</a></li>
                        </ul>
                    </li>
                    <li class="submenu-section" data-extra-details="submenu-section-learn-nlp">
                        <a href="#" class="">Learn Natural Language Processing <i class="fas fa-chevron-right"></i></a>
                        <ul class="submenu-extra-section-item" id="submenu-section-learn-nlp">
                            <li><a target="_blank" href="https://quantgov.github.io/quantgov-tutorial/pages/intro.html">Platform
                                    Tutorial</a></li>
                            <li><a
                                    href="https://quantgov-website-files.s3.amazonaws.com/file-backup/QuantGov-An-Overview.pdf">Platform
                                    Overview</a></li>
                            <li><a target="_blank" href="https://github.com/QuantGov/quantgov">GitHub Repository</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
  `;

  // If element with class '.header-nav' exists, replace it with megaMenu.
  if (document.querySelector('.header-nav')) {
    document.querySelector('.header-nav').innerHTML = megaMenu;
    // Show .header-nav element after replacing it with megaMenu.
    document.querySelector('.header-nav').style.display = 'block';
  }

  // Replace .header-menu-nav-list with megaMenu.
  if (document.querySelector('.header-menu-nav-list')) {
    // Create a temporary element to host the megaMenu HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = megaMenuMobile;

    // Extract .menu-container content from the temporary element
    const menuContainerContent = tempDiv.querySelector('.menu-container').innerHTML;
    // Get element with class 'menu-container' from megaMenu variable.
    document.querySelector('.header-menu-nav-list').innerHTML = menuContainerContent;
  }

  // Get all submenu-section elements
  var submenuSections = document.querySelectorAll('.mega-menu .submenu-section');

  // Function to deactivate active menus
  function deactivateMenu(e) {
    deactivateCurrentMenuItem();
    var extraDetailsId = e.currentTarget.getAttribute('data-extra-details');
    for (var k = 0; k < submenuSections.length; k++) {
      if (submenuSections[k].getAttribute('data-extra-details') !== extraDetailsId) {
        submenuSections[k].classList.remove('active');
      }
    }

    var extraSectionItems = document.querySelectorAll('.submenu-extra-section-item');
    for (var j = 0; j < extraSectionItems.length; j++) {
      if (extraSectionItems[j].id !== extraDetailsId) {
        extraSectionItems[j].classList.remove('active');
      }
    }

    var targetElement = document.getElementById(extraDetailsId);
    if (targetElement) {
      targetElement.classList.remove('active');
    }

    var submenuLinksWrapper = e.currentTarget.closest('.submenu-links-wrapper');
    var extraContentWrapper = e.currentTarget.closest('.submenu').querySelectorAll('.submenu-extra-content-wrapper')[0];

    if (extraContentWrapper) {
      extraContentWrapper.classList.remove('active');
    }

    if (submenuLinksWrapper) {
      submenuLinksWrapper.classList.remove('expanded');
    }

    if (e.currentTarget.closest('.submenu')) {
      e.currentTarget.closest('.submenu').classList.remove('expanded');
    }
  }

  // Loop through submenu-section elements and add hover event listeners
  for (var i = 0; i < submenuSections.length; i++) {
    submenuSections[i].addEventListener('mouseenter', function (e) {
      deactivateCurrentMenuItem();
      // Get data-extra-details value from the hovered submenu-section
      var extraDetailsId = e.currentTarget.getAttribute('data-extra-details');
      // Add active class to the hovered submenu-section and remove active class from all other submenu-section elements
      for (var k = 0; k < submenuSections.length; k++) {
        if (submenuSections[k].getAttribute('data-extra-details') !== extraDetailsId) {
          submenuSections[k].classList.remove('active');
        }
      }
      e.currentTarget.classList.add('active');

      // Remove active class from all submenu-extra-section-item elements except the target element
      var extraSectionItems = document.querySelectorAll('.submenu-extra-section-item');
      for (var j = 0; j < extraSectionItems.length; j++) {
        if (extraSectionItems[j].id !== extraDetailsId) {
          extraSectionItems[j].classList.remove('active');
        }
      }

      // Add active class on the target element
      var targetElement = document.getElementById(extraDetailsId);
      if (targetElement) {
        targetElement.classList.add('active');
      }

      // Add active class on the submenu-extra-content-wrapper element
      // And targetElement has attribute data-extra-details.
      if (targetElement && targetElement.classList.contains('active') && e.currentTarget.getAttribute('data-extra-details')) {
        var submenuLinksWrapper = e.currentTarget.closest('.submenu-links-wrapper');
        var extraContentWrapper = e.currentTarget.closest('.submenu').querySelectorAll('.submenu-extra-content-wrapper')[0];

        if (extraContentWrapper) {
          extraContentWrapper.classList.add('active');
        }

        if (submenuLinksWrapper) {
          submenuLinksWrapper.classList.add('expanded');
        }

        if (e.currentTarget.closest('.submenu')) {
          e.currentTarget.closest('.submenu').classList.add('expanded');
        }
      } else {
        deactivateCurrentMenuItem();
      }
    });

    submenuSections[i].addEventListener('mouseleave', function (e) {
      // deactivateMenu(e);
    });
  }

  // Mobile menu.
  const menuLinks = document.querySelectorAll('nav.header-menu-nav-list > ul li a');

  menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          const siblingUl = link.nextElementSibling;

          if (siblingUl && siblingUl.tagName === 'UL') {
              event.preventDefault();
              const parentLi = link.closest('li');
              if (parentLi) {
                  parentLi.classList.toggle('expanded');
              }
          }
      });
  });

});

// Function to check if an element is a descendant of another element
function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}


function deactivateCurrentMenuItem() {
  var activeSubmenuLinksWrapper = document.querySelectorAll('.submenu-links-wrapper.expanded');
  var activeSubmenuExtraContentWrapper = document.querySelectorAll('.submenu-extra-content-wrapper.active');
  var activeSubmenuSection = document.querySelectorAll('.submenu-section.active');
  var activeSubmenu = document.querySelectorAll('.submenu.expanded');

  if (activeSubmenuExtraContentWrapper) {
    for (var i = 0; i < activeSubmenuExtraContentWrapper.length; i++) {
      activeSubmenuExtraContentWrapper[i].classList.remove('active');
    }
  }

  if (activeSubmenuLinksWrapper) {
    for (var i = 0; i < activeSubmenuLinksWrapper.length; i++) {
      activeSubmenuLinksWrapper[i].classList.remove('expanded');
    }
  }

  if (activeSubmenuSection) {
    for (var i = 0; i < activeSubmenuSection.length; i++) {
      activeSubmenuSection[i].classList.remove('active');
    }
  }

  if (activeSubmenu) {
    for (var i = 0; i < activeSubmenu.length; i++) {
      activeSubmenu[i].classList.remove('expanded');
    }
  }
}

function newsletterSubscribeAction() {
  // Replace this with a selector to the form.
  let formSelector = "form[id='5063243']";
  // Replace this with the element you need to delete and replace with the success message.
  let elementToReplaceAfterSuccess = ".newsletter-form-wrapper";
  // Replace this with the success massage html markup.
  let elementReplaceWith = '<div class="quantgov-newsletters-signup-thank-you-section"><h1>Congratulations, you successfully signed up.</h1></div>';

  let form = document.querySelector(formSelector);

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // If form is not valid, return early to prevent sending the fetch request
      if (!form.checkValidity()) {
        return;
      }

      let formData = new FormData(form);

      fetch(form.getAttribute("action"), {
        method: 'POST',
        body: formData,
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          // Hide element with class .fe-block-yui_3_17_2_1_1685352218518_7911
          document.querySelector('.fe-block-yui_3_17_2_1_1685352218518_7911').style.display = 'none';
          document.querySelector(elementToReplaceAfterSuccess).outerHTML = elementReplaceWith;
        })
        .catch(function () {
          document.querySelector('.captchaHelp').textContent = 'Please fill the recaptcha checkbox to subscribe.';
        });

      return false;
    });
  }
}