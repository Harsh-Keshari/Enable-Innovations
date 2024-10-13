import PropTypes from 'prop-types'
import React from 'react'

const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return (
        <a href={href} 
        target={target}
        // className={"btn btn-primary" + classes}
        className={`btn btn-primary ${classes || ''}`}>
            {icon ? (
            <span className='material-symbols-rounded'
            aria-hidden='true'>
                {icon}
            </span> )
            : undefined }
            {label}
            
        </a>
        )
    }
    else{
        return (
        <button className={`btn btn-primary ${classes || ''}`}>
            {icon ? (
            <span className='material-symbols-rounded'
            aria-hidden='true'>
                {icon}
            </span> )
            : undefined }
            {label}
            
        </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return (
        <a href={href} 
        target={target}
        // className={"btn btn-primary" + classes}
        className={`btn btn-outline ${classes || ''}`}>
            {icon ? (
            <span className='material-symbols-rounded'
            aria-hidden='true'>
                {icon}
            </span> )
            : undefined }
            {label}
            
        </a>
        )
    }
    else{
        return (
        <button className={`btn btn-outline ${classes || ''}`}>
            {label}
            {icon ? (
            <span className='material-symbols-rounded'
            aria-hidden='true'>
                {icon}
            </span> )
            : undefined }
        </button>
        )
    }
}

ButtonOutline.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

export { ButtonPrimary,ButtonOutline }
