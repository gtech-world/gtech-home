import { HeaderLayout } from "@components/common/headerLayout";
import {useTranslation} from "react-i18next";
export default function Index() {
  const { t,i18n } = useTranslation('contact');
  return(
    <HeaderLayout>
      <div className="flex items-center w-container mx-auto justify-between text-2xl my-[5.375rem] md:flex-col-reverse md:w-full md:text-base">
        <div className="md:text-center md:mt-6">
          <h2 className="text-[2.75rem] font-bold text-green leading-[3.75rem] md:text-[1.75rem]">{t('contact')}</h2>
          <p className="mt-6 flex flex-col md:mt-4">
            {
              i18n.language === 'zh' && <span>吉特科技有限公司</span>
            }
            <span>GTech International Limited</span>
          </p>
          <p className="mt-6 md:mt-4">
            {t('telephone')} : {t('office')} 021-66271287
          </p>
          <p className="mt-6 md:mt-4">
            {t("email")}：hi@gtech.world
          </p>
          <p className="mt-6 md:mt-4">
            {t("url")}：http://gtech-cn.co
          </p>
        </div>
        <img className="md:w-[15.125rem]" src="/images/call.svg"/>
      </div>
    </HeaderLayout>
  )
}
