module.exports = {
    "plugins": ["react-hooks"],
    "rules": {
        "eqeqeq": "warn",        // fixes === errors
        "react-hooks/exhaustive-deps": "warn",  // fixes useEffect warning
        "no-unused-vars": "warn"  // fixes assigned but unused
    }
}