"use client";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "reactstrap";

const PrivacyAndPolicyPage = () => {
  const privacyandpolicyPage = [
    {
      id: 1,
      policyTitle: "Privacy Policy",
      lastUpdate:"Last updated: August 24, 2023" || null,
      policySubTitle:`We advise you to read and understand the Terms and Conditions before registering for our services
      By registering, you agree to abide by our terms and conditions.`,
      policyRules: []
    },
    {
      id: 2,
      policyTitle: "Interpretation and Definitions",
      policySubTitle:"Interpretation:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `The words of which the initial letter is capitalized have meanings defined under the following conditions.
          The following definitions shall have the same meaning regardless of whether they appear in singular or
          plural.`
        },
      ]
    },
    {
      id: 3,
      policyTitle: "",
      policySubTitle:"Definitions:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `For this Privacy Policy:`
        },
        {
          id: 2,
          policyInnerRule: `Account means a unique account created for You to access our Service or parts of our Service.`
        },
        {
          id: 3,
          policyInnerRule: `Affiliate means an entity that controls, is controlled by or is under common control with a party, where
          &quot;control&quot; means ownership of 50% or more of the shares, equity interest, or other securities entitled to
          vote for election of directors or other managing authority.`
        },
        {
          id: 4,
          policyInnerRule: `Company (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to
          Wiztrace India pvt ltd, U 188 U Block Shakarpur Laxminagar New Delhi - 110092.`
        },
        {
          id: 5,
          policyInnerRule: `Cookies are small files that are placed on Your computer, mobile device, or any other device by a
          website, containing the details of Your browsing history on that website among its many uses.`
        },
      ]
    },
    {
      id: 4,
      policyTitle: "",
      policySubTitle:"• Our Privacy Policy is subject to periodic updates.",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Website refers to Wiztrace, accessible from www.wiztrace.com`
        },
        {
          id: 2,
          policyInnerRule: `You means the individual accessing or using the Service, or the company, or other legal entity on behalf
          of which such individual is accessing or using the Service, as applicable.`
        },
        {
          id: 3,
          policyInnerRule: `Collecting and Using Your Data`
        },
        {
          id: 4,
          policyInnerRule: `Types of Data Collected`
        },
       
      ]
    },
    {
      id: 5,
      policyTitle: "Personal Data:",
      policySubTitle:"",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `To ensure the integrity of our platform, please provide your accurate name when registering. It is also
          essential to provide your correct phone number to access our services. Please be aware that your
          account information will influence the job opportunities you receive through our platform.
          Impersonating someone else or misrepresenting yourself as another individual to utilize our services is
          strictly prohibited. Furthermore, intentionally providing false information about your details is not
          permitted.`
        },
        {
          id: 2,
          policyInnerRule: `* You must provide correct and accurate information.`
        },
        {
          id: 3,
          policyInnerRule: `* We value your privacy and do not share confidential information with irrelevant companies.`
        },
        {
          id: 4,
          policyInnerRule: `* We collect your info such as name, email ID, phone number, and current address for further
          assistance.`
        },
        {
          id: 5,
          policyInnerRule: `* We can collect info and contact you via email, call, or SMS.`
        },
        {
          id: 6,
          policyInnerRule: `The details you furnish on Wiztrace while completing your profile encompass various categories,
          including personal information like your name, location, gender, profile picture, and education and
          identity-related details such as first name, last name, gender, username, etc. Additionally, contact
          information like your mobile number, postal address, email address, and telephone number, along with
          professional information indicating your current workplace, are also part of this. It&#39;s important to
          emphasize that we are committed to your data&#39;s utmost privacy and security. Your provided information
          will only be utilized or disclosed as our Privacy Policy outlines.`
        },
        {
          id: 7,
          policyInnerRule: `While using Our Service, We may ask You to provide Us with certain personally identifiable information
          that can be used to contact or identify You. Personally identifiable information may include, but is not
          limited to:`
        },
        {
          id: 8,
          policyInnerRule: `Email address`
        },
        {
          id: 9,
          policyInnerRule: `First name and last name`
        },
        {
          id: 10,
          policyInnerRule: `Phone number`
        },
        {
          id: 11,
          policyInnerRule: `Address, State, Province, ZIP/Postal code, City`
        },
        {
          id: 12,
          policyInnerRule: `Aggregated Statistics`
        },
        {
          id: 13,
          policyInnerRule: `Geolocation Data`
        },
        {
          id: 14,
          policyInnerRule: `Usage Data`
        },
       
      ]
    },
    {
      id: 6,
      policyTitle: "",
      policySubTitle:"Geolocation Data Usage:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Our utilization of geolocation data involves information about your location. Upon granting location
          permission, we retrieve GPS-derived data, some of which may be sourced from third-party cookies and
          analogous technologies. The acquisition of location data aims to facilitate location-dependent services,
          such as identifying job opportunities in proximity. This data is procured from your devices and networks,
          encompassing location-specific details.`
        },
        {
          id: 2,
          policyInnerRule: `• For seamless communication regarding new products and services:`
        },
      ]
    },
    {
      id: 7,
      policyTitle: "",
      policySubTitle:"Usage Data:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Usage Data is collected automatically when using the Service.`
        },
        {
          id: 2,
          policyInnerRule: `Usage Data may include information such as Your Device&#39;s Internet Protocol address (e.g. IP address),
          browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other diagnostic data.`
        },
        {
          id: 3,
          policyInnerRule: `When You access the Service by or through a mobile device, We may collect certain information
          automatically, including, but not limited to, the type of mobile device You use, Your mobile device&#39;s
          
          unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile
          Internet browser You use, unique device identifiers and other diagnostic data.`
        },
        {
          id: 4,
          policyInnerRule: `We may also collect information that Your browser sends whenever You visit our Service or when You
          access the Service by or through a mobile device.`
        },
        {
          id: 5,
          policyInnerRule: `Information from Third-Party Social Media Services`
        },
        {
          id: 6,
          policyInnerRule: `The Company allows You to create an account and log in to use the Service through the following Third-
          party Social Media Services:`
        },
        {
          id: 7,
          policyInnerRule: `Google`
        },
        {
          id: 8,
          policyInnerRule: `Facebook`
        },
        {
          id: 9,
          policyInnerRule: `Instagram`
        },
        {
          id: 10,
          policyInnerRule: `Twitter`
        },
        {
          id: 11,
          policyInnerRule: `LinkedIn`
        },
        {
          id: 12,
          policyInnerRule: `If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We
          may collect Personal data that is already associated with Your Third-Party Social Media Service&#39;s
          account, such as Your name, Your email address, Your activities, or Your contact list associated with that
          account.`
        },
        {
          id: 13,
          policyInnerRule: `You may also have the option of sharing additional information with the Company through Your Third-
          Party Social Media Service&#39;s account. If You choose to provide such information and Personal Data,
          during registration or otherwise, You are giving the Company permission to use, share, and store it in a
          manner consistent with this Privacy Policy.`
        },
       
      ],
    },
    {
      id: 8,
      policyTitle: "",
      policySubTitle:"Tracking Technologies and Cookies",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
          information. Tracking technologies used are beacons, tags, and scripts to collect and track information
          and to improve and analyze Our Service. The technologies We use may include:`
        },
        {
          id: 2,
          policyInnerRule: `Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser
          to refuse all Cookies or to indicate when a cookie is being sent. However, if You do not accept Cookies,
          You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so
          that it will refuse cookies, our Service may use Cookies.`
        },
        {
          id: 3,
          policyInnerRule: `Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as
          web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for
          example, to count users who have visited those pages or opened an email and for other related website
          statistics (for example, recording the popularity of a certain section and verifying system and server
          integrity).`
        },
        {
          id: 4,
          policyInnerRule: `Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer
          or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
          browser. You can learn more about cookies on the Terms Feed website article.`
        },
        {
          id: 5,
          policyInnerRule: `We use both Session and Persistent Cookies for the purposes set out below:`
        },
        {
          id: 6,
          policyInnerRule: `Necessary / Essential Cookies`
        },
        {
          id: 7,
          policyInnerRule: `Type: Session Cookies`
        },
      ]
    },
    {
      id: 9,
      policyTitle: "",
      policySubTitle:"Administered by: Us",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Purpose 1 These Cookies are essential to provide You with services available through the Website and to
          enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
          user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We
          only use these Cookies to provide You with those services.`
        },
        {
          id: 2,
          policyInnerRule: `Cookies Policy / Notice Acceptance Cookies`
        },
        {
          id: 3,
          policyInnerRule: `Type: Persistent Cookies`
        },
        {
          id: 4,
          policyInnerRule: `Administered by: Us`
        },
        {
          id: 5,
          policyInnerRule: `Purpose 2 These Cookies identify if users have accepted the use of cookies on the Website.`
        },
        {
          id: 5,
          policyInnerRule: `Functionality Cookies`
        },
        {
          id: 6,
          policyInnerRule: `Type: Persistent Cookies`
        },
        {
          id: 7,
          policyInnerRule: `Administered by: Us`
        },
        {
          id: 8,
          policyInnerRule: `Purpose 3 These Cookies allow us to remember choices You make when You use the Website, such as
          remembering your login details or language preference. The purpose of these Cookies is to provide You
          with a more personal experience and to avoid having to re-enter your preferences every time You use
          the Website.`
        },
        {
          id: 9,
          policyInnerRule: `For more information about the cookies we use and your choices regarding cookies, please visit our
          Cookies Policy or the Cookies section of our Privacy Policy.`
        },
       
      ]
    },
    {
      id: 10,
      policyTitle: "",
      policySubTitle:"Use of Your Data:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `The Company may use Personal Data for the following purposes:`
        },       
        {
          id: 2,
          policyInnerRule: `To provide and maintain our Service, including monitoring the usage of our Service.`
        },       
        {
          id: 3,
          policyInnerRule: `To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You
          provide can give You access to different functionalities of the Service that are available to You as a
          registered user.`
        },       
        {
          id: 4,
          policyInnerRule: `For the performance of a contract: the development, compliance, and undertaking of the purchase
          contract for the products, items, or services You have purchased or of any other contract with Us
          through the Service.`
        },       
        {
          id: 5,
          policyInnerRule: `To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic
          communication, such as a mobile application&#39;s push notifications regarding updates or informative
          communications related to the functionalities, products, or contracted services, including the security
          updates, when necessary or reasonable for their implementation.`
        },       
        {
          id: 6,
          policyInnerRule: `To provide You with news, special offers, and general information about other goods, services, and
          events that we offer that are similar to those that you have already purchased or enquired about unless
          You have opted not to receive such information.`
        },       
        {
          id: 7,
          policyInnerRule: `To manage Your requests: To attend and manage Your requests to Us.`
        },       
        {
          id: 8,
          policyInnerRule: `For business transfers: We may use Your information to evaluate or conduct a merger, divestiture,
          restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether
          as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data
          held by Us about our Service users is among the assets transferred.`
        },       
        {
          id: 9,
          policyInnerRule: `For other purposes: We may use Your information for other purposes, such as data analysis, identifying
          usage trends, determining the effectiveness of our promotional campaigns, and evaluating and
          improving our Service, products, services, marketing, and your experience.`
        },       
        {
          id: 10,
          policyInnerRule: `We may share Your personal information in the following situations:`
        },       
        {
          id: 11,
          policyInnerRule: `• Your personal information might be shared with our parent companies, subsidiaries, and affiliated
          entities.`
        },       
        {
          id: 12,
          policyInnerRule: `• We might collaborate with partners to utilize your personal information in tasks such as marketing,
          advertising our Services, and enhancing the features and performance of the Services.`
        },       
        {
          id: 13,
          policyInnerRule: `• The application incorporates third-party services that could gather data for user identification.`
        },       
        {
          id: 14,
          policyInnerRule: `With Service Providers: We may share Your personal information with Service Providers to monitor and
          analyze the use of our Service, to contact You.`
        },       
        {
          id: 15,
          policyInnerRule: `For business transfers: We may share or transfer Your personal information in connection with, or
          during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of
          Our business to another company.`
        },       
        {
          id: 16,
          policyInnerRule: `With Affiliates: We may share Your information with Our affiliates, in which case we will require those
          affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries,
          joint venture partners, or other companies that We control or that are under common control with Us.`
        },       
        {
          id: 17,
          policyInnerRule: `With business partners: We may share Your information with Our business partners to offer You certain
          products, services, or promotions.`
        },       
        {
          id: 18,
          policyInnerRule: `With other users: When you share personal information or otherwise interact in public areas with other
          users, such information may be viewed by all users and may be publicly distributed outside. If You
          interact with other users or register through a Third-Party Social Media Service, Your contacts on the
          Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity.
          Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view
          Your profile.`
        },       
      ]
    },
    {
      id: 11,
      policyTitle: "",
      policySubTitle:"Retention of Your Data:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in
          this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our
          legal obligations (for example, if we are required to retain your data to comply with applicable laws),
          resolve disputes, and enforce our legal agreements and policies.`
        },
        {
          id: 2,
          policyInnerRule: `The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained
          for a shorter period, except when this data is used to strengthen the security or to improve the
          functionality of Our Service, or We are legally obligated to retain this data for longer periods.`
        },
        {
          id: 3,
          policyInnerRule: `Transfer of Your Personal Data`
        },
        {
          id: 4,
          policyInnerRule: `Your information, including Personal Data, is processed at the Company&#39;s operating offices and in any
          other places where the parties involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside of Your state, province,
          country, or other governmental jurisdiction where the data protection laws may differ from those from
          Your jurisdiction.`
        },
        {
          id: 5,
          policyInnerRule: `Your consent to this Privacy Policy followed by Your submission of such information represents Your
          agreement to that transfer.`
        },
        {
          id: 6,
          policyInnerRule: `The Company will take all steps reasonably necessary to ensure that Your data is treated securely and by
          this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country
          unless there are adequate controls in place including the security of Your data and other personal
          information.`
        },
        {
          id: 7,
          policyInnerRule: `Delete Your Personal Data`
        },
        {
          id: 8,
          policyInnerRule: `You have the right to delete or request that We assist in deleting the Personal Data that We have
          collected about You.`
        },
        {
          id: 9,
          policyInnerRule: `Our Service may give You the ability to delete certain information about You from within the Service.`
        },
        {
          id: 10,
          policyInnerRule: `You may update, amend, or delete Your information at any time by signing in to Your Account if you
          have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information
          that You have provided to Us.`
        },
        {
          id: 11,
          policyInnerRule: `Please note, however, that We may need to retain certain information when we have a legal obligation
          or lawful basis to do so.`
        },
        {
          id: 12,
          policyInnerRule: `Disclosure of Your Personal Data`
        },
        {
          id: 13,
          policyInnerRule: `Business Transactions`
        },
        {
          id: 14,
          policyInnerRule: `If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred.
          We will provide notice before Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.`
        },
        {
          id: 15,
          policyInnerRule: `Law enforcement`
        },
        {
          id: 16,
          policyInnerRule: `Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).`
        },
        {
          id: 17,
          policyInnerRule: `Other legal requirements`
        },
        {
          id: 18,
          policyInnerRule: `The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:`
        },
        {
          id: 19,
          policyInnerRule: `Comply with a legal obligation`
        },
        {
          id: 20,
          policyInnerRule: `Protect and defend the rights or property of the Company`
        },
        {
          id: 21,
          policyInnerRule: `Prevent or investigate possible wrongdoing in connection with the Service`
        },
        {
          id: 22,
          policyInnerRule: `Protect the personal safety of Users of the Service or the public`
        },
        {
          id: 23,
          policyInnerRule: `Protect against legal liability`
        },
        {
          id: 24,
          policyInnerRule: `Security of Your Personal Data`
        },
        {
          id: 25,
          policyInnerRule: `We employ meticulous data collection, storage, and processing practices and robust security measures
          to safeguard your personal information, username, password, transaction details, and app-stored data
          from unauthorized access, tampering, disclosure, or loss. Your data is stored with utmost security on our
          servers.`
        },
        {
          id: 26,
          policyInnerRule: `The security of Your Personal Data is important to Us, but remember that no method of transmission
          over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.`
        },
      ]
    },
    {
      id: 12,
      policyTitle: "",
      policySubTitle:"Aggregated Statistics:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Wiztrace India Pvt Ltd may collect statistics about the behavior of visitors to its website. Wiztrace India
          Pvt Ltd may display this information publicly or provide it to others. However, Wiztrace India Pvt Ltd
          does not disclose your personally identifying information.`
        },
        {
          id: 2,
          policyInnerRule: `● We uphold a strict policy of not selling, trading, or renting users&#39; personal identification information to
          any third party. However, we might share generalized and aggregated demographic data unrelated to
          personal identification with our trusted business partners, affiliates, and advertisers. This is done in line
          with the purposes mentioned above.`
        },
        {
          id: 3,
          policyInnerRule: `With Your consent: We may disclose Your personal information for any other purpose with Your
          consent.`
        },
      ]
    },
    {
      id: 13,
      policyTitle: "",
      policySubTitle:"Children's Privacy",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Our Service does not address anyone under the age of 18. We do not knowingly collect personally
          identifiable information from anyone under the age of 18. If You are a parent or guardian and You are
          aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that
          We have collected Personal Data from anyone under the age of 18 without verification of parental
          consent, We take steps to remove that information from Our servers.`
        },  
      ]
    },
    {
      id: 14,
      policyTitle: "",
      policySubTitle:"Links to Other Websites:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Our Service may contain links to other websites that are not operated by Us. If You click on a third-party
          link, You will be directed to that third-party&#39;s site. We strongly advise You to review the Privacy Policy of
          every site You visit.`
        },  
        {
          id: 2,
          policyInnerRule: `We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`
        },  
      ]
    },
    {
      id: 15,
      policyTitle: "",
      policySubTitle:"Advertisements:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Ads appearing on our website may be delivered to users by advertising partners, who may set cookies.
          These cookies allow the ad server to recognize your computer each time they send you an online
          advertisement to compile information about you or others who use your computer. This information
          allows ad networks to, among other things, deliver targeted advertisements that they believe will be of
          most interest to you. This Privacy Policy covers the use of cookies by Wiztrace India Pvt Ltd and does not
          cover the use of cookies by any advertisers.`
        },   
      ]
    },
    {
      id: 16,
      policyTitle: "",
      policySubTitle:"Wiztrace India Pvt Ltd uses Google AdWords for re-marketing:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `Wiztrace India Pvt Ltd uses re-marketing services to advertise on third-party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven&#39;t
          completed a task on our site, for example using the contact form to enquire. This could be in the form of
          an advertisement on the Google search results page, or a site in the Google Display Network. Third-party
          vendors, including Google, use cookies to serve ads based on someone&#39;s past visits. Of course, any data
          collected will be used by our privacy policy and Google&#39;s privacy policy.`
        },   
        {
          id: 2,
          policyInnerRule: `You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently
          using a browser plugin.`
        },   
      ]
    },
    {
      id: 17,
      policyTitle: "",
      policySubTitle:"Changes to this Privacy Policy",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `• Our Privacy Policy is subject to periodic updates`
        },   
        {
          id: 2,
          policyInnerRule: `We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
          new Privacy Policy on this page.`
        },   
        {
          id: 3,
          policyInnerRule: `You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
        },   
        {
          id: 4,
          policyInnerRule: `Please be aware that Wiztrace cannot be held accountable for any incidents, fraudulent activities, cheating, or criminal actions that may occur involving our users. We strongly recommend that you 
          thoroughly review and authenticate the information provided by other users before engaging in any
          transactions or interactions with them. Additionally, safeguard your personal data within the community
          to prevent its misuse for any harmful intentions&quot;`
        },   
      ]
    },
    {
      id: 18,
      policyTitle: "",
      policySubTitle:"Contact Us",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `If you have any questions about this Privacy Policy, You can contact us:`
        },   
        {
          id: 2,
          policyInnerRule: `By email: info@wiztrace.com`
        },   
        {
          id: 3,
          policyInnerRule: `By visiting this page on our website: www.wiztrace.com`
        },   
        {
          id: 4,
          policyInnerRule: `By phone number: +91 8130193801`
        },   
      ]
    },
    {
      id: 19,
      policyTitle: "",
      policySubTitle:"Credit",
      policyRules: [
        {
          id: 1,
          policyInnerRule: `This privacy policy was created by “ termsfeed”policy generator .`
        },     
      ]
    },
   
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h3 className="mb-4">{privacyandpolicyDetails.policyTitle}</h3>
                <span className="mb-2 pb-3">{privacyandpolicyDetails?.lastUpdate}</span>
                <h5 className="mb-2 pb-2">{privacyandpolicyDetails?.policySubTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                    )
                  )}
                </ul>
              </Col>
            ))}
            {/* <div className="text-end">
              <Link href="#" className="btn btn-primary">
                <i className="uil uil-print"></i> Print
              </Link>
            </div> */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PrivacyAndPolicyPage;
