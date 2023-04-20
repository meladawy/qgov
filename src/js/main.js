document.addEventListener('DOMContentLoaded', function () {
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
                              <a href="/about">What is Quantgov</a>
                          </div>
                          <div class="submenu-section">
                              <a href="/our-work-in-action">Our work in action</a>
                          </div>
                      </div>
                  </div>
              </li>

              <li class="submenu-parent">
                  <a href="#">Data</a>
                  <div class="submenu">
                      <div class="submenu-links-wrapper">
                          <div class="submenu-section">
                              <a href="https://www.reghub.ai/data/bulk">CSVs</a>
                          </div>
                          <div class="submenu-section">
                              <a href="https://www.reghub.ai/data/custom">Interactive Downloader</a>
                          </div>
                          <div class="submenu-section" data-extra-details="submenu-section-apis">
                              <h3>APIs <i class="fas fa-chevron-right"></i></h3>
                              <ul>
                                  <li><a href="#">Subcategory 2.1</a></li>
                                  <li><a href="#">Subcategory 2.2</a></li>
                                  <li><a href="#">Subcategory 2.3</a></li>
                              </ul>
                          </div>
                      </div>

                      <div class="submenu-extra-content-wrapper">
                          <div class="submenu-extra-section-item" id="submenu-section-apis">
                              <h3>Our APIs</h3>
                              <ul>
                                  <li><a href="https://api.quantgov.org/swagger-ui.html">RegCensus API</a></li>
                                  <li><a href="https://github.com/QuantGov/regcensus-api-python">Python API Package</a></li>
                                  <li><a href="https://github.com/QuantGov/regcensus-api-client-R">R API Package</a></li>
                                  <li><a href="https://www.quantgov.org/api-python-library-full-tutorial">API Help Guide</a></li>
                                  <li><a href="https://new-website-files.s3.amazonaws.com/Regcensus+API+Patch+2.1.pdf">Patch Notes</a></li>
                              </ul>
                          </div>
                      </div>
                      <!-- Add more submenu-sections as needed -->
                  </div>
              </li>
              <li><a href="#">Visuals</a></li>
              <li><a href="#">State Snapshots</a></li>
              <li><a href="#">AI-Readable Laws & Rules</a></li>
              <li><a href="#">Get Involved</a></li>
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

  // Get all submenu-section elements
  var submenuSections = document.querySelectorAll('.submenu-section');

  // Loop through submenu-section elements and add click event listeners
  for (var i = 0; i < submenuSections.length; i++) {
    submenuSections[i].addEventListener('click', function (e) {
      // Get data-extra-details value from the clicked submenu-section
      var extraDetailsId = e.currentTarget.getAttribute('data-extra-details');
      // Add active class to the clicked submenu-section and remove active class from all other submenu-section elements
      for (var k = 0; k < submenuSections.length; k++) {
        if (submenuSections[k].getAttribute('data-extra-details') !== extraDetailsId) {
          submenuSections[k].classList.remove('active');
        }
      }
      e.currentTarget.classList.toggle('active');

      // Remove active class from all submenu-extra-section-item elements except the target element
      var extraSectionItems = document.querySelectorAll('.submenu-extra-section-item');
      for (var j = 0; j < extraSectionItems.length; j++) {
        if (extraSectionItems[j].id !== extraDetailsId) {
          extraSectionItems[j].classList.remove('active');
        }
      }

      // Toggle active class on the target element
      var targetElement = document.getElementById(extraDetailsId);
      if (targetElement) {
        targetElement.classList.toggle('active');
      }

      // Toggle active class on the submenu-extra-content-wrapper element
      // And targetElement has attribute data-extra-details.
      console.log(e.currentTarget.getAttribute('data-extra-details'));
      if (targetElement && targetElement.classList.contains('active') && e.currentTarget.getAttribute('data-extra-details')) {
        var submenuLinksWrapper = e.currentTarget.closest('.submenu-links-wrapper');
        var extraContentWrapper = e.currentTarget.closest('.submenu').querySelectorAll('.submenu-extra-content-wrapper')[0];

        console.log(extraContentWrapper);
        if (extraContentWrapper) {
          extraContentWrapper.classList.add('active');
        }

        if (submenuLinksWrapper) {
          submenuLinksWrapper.classList.add('expanded');
        }

        // Add expanded class to all
      } else if (targetElement && !targetElement.classList.contains('active')) {
        var submenuLinksWrapper = e.currentTarget.closest('.submenu-links-wrapper');
        var extraContentWrapper = e.currentTarget.closest('.submenu').querySelectorAll('.submenu-extra-content-wrapper')[0];

        if (extraContentWrapper) {
          extraContentWrapper.classList.remove('active');
        }

        if (submenuLinksWrapper) {
          submenuLinksWrapper.classList.remove('expanded');
        }
      }
    });
  }

});
