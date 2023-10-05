db.getSiblingDB('codereview')

db.createUser(
    {
        user: "jelena",
        pwd: "12345",
        roles: [
            {
                role: "readWrite",
                db: "codereview"
            }
        ]
    }
);

db.threads.insertMany([
    {
        'title': 'Wierd thread',
        'description': 'This is a wierd thread',
        'author': 'Lolo',
        'date': '12.09.2022',
        'awnsers': []
    },
    {
        'title': 'Wierd thread 2',
        'description': 'This is a wierd thread',
        'author': 'Lolo',
        'date': '12.09.2022',
        'awnsers': []
    }
])