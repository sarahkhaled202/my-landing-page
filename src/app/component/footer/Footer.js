import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.all}>
        {/* <div className={styles.container}> */}

        {/* Company Links */}
        <div className={styles.list}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <img src="/paint.png" alt="Logo" />
          </div>
          <div className={styles.links}>
            <h4>The company</h4>
            <ul>
              <li>Who are we</li>
              <li>Services</li>
              <li>
                Jobs <span className={styles.badge}>12</span>
              </li>
              <li>Branches</li>
            </ul>
          </div>

          {/* Help Center */}
          <div className={styles.links}>
            <h4>Help center</h4>
            <ul>
              <li>Common questions</li>
              <li>Contact us</li>
              <li>Register as merchant</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}

        <div className={styles.social}>
          <a href="#">
            <span className={styles.icon}>📘</span> Facebook
          </a>
          <a href="#">
            <span className={styles.icon}>📸</span> Instagram
          </a>
          <a href="#">
            <span className={styles.icon}>🔗</span> LinkedIn
          </a>
        </div>
      </div>

      {/* </div> */}

      {/* Copyright */}
      <div className={styles.copyright}>
        © 2024 Leader Express Delivery Company. All rights reserved.
      </div>
    </footer>
  );
}
