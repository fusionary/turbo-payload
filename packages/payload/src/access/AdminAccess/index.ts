import type { FieldAccess, TypeWithID } from 'payload'

import type { User } from '@local/payload/payload-types'

export const AdminAccess: FieldAccess<TypeWithID, User> = ({ req: { user } }) =>
  user?.role === 'admin'
