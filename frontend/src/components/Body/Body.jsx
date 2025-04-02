import React from 'react'
import "./Body.css"
import { Link} from 'react-router-dom';




const Body = () => {  
  return (
    <>
      <div>
        {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
        {/* header-start */}
        <header className="header">
      {/* Background Image Covering the Whole Header */}
      <div className="header-background">
        
        {/* Navbar */}
        <div className="navbar-container">
          <div className="logo">
            <a href="/">
              <img src="img/logo.png" alt="Logo" />
            </a>
          </div>

          <nav className="main-menu">
            <ul>
              {/* <li><a href="/">Home</a></li> */}
              <li><a href="#our-story">Stories</a></li>
              <li>
                <a href="#updates">Updates</a>
                
              </li>
              <li>
                <a href="#partners">Partners</a>
                
              </li>
              <li>
                <a href="#blog">Blog</a>
                
              </li>
              <li><a href="/login">Login</a></li>
            </ul>

            <div className="donate-btn">
              <Link to="/donation">Make a Donation</Link>
            </div>
          </nav>
            
        </div>
        <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="slider_text ">

                    <h3> USHIRIKIANO INITIATIVE</h3>
                    <p>Together Building A Health
                      And Peacefull Community</p>
                  </div>
                </div>
              </div>
            </div>

       
      </div>
    </header>
      
        {/* slider_area_end */}
        {/* reson_area_start  */}
        <div className="reson_area section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb-55">
                  <h3><span>Why Ushirikiano Initiative</span></h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single_reson">
                  <div className="thum">
                    <div className="thum_1">
                      <img src="img/help/1.png" alt />
                    </div>
                  </div>
                  <div className="help_content">
                    <h4>Promoting Peace</h4>
                    <p>We launched the first Upendo Peace Academy session
                      under the
                      powerful motto "Chagua Amani, Linda Jamii".</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_reson">
                  <div className="thum">
                    <div className="thum_1">
                      <img src="img/help/2.png" alt />
                    </div>
                  </div>
                  <div className="help_content">
                    <h4>Climate action</h4>
                    <p> Our mission is to transform our community through climate action and sustainable
                      agriculture.</p>
                    {/* <a href="#" className="read_more">Read More</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_reson">
                  <div className="thum">
                    <div className="thum_1">
                      <img src="img/help/3.png" alt />
                    </div>
                  </div>
                  <div className="help_content">
                    <h4>Education advocacy</h4>
                    <p>This program is also about
                      fostering peace and economic empowerment within our community..</p>
                    {/* <a href="#" className="read_more">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reson_area_end  */}
        {/* latest_activites_area_start  */}
        <div className="latest_activites_area">
          <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
            <a className="popup-video" href="https://youtu.be/nSbjMEmfFEA">
              <i className="flaticon-ui" />
            </a>
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-7">
                <div className="activites_info">
                  <div className="section_title">
                    <h3> <span>Watch Our Latest</span><br />
                      Activities</h3>
                  </div>
                  <p className="para_1">Kenya SDI Voices for Just Climate Action Kenya forest service
                    Malindi Community Human Rights Centre Action for Empowerment  Kwale County Community of practice
                    Slum Dwellers International - SDI. The Afrikan Shujaa Magazine - History, Culture, and News WeWorld Onlus
                    Kujenga Amani Project European Union
                    in Kenya Hivos East Africa WWF-Kenya JAC FM 106.2 Jamii Action Centr</p>
               
                  <a href="#" data-scroll-nav={1} className="boxed-btn4">Donate Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest_activites_area_end  */}
        {/* popular_causes_area_start  */}

        {/* popular_causes_area_end  */}
        {/* counter_area_start  */}
        
        <div id="our-story" className="our_story_area">
          <div className="container">
            <div className="section_title">
              <h2>Our Story</h2>
              <p>Discover our journey and impact.</p>
            </div>

            <div className="story_wrapper">
              {/* Story 1 - Image Left, Text Right */}
              <div className="story_item">
                <div className="image_container">
                  <img src="img/partner2.jpg" alt="Story 1" className="story_image" />
                </div>
                <div className="text_container">
                  <h3>Growing Stronger, Changing Stories!</h3>
                  <p>Our journey has been one of growth and impact, driven by a mission to transform
                    our community through climate action and sustainable agriculture. Beekeeping is at
                    the heart of this initiative saving trees, increasing forest cover, and providing alternative livelihoods.
                    We were privileged to receive expert training from Mr. Njenga, who shared
                    invaluable knowledge on beekeeping and its powerful role in boosting food
                    production through pollination.
                    A heartfelt thank you to SDI-Kenya under Voices for Just Climate Action for walking this journey with us! 🐝🌿🌍
                    #WeAreVCA</p>
                </div>
              </div>

              {/* Story 2 - Image Right, Text Left */}
              <div className="story_item">
                <div className="text_container">
                  <h3>A Journey of Hope, Resilience, and Transformation</h3>
                  <p>Nearly two years ago, in the heart of our community in Tsimba, Ushirikiano Initiative
                    embarked on a bold and transformative journey with just eight young people. Under the patronage
                    of our esteemed Area Chief, Mr. Mwambaka, Assistant Chief, Mr. Tdzozi, and the wisdom of our
                    elders (Wazee), we set out with one unwavering goal to restore peace and drive meaningful development
                    in our community after a disturbing
                    incident that had threatened harmony in our community.</p>
                </div>
                <div className="image_container">
                  <img src="img/partner3.jpg" alt="Story 2" className="story_image" />
                </div>
              </div>

              {/* Story 3 - Image Left, Text Right */}
              <div className="story_item">
                <div className="image_container">
                  <img src="img/partner4.jpg" alt="Story 3" className="story_image" />
                </div>
                <div className="text_container">
                  <h3>A New Dawn for Peacebuilding! </h3>
                  <p>
                    Ushirikiano Initiative launched the first Upendo Peace Academy session under the powerful
                    motto "Chagua Amani, Linda Jamii," supported by WeWorld
                    and funded by the European Union.
                    This transformative program is set to reach 100 youth in maskanis
                    and bodaboda points, leveraging coastal cultural conflict resolution methods
                    to champion peacebuilding at the grassroots level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div id ="updates" className="news-updates-area section_padding">
  <div className="container">
    <div className="section-title text-center mb-55">
      <h3>Latest News &amp; Updates</h3>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-news">
          <img src="img/news1.jpg" alt="news image" />
          <div className="news-info">
            <span className="date">April 1, 2025</span>
            <a href="news-detail.html">
              <h4>Breaking News: New Initiative to Help the Community</h4>
            </a>
            <p>Our organization is launching a new initiative aimed at providing resources and support to those in need. Find out more about this important development...</p>
            <a className="read-more" href="news-detail.html">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-news">
          <img src="img/news2.jpg" alt="news image" />
          <div className="news-info">
            <span className="date">March 28, 2025</span>
            <a href="news-detail.html">
              <h4>Community Event: Join Us for a Day of Action</h4>
            </a>
            <p>We are organizing a community event next month that will bring people together to help with local causes. Your participation will make a big difference...</p>
            <a className="read-more" href="news-detail.html">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-news">
          <img src="img/news3.jpg" alt="news image" />
          <div className="news-info">
            <span className="date">March 15, 2025</span>
            <a href="news-detail.html">
              <h4>New Partnership with Local Organizations</h4>
            </a>
            <p>We are excited to announce a new partnership with several local organizations that will expand our reach and enhance the support we provide...</p>
            <a className="read-more" href="news-detail.html">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* news__area_end  */}
        <div id = "partners" data-scroll-index={1} className="single_partner section_padding">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center">
        <h2 className="partners_heading">Partners</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="partners_wrapper">
          <div className="partners_grid">
            <div className="partner_logo">
              <img src="img/unicef.png" alt="UNICEF Logo" />
            </div>
            <div className="partner_logo">
              <img src="img/who.png" alt="WHO Logo" />
            </div>
            <div className="partner_logo">
              <img src="img/redcross.png" alt="Red Cross Logo" />
            </div>
            <div className="partner_logo">
              <img src="img/worldbank.png" alt="World Bank Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* contact area */}




{/* end contact area */}
      
        {/* link that opens popup */}
        {/* JS here */}
        
        {/*contact js*/}
      </div>


    </>
  )
}

export default Body
