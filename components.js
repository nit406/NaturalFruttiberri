// Load Header
function loadHeader() {
    const headerHTML = `
        <header>
            <nav>
                <div class="logo-div"><img height="100" width="100" src="images/NFB.jpg"></div>
				<div class="logo"></div>
                <ul class="nav-links">
                    <li><a href="index.html" id="nav-about">About Us</a></li>
					<li><a href="icecream.html" id="nav-home">Ice Cream</a></li>
					<li><a href="Froyo.html" id="nav-froyo">Frozen Yogurt</a></li>
					<li><a href="beverages.html" id="nav-beverages">Beverages</a></li>
					<li><a href="soup.html" id="nav-soup">Soups</a></li>
					<li><a href="catering.html" id="nav-catering">Catering</a></li>
                    <li><a href="contact.html" id="nav-contact">Contact Us</a></li>
                </ul>
            </nav>
			
        </header>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    highlightActiveNav();
}

// Load Footer
function loadFooter() {
    const footerHTML = ` 
	<a target="_blank" rel="noopener noreferrer" href="https://www.order.store/store/natural-fruttiberri-watertown/WARaq-dEU72HfUJ_l41eiA">
					<button id="animatedButton">🛒 Order Online</button>
				</a>
	
        <footer>
		<p><b>Connect Us:</b>&nbsp &nbsp &nbsp
			<a target="_blank" rel="noopener noreferrer" href="http://instagram.com/naturalfruttiberri">
				<img width="30px" height="30px" src="images/insta.png" />
			</a>&nbsp &nbsp &nbsp
			<a target="_blank" rel="noopener noreferrer" href="http://facebook.com/naturalfruttiberri">
				<img width="30px" height="30px"	 src="images/fb.webp" />
			</a> 
		</p> 
            <p>&copy; 2025 Natural Fruttiberri. All rights reserved. Made with ❤️ and sprinkles.</p>
			
        </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Highlight active navigation link
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'icecream.html' || currentPage === '') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (currentPage === 'index.html') {document.getElementById('nav-about')?.classList.add('active');
	} 
	else if (currentPage === 'contact.html') { document.getElementById('nav-contact')?.classList.add('active');
    }
	else if (currentPage === 'Froyo.html') { document.getElementById('nav-froyo')?.classList.add('active');
	}
	else if (currentPage === 'soup.html') { document.getElementById('nav-soup')?.classList.add('active');
		}
	else if (currentPage === 'beverages.html') { document.getElementById('nav-beverages')?.classList.add('active');
		}
		else if (currentPage === 'catering.html') { document.getElementById('nav-catering')?.classList.add('active');
				}
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
	
});


       


