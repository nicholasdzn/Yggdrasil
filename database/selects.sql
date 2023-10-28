SELECT Chats.*, ChatModels.Name AS ModelName
FROM Chats
JOIN ChatModels ON Chats.ModelID = ChatModels.ModelID
WHERE Chats.Status = 'active' AND Chats.UserID = 1;

SELECT COUNT(*) AS MessageCount
FROM Messages
WHERE ChatID = 1 AND IsDeleted = 0;

SELECT Users.Name
FROM Users
JOIN Subscriptions ON Users.UserID = Subscriptions.UserID
WHERE Subscriptions.SubscriptionID = 1;

SELECT Subscriptions.*
FROM Subscriptions
WHERE Subscriptions.UserID = 1 AND Subscriptions.EndDate IS NULL;

SELECT DeletedMessages.*
FROM DeletedMessages
WHERE DeletedMessages.UserID = 2;

UPDATE Chats
SET Status = 'archived', EndDate = NOW()
WHERE ChatID = 1;

UPDATE SubscriptionPlans
SET MonthlyPrice = 24.99
WHERE PlanID = 2;

DELETE FROM DeletedMessages
WHERE MessageID = 3;

DELETE FROM Chats
WHERE ChatID = 4;

DELETE FROM Users
WHERE UserID = 3;


SELECT * FROM Chats WHERE UserID = 1;
SELECT * FROM Messages WHERE ChatID = 1;
SELECT * FROM Messages WHERE ChatID = 1 AND IsDeleted = 0;
SELECT * FROM ChatModels ORDER BY MonthlyPrice DESC LIMIT 1;
SELECT * FROM ChatModels ORDER BY MonthlyPrice DESC LIMIT 1;
SELECT * FROM SubscriptionPlans;
SELECT * FROM Chats WHERE UserID = 1 AND Status = 'active' ORDER BY CreationDate;
SELECT * FROM Messages WHERE ChatID = 1 AND UserType = 'user' AND CreatedBy = 1;
SELECT Users.* FROM Users
INNER JOIN Subscriptions ON Users.UserID = Subscriptions.UserID
WHERE Subscriptions.EndDate IS NULL;
SELECT COUNT(*) FROM Messages WHERE ChatID = 1;
UPDATE Chats SET Status = 'finished' WHERE ChatID = 1;
