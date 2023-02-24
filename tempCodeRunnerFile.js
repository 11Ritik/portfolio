const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));