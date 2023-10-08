import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Terms.module.scss'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'

export default function Terms() {
  return (
    <>

      <div className={styles.Hero}>
        <Head>
          <title>Lama Land | Terms & Conditions</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

      </div>

      <div className={styles.Container}>
        <div className={styles.TermsLabel}>
          <p className={styles.UpdatedDate}>LAST UPDATED : OCT 8 2023</p>
          <div className={styles.Label}>Terms & Conditions</div>
        </div>

        <div className={styles.Terms}>

          <p className={styles.Content}>
            Please read these Terms and Conditions carefully before using Lama Land. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>

          <p className={styles.Heading}>
            Acceptance of Terms
          </p>

          <p className={styles.Content}>
            By using Lama Land, you acknowledge and agree to the terms and conditions set forth in this document. Lama Land reserves the right to modify, alter, or update these Terms and Conditions at any time, without prior notice. It is your responsibility to review this page periodically for changes. Your continued use of Lama Land following any such modifications constitutes your acceptance of the revised Terms and Conditions.
          </p>

          <p className={styles.Heading}>
            User Data Collection
          </p>


          <div className={styles.Content}>
            Lama Land may collect and store the following user data:
            <ul>
              <li>            Name: To personalize your shopping experience.
              </li>
              <li>
                Email: To communicate with you about orders, promotions, and other store-related information.

              </li>

              <li>
                Phone Number: To contact you regarding order updates and customer support.

              </li>
              <li>
                Avatar: To enhance your user profile within the Lama Land platform.
              </li>
            </ul>
          </div>


          <p className={styles.Heading}>
            Use of User Data
          </p>

          <div className={styles.Content}>
            Your privacy is important to us. Lama Land will use the collected data for the following purposes:

            <ul>
              <li>
                Providing and improving our services.              </li>
              <li>
                Sending order updates, confirmations, and promotional information.
              </li>

              <li>
                Analyzing user preferences and behavior to enhance the user experience.
              </li>
              <li>
                Contacting users for customer support and resolution of issues.              </li>
            </ul>
          </div>


          <p className={styles.Heading}>
            Data Security
          </p>


          <p className={styles.Content}>
            Lama Land is committed to protecting your data. We employ industry-standard security measures to safeguard your information against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is entirely secure.
          </p>

          <p className={styles.Heading}>
            No Refund Policy
          </p>


          <p className={styles.Content}>
            Lama Land does not offer refunds for any products or services purchased through our platform. All sales are final.
          </p>


          <p className={styles.Heading}>
            Termination of Access
          </p>

          <p className={styles.Content}>
            Lama Land reserves the right to terminate or suspend access to our services, without notice, for any user who violates these Terms and Conditions or engages in any prohibited activities.
          </p>


          <p className={styles.Heading}>
            Contact Information
          </p>

          <p className={styles.Content}>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at [contact email].
            By using Lama Land, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety. Your continued use of our services constitutes acceptance of these terms.
            Thank you for choosing Lama Land!
          </p>


        </div>
      </div>
    </>
  )
}
