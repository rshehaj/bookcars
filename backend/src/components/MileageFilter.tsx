import React, { useState, useEffect, useRef } from 'react'
import { strings as commonStrings } from '../lang/common'
import { strings } from '../lang/cars'
import Accordion from './Accordion'
import * as bookcarsTypes from 'bookcars-types'

import '../assets/css/mileage-filter.css'

const MileageFilter = (
  {
    className,
    onChange
  }: {
    className?: string
    onChange: (value: bookcarsTypes.Mileage[]) => void
  }
) => {
  const [allChecked, setAllChecked] = useState(true)
  const [values, setValues] = useState([bookcarsTypes.Mileage.Limited, bookcarsTypes.Mileage.Unlimited])

  const limitedRef = useRef<HTMLInputElement>(null)
  const unlimitedRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (allChecked && limitedRef.current && unlimitedRef.current) {
      limitedRef.current.checked = true
      unlimitedRef.current.checked = true
    }
  }, [allChecked])

  const handleLimitedMileageChange = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => {
    if ('checked' in e.currentTarget && e.currentTarget.checked) {
      values.push(bookcarsTypes.Mileage.Limited)

      if (values.length === 2) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === bookcarsTypes.Mileage.Limited),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setValues(values)

    if (onChange) {
      onChange(values)
    }
  }

  const handleLimitedMileageClick = (e: React.MouseEvent<HTMLElement>) => {
    const checkbox = e.currentTarget.previousSibling as HTMLInputElement
    checkbox.checked = !checkbox.checked
    const event = e
    event.currentTarget = checkbox
    handleLimitedMileageChange(event)
  }

  const handleUnlimitedMileageChange = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => {
    if ('checked' in e.currentTarget && e.currentTarget.checked) {
      values.push(bookcarsTypes.Mileage.Unlimited)

      if (values.length === 2) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === bookcarsTypes.Mileage.Unlimited),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setValues(values)

    if (onChange) {
      onChange(values)
    }
  }

  const handleUnlimitedMileageClick = (e: React.MouseEvent<HTMLElement>) => {
    const checkbox = e.currentTarget.previousSibling as HTMLInputElement
    checkbox.checked = !checkbox.checked
    const event = e
    event.currentTarget = checkbox
    handleUnlimitedMileageChange(event)
  }

  const handleUncheckAllChange = () => {
    if (allChecked) {
      // uncheck all
      if (limitedRef.current) {
        limitedRef.current.checked = false
      }
      if (unlimitedRef.current) {
        unlimitedRef.current.checked = false
      }

      setAllChecked(false)
      setValues([])
    } else {
      // check all
      if (limitedRef.current) {
        limitedRef.current.checked = true
      }
      if (unlimitedRef.current) {
        unlimitedRef.current.checked = true
      }

      const values = [bookcarsTypes.Mileage.Limited, bookcarsTypes.Mileage.Unlimited]

      setAllChecked(true)
      setValues(values)

      if (onChange) {
        onChange(values)
      }
    }
  }

  return (
    <Accordion title={strings.MILEAGE} className={`${className ? `${className} ` : ''}mileage-filter`}>
      <div className="filter-elements">
        <div className="filter-element">
          <input ref={limitedRef} type="checkbox" className="mileage-checkbox" onChange={handleLimitedMileageChange} />
          <label onClick={handleLimitedMileageClick}>{strings.LIMITED}</label>
        </div>
        <div className="filter-element">
          <input ref={unlimitedRef} type="checkbox" className="mileage-checkbox" onChange={handleUnlimitedMileageChange} />
          <label onClick={handleUnlimitedMileageClick}>{strings.UNLIMITED}</label>
        </div>
        <div className="filter-actions">
          <span onClick={handleUncheckAllChange} className="uncheckall">
            {allChecked ? commonStrings.UNCHECK_ALL : commonStrings.CHECK_ALL}
          </span>
        </div>
      </div>
    </Accordion>
  )
}

export default MileageFilter