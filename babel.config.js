module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "corejs": 3.9,
                "useBuiltIns": "usage"
            }
        ],
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ]
    ],

    "plugins": ["react-refresh/babel"]
}