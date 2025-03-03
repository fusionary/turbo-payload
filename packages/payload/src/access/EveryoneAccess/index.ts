import type { FieldAccess, TypeWithID } from 'payload'

import type { User } from '@local/payload/payload-types'

export const EveryoneAccess: FieldAccess<TypeWithID, User> = () => true
