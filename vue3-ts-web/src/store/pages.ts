import {defineStore} from 'pinia'
import {ref} from 'vue'

const usePagesStore = defineStore('pages',()=>{
    const pageCount = ref(3)

    const addPage = (page:string)=>{
        pageCount.value++
    }

    const deletePage = (page:string)=>{
        pageCount.value--
    }
    // const pages = ref<string[]>([])

    // const addPage = (page:string)=>{
    //     pages.value.push(page)
    // }

    // const deletePage = (page:string)=>{
    //     pages.value.splice(page.index,1)
    // }
    return{
        pageCount,addPage,deletePage
    }
})

export default usePagesStore