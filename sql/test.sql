-- CRUD

-- C
CREATE TABLE test_table(id int primary key,price int not null);

-- Insert
Insert into test_table values(1,100);
Insert into test_table values(2,200);
Insert into test_table values(3,300);
Insert into test_table values(4,400);


-- R
select*from test_table;

-- 
UPDATE test_table
    SET price=888
    where id=1;

select*from test_table;

-- D
DELETE from test_table
where id=1;

select*from test_table;

-- paiza.io で練習
JOIN, GROUP BY, HAVING
