import { Ref, ref } from 'vue'

//一个T 一个K,传入K数组，返回T类型promise
type TApiFun<T, K extends Array<any>> = (...params: K) => Promise<T>;

interface AutoRequestOptions {
    loading?: boolean;
    onSuccess?: (data: any) => void;
}
type AutoRequestResult<T, K extends Array<any>> = [Ref<boolean>, TApiFun<T, K>];
/* 控制loading状态的自动切换hook */
export function useAutoRequest<T, K extends any[] = any[]>(fun: TApiFun<T, K>, options?: AutoRequestOptions): AutoRequestResult<T, K> {
    const { loading = false, onSuccess } = options || { loading: false };

    const requestLoading = ref(loading);

    const run: TApiFun<T, K> = (...params) => {
        requestLoading.value = true;
        return fun(...params)
            .then((res) => {                
                onSuccess && onSuccess(res);
                return res;
            })
            .finally(() => {
                requestLoading.value = false;
            });
    };
    return [requestLoading, run];
}

export function submitApi(text:string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟接口调用有概率出错
            if (Math.random() > 0.2) {
                resolve({
                    status: "ok",
                    text: text,
                });
            } else {
                reject(new Error("不小心出错了！"));
            }
        }, 500);
    });
}
