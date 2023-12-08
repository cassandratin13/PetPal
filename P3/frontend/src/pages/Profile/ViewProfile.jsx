import React from "react";

export const ViewProfile = () => {
    return (
        <div class="page-container">
            <div class="main px-6 pt-6">
            <div id="title">Paw Patrol Rescue</div>
                <a href="https://pawpatrolandfriends.com/" id="webpage" target="_blank">Visit our webpage</a>
                <img id="shelterLogo3" src="images/pawpatrol.png"/>
                <div class="container" id="contact">
                <div class="grid" id="contactGrid">
                    <div class="subtitleHeader gridItem"><div class="subtitle">Contact Details:</div></div> 
                    <div class="shelterImg"><img id="shelterLogo" src="images/pawpatrol.png"/></div>
                    <div class="phoneIcon"><i class="bi bi-telephone-fill icon"></i></div>
                    <div class="phoneLabel gridItem"><i class="bi bi-telephone-fill icon2"></i><div class="shelterContactInfoLabel">Phone:</div></div>
                    <div class="phone gridItem"><div class="textInfo">(123) 456 - 7890</div></div>
                    <div class="emailIcon"><i class="bi bi-envelope-fill icon"></i></div>
                    <div class="emailLabel gridItem"><i class="bi bi-envelope-fill icon2"></i><div class="shelterContactInfoLabel">Email:</div></div>
                    <a class="email gridItem" href="mailto:pawpatrolrescue@gmail.com"><div class="textInfo">pawpatrolrescue@gmail.com</div></a>
                    <div class="locationIcon"><i class="bi bi-geo-alt-fill icon"></i></div>
                    <div class="locationLabel gridItem"><i class="bi bi-geo-alt-fill icon2"></i><div class="shelterContactInfoLabel">Location:</div></div> 
                    <div class="location gridItem"><div class="textInfo">123 Pup Street, Adventure Bay, ON</div></div>
                </div>
                <img id="shelterLogo2" src="images/pawpatrol.png"/></div>
                <div class="container justify-content-start text-start">
                <h2 class="subtitle2">Mission Statement:</h2>
                <p class="textInfo" id="mission">No job is too big, no pup is too small!</p>
                <p class="textInfo" id="mission">The rescuers at Paw Patrol Rescue commit themselves to saving 
                    all animals in Ontario and provide them with the care and shelter they deserve.
                    We give our animals a proper inspection to ensure they are healthy and ready to find their new homes!</p>
                </div>
                <div class="container justify-content-start text-start">
                <h2 class="subtitle2" id="petsSubtitle">Pets from Paw Patrol Rescue:</h2>
                </div>
                <div class="container" id="carouselContainer">
                <div id="petsCarousel" class="carousel slide" data-bs-interval="false">
                <div class="carousel-indicators">
                    <button class="carouselIndicator active" type="button" data-bs-target="#petsCarousel" data-bs-slide-to="0" aria-current="true"></button>
                    <button class="carouselIndicator" type="button" data-bs-target="#petsCarousel" data-bs-slide-to="1"></button>
                    <button class="carouselIndicator" type="button" data-bs-target="#petsCarousel" data-bs-slide-to="2"></button>
                </div>
                <div class="carousel-inner">
                    
                    <div class="carousel-item active" data-bs-interval="false">
                    <div class="container align-middle text-center" id="carouselPage">
                        <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        </button>
                        <div class="grid">
                        <div class="grid-item">
                            <a type="button" class="pet" href="#">
                            <img class="petImage" src="images/buddy.jpg"/>
                            <div class="petLabel">Buddy</div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                    <div class="container align-middle text-center" id="carouselPage">
                        <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        </button>
                        <div class="grid">
                        <div class="grid-item">
                            <a type="button" class="pet" href="#">
                            <img class="petImage" src="images/perry.jpg"/>
                            <div class="petLabel">Perry</div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                    <div class="container align-middle text-center" id="carouselPage">
                        <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#petsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        </button>
                        <div class="grid">
                        <div class="grid-item">
                            <a type="button" class="pet" href="#">
                            <img class="petImage" src="images/perry.jpg"/>
                            <div class="petLabel">Perry</div>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
            <div class="container justify-content-start text-start" id="reviews">
                <div class="reviewRow">
                <h2 class="subtitle2" id="reviewSubtitle">Reviews: </h2>
                <form class="rating" action="https://postman-echo.com/post" method="post">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5" title="5" class="bi bi-star-fill"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4" title="4" class="bi bi-star-fill"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3" title="3" class="bi bi-star-fill"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2" title="2" class="bi bi-star-fill"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1" title="1" class="bi bi-star-fill"></label>
                </form>

                <a href="review.html" class="reviewClick">Leave a review</a>
                </div>
            <div class="container justify-content-start text-start" id="reviewBox">
                <div class="row align-middle">
                <div class="col d-flex justify-content-start">
                    <h3 class="reviewerName">Sosuke</h3>
                </div>
                <div class="col d-flex justify-content-end stars">
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                </div>
                </div>
                <div class="reviewText">
                Lovely organization! I adopted a pet goldfish and named her Ponyo, and she is so adorable! 
                Would love to adopt another pet from them again and give Ponyo and me some more friends!
                </div>
                <div class="container" id="replyCollapse">
                <a data-bs-target="#replyForm" class="btn reply" data-bs-toggle="collapse" role="button" 
                aria-expanded="false" aria-controls="replyForm" id="replyButton">
                    Reply
                </a>
            </div>
            </div>
            <div class="container justify-content-start text-start collapse replyBox" id="replyForm">
                    <div class="col d-flex justify-content-start">
                    <h3 class="reviewerName responderName">Jack</h3>
                    </div>
                <form action="#" method="post" id="replyBoxForm">
                    <textarea id="replyComment" rows = "1" type="text" name="replyComment" class="reviewText" required placeholder="Reply here..."></textarea>
                    <a href="#" type="submit" class="submit">Submit</a>
                </form>    
            </div>
            <div class="container justify-content-start text-start" id="reviewBox">
                <div class="row align-middle">
                <div class="col d-flex justify-content-start">
                    <h3 class="reviewerName">Vante</h3>
                </div>
                <div class="col d-flex justify-content-end stars">
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                </div>
                </div>
                <div class="reviewText">
                Adopted a pet dog, Yeontan! He’s a little sick, but Paw Patrol Rescue did a great job taking care of him! 
                He’s a new member of the family!
                </div>
                <div class="container" id="replyCollapse">
                <a data-bs-target="#replyForm2" class="btn reply" data-bs-toggle="collapse" role="button" 
                aria-expanded="false" aria-controls="replyForm" id="replyButton">
                    Reply
                </a>
                </div>
            </div>
            <div class="container justify-content-start text-start collapse replyBox" id="replyForm2">
                <div class="col d-flex justify-content-start">
                <h3 class="reviewerName responderName">Jack</h3>
                </div>
                <form action="#" method="post" id="replyBoxForm">
                <textarea id="replyComment" rows = "1" type="text" name="replyComment" class="reviewText" required placeholder="Reply here..."></textarea>
                <a href="#" type="submit" class="submit">Submit</a>
                </form>    
            </div>
            <div class="container justify-content-start text-start" id="replyBox">
                <div class="row align-middle">
                <div class="col d-flex justify-content-start">
                    <h3 class="reviewerName"  id="underlined">Paw Patrol</h3>
                </div>
                </div>
                <div class="reviewText">
                We're glad to here that! We hope Yeontan gets better soon!
                </div>
                <div class="container" id="replyCollapse">
                <a data-bs-target="#replyForm3" class="btn reply" data-bs-toggle="collapse" role="button" 
                aria-expanded="false" aria-controls="replyForm" id="replyButton">
                    Reply
                </a>
                </div>
            </div>
            <div class="container justify-content-start text-start collapse replyBox" id="replyForm3">
                <div class="col d-flex justify-content-start">
                <h3 class="reviewerName responderName">Jack</h3>
                </div>
                <form action="#" method="post" id="replyBoxForm">
                <textarea id="replyComment" rows = "1" type="text" name="replyComment" class="reviewText" required placeholder="Reply here..."></textarea>
                <a href="#" type="submit" class="submit">Submit</a>
                </form>    
            </div>
            
            <div class="container justify-content-start text-start" id="reviewBox">
                <div class="row align-middle">
                <div class="col d-flex justify-content-start">
                    <h3 class="reviewerName">Zura</h3>
                </div>
                <div class="col d-flex justify-content-end stars">
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star"></i>
                    <i class="bi bi-star-fill star emptyStar"></i>
                </div>
                </div>
                <div class="reviewText">
                Met my new best friend Elizabeth the duck. She’s well-behaved but it wasn’t a super easy 
                process to adopt her from the shelter. I still love her though!
                </div>
                <div class="container" id="replyCollapse">
                <a class="btn reply" data-bs-toggle="collapse" role="button" 
                aria-expanded="false" aria-controls="replyForm" id="replyButton">
                    Reply
                </a>
                </div>
            </div>      
            </div>
                <div class="container" id="seeMoreCollapse">
                <a data-bs-target="#collapsedReviews" class="btn reviewClick" data-bs-toggle="collapse" role="button" 
                aria-expanded="false" aria-controls="collapsedReviews" id="seeMore">
                    <div class="text-collapsed">See more <i class="bi bi-chevron-right chevron"></i></div>
                    <div class="text-expanded">See less <i class="bi bi-chevron-up chevron"></i></div>
                </a>
                <div class="container justify-content-start text-start collapse" id="collapsedReviews">
                <div class="container justify-content-start text-start" id="reviewBox">
                    <div class="row align-middle">
                    <div class="col d-flex justify-content-start">
                        <h3 class="reviewerName">Emilia</h3>
                    </div>
                    <div class="col d-flex justify-content-end stars">
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star"></i>
                        <i class="bi bi-star-fill star" id="emptyStar"></i>
                    </div>
                    </div>
                    <div class="reviewText">
                    I adopted a new cat, Puck, from this. He is so cute!! Thanks Paw Patrol Rescue!
                    </div>
                    <div class="container" id="replyCollapse">
                    <a class="btn reply" data-bs-toggle="collapse" role="button" 
                    aria-expanded="false" aria-controls="replyForm" id="replyButton">
                        Reply
                    </a>
                    </div>
                </div>     
                </div>
            </div>
            </div>
        </div>
    )
}