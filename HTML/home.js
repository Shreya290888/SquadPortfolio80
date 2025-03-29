// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav a');
  
//     navLinks.forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetPage = this.getAttribute('href');
//         window.location.href = targetPage;
//       });
//     });
  
//     // Animation on Scroll
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         } else {
//           entry.target.classList.remove('visible');
//         }
//       });
//     }, { threshold: 0.1 });
  
//     document.querySelectorAll('section').forEach(section => {
//       observer.observe(section);
//     });
//   });


