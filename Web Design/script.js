document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > navbar.offsetHeight) {
        document.nav.classList.add('blurred');
      } else {
        document.nav.classList.remove('blurred');
      }
    });
  });
  
  function changeDescription(newContent, listItems) {
    var description = document.getElementById('description');
    var list = '';
  
    listItems.forEach(function(item) {
      list += '<li>' + item + '</li>';
    });
  
    description.innerHTML = '<h2>' + newContent + '</h2><ul>' + list + '</ul>';
  }
  
  function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  