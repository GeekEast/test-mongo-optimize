db.createUser(
    {
        user: "readandwrite",
        pwd: "readandwrite",
        roles: [
            {
                role: "readWrite",
                db: "firstdb"
            }
        ]
    }
)