// Add custom login when window loaded using javascript and without using jQuery.
window.onload = function () {
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
}
