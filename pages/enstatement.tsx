import { HeaderLayout } from "@components/common/headerLayout";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
export default function Enstatement() {
  const {i18n} = useTranslation()
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    i18n.changeLanguage('en',()=>{
      setVisible(true)
    })
  },[])
  return(
    visible &&
    <HeaderLayout className="bg-white min-h-screen border-t-2 border-gray-100">
      <div className="w-container mx-auto text-sm pb-12 md:w-full md:px-3">
        <h1 className="text-green text-center text-2xl mb-5 mt-8">Cookie Policy</h1>
        <p>We may use cookies or similar technologies to improve your experience on our internet platforms.</p>
        <p>Cookies are small data files that your browser sets on your computer or device. However, when it is read by a server via a web browser, it can help a website deliver a more user-friendly service – for example, remembering previous purchases or account details.</p>
        <p>Both we and our third-party tracking partners use browser storage, program storage, cookies, pixels, beacons, scripts and tags to operate our websites and apps, to analyze your use based on your consent. We may receive reports on these from our third-party tracking partners on an individual and aggregate basis, and those partners may combine that information with other information they have collected from you.</p>
        <h4 className="mt-6 text-green text-lg">Types of Cookies we use：</h4>
        <p>Necessary Cookie: Necessary cookies are required to enable technical site functionality and to provide the services explicitly requested by you. This includes, for example, ensuring the security and efficient operation of products and services, which allows us to confirm the security status of your account and transactions, screen abnormal situations related to crashes and delays, and save you from repeating the steps and processes of filling out forms and entering search content, etc. These cookies cannot be disabled and do not require consent.</p>
        <p>Analytic Cookie: These cookies are optional and collect information about how visitors use and experience our website in order to optimize design, operations, and efficiency and to improve your user experience. For example, analytic cookies may collect information about a user&apos;s usage of online services, including most frequently visited websites, the browser or operating system used, the user&apos;s location, whether an item or link has been viewed or used, error messages generated, and whether the message sent by GTech has been opened or read. GTech can use this information to improve online services, count visitors, analyze users’ usage patterns, fix problems with online services, and make online services more convenient.</p>
        <p>Flash Cookie (also known as Local Stored Objects) or other similar technologies: These cookies are optional. A Flash cookie is a small data file placed on a computer using Adobe Flash or similar technology that may be built into your computer or downloaded or installed by you to your computer. We use these technologies to personalize and enhance your online experience, facilitate processes, and personalize and store your settings. </p>
        <h4 className="mt-6 text-green text-lg">What about your privacy?</h4>
        <p>
          Certain cookies at this site may process your personal information.
        </p>
        <p>With regards to “strictly necessary” cookies processing personal information, GTech bases this processing on either:</p>
        <p>our obligation to secure a safe use and operation of the website and the services offered on the website;</p>
        <p>our contractual obligation to deliver specific services or functionalities specifically requested by the website user.</p>
        <p>With regards to “analytical” and/ or “flash” cookies processing personal information, GTech bases its processing on consent, unless otherwise specifically appears in our personal information protection policy.</p>
        <p>For cookies where a third party is joint processor or independent processor, please refer to the third party’s personal information protection policy for more information on the legal basis for their processing of personal information as processors.</p>
        <h4 className="mt-6 text-green text-lg">What if I do not want cookies?</h4>
        <p>Necessary cookies are essential for the website to operate and you cannot opt out of them, but you can delete necessary cookies after use – see how below.</p>
        <p>For all other cookies, you can always adjust your settings and revoke your consent.</p>
        <h4 className="mt-6 text-green text-lg">How to delete your cookies?</h4>
        <p>You may control and manage cookies in many ways. However, please note that deleting or disabling cookies may affect your user experience and some of the websites&apos; functionality may be limited. Real browser cookies are set to expire. Similar types of technologies, like local storage on your device, do not have expiration built-in, and so must be deleted by you. </p>
      </div>
    </HeaderLayout>
  )
}


















