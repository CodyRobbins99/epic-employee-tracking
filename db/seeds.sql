INSERT INTO department (name)
VALUES 
    ('Finance'),
    ('Marketing'),
    ('Web Development'),
    ('Human Resources'),
    ('Operations'),
    ('Customer Support')
;

INSERT INTO employee_role (title, salary, department_id)
VALUES
    ('Finance Manager', 69000, 1),
    ('Financial Planner', 50000, 1),
    ('Financial Analyst', 48000, 1),
    ('Accountant', 40000, 1),
    ('Marketing Manager', 69000, 2),
    ('Marketing Specialist', 60000, 2),
    ('Marketing Consultant', 54000, 2),
    ('Marketing Analyst', 48000, 2),
    ('Web Development Manager', 69000, 3),
    ('Senior Full Stack Developer', 65000, 3),
    ('Senior Front End Developer', 58000, 3),
    ('Senior Back End Developer', 58000, 3),
    ('Junior Web Developer', 50000, 3),
    ('Human Resources Manager', 69000, 4),
    ('Human Resources Supervisor', 58000, 4),
    ('Human Resources Specialist', 50000, 4),
    ('Human Resources Analyst', 48000, 4),
    ('Operations Manager', 69000, 5),
    ('Operations Analyst', 62000, 5),
    ('Operations Associate', 55000, 5),
    ('Operations Tech', 50000, 5),
    ('Customer Support Manager', 69000, 6),
    ('Customer Support Specialist', 48000, 6),
    ('Customer Support Representative', 32000, 6)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Cecelia', 'Lugo', 1, NULL),
    ('Amy', 'Trevino', 5, NULL),
    ('Camden', 'Yang', 9, NULL),
    ('Sylvia', 'Cleveland', 14, NULL),
    ('Thomas', 'Vaughn', 18, NULL),
    ('Jeff','Morris', 22, NULL),
    ('Theon', 'Oneil', 2, 1),
    ('Glenda', 'Gonzalez', 3, 1),
    ('Alexandra', 'Person', 4, 1),
    ('Izabel', 'Durham', 6, 2),
    ('Kie', 'Barrett', 7, 2),
    ('Jarrod', 'Pace', 8, 2),
    ('Sonia', 'Cullen', 10, 3),
    ('Derren', 'Erickson', 11, 3),
    ('Alannah', 'Wolf', 12, 3),
    ('Carter', 'Guy', 13, 3),
    ('Aanya', 'Ferrell', 15, 4),
    ('Hal', 'Krueger', 16, 4),
    ('Cici', 'Montgomery', 17, 4),
    ('Blane', 'Gale', 19, 5),
    ('Joseph', 'Villa', 20, 5),
    ('Max', 'Campos', 21, 5),
    ('Robbie', 'Bate', 23, 6),
    ('Karina', 'Power', 24, 6)
;
