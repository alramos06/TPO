let menu = document.querySelector(".navigation"); 
menu.innerHTML=`<nav class="menu">
                    <ul class="menu" type="none">
                        <li class="menu item1"><a href="index.html">Historia</a></li>
                        <li class="menu item2"><a href="">Gastronomia</a></li>
                        <li class="menu item3"><a href="Entertainment.html">Entretenimiento</a></li>
                        <li class="menu item4"><a href="contact.html">Contacto</a></li>
                    </ul>
                </nav>`;

let net = document.querySelector("footer"); 
net.innerHTML= `<div>
                    <ul class="network" type="none">
                        <li class="network"><a href="https:www.facebook.com/" target=”_blank”><i class="fab fa-facebook"></i></a></li>
                        <li class="network"><a href="https://twitter.com/" target=”_blank”><i class="fab fa-twitter"></i></a></li>
                        <li class="network"><a href="https://www.instagram.com/" target=”_blank”><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div>
                    <p style="text-align: center">@2023 San Telmo</p>
                </div>`;
