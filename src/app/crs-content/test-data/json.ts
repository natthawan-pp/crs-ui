files3: TreeNode[] = 
    [
        {
            "label": "Documents",
            "data": "Documents Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "expandedIcon": "pi pi-folder-open",
                    "collapsedIcon": "pi pi-folder",
                    "children": [{"label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document"}]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "pi pi-folder-open",
                    "collapsedIcon": "pi pi-folder",
                    "children": [{"label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month"}]
                }]
        },
        {
            "label": "Pictures",
            "data": "Pictures Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [
                {"label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo"},
                {"label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo"},
                {"label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo"}]
        },
        {
            "label": "Movies",
            "data": "Movies Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie"}]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{"label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie"}]
                }]
        }
    ]


    /////////////////////////////////////////////////////////////////


resultPredict = {
    "major_job_result": [
        [
            "CS",
            [
                "Programmer",
                "Developer",
                "Business Analyst",
                "Cloud & Infrastructure",
                "Application Analyst",
                "Software Engineer",
                "Data Scientist",
                "Data Engineer"
            ]
        ],
        [
            "CE",
            [
                "Programmer",
                "Developer",
                "Business Analyst",
                "Cloud & Infrastructure",
                "Application Analyst",
                "Software Engineer",
                "Data Scientist",
                "Data Engineer",
                "AI / Machine Learning Engineer"
            ]
        ],
        [
            "SE",
            [
                "Programmer",
                "Developer",
                "Business Analyst",
                "Cloud & Infrastructure",
                "Application Analyst",
                "Software Engineer",
                "Data Scientist",
                "Data Engineer"
            ]
        ],
        [
            "IT",
            [
                "Programmer",
                "Developer",
                "Business Analyst",
                "Cloud & Infrastructure",
                "Application Analyst"
            ]
        ],
        [
            "BC",
            [
                "Programmer",
                "Developer",
                "Business Analyst"
            ]
        ]
    ],
    "major_percentage_bc": [
        "BC",
        0.5
    ],
    "major_percentage_ce": [
        "CE",
        0.22
    ],
    "major_percentage_cs": [
        "CS",
        0.125
    ],
    "major_percentage_it": [
        "IT",
        0.375
    ],
    "major_percentage_se": [
        "SE",
        0.17
    ],
    "skill_percentage_bc": [
        "CS",
        0.51
    ],
    "skill_percentage_ce": [
        "CE",
        0.43
    ],
    "skill_percentage_cs": [
        "CS",
        0.33
    ],
    "skill_percentage_it": [
        "IT",
        0.23
    ],
    "skill_percentage_se": [
        "SE",
        0.13
    ],
    "skill_request_bc": [
        "CS",
        [
            "Coding",
            "Programming",
            "Artificial Intelligence",
            "Project"
        ]
    ],
    "skill_request_ce": [
        "CE",
        [
            "Coding",
            "Programming",
            "Artificial Intelligence",
            "Engineer"
        ]
    ],
    "skill_request_cs": [
        "CS",
        [
            "Coding",
            "Programming",
            "Artificial Intelligence",
            "Project"
        ]
    ],
    "skill_request_it": [
        "IT",
        [
            "Coding",
            "Programming",
            "Project",
            "Business"
        ]
    ],
    "skill_request_se": [
        "SE",
        [
            "Coding",
            "Artificial Intelligence",
            "Project",
            "Business"
        ]
    ],
    "subject_request_data_bc": [
        "BC",
        [
            "การแจกแจงความน่าจะเป็นเบื้องต้น",
            "เซต",
            "จำนวนจริงและพหุนาม",
            "ฟังก์ชัน",
            "หลักการนับเบื้องต้น"
        ]
    ],
    "subject_request_data_ce": [
        "CE",
        [
            "แคลคูลัส",
            "เรขาคณิตวิเคราะห์",
            "เซต",
            "ตรรกศาสตร์",
            "ฟังก์ชัน",
            "ฟังก์ชันตรีโกณมิติ",
            "เมทริกซ์",
            "เวกเตอร์ในสามมิติ",
            "ความน่าจะเป็น",
            "ฟิสิกส์",
            "เคมี"
        ]
    ],
    "subject_request_data_cs": [
        "CS",
        [
            "แคลคูลัส",
            "เรขาคณิตวิเคราะห์",
            "เซต",
            "ตรรกศาสตร์",
            "ฟังก์ชัน",
            "ฟังก์ชันตรีโกณมิติ",
            "เมทริกซ์"
        ]
    ],
    "subject_request_data_it": [
        "IT",
        [
            "การแจกแจงความน่าจะเป็นเบื้องต้น",
            "แคลคูลัส",
            "เซต",
            "ตรรกศาสตร์",
            "จำนวนจริงและพหุนาม",
            "ฟังก์ชัน",
            "หลักการนับเบื้องต้น"
        ]
    ],
    "subject_request_data_se": [
        "SE",
        [
            "แคลคูลัส",
            "เรขาคณิตวิเคราะห์",
            "เซต",
            "ตรรกศาสตร์",
            "ฟังก์ชัน",
            "ฟังก์ชันตรีโกณมิติ",
            "เมทริกซ์",
            "เวกเตอร์ในสามมิติ",
            "หลักการนับเบื้องต้น",
            "ความน่าจะเป็น"
        ]
    ]
}