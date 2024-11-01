export type TypeStateData<T> = {
    loading: boolean,
    error: boolean,
    data: T | null
}