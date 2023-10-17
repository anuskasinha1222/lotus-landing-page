import Container from 'react-bootstrap/Container';
import viratImg from "../assets/images/virat.png";
import lotusImg2 from "../assets/images/lotusImg2.png";
import welcomeBonus from "../assets/images/welcomeBonus.png";
import WeeklyRanpmffle from "../assets/images/WeeklyRaffle.png";
import rebateBonus from "../assets/images/rebateBonus.png";
import InvitationBonus from "../assets/images/InvitationBonus.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";


const Home = () => {
  const data = [
    {
      imgSrc:
        "https://lotus365.plus/wp-content/uploads/2023/08/WELCOME-BONUS.webp",
      title: "WELCOME BONUS",
      details:
        "New members can earn a welcome bonus of up to ₹20,000. This generous bonus makes it easy to get started playing your favorite games right away. Claim your welcome bonus now!",
    },
    {
      imgSrc:
        "https://lotus365.plus/wp-content/uploads/2023/08/Invitation-Bonus.webp",
      title: "INVITATION BONUS",
      details:
        "Users have the opportunity to earn up to ₹1,000 for each friend they successfully invite to join and play on the Lotus365 platform.",
    },
    {
      imgSrc:
        "https://lotus365.plus/wp-content/uploads/2023/08/REBATE-BONUS.webp",
      title: "REBATE BONUS",
      details:
        "Get a chance to earn back up to 10% of your money if you lose in a week. This cashback offer helps you recover some of your losses and keeps the game going.",
    },
    {
      imgSrc:
        "https://lotus365.plus/wp-content/uploads/2023/08/Weekly-Raffle.webp",
      title: "WEEKLY RAFFLE",
      details:
        "Every week, you can get a chance to win ₹10,000 in cash by simply playing your favorite games. The more you play, the more tickets you earn, the better your chances are to win.",
    },
  ];
  return (
    <div className="full-container">
      <div className='hero__section'>
      <Container>
      <div className="grid-two-column grid-item">
        <div className="grid-item__title">
          <h2>
            LOTUS365 INDIA
            <br />
            <span>OFFICIAL SITE</span>
          </h2>
          <NavLink to="">
            <Button className="grid-btn">JOIN NOW!</Button>
          </NavLink>
        </div>

        <div className="grid-item__img">
          <img src={viratImg} />
        </div>
       
      </div>
      </Container>
      </div>

      {/* all knw section */}
      <div className='home_know'>
        <div className="container">
          <div className="grid-two-column grid-item">
          <div className="grid-item__img2">
          <img src={lotusImg2} />
        </div>
        <div className="grid-item__title2">
          <h3>All You Need To Know about Lotus365</h3>
          <p>
            Lotus365, founded in 2016, is India's first legal and licensed
            gaming company. We operate under a Curacao license{" "}
            <b>(License No: 365/JAZ),</b> a globally recognized gaming license
            that ensures our platform's integrity and security.
          </p>
          <p>
            Our platform is fast, secure, and user-friendly, built on a strong
            foundation to meet international standards. The strong security and
            compliance measures have earned our customers’ trust in India.
          </p>
          <p>
            Building on our reputation, we offer real-time cricket, tennis, and
            European football odds. For casino fans, enjoy games like Baccarat,
            Teen Patti, and cockfighting.
          </p>
          <NavLink to="">
            <Button className="grid-btn">Learn more about us</Button>
          </NavLink>
        </div>
          </div>
        </div>
      </div>
     
      {/* trusted features------------------- */}
      <div className="grid__feature">
        <h3>Trusted Features and Services of Lotus 365</h3>
        <p>
          Get to know Lotus365 by reviewing its key features in the table below,
          which covers everything from game variety to security.
        </p>

        {/* feature table */}
        <div className="feature_grid">
          <table>
            <tr>
              <td className="feature__item">Website Interface</td>
              <td className="feature__detail">
                You will enjoy the white and green color scheme that gives you
                an elegant feel, well designed menus and search that make it
                easy to find the game that you want.
              </td>
            </tr>
            <tr>
              <td className="feature__item">Games</td>
              <td className="feature__detail">
                You can enjoy smooth and no-lagging casino games like baccarat
                and sports betting with ongoing matches and updated match
                results, like cricket. And a live casino where you can go along
                with a live dealer and chat with the player.
              </td>
            </tr>
            <tr>
              <td className="feature__item">Transaction</td>
              <td className="feature__detail">
                On the Lotus365 IN platform, funds deposited are immediately
                credited to your account. Additionally, both deposit and
                withdrawal transactions are completed within a 2-minute
                timeframe.
              </td>
            </tr>
            <tr>
              <td className="feature__item">Real-time</td>
              <td className="feature__detail">
                Experience real-time live action for sports such as cricket and
                football, complete with ongoing live scores, all seamlessly
                delivered without delay on the Lotus365 IN platform.
              </td>
            </tr>
            <tr>
              <td className="feature__item">Security</td>
              <td className="feature__detail">
                Our platform uses SSL/TLS encryption to protect your personal
                and financial information from hackers or unauthorized access.
                And also we have authentication where you will receive
                verification with us when you try to withdraw your profit.
              </td>
            </tr>
          </table>
          <div className="last--line__italic">
            <i>
              <b>
                Explore Lotus365 now and see why it's more than just a
                website—it's a complete gaming experience unlike any other
              </b>
            </i>
          </div>
        </div>
      </div>

      <div className="container-full bonus-grid">
        <div className="row">
          <h3>Exciting Bonuses and Irresistible Promotions</h3>
          <p>
            Lotus 365 gives new and old players many ways to win extra money.
            Get a big welcome bonus, earn money by bringing friends, get cash
            back if you lose, and try your luck in our weekly draw.
          </p>
          {data.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={item?.imgSrc}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ovelray card container */}

      <div className='overlaycard__container'>
         <div className="container">
         <div className="row">
            <div className="col-md-6">
              {/* ovalray badgae sport type */}
              <div className="sport_typsBadges">
                  <span>CRICKET</span>
              </div>
            <div className="overlayCard__inner">
              <div className="overlaycard_front bgfront1">
                 <div className="overlay__content">
                     <p>
                            
                      Our website offers you different cricket betting options where you can bet, like Test, ODI, T20, IPL, and more. You can place bets on your favored players, teams, and matches with real time, ease and convenience. Want the inside scoop on sports betting? Don't miss out! Check our sports betting page now!							
                     </p>
                 </div>
              </div>
              <div className="overlaycard_back bgback1">
   
              </div>
            </div>    
            </div>
            <div className="col-md-6">

            </div>
          </div>
         </div>
      </div>

    </div>
  );
};

export default Home;
