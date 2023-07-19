import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export function useNewsCate(){
  const { t } = useTranslation('common');
  useEffect(()=>{
  },[])
  return [
    {name: t('navigation.list.item3.children.child1.name'), id:1,typeName:'数字碳知识库'},
    {name: t('navigation.list.item3.children.child2.name'),id:2,typeName:'国内动态'},
    {name: t('navigation.list.item3.children.child3.name'),id:4,typeName:'国际/联合国'},
    // {name: t('navigation.list.item3.children.child4.name'),id:4}
  ]
}