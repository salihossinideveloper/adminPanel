import {settings} from "@/modules/settings";
import { user } from './modules/user'
import actions from '@/modules/actions'
import config from '@/config/config'

const modules = {
    settings,
    actions,
    config,
    $user: user
}

export default modules