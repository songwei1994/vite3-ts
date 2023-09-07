import {Document, Menu,Location,Setting} from '@element-plus/icons-vue'

import {ref} from 'vue'
import { INavMenu } from '../../models'
export const useMenu = ()=>{
    const navMenus = ref<INavMenu[]>([
        {name:'index',url:'/home/index',icon:Document},
        {name:'Monitor',url:'/home/monitor',icon:Location},
        {name:'Menu',url:'/home/menu',icon:Menu},
        {name:'Setting',url:'/home/setting',icon:Setting},
    ]) 
    return {navMenus}
}