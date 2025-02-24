'use client'

import type { TextFieldClientProps } from 'payload'
import type { FC, MouseEvent } from 'react'
import { useCallback, useEffect } from 'react'
import {
  Button,
  FieldLabel,
  TextInput,
  useField,
  useFormFields,
} from '@payloadcms/ui'

import { createSlug } from '@local/utils/createSlug'

import './index.scss'

type SlugFieldProps = {
  checkboxFieldPath: string
  fieldToUse: string
} & TextFieldClientProps

export const SlugField: FC<SlugFieldProps> = ({
  checkboxFieldPath: checkboxFieldPathFromProps,
  field,
  fieldToUse,
  path = '',
  readOnly: readOnlyFromProps,
}) => {
  const { label } = field

  const checkboxFieldPath = path.includes('.')
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps

  const { setValue, value } = useField<string>({ path })

  const { setValue: setCheckboxValue, value: checkboxValue } =
    useField<boolean>({
      path: checkboxFieldPath,
    })

  const fieldToUseValue = useFormFields(([fields, _dispatch]) => {
    if (
      !fieldToUse ||
      !(fieldToUse in fields) ||
      typeof fields[fieldToUse] !== 'object' ||
      !('value' in fields[fieldToUse]) ||
      typeof fields[fieldToUse].value !== 'string'
    ) {
      return ''
    }

    return fields[fieldToUse].value
  })

  useEffect(() => {
    if (checkboxValue) {
      if (fieldToUseValue) {
        const formattedSlug = createSlug(fieldToUseValue)

        if (value !== formattedSlug) setValue(formattedSlug)
      } else if (value !== '') {
        setValue('')
      }
    }
  }, [fieldToUseValue, checkboxValue, setValue, value])

  const handleLock = useCallback(
    (evt: MouseEvent) => {
      evt.preventDefault()

      setCheckboxValue(!checkboxValue)
    },
    [checkboxValue, setCheckboxValue],
  )

  const readOnly = readOnlyFromProps ?? checkboxValue

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} path={path} />

        <Button buttonStyle="none" className="lock-button" onClick={handleLock}>
          {checkboxValue ? 'Unlock' : 'Lock'}
        </Button>
      </div>

      <TextInput
        label=""
        onChange={setValue}
        path={path}
        readOnly={readOnly}
        value={value}
      />
    </div>
  )
}
