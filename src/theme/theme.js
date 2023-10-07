import global from "../global";

//Light Theme colors

const theme = {
  light: {
    theme: 'light',
    navSelected: global.primaryBlue,
    backgroundColor: global.nearWhite,
    color: global.textBlack,
    btn1: global.primaryBlue,
    btn2: global.secondaryOrange,
    btn3: global.blueVariant,
    btn4: global.orangeVariant,
    error: global.errorRed,
    btnBackgroundColor: global.offWhite,
    borderColor: 'none', 
    filter: 'none',
  },
  dark: {
    theme: 'dark',
    navSelected: global.secondaryViolet,
    backgroundColor: global.darkGrey,
    color: global.offWhite,
    btn1: global.primaryYellow,
    btn2: global.secondaryViolet,
    btn3: global.yellowVariant,
    btn4: global.violetVariant,
    error: global.errorRed,
    btnBackgroundColor: global.whiteOpacity,
    borderColor: global.borderOpacity, 
    filter: 'blur(10px)',
  },
}

export default theme;