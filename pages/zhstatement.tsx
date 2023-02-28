import { HeaderLayout } from "@components/common/headerLayout";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
export default function Zhstatement() {
  const {i18n} = useTranslation()
  useEffect(()=>{
    i18n.changeLanguage('zh')
  },[])
  return(
    <HeaderLayout className="bg-white min-h-screen border-t-2 border-gray-100">
      <div className="w-container mx-auto text-sm pb-12 md:w-full md:px-3">
        <h1 className="text-green text-center text-2xl mb-5 mt-8">网站使用有关Cookie及隐私政策的声明</h1>
        <p>在使用本网站各项服务前，请您务必仔细阅读并透彻理解本政策的声明，当您浏览或使用我们提供的任一服务时，即表示您已充分理解并同意本政策的内容。可能适时随技术进步或服务的提升等进行相应调整或修订本政策内容，若您继续使用我们的服务，即表示同意受经修订的政策约束。
        </p>
        <h4 className="mt-6 text-green text-lg">1. 我们如何使用Cookie</h4>
        <p>为确保网站正常运转、更好地为您提供服务，我们会在您的计算机或移动设备上存储Cookie、Flash Cookie，或浏览器（或关联应用程序）提供的其他通常包含标识符、站点名称以及一些号码和字符的本地存储（统称“Cookie”）。我们使用Cookie的主要目的为：身份验证、偏好设置、保障数据和服务的安全性、为用户提供更好的服务、提高服务效率、了解与改善服务、广告优化等。</p>
        <h4 className="mt-6 text-green text-lg">2. 我们如何收集、处理、保留及使用您的信息</h4>
        <p>
          我们根据合法、正当、必要的原则，仅收集为向您提供服务所需的必要信息，如姓名、地址、联系方式、日志信息、软件信息、IP地址、服务及通讯日志信息、电子邮件等，另外，您根据本网站的明确说明而自行登录、申报之信息视为您自愿同意本网站收集。如您拒绝提供所述必要信息的，您将无法正常使用我们的服务。
        </p>
        <p>我们严格遵守中华人民共和国大陆（为免歧义，不包括香港、澳门、台湾地区）法律法规的规定，收集的信息将被用于：向您提供服务、满足您的个性化需求、安全保障、向您推荐您可能感兴趣的资讯、分析与改善我们的服务等以及本政策未载明的其他用于改善我们服务等的相关用途。若我们将信息用于本政策未载明的其他用途，会事先获得您的同意。</p>
        <p>我们对信息的处理、分享、使用、披露进行严格限制，但鉴于我们无法单独为您提供全部服务，我们需要向我们的关联公司、合作伙伴、供应商及其他为您提供必要服务的第三方等以共享或委托处理的方式提供您的相关个人信息。我们会采取必要的技术和管理措施尽可能地保护您的个人信息安全。</p>
        <h4 className="mt-6 text-green text-lg">3. 我们如何存储、保护您的信息</h4>
        <p>我们在中华人民共和国大陆境内运营中收集和产生的个人信息，将存储在中国境内。我们只会在达成目的所必需的期限内保留您的个人信息，除非法律有强制的留存要求。我们将为您的信息提供相应的安全保障，以防止信息的丢失、不当使用、未经授权访问或披露。</p>
        <h4 className="mt-6 text-green text-lg">4. 您如何管理您的信息</h4>
        <p>您可以在使用我们服务的过程中，访问、修改和删除您提供的信息，也可与我们联系进行操作。</p>
        <h4 className="mt-6 text-green text-lg">5. 未成年人保护</h4>
        <p>我们重视并致力于保护18周岁以下未成年人（以下简称“未成年人”）的隐私，且无意收集未成年人的个人信息。除非征得其法定监护人的同意，未成年人请不要注册帐户或向我们提供自己的姓名、联系地址、电话等个人信息。</p>
      </div>
    </HeaderLayout>
  )
}


















