import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive'

export const LineContainer = styled.div`
display: none;
  position: absolute;
  top: 0px;
  right: 0px;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: block;
    width: 100%;
    top: 0px;
    z-index: 1;
    height: 100%;
  }

  @media (min-width: 1280px) {
    display: block;
    display: block;
    height: 100vh;
  }
`

const transition = { duration: 6, yoyo: Infinity, ease: 'easeOut' }

const transition2 = { duration: 3, delay: 5, yoyo: Infinity, ease: 'easeOut' }

export const LineAnimation = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <LineContainer>
      {isDesktop
        ? (
          <svg
            className="svg-animation"
            viewBox="0 0 1792 1010"
            fill="red"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_66_10)">
              <motion.path
                d="M1878.03,-70.5098C1806,-59.1698 1754.9,-36.0498 1721.11,-16.5698C1663.98,16.3602 1648.09,43.6402 1573.99,83.1402C1539.68,101.44 1509.42,117.57 1465.07,127.28C1443.81,131.94 1342.7,154.08 1274.69,100.4C1263.77,91.7802 1239.8,72.9702 1243.14,50.8402C1246.19,30.6302 1268.56,18.7802 1283.66,15.1502C1298.59,11.5602 1324.01,11.7802 1333.76,27.1102C1345.35,45.3302 1327.93,74.1102 1315.81,87.6802C1288.39,118.38 1233.93,131.91 1199.68,111.82C1170.05,94.4402 1172.74,61.9802 1139.18,52.0802C1130.34,49.4702 1114.78,47.1902 1098.31,52.0802C1086.1,55.7102 1077.94,61.9202 1073.79,65.1602C1030.87,98.6402 1014.76,127.18 983.34,143.77C962.3,154.88 943.05,156.07 928.46,156.97C872.26,160.44 836.37,131.11 792.64,109.14C702.44,63.8302 613.76,67.3602 586.68,68.4402C539.84,70.3002 494.45,87.0902 403.6,119.11C319.24,148.84 307.02,161.61 263.62,161.61C214.71,161.61 196.11,145.38 138.79,151.8C105.09,155.57 75.97,158.95 52.75,181.22C15.58,216.87 20.43,282.2 32.77,322.18C43.75,357.76 84.94,397.64 165.7,476.33C208.72,518.25 230.68,537.03 244.01,575.17C247.85,586.14 261.35,624.77 250.55,668.34C233.56,736.88 174.79,745.99 121.41,818.73C111.76,831.88 71.21,889.57 65.83,960.94C55.45,1098.4 179.4,1230.41 211.14,1263.23C260.74,1314.53 311.14,1349.5 310.85,1407.08C310.69,1437.98 295.38,1463.09 283.06,1479"
                fill="transparent"
                strokeWidth="35"
                stroke="#e88025"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition} />
              <motion.path
                d="M1010 1195C1029.93 1130.39 1214 857 1472 847C1730 837 1718 581 1828 323"
                fill="transparent"
                strokeWidth="35"
                stroke="#e88025"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition2} />
            </g>
            <defs>
              <clipPath id="clip0_66_10">
                <rect
                  width="100%"
                  height="100%"
                  fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            className="svg-animation"
            viewBox="0 0 1197 1766"
            fill="red"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_72_47)">
              <motion.path
                d="M1351 -312L1267.34 -178.824C1182.62 -109.348 1093.76 138.824 944.418 124.526C887.231 116.716 815.407 87.042 815.407 55.3545C815.407 23.667 858.02 13.6197 890.077 33.3278C922.135 53.0359 863.884 144.621 815.407 115.252C766.93 85.8827 751.65 79 702 79C652.35 79 580 115.252 540 159C402.822 309.033 417.674 543.527 196 562C-44.0001 582 106 786 130 978C154 1170 196 1292 82.0001 1544C-31.9998 1796 270.667 1834.67 238 1890"
                fill="transparent"
                strokeWidth="35"
                stroke="#e88025"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition} />
            </g>
            <defs>
              <clipPath id="clip0_72_47">
                <rect
                  width="100%"
                  height="100%"
                  fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      <motion.div
        className="box"
        initial={{ offsetDistance: '0%', scale: 2.5 }}
        animate={{ offsetDistance: '100%', scale: 1 }}
        transition={transition} />
    </LineContainer>
  );
}