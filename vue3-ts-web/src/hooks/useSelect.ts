import { onMounted, reactive, ref } from 'vue';

export interface SelectOptions {
    value: string
    label: string
    disabled?: boolean;
    key?: string
}

interface FetchSelectProps {
    apiFun: () => Promise<any[]>
}

export function useFetchSelect(props: FetchSelectProps) {
    const { apiFun } = props
    const options = ref<SelectOptions[]>([])
    const loading = ref(false)
    // fetch
    const loadData = ()=>{
        loading.value = true
        options.value = []
        return apiFun().then((data)=>{
            loading.value = false
            options.value = data
            return data
        },err=>{
            loading.value = false
            return Promise.reject(err)
        })
    }
    onMounted(()=>{
        loadData()
    })
    return reactive({
        options,loading
    })
}
