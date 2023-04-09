import { useAppSelector } from "./storeHooks";


export const useAuth = () => useAppSelector((state) => state.user)
