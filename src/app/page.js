import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import ClientOpinions from './component/ClientOpinions';


export default function Home() {
  return (
  
    <div className={styles.container}>
      <Head>
        <title>Marketing Solutions</title>
        <meta name="description" content="Transform your business with our Creative Marketing Solutions!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>🖌️ PAINT</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Branches</a>
          <a href="#">Jobs <span className={styles.badge}>12</span></a>
        </nav>
        <div className={styles.headerButtons}>
          <button className={styles.contactButton}>Contact us</button>
          <button className={styles.joinButton}>Join us</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>
            Transform your business with our{" "}
            <span className={styles.highlight}>Creative Marketing Solutions!</span>
          </h1>
          <p>
            Welcome to Focus Marketing Solutions! We're a creative team dedicated to driving
            your business forward with innovative marketing strategies.
          </p>
          <div className={styles.mainButtons}>
            <button className={styles.joinButton}>Join us</button>
            <button className={styles.contactButton}>Contact us</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/building1.jpg" alt="Building 1" className={styles.mainImage} />
          <img src="/images/building2.jpg" alt="Building 2" className={styles.secondaryImage} />
        </div>
      </main>
   


        <section className={styles.partnersSection}>
            <h2>Our Partners</h2>
        <div className={styles.partnersContainer}>
  <img src="/images/Logo.png" alt="Partner 1" className={styles.partnerImage} />
  <img src="/images/Logo.png" alt="Partner 2" className={styles.partnerImage} />
  <img src="/images/Logo.png" alt="Partner 3" className={styles.partnerImage} />
  <img src="/images/Logo.png" alt="Partner 4" className={styles.partnerImage} />
</div>
</section>

    <div className={styles.sectionAboutus}>
        <h2>About Us</h2>
        <p className={styles.paragraph}>Welcome to Focus Marketing Solutions!
         We're a creative team dedicated to driving your business 
         forward with innovative marketing strategies. From digital
          marketing to social media management, we're here to help you succeed. Let's build something extraordinary together..</p>
        <button className={styles.readMoreButton}>Read Us</button>
       </div>
      <section className={styles.section}>
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs, including web development, design, and marketing.</p>
     
        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 1" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 1 Description</p>
          </div>
          {/* Service 2 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 2" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 2 Description</p>
          </div>
          {/* Service 3 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 3" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 3 Description</p>
          </div>
          {/* Service 4 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 4" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 4 Description</p>
          </div>
          {/* Service 5 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 5" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 5 Description</p>
          </div>
          {/* Service 6 */}
          <div className={styles.serviceItem}>
            <img src="/images/service2.png" alt="Service 6" className={styles.serviceImage} />
            <h2>Service 2</h2>
            <p>Service 6 Description</p>
          </div>
        </div>
      </section>
      <div className={styles.container_d}> 


      <section className={styles.philosophySection}>
        <div className={styles.textSection}>
          <h2>We bear the responsibility of developing the sector.</h2>
          <p>
          Elevate your brand with our comprehensive marketing solutions, including Digital Marketing, Content Creation, and Social Media Strategy. Enhance visibility through expert SEO and PPC management, 
          </p>
        </div>
        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <h3>1,200+</h3>
            <p>Clients</p>
          </div>
          <div className={styles.stat}>
            <h3>20+</h3>
            <p>Branches</p>
          </div>
          <div className={styles.stat}>
            <h3>200+</h3>
            <p>Number of Employees</p>
          </div>
          <div className={styles.stat}>
            <h3>315+</h3>
            <p>Sales Representative</p>
          </div>
        </div>
      </section>
      <section className={styles.chartsSection}>
        <h2>Our charts</h2>
        <div className={styles.charts}>
          <div className={styles.chart}>Net Profit (Chart Placeholder)
          <img src="/images/chart.png" alt="chart" className={styles.chartImage} />

          </div>
          <div className={styles.chart}>Primary Text (Chart Placeholder)</div>
        </div>
      </section>

                  {/* {NEWS} */}
     
      <div className={styles.sectionNews}>
      <div className={styles.header}>
       <h1 className={styles.title}>News</h1>
       <button className={styles.viewAll}>View all news</button>
        </div>
        <section className={styles.grid}>

          <div className={styles.cardLarge}>
          <img src="/images/news.jpg" alt="news" className={styles.newsImage} />

          <div className={styles.tags}>
              <button button className={styles.button}>Company</button>
              <button>Contracts</button>
            </div>
            <h2>We specialize in fostering effective partnerships with supportive companies to drive mutual success.</h2>        
            <p>
              We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
            </p>
           
          </div>
          <div className={styles.cardContainer}>
        {[1, 2, 3].map((_, index) => (
            <div className={styles.cardSmall} key={index}>
            
        <img src="/images/news2.png" alt="news" className={styles.newsImageSmall} />
        <div  className={styles.pCard}>
          <h2>We incorporate the formation of public partnerships as a core
           aspect of our operations.</h2> 
           <div className={styles.tags}>
         <button>Company</button>
         <button>Contracts</button>
         </div>
        </div>

             
            </div>
          ))}
          </div>
        
        </section>
        </div>
                   {/* {PRICE} */}
    <section className={`${styles.gridprice} ${styles.sectionNews}`}>
        
        <div  className={styles.cardLargePrice} >
      
        <h1>Simple pricing for your Business</h1>
        <p>
          We have several powerful plansHHHHHHHHHHHHHHH to showcase your business and get
          discovered as a creative entrepreneur. Everything you need.
        </p>
        </div>
        <div className={styles.cardSmallPrice}>
              <div className={`${styles.pricingCard} ${styles.intro}`}>
            <h3>Intro</h3>
          </div>
          <div className={`${styles.pricingCard} ${styles.base}`}>
            <h3>Base</h3>
          </div>
          <div className={`${styles.pricingCard} ${styles.pro}`}>
            <h3>Pro</h3>
            <p className={styles.save}>Save $40</p>
            <p>Pro account gives you freedom with uploading HD videos and can also meet all your business needs.</p>
            <p className={styles.price}>$123 /month</p>
            <button className={styles.tryButton}>Try 1 month</button>
          </div>
          <div className={`${styles.pricingCard} ${styles.enterprise}`}>
            <h3>Enterprise</h3>
          </div>
        </div>
      
       
      </section>
      </div>

      <div>
      <ClientOpinions />
    </div>

   {/* ++++++++++++++++REGISTERSECTION+++++++++++++++ */} 
    <section className={styles.registerSection}>
      <div className={styles.content}>
        <h2   className={styles.registerh2}>What are you waiting for?</h2>
        <p  className={styles.registerp2}>
          Register now to get the best delivery experience for you and your clients in Iraq!
        </p>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            register now
          </button>
        </form>
      </div>
    </section>
      </div>
     
  );



}
