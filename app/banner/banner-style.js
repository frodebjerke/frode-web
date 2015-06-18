var StyleSheet = require('react-style');
var assign = require('lodash').assign;
var colors = require('../styles/colors');

var styles = {
  backgroundImage: "url(sup.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "10%",
  minHeight: "40rem",
  position: "relative"
}

styles.title = assign({
    //h1 typo
    fontSize: '1.1rem',
    color: colors.blueDarkest,
    margin: 0,
    padding: 0
}, {
    position: 'absolute',
    left: '10%',
    bottom: '15rem',
});

styles.brand = {
    fontSize: '2.4rem',
    textTransform: 'uppercase',
    color: colors.blueLighter,
    padding: 0,
    margin: 0,
    letterSpacing: '0.05rem'
}

styles.brandFri = {
    color: colors.blue
}

styles.register = assign({}, {
    // button typo
    fontVariant: 'small-caps',
    letterSpacing: '0.05rem',
    lineHeight: '4rem',
    padding: '0 5rem',
    textDecoration: 'none',
    color: colors.greenLightest,
    backgroundColor: colors.blue
},{
    position: "absolute",
    bottom: 0,
    right: 0,
});

module.exports = StyleSheet.create(styles);
