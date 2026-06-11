//Shared components that every page gets
    // Fetch components to insert into page
        //Header
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
            });
        //NavBar
        fetch('components/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;
                // Dispatch a custom event to signal that the navbar is officially in the DOM
                document.dispatchEvent(new Event('navbarReady'));
            })
            .catch(error => console.error('Error loading navigation:', error));
        //Footer
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data;
            });
