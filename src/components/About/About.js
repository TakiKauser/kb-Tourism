import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <div className="container about-container">
                <div className="row">
                    <div className="col-sm-12 col-md-2">
                        <h4>About</h4>
                        <h3 className="fw-bolder">kb-Tourism</h3>
                    </div>
                    <div className="col-sm-12 col-md-5 content">
                        <img className="img-fluid" src="https://i.ibb.co/8cw7HNv/t-text.jpg" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-5 content">
                        <p>A tourist attraction is a place of interest where tourists visit, typically for its inherent or an exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>
                        <p>It’s easy to get caught up in what you already know about a travel destination, but a compelling visitor website helps returning and new tourists navigate which locations and other details will make the most out of their adventures, be they abroad, near home, or somewhere in between.</p>
                        <Button type="button" className="my-3 " variant="dark">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="my-4 deatailed-info">
                    <h2>kb-Tourism</h2>
                    <p>A tourist attraction is a place of interest where tourists visit, typically for its inherent or an exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>

                    <p>If you’re looking for exposure to a true winter wonderland, you’ll be hard-pressed to find a better place than Finland for its bright Northern Lights and historical relation to the real Santa Claus. Findland’s official tourism website showcases all of the above while offering more specific travel information about the country’s climate, landscapes, urban sectors, and entertainment opportunities. The homepage is provides an interactive map with plenty of user click feedback via small animations on a simple color grid. Scrolling down the landing page expands the degree of more specific visible information on the page, like which cities to visit, hotels to stay at, and everyday things to do about-town depending on which regions most interest you.</p>

                    <p>The enormous tourism rental platform, Airbnb, offers a platform for people to rent short-term lodging across a variety of types, including apartments, hotels, and even hostels. Their site smartly describes the magnitude of the company — that they provide millions of listings in almost 70,000 cities around the world lets visitors know that Airbnb means business. Since their website is the primary tool they and their customers use, Airbnb does a great job of prioritizing testimonials so readers can vett spaces accordingly, and by including plenty of photos from multiple angles in each listing so customers can see the quality at a glance. They also offer promotional emails and website content based on your next travel destinations for more current information about what’s generally desirable about where you’re headed.</p>

                    <p>With a highly illustrative, pencil-like approach to drawings throughout the site, the UK-based company, Pitch, doesn’t sacrifice strong brand presentation for an overly basic format. Their homepage video includes some inspiring information about exploring the British countryside, and scrolling down each subsection clever brings readers through both a checklist of “how to pitch” (camping instructions) and how to order their products online or book a camping session. The site loads very quickly,and each area they mention includes concise definitions of what the location is and what usually transpires there beyond your next trip so you can plan for exactly the adventure you want.</p>

                    <p>Brazil’s official tourism site includes some of what you might guess: beautiful beaches in sunny weather, grassy mountain ranges and knolls for trailblazers, and the urban accouterments and architectural styles of life downtown. However, the sheer size of Brazil, a country that takes up almost half of South America and with the world’s 5th largest population, isn’t easily encapsulated with depictions of the weather and generalized moments of joy. Brazil tackles this problem by making distinct sections for different regions based on their type of natural environments, businesses in the area, and the local cultural events happening now and in the near future.</p>

                    <p>On the Grid is pretty unique compared to others on this list since they’re a travel blog that spans several countries and continents. Their tagline, “Explore the World” acts as both a call to action and a general service description on the first homepage image you see, and just below it is a button for choosing a specific city of interest. The homepage’s alphabetical list of different guides includes thorough descriptions of every location possible, and their hot dog-style menu of viewing a specific city with Google Maps on one side and the company’s local businesses of choice listed on the right makes figuring out how to navigate the area and the website itself very easy.</p>
                    <p>Toucan Cafe and Tours is almost like combining two different industries in a very effective, if somewhat unintuitive way. They’re a cafe business based in Medellin, Columbia, and they organize tours for visitors and even language exchanges for passionate foreigners. Their homepage’s menu bar makes learning about this unconventional company a breeze with easily differentiated categories and fundamental information about visiting the country (in addition to what makes their coffee great). Crucially, the site is available in English and Spanish because they know most of their tourists come from English-speaking backgrounds.</p>
                </div>
            </div >
        </div>
    );
};

export default About;