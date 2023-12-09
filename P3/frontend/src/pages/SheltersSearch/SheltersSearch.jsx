import React from "react";
import "./style.css";
import SheltersMain from "../../assets/images/shelters-main.jpg";

const SheltersSearch = () => {
    return (
        <div class="page-container">
            <div class="main px-6 pt-5">
            <div class="container-fluid" id="mainImgContainer">
                <img class="img-fluid" id="mainImg" alt="Responsive image" src={SheltersMain}/>
            </div>
            <div id="title">Meet our shelter organizations</div>
            <form class="formInputs" id="search" method="get">
                <div class="form-row d-flex justify-content-center" id="searchBar">
                <div class="form-group col d-flex justify-content-center align-center">
                    <input class="form-control" type="search" placeholder="Search for shelters..."/>
                    <a class="btn border-0 position-absolute" id="searchButton" type="submit" href="shelters-search.html#search">
                    <i class="bi bi-search" id="searchIcon"></i>
                    </a>
                </div>
                
                </div>
            </form>
            <form class="formInputs" id="searchSmall" method="get">
                <div class="form-row d-flex justify-content-center" id="searchBar">
                <div class="form-group col d-flex justify-content-center align-center">
                    <input class="form-control" type="search" placeholder="Search"/>
                    <button class="btn border-0 position-absolute" id="searchButton" type="submit">
                    <i class="bi bi-search" id="searchIcon"></i>
                    </button>
                </div>
                </div>
            </form>
            <div class="container" id="shelterList1">
            <div class="grid">
                <div class="grid-header tableHeader">
                Organization
                </div>
                <div class="grid-header tableHeader">
                Location
                </div>
                <div class="grid-header tableHeader">
                Contact
                </div>
                <div class="grid-item shelterLink">
                <a href="shelter-detail.html" class="shelterLink">Paw Patrol Rescue</a>
                </div>
                <div class="grid-item">Adventure Bay, ON CA</div>
                <div class="grid-item">
                <a class="email" href="mailto:pawpatrolrescue@gmail.com">pawpatrolrescue@gmail.com</a> 
                </div>
                <div class="grid-item shelterLink">Just Paws Animal Rescue</div>
                <div class="grid-item">Richmond Hill, ON CA</div>
                <div class="grid-item">
                <a class="email" href="mailto:info.justpaws@gmail.com">info.justpaws@gmail.com</a> 
                </div>
                </div>
                </div>
            <nav>
                <ul class="pagination">
                <li class="page-item disabled"><a class="page-link" href="#search">Previous</a></li>
                <li class="page-item"><a class="page-link active" aria-current="page" href="#search">1          </a></li>
                <li class="page-item"><a class="page-link" href="shelters-next-page.html#search">2</a></li>
                <li class="page-item"><a class="page-link" href="#search">3</a></li>
                <li class="page-item"><a class="page-link" href="shelters-next-page.html#search">Next</a></li>
                </ul>
            </nav>            
            </div>
            <footer class="text-center">
            <div class="container-fluid">
                <div class="row gx-0" id="footer">
                <div class="footerContact col">
                    <div id="connect">Connect with Us!
                    <p id="connectPetPal">PetPal</p>
                    </div>
                </div>
                <div class="col-1" id="verticalLineBox">
                    <div id="verticalLine"></div>
                </div>
                <div id="contactInfo" class="col">
                    <a id="link" href="mailto:petpal23@gmail.com">petpal23@gmail.com</a>        	
                    <p id="telephone">(987) 654 - 3210</p>
                    <ul class="list-group list-group-horizontal">
                    <li class="list-group-item" id="insta">
                        <a href="#" role="button">
                        <i class="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li class="list-group-item" id="x">
                        <a href="#" role="button">
                        <i class="bi bi-twitter-x"></i>
                        </a>
                    </li>
                    <li class="list-group-item" id="fb">
                        <a href="#" role="button">
                        <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                    </ul>
                </div> 
                </div>
                <div class="row">
                <div class="copyright">&copy Copyright 2023</div>
            </div>
            </div>
            </footer>
        </div>
    )
}

export default SheltersSearch;