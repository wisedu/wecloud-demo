import {get} from '@/utils/http'
import apis from '@/config/api.conf'

export const getUserList = () => {
    return get(apis.USER_LIST)
}
