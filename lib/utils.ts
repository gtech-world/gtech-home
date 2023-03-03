import {useTranslation} from "react-i18next";

export const getNavList = (t:any)=>{
  return  [
    {
      href: '/',
      name: t('navigation.list.item1.name'),
    },
    {
      href: '/solutions',
      name: t('navigation.list.item2.name'),
      isSelected: false,
      children:[
        {
          href: '/solutions/web3',
          name: t('navigation.list.item2.children.child1.name'),
        },
        {
          href: '/solutions/governance',
          name: t('navigation.list.item2.children.child2.name'),
        },
        {
          href: '/solutions/automotive',
          name: t('navigation.list.item2.children.child3.name'),
        },
      ]
    }
    // {
    //   href: '/contact',
    //   name: t('navigation.list.item3.name'),
    // },
  ]
}