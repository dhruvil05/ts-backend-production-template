module.exports = {
    extends: ["@commitlint/cli", "$commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2, 
            "always", 
            [
                "feat", 
                "fix", 
                "docs", 
                "style", 
                "refactor", 
                "test", 
                "chore", 
                "revert",
                "perf",
                "ci",
                "build",
                "merge"
            ]
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}