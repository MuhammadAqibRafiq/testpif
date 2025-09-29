'use client'
import Footer from "../../Screens/Footer";
import Typography from "@/components/ui/Typography";

export default function CookiePage() {
  const lastUpdated = 'February 28, 2022'

  const introContent = {
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
        This Cookie Policy explains how __________ ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites at <a 
            href="https://practicalislamicfinance.com" 
            className="text-primary-50 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://practicalislamicfinance.com 
          </a> 
          , ("Websites"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
        </Typography>
      </div>
    )
  }

  const section1 = {
    title: 'What are cookies?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
        Cookies set by the website owner (in this case, __________) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
        </Typography>
      </div>
    )
  }

  const section2 = {
    title: 'Why do we use cookies?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
        </Typography>
      </div>
    )
  }

  const section3 = {
    title: 'How can I control cookies?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit{' '}
          <a 
            href="http://www.aboutads.info/choices/" 
            className="text-primary-50 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.aboutads.info/choices/
          </a>
          {' '}or{' '}
          <a 
            href="http://www.youronlinechoices.com" 
            className="text-primary-50 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.youronlinechoices.com
          </a>
          .
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):
        </Typography>
      </div>
    )
  }

  const section4 = {
    title: 'Essential website cookies:',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
        </Typography>

        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">__tlbcpv</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Used to record unique visitor views of the consent banner.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.termly.io</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Termly</Typography>
              <a 
                href="#" 
                className="text-primary-50 hover:underline"
              >
                View Service Privacy Policy
              </a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">1 year</Typography>
          </div>
        </div>
      </div>
    )
  }

  const section5 = {
    title: 'Performance and functionality cookies:',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.
        </Typography>

        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">PHPSESSID</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Cookie generated by applications based on the PHP language. This is a general purpose identifier used to maintain user session variables. It is normally a random generated number, how it is used can be specific to the site, but a good example is maintaining a logged-in status for a user between pages.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">PHP.net</Typography>
              <a 
                href="#" 
                className="text-primary-50 hover:underline"
              >
                View Service Privacy Policy
              </a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">server_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>
      </div>
    )
  }

  const section6 = {
    title: 'Analytics and customization cookies:',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.
        </Typography>

        {/* Cookie 1 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">#collect</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Sends data such as visitor's behavior and device to Google Analytics. It is able to keep track of the visitor across marketing channels and devices. It is a pixel tracker type cookie whose activity lasts within the browsing session.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Google Analytics</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">pixel_tracker</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 2 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_gid</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Keeps an entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Google Analytics</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">1 day</Typography>
          </div>
        </div>

        {/* Cookie 3 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_ga</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Google Analytics</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">1 year 11 months 29 days</Typography>
          </div>
        </div>

        {/* Cookie 4 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">g.gif</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">pixel_tracker</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 5 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">event/</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">pixel_tracker</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 6 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_gat#</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Enables Google Analytics regulate the rate of requesting. It is a HTTP cookie type that lasts for a session.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Google Analytics</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">1 minute</Typography>
          </div>
        </div>

        {/* Cookie 7 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">300-x-900-1.jpg</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">pixel_tracker</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 8 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_ga_#</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Used to distinguish individual users by means of designation of a randomly generated number as client identifier, which allows calculation of visits and sessions</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Google analytics</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">1 year 11 months 29 days</Typography>
          </div>
        </div>

      </div>
    )
  }

  const section7 = {
    title: 'Advertising cookies:',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
        </Typography>

        {/* Cookie 1 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">VISITOR_INFO1_LIVE</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">YouTube is a Google-owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Used by Google in combination with SID to verify Google user account and most recent login time.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.youtube.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">YouTube</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">5 months 27 days</Typography>
          </div>
        </div>

        {/* Cookie 2 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">YSC</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">YouTube is a Google-owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Used by Google in combination with SID to verify Google user account and most recent login time.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.youtube.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">YouTube</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 3 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">a</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <div className="flex gap-1">
              <Typography variant="bodyMediumR">Cox Digital Solutions (Fomerly Adify)</Typography>
              <a href="#" className="text-primary-50 hover:underline">View Service Privacy Policy</a>
            </div>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">pixel_tracker</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>
      </div>
    )
  }

  const section8 = {
    title: 'Unclassified cookies:',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.
        </Typography>

        {/* Cookie 1 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">wpcom_highlander_3pc_check</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">.wordpress.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">server_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 2 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_mailmunch_visitor_id</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">html_local_storage</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">persistent</Typography>
          </div>
        </div>

        {/* Cookie 3 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">mailmunch_second_pageview</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">html_local_storage</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">persistent</Typography>
          </div>
        </div>

        {/* Cookie 4 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_mailmunch_lead_quality</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">html_local_storage</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">persistent</Typography>
          </div>
        </div>

        {/* Cookie 5 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">_ir</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">api.pinterest.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">server_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">30 minutes</Typography>
          </div>
        </div>

        {/* Cookie 6 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">wp-api-schema-modelhttps://practicalislamicfinance.com/wp-json/wp/v2/</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">html_session_storage</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>

        {/* Cookie 7 */}
        <div className="border border-neutral-200/10 rounded-lg p-6">
          <div className="grid grid-cols-[120px_1fr] gap-y-3 text-neutral-100">
            <Typography variant="bodyMediumR" className="text-neutral-400">Name:</Typography>
            <Typography variant="bodyMediumR">__wpdm_client</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Purpose:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Provider:</Typography>
            <Typography variant="bodyMediumR">practicalislamicfinance.com</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Service:</Typography>
            <Typography variant="bodyMediumR">__________</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Country:</Typography>
            <Typography variant="bodyMediumR">United States</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Type:</Typography>
            <Typography variant="bodyMediumR">http_cookie</Typography>

            <Typography variant="bodyMediumR" className="text-neutral-400">Expires in:</Typography>
            <Typography variant="bodyMediumR">session</Typography>
          </div>
        </div>
      </div>
    )
  }

  const section9 = {
    title: 'What about other tracking technologies, like web beacons?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
        </Typography>
      </div>
    )
  }

  const section10 = {
    title: 'Do you use Flash cookies or Local Shared Objects?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
        </Typography>
      </div>
    )
  }

  const section11 = {
    title: 'Do you serve targeted advertising?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.
        </Typography>
      </div>
    )
  }

  const section12 = {
    title: 'How often will you update this Cookie Policy?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </Typography>

        <Typography variant="bodyMediumR" className="text-neutral-100">
          The date at the top of this Cookie Policy indicates when it was last updated.
        </Typography>
      </div>
    )
  }

  const section13 = {
    title: 'Where can I get further information?',
    content: (
      <div className="space-y-4">
        <Typography variant="bodyMediumR" className="text-neutral-100">
          If you have any questions about our use of cookies or other technologies, please email us at __________ or by post to:
        </Typography>

        <div className="text-neutral-100 space-y-1">
          <Typography variant="bodyMediumR">__________</Typography>
          <Typography variant="bodyMediumR">__________</Typography>
          <Typography variant="bodyMediumR">__________</Typography>
          <Typography variant="bodyMediumR">Phone: __________</Typography>
        </div>
      </div>
    )
  }

  return (
    <div style={{ marginTop: 'var(--navbar-height)' }}>
      <div className="max-w-7xl mx-auto max-xl:px-6 padding-y-xl">
        <div className="flex flex-col gap-[8px] pb-[40px]">
          <Typography variant='h4' className='text-neutral-100'>
            COOKIE POLICY
          </Typography>
          <Typography variant='bodyMediumR' className='text-neutral-100'>
            Last updated: {lastUpdated}
          </Typography>
        </div>

        <div className="space-y-10">
          {introContent.content}

          <div id="section1" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
              {section1.title}
            </Typography>
            {section1.content}
          </div>

          <div id="section2" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
              {section2.title}
            </Typography>
            {section2.content}
          </div>

          <div id="section3" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6">
              {section3.title}
            </Typography>
            {section3.content}
          </div>

          <div id="section4" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section4.title}
            </Typography>
            {section4.content}
          </div>

          <div id="section5" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section5.title}
            </Typography>
            {section5.content}
          </div>

          <div id="section6" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section6.title}
            </Typography>
            {section6.content}
          </div>

          <div id="section7" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section7.title}
            </Typography>
            {section7.content}
          </div>

          <div id="section8" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section8.title}
            </Typography>
            {section8.content}
          </div>

          <div id="section9" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section9.title}
            </Typography>
            {section9.content}
          </div>

          <div id="section10" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section10.title}
            </Typography>
            {section10.content}
          </div>

          <div id="section11" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section11.title}
            </Typography>
            {section11.content}
          </div>

          <div id="section12" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section12.title}
            </Typography>
            {section12.content}
          </div>

          <div id="section13" className="scroll-mt-20">
            <Typography variant="bodyXLargeSB" className="text-neutral-100 mb-6 underline">
              {section13.title}
            </Typography>
            {section13.content}
          </div>
        </div>
      </div>

      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}
