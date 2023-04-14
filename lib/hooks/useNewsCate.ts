import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export function useNewsCate(){
  const { t } = useTranslation('common');
  useEffect(()=>{
  },[])
  return [
    {name: t('navigation.list.item3.children.child1.name'), id:1},
    {name: t('navigation.list.item3.children.child2.name'),id:2},
    {name: t('navigation.list.item3.children.child3.name'),id:3},
    {name: t('navigation.list.item3.children.child4.name'),id:4}
  ]
}