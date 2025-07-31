'use client'
import Footer from "../../Screens/Footer";
import Typography from "@/components/ui/Typography";

export default function PrivacyPage() {

  const lastUpdated = 'February 28, 2022'


  const tableContent = {
    title: 'TABLE OF CONTENTS',
    content: (
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <a href="#section1" className="text-neutral-100 hover:text-primary-50">
            WHAT INFORMATION DO WE COLLECT?
          </a>
        </li>
        <li>
          <a href="#section2" className="text-neutral-100 hover:text-primary-50">
            HOW DO WE PROCESS YOUR INFORMATION?
          </a>
        </li>
        <li>
          <a href="#section3" className="text-neutral-100 hover:text-primary-50">
            WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
          </a>
        </li>
        <li>
          <a href="#section4" className="text-neutral-100 hover:text-primary-50">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
        </li>
        <li>
          <a href="#section5" className="text-neutral-100 hover:text-primary-50">
            WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </a>
        </li>
        <li>
          <a href="#section6" className="text-neutral-100 hover:text-primary-50">
            DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </a>
        </li>
        <li>
          <a href="#section7" className="text-neutral-100 hover:text-primary-50">
            HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </a>
        </li>
        <li>
          <a href="#section8" className="text-neutral-100 hover:text-primary-50">
            HOW LONG DO WE KEEP YOUR INFORMATION?
          </a>
        </li>
        <li>
          <a href="#section9" className="text-neutral-100 hover:text-primary-50">
            HOW DO WE KEEP YOUR INFORMATION SAFE?
          </a>
        </li>
        <li>
          <a href="#section10" className="text-neutral-100 hover:text-primary-50">
            DO WE COLLECT INFORMATION FROM MINORS?
          </a>
        </li>
        <li>
          <a href="#section11" className="text-neutral-100 hover:text-primary-50">
            WHAT ARE YOUR PRIVACY RIGHTS?
          </a>
        </li>
        <li>
          <a href="#section12" className="text-neutral-100 hover:text-primary-50">
            CONTROLS FOR DO-NOT-TRACK FEATURES
          </a>
        </li>
        <li>
          <a href="#section13" className="text-neutral-100 hover:text-primary-50">
            DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </a>
        </li>
        <li>
          <a href="#section14" className="text-neutral-100 hover:text-primary-50">
            DO WE MAKE UPDATES TO THIS NOTICE?
          </a>
        </li>
        <li>
          <a href="#section15" className="text-neutral-100 hover:text-primary-50">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </a>
        </li>
        <li>
          <a href="#section16" className="text-neutral-100 hover:text-primary-50">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </a>
        </li>
      </ol>
    )
  }

  const section1 = {
    title: '1. WHAT INFORMATION DO WE COLLECT?',
    content: (
      <>
        <Typography variant="bodyLargeM" className="text-neutral-100 mb-4">
          Personal information you disclose to us
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-2">
          <strong>In Short:</strong> We collect personal information that you provide to us.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-2">
          <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
        </Typography>

        <ul className="list-disc pl-6 mb-4 text-neutral-100">
          <li>names</li>
          <li>email addresses</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>contact preferences</li>
        </ul>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Sensitive Information.</strong> We do not process sensitive information.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Payment Data.</strong>  We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here:{' '}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-50 hover:underline"
          >
            https://stripe.com/privacy
          </a>
          .
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called{' '}
          <a 
              href="#section7" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              "HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
          </a>
          {' '}below.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
        </Typography>

        <Typography variant="bodyLargeM" className="text-neutral-100 mb-4">
          Information automatically collected
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-2">
          <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          Like many businesses, we also collect information through cookies and similar technologies.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-1">
          The information we collect includes:
        </Typography>


        <ul className="list-disc list-inside space-y-1 ml-4 text-neutral-100">
          <li>
            Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).

          </li>
          <li>
            Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
          </li>

          <li>
            Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
          </li>
        </ul>
      </>
    )
  };

  const section2 = {
    title: '2. HOW DO WE PROCESS YOUR INFORMATION?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-2">
          <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
        </Typography>

        <ul className="list-disc pl-6 space-y-4 text-neutral-100">
          <li>
            <Typography variant="bodyMediumR">
              <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see{' '}
              <a 
                  href="#section11" 
                  className="text-primary-50 hover:underline cursor-pointer"
              >
                  "WHAT ARE YOUR PRIVACY RIGHTS?"
              </a>
              {' '}below).
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
            </Typography>
          </li>
        </ul>
      </>
    )
  };

  const section3 = {
    title: '3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4 underline">
          If you are located in the EU or UK, this section applies to you.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
        </Typography>

        <ul className="list-disc pl-6 space-y-4 text-neutral-100 mb-8">
          <li>
            <Typography variant="bodyMediumR">
              <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click{' '}
              <a 
                  href="#section11" 
                  className="text-primary-50 hover:underline cursor-pointer"
              >
                  here
              </a>
              {' '}to learn more.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
            </Typography>
            
            <ul className="list-disc pl-6 space-y-2 text-neutral-100">
                <li>Send users information about special offers and discounts on our products and services</li>
                <li>Develop and display personalized and relevant advertising content for our users</li>
                <li>Analyze how our services are used so we can improve them to engage and retain users</li>
                <li>Support our marketing activities</li>
                <li>Diagnose problems and/or prevent fraudulent activities</li>
                <li>Understand how our users use our products and services so we can improve user experience</li>
            </ul>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
            </Typography>
          </li>

          <li>
            <Typography variant="bodyMediumR">
              <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
            </Typography>
          </li>
        </ul>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4 underline">
          If you are located in Canada, this section applies to you.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click{' '}
          <a 
              href="#section11" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
        </Typography>

        <ul className="list-disc pl-6 space-y-2 text-neutral-100">
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
          <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
          <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
      </>
    )
  };

  const section4 = {
    title: '4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We may need to share your personal information in the following situations:
        </Typography>

        <ul className="list-disc pl-6 space-y-4 text-neutral-100">
          <li>
            <Typography variant="bodyMediumR">
              <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </Typography>
          </li>
        </ul>
      </>
    )
  };

  const section5 = {
    title: '5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
        </Typography>
      </>
    )
  };

  const section6 = {
    title: '6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </Typography>
      </>
    )
  };

  const section7 = {
    title: '7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
        </Typography>
      </>
    )
  };

  const section8 = {
    title: '8. HOW LONG DO WE KEEP YOUR INFORMATION?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than thirty six (36) months past the start of the idle period of the user's account.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </Typography>
      </>
    )
  };

  const section9 = {
    title: '9. HOW DO WE KEEP YOUR INFORMATION SAFE?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
        </Typography>
      </>
    )
  };

  const section10 = {
    title: '10. DO WE COLLECT INFORMATION FROM MINORS?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at{' '}
          <a
            href="mailto:members@practicalislamicfinance.com"
            className="text-primary-50 hover:underline"
          >
            members@practicalislamicfinance.com
          </a>
          .
        </Typography>
      </>
    )
  };

  const section11 = {
    title: '11. WHAT ARE YOUR PRIVACY RIGHTS?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section{' '}
          <a 
              href="#section15" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          </a>
          {' '}below.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We will consider and act upon any request in accordance with applicable data protection laws.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:{' '}
          <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-50 hover:underline"
          >
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          If you are located in Switzerland, the contact details for the data protection authorities are available here:{' '}
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-50 hover:underline"
          >
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </a>
          .
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section{' '}
          <a 
              href="#section15" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          </a>
          {' '}below.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section{' '}
          <a 
              href="#section15" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
          </a>
          {' '}below. You will then be removed from the marketing lists — however, we may still communicate with you, for example to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Account Information</strong> If you would at any time like to review or change the information in your account or terminate your account, you can:
        </Typography>
        <ul className="list-disc pl-6 mb-4 text-neutral-100">
          <li>Log in to your account settings and update your user account.</li>
        </ul>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit{' '}
          <a
            href="http://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-50 hover:underline"
          >
            http://www.aboutads.info/choices/
          </a>
          .
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a
            href="mailto:members@practicalislamicfinance.com"
            className="text-primary-50 hover:underline"
          >
            members@practicalislamicfinance.com
          </a>
          .
        </Typography>
      </>
    )
  };

  const section12 = {
    title: '12. CONTROLS FOR DO-NOT-TRACK FEATURES',
    content: (
      <Typography variant="bodyMediumR" className="text-neutral-100">
        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
      </Typography>
    )
  };

  const section13 = {
    title: '13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-8">
          If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
        </Typography>

        <Typography variant="bodyLargeM" className="text-neutral-100 mb-4">
          CCPA Privacy Notice
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          The California Code of Regulations defines a "resident" as:
        </Typography>

        <div className="mb-6">
          <ol className="list-decimal pl-6 space-y-2">
            <li className="text-neutral-100">
              every individual who is in the State of California for other than a temporary or transitory purpose
            </li>
            <li className="text-neutral-100">
              every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
            </li>
          </ol>
        </div>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          All other individuals are defined as "non-residents."
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          What categories of personal information do we collect?
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We have collected the following categories of personal information in the past twelve (12) months:
        </Typography>

        {/* Data Collection Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-neutral-30">
            <thead>
              <tr className="bg-primary-10">
                <th className="border border-neutral-30 p-4 text-left font-medium text-neutral-100">Category</th>
                <th className="border border-neutral-30 p-4 text-left font-medium text-neutral-100">Examples</th>
                <th className="border border-neutral-30 p-4 text-left font-medium text-neutral-100">Collected</th>
              </tr>
            </thead>
            <tbody className="text-neutral-100">
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">A. Identifiers</td>
                <td className="border border-neutral-30 p-4">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                <td className="border border-neutral-30 p-4 text-center">YES</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">B. Personal information categories listed in the California Customer Records statute</td>
                <td className="border border-neutral-30 p-4">Name, contact information, education, employment, employment history, and financial information</td>
                <td className="border border-neutral-30 p-4 text-center">YES</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">C. Protected classification characteristics under California or federal law</td>
                <td className="border border-neutral-30 p-4">Gender and date of birth</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">D. Commercial information</td>
                <td className="border border-neutral-30 p-4">Transaction information, purchase history, financial details, and payment information</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">E. Biometric information</td>
                <td className="border border-neutral-30 p-4">Fingerprints and voiceprints</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">F. Internet or other similar network activity</td>
                <td className="border border-neutral-30 p-4">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">G. Geolocation data</td>
                <td className="border border-neutral-30 p-4">Device location</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td className="border border-neutral-30 p-4">Images and audio, video or call recordings created in connection with our business activities</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">I. Professional or employment-related information</td>
                <td className="border border-neutral-30 p-4">Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">J. Education Information</td>
                <td className="border border-neutral-30 p-4">Student records and directory information</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
              <tr>
                <td className="border border-neutral-30 p-4 font-medium">K. Inferences drawn from other personal information</td>
                <td className="border border-neutral-30 p-4">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                <td className="border border-neutral-30 p-4 text-center">NO</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
        </Typography>

        <div className="mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-neutral-100">
              Receiving help through our customer support channels;
            </li>
            <li className="text-neutral-100">
              Participation in customer surveys or contests; and
            </li>
            <li className="text-neutral-100">
              Facilitation in the delivery of our Services and to respond to your inquiries.
            </li>
          </ul>
        </div>

        {/* Rights and Contact Information */}
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          Your rights with respect to your personal data
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-2">
          Right to request deletion of the data — Request to delete
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-2">
          Right to be informed — Request to know
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          Depending on the circumstances, you have a right to know:
        </Typography>

        <div className="mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-neutral-100">
              whether we collect and use your personal information;
            </li>
            <li className="text-neutral-100">
              the categories of personal information that we collect;
            </li>
            <li className="text-neutral-100">
              the purposes for which the collected personal information is used;
            </li>
            <li className="text-neutral-100">
              whether we sell your personal information to third parties;
            </li>
            <li className="text-neutral-100">
              the categories of personal information that we sold or disclosed for a business purpose;
            </li>
            <li className="text-neutral-100">
              the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
            </li>
            <li className="text-neutral-100">
              the business or commercial purpose for collecting or selling personal information.
            </li>
          </ul>
        </div>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          We will not discriminate against you if you exercise your privacy rights.
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          Verification process
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100 mb-6">
          We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
        </Typography>

        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          Other privacy rights
        </Typography>

        <div className="mb-6">
          <ul className="list-disc pl-6 space-y-2 text-neutral-100">
            <li>You may object to the processing of your personal information.</li>
            <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
            <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
            <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
          </ul>
        </div>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          To exercise these rights, you can contact us by email at{' '}
          <a
            href="mailto:members@practicalislamicfinance.com"
            className="text-primary-50 hover:underline"
          >
            members@practicalislamicfinance.com
          </a>
          , or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
        </Typography>
      </>
    )
  };

  const section14 = {
    title: '14. DO WE MAKE UPDATES TO THIS NOTICE?',
    content: (
      <>
        <Typography variant="bodyMediumM" className="text-neutral-100 mb-4">
          <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
        </Typography>
      </>
    )
  };

  const section15 = {
    title: '15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    content: (
      <>
        <Typography variant="bodyMediumR" className="text-neutral-100 mb-4">
          If you have questions or comments about this notice, you may email us at{' '}
          <a
            href="mailto:members@practicalislamicfinance.com"
            className="text-primary-50 hover:underline"
          >
            members@practicalislamicfinance.com
          </a>
          {' '}or by post to:
        </Typography>

        <div className="text-neutral-100 mb-4">
          <Typography variant="bodyMediumR">
            Practical Finance LLC
          </Typography>
          <Typography variant="bodyMediumR">
            1985 W Henderson Rd PMB 3264
          </Typography>
          <Typography variant="bodyMediumR">
            Columbus, OH 43220
          </Typography>
          <Typography variant="bodyMediumR">
            United States
          </Typography>
        </div>
      </>
    )
  };

  const section16 = {
    title: '16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    content: (
        <Typography variant="bodyMediumR" className="text-neutral-100">
           Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, request changes to that information, or ask for its deletion in certain cases. To review, update, or delete your personal information, please send a request to salam@practicalislamicfinance.com.
        </Typography>
    )
};

  return (
    <div style={{ marginTop: 'var(--navbar-height)' }}>


      <div className="max-w-7xl mx-auto max-xl:px-6 padding-y-xl">
        <div className="flex flex-col gap-[8px] pb-[40px]">
          <Typography variant='h4' className='text-neutral-100'>
            PRIVACY NOTICE
          </Typography>
          <Typography variant='bodyMediumR' className='text-neutral-100'>
            Last updated: {lastUpdated}
          </Typography>

        </div>



        <Typography variant='bodySmallR' className='text-neutral-100' >
          This privacy notice for Practical Finance LLC (doing business as Practical Islamic Finance) <strong>("Practical Islamic Finance," "we," "us," or "our"),</strong> describes how and why we might collect, store, use, and/or share <strong>("process")</strong> your information when you use our services <strong>("Services"),</strong> such as when you:
        </Typography>

        <ul className="list-disc list-inside space-y-1 ml-4 pb-[8px] text-neutral-100">
          <li className="text-neutral-100 text-sm">Visit our website at <a href="https://practicalislamicfinance.com" className="text-primary-50 underline">https://practicalislamicfinance.com</a>, or any website of ours that links to this privacy notice</li>
          <li className="text-neutral-100 text-sm">Engage with us in other related ways ― including any sales, marketing, or events</li>
        </ul>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[40px]' >
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at members@practicalislamicfinance.com.
        </Typography>





        <Typography variant='bodyXLargeSB' className='text-neutral-100 pb-[8px]'>
          SUMMARY OF KEY POINTS
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>
              This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click{' '}
              <a 
                  href="#tableOfContents" 
                  className="text-primary-50 hover:underline cursor-pointer"
              >
                here
              </a>
              {' '}to go directly to our table of contents.
          </strong>
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Practical Islamic Finance and the Services, the choices you make, and the products and features you use. Click{' '}
          <a 
              href="#section1" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
            here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>How do you process my information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click{' '}
          <a 
              href="#section2" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
            here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Click{' '}
          <a 
              href="#section4" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
            here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>How do we keep your information safe? </strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click{' '}
          <a 
              href="#section9" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click{' '}
          <a 
              href="#section11" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              here
          </a>
          {' '}to learn more.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[8px]'>
          <strong>How do I exercise my rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </Typography>

        <Typography variant='bodySmallR' className='text-neutral-100 pb-[40px]'>
          Want to learn more about what Practical Islamic Finance does with any information we collect? Click{' '}
          <a 
              href="#section1" 
              className="text-primary-50 hover:underline cursor-pointer"
          >
              here
          </a>
          {' '}to review the notice in full.
        </Typography>




        {/* <Typography variant='bodyXLargeSB' className='text-neutral-100 pb-[8px]'>
          {tableContent.title}
        </Typography>

        <div className="pb-[40px]">
          {tableContent.content}
        </div> */}


        <div id="tableOfContents" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {tableContent.title}
          </Typography>
          {tableContent.content}
        </div>

        <div id="section1" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section1.title}
          </Typography>
          {section1.content}
        </div>

        <div id="section2" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section2.title}
          </Typography>
          {section2.content}
        </div>

        <div id="section3" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section3.title}
          </Typography>
          {section3.content}
        </div>

        <div id="section4" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section4.title}
          </Typography>
          {section4.content}
        </div>

        <div id="section5" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section5.title}
          </Typography>
          {section5.content}
        </div>

        <div id="section6" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section6.title}
          </Typography>
          {section6.content}
        </div>

        <div id="section7" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section7.title}
          </Typography>
          {section7.content}
        </div>

        <div id="section8" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section8.title}
          </Typography>
          {section8.content}
        </div>

        <div id="section9" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section9.title}
          </Typography>
          {section9.content}
        </div>

        <div id="section10" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section10.title}
          </Typography>
          {section10.content}
        </div>

        <div id="section11" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section11.title}
          </Typography>
          {section11.content}
        </div>

        <div id="section12" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section12.title}
          </Typography>
          {section12.content}
        </div>

        <div id="section13" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section13.title}
          </Typography>
          {section13.content}
        </div>

        <div id="section14" className="scroll-mt-20 pb-[40px]">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section14.title}
          </Typography>
          {section14.content}
        </div>

        <div id="section15" className="scroll-mt-20">
          <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
            {section15.title}
          </Typography>
          {section15.content}
        </div>

        <div id="section16" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
                {section16.title}
            </Typography>
            {section16.content}
        </div>

      </div>

      <section id='footer'>
        <Footer />
      </section>

    </div>

  );
}