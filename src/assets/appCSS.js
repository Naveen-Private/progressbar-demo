import {css} from 'styled-components'

const sizes = {
  desktop: 1279,
  tablet: 991,
  mobile: 767
}

export const deviceType = {
  giant: function () { return window.innerWidth > 1279 },
  desktop: function () { return window.innerWidth > 991 && window.innerWidth < 1280 }, // desktop === tablet landscape
  tablet: function () { return window.innerWidth > 767 && window.innerWidth < 992 }, // tablet portrait
  mobile: function () { return window.innerWidth < 768 },
  nonMobile: function () { return window.innerWidth > 768 }
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})