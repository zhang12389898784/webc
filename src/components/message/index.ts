import { withInstallFunction } from '@/uitils/install'

import {createMessage} from './src/method'

export const ElMessage = withInstallFunction(createMessage, '$message')